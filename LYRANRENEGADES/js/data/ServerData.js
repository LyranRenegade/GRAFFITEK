/////////////////////
/// LR SERVERDATA ///
/////////////////////



var ServerData = function ( mainsite ) {
    
    this.mainsite = ( mainsite )? mainsite : false;
    
    this.WORDS_ROOT = null;
    this.WORDS_COMMENTS = null;
    this.AUTHORS = null;
    this.BATCHCOMMANDS = [];

    this.install = function () {
        this.BATCHCOMMANDS = [];
        this.serviceID = 1;
        this.processRunning  = false;
        this.readyFunction = null;
    };
    
    this.install ();
    
    this.addCommand = function ( command ) {
        //command has
        //{command: string to send php file
        //{data: data to send php file [sqlquery]
        //{rf: function to return to
        command.serviceID = this.serviceID;
        command.active = false;
        this.serviceID ++;
                
        this.BATCHCOMMANDS.push ( command );
    };
    
    
    /*
    this.getActiveTags = function () {
        //update
        var i;
        var cl = CATEGORYDATA.length;
        var tags = [];
        var cat;
        for ( i = 0; i < cl; i ++ ) {
            cat = CATEGORYDATA [ i ];
            //tags.push ( { id: cat.id, nl: cat.text_nl, en: cat.text_en } );
            tags.push ( { id: cat.id, label: cat.text_nl } );
        }
        return tags;
        
    };*/
    
    
    this.addBatchCommands = function ( commands ) {
        var i;
        var cl = commands.length;
        var command;
        for ( i = 0; i < cl; i ++ ) {
            command = commands [ i ];
            this.addCommand ( command );
        }
    };
    
    
    this.callServer = function ( readyfunction ) {
        if ( this.processRunning ) {
            log ( "server already being called" );
        }
        else {
            this.readyFunction = readyfunction;
            this.processRunning = true;
            this._makeNextCall ();
        }
    };
    
    this._updateProgress = function () {
        
        if ( this.mainsite ) {
            //log ( "pending servercommands: " + this.BATCHCOMMANDS.length );
        }
        else {
            //logging shit, provide a servermessages canvas for logging info
            
            clearContext ( "servermessages" );

            /*
            var ctx = getContext ( "servermessages" );
            ctx.shadowBlur = 1;
            ctx.shadowColor = "#000000";
            ctx.shadowOffsetX = 1;
            ctx.shadowOffsetY = 1;
            */

            var cx = WIDTH / 2;
            var cy = ( $ ( window ).height() / 2 ) - 20;

            var p = "";
            if ( this.BATCHCOMMANDS.length !== 0 ) {
                p = "polling server... [pending: " + this.BATCHCOMMANDS.length + "]";
                $ ( "#servermessages" ).css ( "z-index", "10");
            }
            else {
                p = "";
                $ ( "#servermessages" ).css ( "z-index", "1");
            }

            if ( p !== "" ) {
                var bc = "#992266";
                printString ( p, "servermessages", "Verdana", 20, "#ffffff", cx, cy, "center", bc );
            }
        }
        
    };
    
    
    this._makeNextCall = function () {
        this._updateProgress ();
        var i;
        var bl = this.BATCHCOMMANDS.length;
        var cmd;
        for ( i = 0; i < bl; i ++ ) {
            cmd = this.BATCHCOMMANDS [ i ];
            if ( cmd.active === false ) {
                cmd.active = true;
                this._callServer ( cmd );
                return;
            }
        }
        this._finalizeCall ();
    };
    
    
    this._finalizeCall = function () {
        this.processRunning = false;
        if ( this.readyFunction !== null ) {
            //log ( "server finalizing" );
            this.readyFunction.call ();
        }
        
    };
    
    
    this._callServer = function ( cmd ) {
        var xmlhttp;
        var returnfunction = this._serverReturn;
        
        log ( "callserver, d: " + cmd.data );
        
        
        var params = "c=" + cmd.command + "&s=" + cmd.serviceID + "&d=" + cmd.data;
        //logObject ( params );
        
        
        if ( window.XMLHttpRequest ) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest ();
        } 
        else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject ( "Microsoft.XMLHTTP" );
        }
        xmlhttp.onreadystatechange = function () {
            //log ( "xmlhttp onready" );
            if ( xmlhttp.readyState === 4 && xmlhttp.status === 200 ) {
                //log ( "response: " + xmlhttp.responseText );
                returnfunction.call ( MAIN._serverdata, xmlhttp.responseText );
                //document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
            }
            else {
                log ( "xmlhttp failed, readystate: " + xmlhttp.readyState + ", status: " + xmlhttp.status );
            }
        };

        //xmlhttp.open ( "GET", "_php/assor_f.php?q=" + query, true );
        //xmlhttp.send ( null );
        
        xmlhttp.open ( "POST", "_php/assor_f.php", true );
        xmlhttp.setRequestHeader ( "Content-Type", "application/x-www-form-urlencoded" );
        xmlhttp.setRequestHeader( "Content-length", params.length );
        xmlhttp.send ( params );
        
    };    
    
    
    this._serverReturn = function ( returndata ) {
        //remove from batchcommands, call appropiate returnfunction, nextcall

        
        var rd  = JSON.parse ( returndata );
        
        //logObject ( rd );
        
        var serviceID = String ( rd [ "serviceID" ] );
        if ( serviceID === "-1" ) {
            log ( "serverError " + rd [ "errorString" ] );
        }
        else {
            var i;
            var bl = this.BATCHCOMMANDS.length;
            var command;
            for ( i = 0; i < bl; i ++ ) {
                command = this.BATCHCOMMANDS [ i ];
                if ( String ( command.serviceID ) === serviceID ) {
                    if ( command.rf ) {
                        if ( command.command === "mail" ) command.rf.call ( null, rd );
                        else command.rf.call ( this, rd [ "items" ] );
                    }
                    this.BATCHCOMMANDS.splice ( i, 1 );
                    this._makeNextCall ();
                    break;
                }
            }
        }
        
    };
    
    
    
    
    
    
    
    
    this.getHighestID = function ( data ) {
        var i;
        var dl = data.length;
        var d;
        var hd = -1;
        for ( i = 0; i < dl; i++ ) {
            d = data [ i ];
            if ( d [ "id" ] ) {
                if ( Number ( d [ "id" ] ) > hd ) hd = Number ( d [ "id" ] );
            }
            else log ( "no id as datafield" );
        }
        return hd;
    };
    
    this.getHighestOrder = function ( data ) {
        var i;
        var dl = data.length;
        var d;
        var ho = -1;
        for ( i = 0; i < dl; i ++ ) {
            d = data [ i ];
            if ( d [ "order_weight" ] ) {
                if ( Number ( d [ "order_weight" ] ) > ho ) ho = Number ( d [ "order_weight" ] );
            }
            else if ( d [ "show_order" ] ) {
                if ( Number ( d [ "show_order" ] ) > ho ) ho = Number ( d [ "show_order" ] );
            }
            
        }
        return ho;
    };
    
    this.getDataByID = function ( map, id ) {
        if ( map === null ) MAIN.log ( "ServerData.getDataByID, for null map", 2 );
        var i;
        var ml = map.length;
        for ( i = 0; i < ml; i ++ ) {
            if ( map [ i ] [ "id" ] === id ) return map [ i ];
        }        
        return null;
    };
    
    this.getDataByFieldValue = function ( map, field, value ) {
        var result = [];
        var i;
        var ml = map.length;
        for ( i = 0; i < ml; i ++ ) {
            if ( map [ i ] [ field ] === value ) {
                result.push ( map [ i ] );
            }
        }
        return result;
    };

    /*
    this.getSegments = function ( pageid ) {
        var i;
        var sl = PAGESEGMENTSDATA.length;
        var ps;
        var pagesegments = [];
        for ( i = 0; i < sl; i ++ ) {
            ps = PAGESEGMENTSDATA [ i ];
            if ( ps [ "page_id" ] === pageid ) pagesegments.push ( ps );
        }
        return pagesegments;
    };*/
    
    /*
    this.getPreviousPage = function ( pageid, tag ) {
        //log ( "getPreviousPage for: " + pageid + ", " + tag );
        var i;
        var pl = PAGESDATA.length;
        var othertags;
        var j, ol;
        var prevpage = null;
        for ( i = 0; i < pl; i ++ ) {
            if ( String ( PAGESDATA [ i ].image_id ) === "-1" ) continue;
            if ( PAGESDATA [ i ].id === pageid ) {
                return prevpage;
            }
            else {
                othertags = PAGESDATA [ i ].tags.split ( ";" );
                ol = othertags.length;
                for ( j = 0; j < ol; j ++ ) {
                    if ( othertags [ j ] === tag || tag === "0" ) {
                        prevpage = PAGESDATA [ i ];
                        break;
                    }
                }
            }
        }
        //log ( "error, unfound page in severdata.getprevpage " );
        return null;
    };*/
    
    /*
    this.getNextPage = function ( pageid, tag ) {
        //log ( "getnextpage for: " + pageid + ", " + tag );
        var found = false;
        var i;
        var pl = PAGESDATA.length;
        var othertags;
        var j, ol;
        for ( i = 0; i < pl; i ++ ) {
            if ( String ( PAGESDATA [ i ].image_id ) === "-1" ) continue;
            
            if ( found ) {
                othertags = PAGESDATA [ i ].tags.split ( ";" );
                ol = othertags.length;
                for ( j = 0; j < ol; j ++ ) {
                    if ( othertags [ j ] === tag || tag === "0" ) return PAGESDATA [ i ];
                }
            }
            if ( PAGESDATA [ i ].id === pageid ) {
                found = true;
            }
        }
        
        return null;
    };    
    */
    
    /*
     * 
     * 
    this.getDefaultData = function ( id ) {
        var otherlanguage = this._getOtherLanguage ();
        if ( DEFAULTDATA !== null ) {
            var i;
            var dl = DEFAULTDATA.length;
            for ( i = 0; i < dl; i ++ ) {
                if ( DEFAULTDATA [ i ].id === id ) {
                    if ( DEFAULTDATA [ i ] [ "value_" + PageUpdater.PAGESTATE [ "l" ] ] !== "" ) return DEFAULTDATA [ i ] [ "value_" + PageUpdater.PAGESTATE [ "l" ] ];
                    else return DEFAULTDATA [ i ] [ "value_" + otherlanguage ];
                }
            }
        }
        else {
            log ( id + " unfound" );
        }
        return null;
        
    };
    */
    
    /*
     * returns whole row if no fieldid
     * if fieldid, returns it if it exists
     * if it doesn't, tries to append current language
     * if that fails, appends other langugage
     * if that fails, nothing we can do..
     */    
    
    /*
    this.getData = function ( datatable, text_id, fieldid ) {
        
        if ( datatable !== null ) {
            var i;
            var dl = datatable.length;
            for ( i = 0; i < dl; i ++ ) {
                if ( datatable [ i ].text_id === text_id ) {
                    if ( fieldid === undefined ) return datatable [ i ];
                    else {
                        if ( datatable [ i ] [ fieldid ] !== undefined ) {
                            return datatable [ i ] [ fieldid ];
                        }
                        else {
                            return this.getRowValue ( datatable [ i ], fieldid );
                        }
                    }
                }
            }
        }
        else {
            log ( "datatable unfound " );
        }
        log ( "datatable, text_id " + text_id + " unfound " );
        return null;        
    };*/
    
    /*
    this.getRowValue = function ( row, fieldid ) {
        var otherlanguage = this._getOtherLanguage ();
        if ( row [ fieldid ] !== undefined ) return row [ fieldid ];
        else {
            if ( row [ fieldid + "_" + PageUpdater.PAGESTATE [ "l" ] ] !== "" ) return row [ fieldid + "_" + PageUpdater.PAGESTATE [ "l" ] ];
            else if ( row [ fieldid + "_" + otherlanguage ] !== "" ) return row [ fieldid + "_" + otherlanguage ];
        }
        return "unfound value";
    };*/
    
    /*
    this.getTag = function ( text_id ) {
        var tl = TAGSDATA.length;
        var i;
        var row;
        for ( i = 0; i < tl; i ++ ) {
            row = TAGSDATA [ i ];
            if ( row.text_id === text_id ) return this.getRowValue ( row, "value" );
        }
        return "unfound tag";
    };
    */
   
    /////////////
    // PRIVATE //
    /////////////
    
    this._parseWords_root = function ( returndata ) {
        this.WORDS_ROOT = returndata;
    };    
    
    this._parseWords_comments = function ( returndata ) {
        this.WORDS_COMMENTS = returndata;
    };    
    
    this._parseAuthors = function ( returndata ) {
        this.AUTHORS = returndata;
    };    
    
    
    /*
    this._getOtherLanguage = function () {
        if ( PageUpdater.PAGESTATE [ "l" ] === "nl" ) return "en";
        return nl;
    };*/    
    
    /*
    this._parseContactData = function ( returndata ) {
        CONTACTDATA = returndata;
        
        var cl = CONTACTDATA.length;
        var i;
        for ( i = 0; i < cl; i ++ ) {
            log ( "contactdata " + i );
            logObject ( CONTACTDATA [ i ] );
            
        }
        
        //logObject ( CONTACTDATA );
    };*/    
    
    /*
    this._parseCategoryData = function ( returndata ) {
        CATEGORYDATA = returndata.sort ( function ( a, b ) {
            return parseInt ( a.show_order ) - parseInt ( b.show_order );
        });
        //logObject ( CATEGORYDATA );
        
        //log ( "category items: " + CATEGORYDATA.length );
        
        //logObject ( CATEGORYDATA [ 0 ] );
        
        
        var i;
        for ( i = 0; i < CATEGORYDATA.length; i ++ ) {
            log ( i + ": " + CATEGORYDATA [ i ] [ "id" ] + ", " + CATEGORYDATA [ i ] [ "text_nl" ]  );
        }
    };*/
    
    /*
     this._parsePagesData = function ( returndata ) {
        PAGESDATA = returndata.sort ( function ( a, b ) {
            return parseInt ( a.order_weight ) - parseInt ( b.order_weight );
        });
        //logObject ( returndata );
        log ( "pages items: " + PAGESDATA.length );
        
        
        var i;
        for ( i = 0; i < PAGESDATA.length; i ++ ) {
            log ( i + ": " + PAGESDATA [ i ] [ "id" ] + ", " + PAGESDATA [ i ] [ "title_nl" ]  );
        }
    };  */     

    /*
     this._parsePageSegmentsData = function ( returndata ) {
        PAGESEGMENTSDATA = returndata.sort ( function ( a, b ) {
            return parseInt ( a.order_weight ) - parseInt ( b.order_weight );
        });
        //logObject ( returndata );
        log ( "page-segments items: " + PAGESEGMENTSDATA.length );
        
        var i;
        for ( i = 0; i < PAGESEGMENTSDATA.length; i ++ ) {
            log ( i + ": " + PAGESEGMENTSDATA [ i ] [ "id" ] + ", " + PAGESEGMENTSDATA [ i ] [ "title_nl" ]  );
        }
    };*/  

    /*
    this._parseMediaData = function ( returndata ) {
        MEDIADATA = returndata;
        log ( "media items: " + MEDIADATA.length );
    };*/        
    
    /*
    
     this._tagReplaceData = function ( txt ) {
        var date_now = new Date (); 
        var minute_ms = 60 * 1000;
        var hour_ms = minute_ms * 60;
        var day_ms = hour_ms * 24;
        var month_ms = day_ms * 30;
        var year_ms = day_ms * 364.75;
        var years, diff;
        
        //<timefreelancing>
        var tf_i = txt.indexOf ( "<timefreelancing>" );
        if ( tf_i !== -1 ) {
            
            var started = new Date ( "2003/06/01" );  // some date
            diff = Math.abs ( date_now - started );  // difference in milliseconds
            years = Math.floor ( diff / year_ms );
            var months = Math.floor ( ( diff % year_ms ) / month_ms );
            var days = Math.floor ( ( ( diff % year_ms ) % month_ms ) / day_ms );
            
            log ( "tfi found: " + tf_i + " years: " + years );
            txt = txt.substring ( 0, tf_i ) + String ( years ) + " jaar, " + String ( months ) + " maanden en " + String ( days ) + " dagen geleden." + txt.substring ( tf_i + 17 );
            
        }
        
        //<agesofia>        
        var tf_s = txt.indexOf ( "<agesofia>" );
        if ( tf_s !== -1 ) {
            var sofiaborn = new Date ( "2004/08/20" );  // some date
            diff = Math.abs ( date_now - sofiaborn );              
            years = Math.floor ( diff / year_ms );
            txt = txt.substring ( 0, tf_s ) + String ( years ) + txt.substring ( tf_s + 10 );
        }
        
        
        return txt;
     };*/
    
    
};