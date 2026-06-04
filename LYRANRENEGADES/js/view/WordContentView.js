
var WordContentView = function () {
    
    this.id = "wcnt_v";
    
    this.active_spanid_order = [];
    //form = "wrd_XX" (XX = id of word, same as in database)
    
    
    this._buildHTML = function ( parentid ) {
        this.parentid = parentid;
        
        var div = "<div id='" + this.id + "' class='unselectable'></div>";
        $ ( "#" + this.parentid ).append ( div );
        
        $ ( "#" + this.id ).css ( {
            marginRight: GLOBALDATA.PAGE_HOR_MARGINS + "px",
            marginLeft: GLOBALDATA.PAGE_HOR_MARGINS + "px",
            marginTop: "20px",
            marginBottom: "20px"
        });
        
        
    };    
    
    this.synchronize = function ( navigationlist, fromword ) {
        //navigationlist
            /*
            [
                {
                    id: xx,
                    type:
                }
            ]
         */
        
        if ( this.parentid === null ) {
            MAIN.log ( "WordContentView.synchronize prematurely", 1 );
            return;
        }
        
  
        
        
        var i;
        var navitem;
        var nl = navigationlist.length;
        var new_active_spanid_order = [];
        
        /*
         $ ( "#" + this.id ) element will have a load of spans [for the words] in it eventually 
         -> mirrored by this.active_spanid_order [form = "wrd_"ID]
          
         */
        var word_span_id;
        var titletext;
        var addendumtext = "";
        
        for ( i = 0; i < nl; i ++ ) {
            navitem = navigationlist [ i ];
            //MAIN.log ( "wb synchronize, id: " + navitem.id + ", type: " + navitem.type );
            
            if ( this._wordSpanPresent ( navitem.id ) ) {
                //move it to location i
                word_span_id = "wrd_" + navitem.id;
                
            }
            else {
                //create new one
                var wv = new WordView ( navitem.id );
                $ ( "#" + this.id ).append ( wv.getHTML () );
                //activate the links in the tldr-span
                WORDLINKMANAGER.activateFrom ( wv.tldrspanid );
                //activate the links in the explanation-span
                WORDLINKMANAGER.activateFrom ( wv.exspanid );
                
                $( "#" + wv.spanid + " .enableme" ).each ( function ( i, o ) {
                    WORDLINKMANAGER.activateFrom ( o.id );
                    //MAIN.log ( "enableme spanid found: " + o + ", id: " + o.id );
                    //MAIN.log ( "and this? " + this + ", id: " + this.id );
                });
                
                this._redrawHandle ( navitem.id );
                word_span_id = wv.spanid;//<- same
                this._setAbleCloseButton ( navitem.id, true );
                
                this._setAbleComments ( wv.comment_ids, true );
            }
            
            if ( i === 0 ) {
                //BIT OF AN UGLY HACK.. FROMWORD WILL ALWAYS(?) REFER TO NEWEST ITEM WHICH IS THE FIRST
                if ( fromword === undefined ) fromword = "";
                else fromword = fromword.toLowerCase ();
                titletext = $  ( "#title_" + word_span_id ).text ();
                titletext = titletext.toLowerCase ();
                if ( fromword !== "" && ( "\"" + fromword + "\"" ) !== titletext ) {
                     if ( fromword.length === ( titletext.length - 1 /*account for parenthesis and the 's'*/ ) && fromword.charCodeAt ( fromword.length - 1 ) === 115 ) {
                         //fromword just has an extra 's'
                         addendumtext = "";
                         //MAIN.log ( "difference is just an 's'" );
                     }
                     else {
                        //MAIN.log ( "fromword != title: " + fromword + " != " + titletext );
                        addendumtext = "[from " + fromword + "]";
                     }
                }

                $ ( "#title_addendum_" + word_span_id ).html ( addendumtext );
            }
            
            //move it to location i
            //$ ( "#" + word_span_id ).insertBefore ( "#" + this.id + " span:eq(" + i + ")" );
            
            this._insertAtIndex ( this.id, word_span_id, i );
            this._listenToWordPicker ( navitem.id, true );
            //it should also remove the ones that were present.
            

            //select corresponding wordbutton
            //wordbuttondata = this._getWordButton ( navitem.id, navitem.type );
            //html = wordbuttondata.wordbutton.html;
            //$ ( "#" + this.id ).append ( html );
            //if ( !wordbuttondata.alreadypresent ) {
                //wordbuttondata.wordbutton.setActive ( i === 0 );
                //wordbuttondata.wordbutton.install ();
            //}
            new_active_spanid_order.push ( word_span_id );
        }
        
        //NOW, THE ACTIVE LIST SHOULD ONLY CONTAIN DEPRECATED SPANIDS
        var sl = this.active_spanid_order.length;
        var spanid;
        var wordid;
        
        for ( i = 0; i < sl; i ++ ) {
            spanid = this.active_spanid_order [ i ];
            $ ( "#" + this.id + " #" + spanid ).remove ();
            MAIN.log ( "WORD spanid: " + spanid + " removed" );
            
            
            wordid = spanid.substring ( 4 );
            this._listenToWordPicker ( wordid, false );
            this._setAbleCloseButton ( wordid, false );
        }        
        //remember the updated list of available items
        this.active_spanid_order = new_active_spanid_order;
    };    

    /////////////
    // PRIVATE //
    /////////////
    
    this._setAbleComments = function ( commentids, b ) {
         /*{
            //author: name
            buttonspanid: xx,
            textspanid: xx

         }*/        
        var i;
        var cl = commentids.length;
        for ( i = 0; i < cl; i ++ ) {
            this._setAbleComment ( "#" + commentids [ i ].buttonspanid , b );
        }
    };
    
    this._setAbleComment = function ( spanid, b ) {
        var cursor = "default";
        
        $ ( spanid ).off ( MOUSEHANDLER.MOUSEOVER );
        $ ( spanid ).off ( MOUSEHANDLER.MOUSEOUT );
        $ ( spanid ).off ( MOUSEHANDLER.MOUSEDOWN );
        
        if ( b ) {
            cursor = "pointer";
            $ ( spanid ).on ( MOUSEHANDLER.MOUSEOVER, $.proxy ( this, "_wordCommentOver" ) );
            $ ( spanid ).on ( MOUSEHANDLER.MOUSEOUT, $.proxy ( this, "_wordCommentOut" ) );
            $ ( spanid ).on ( MOUSEHANDLER.CLICK, $.proxy ( this, "_wordCommentClick" ) );            
        }
        this._setWordCommentOver ( spanid, false );
        $ ( spanid ).css ({
            cursor: cursor
        });        
    };
    
    this._wordCommentOver = function ( e ) {
        var spanid = e.target.id;
        this._setWordCommentOver ( "#" + spanid, true );
    };
    this._wordCommentOut = function ( e ) {
        var spanid = e.target.id;
        this._setWordCommentOver ( "#" + spanid, false );
    };
    this._wordCommentClick = function ( e ) {
        var id = e.target.id;
        var opened = ( $ ( "#" + id + " #pm" ).text () === "(-)" );
        //change the + / - icon
        var newtext = opened? "(+)" : "(-)";
        $ ( "#" + id + " #pm" ).text ( newtext );
        //this._setWordCommentOver ( "#" + id, false );
        
        //hide show the text
        var display = opened? "none" : "inline";
        var buti = id.indexOf ( "but" );
        var textspanid = id.substring ( 0, buti ) + "txt" + id.substring ( buti + 3 );
        
        //MAIN.log ( "textspanid deciphered: " + textspanid + ", from " + id );
        $ ( "#" + textspanid ).css ( {
           display: display 
        });
    };
    
    this._setWordCommentOver = function ( spanid, b ) {
        
        var nmid = spanid + " #na";
        var textdecoration = b? "underline" : "none";
        //MAIN.log ( " _setWordCommentOver for: " + spanid + ": " + b + " nmid: " + nmid + " el: " + $ ( nmid ) + ", td: " + textdecoration);
        $ ( nmid ).css ({
            textDecoration: textdecoration
        });
    };    
    
    
    
    
    
    
    //
    
    this._setAbleCloseButton = function ( id, b ) {
        var closebuttonid = "#clb_wrd_" + String ( id );
        var cursor = "default";
        
        $ ( closebuttonid ).off ( MOUSEHANDLER.MOUSEOVER );
        $ ( closebuttonid ).off ( MOUSEHANDLER.MOUSEOUT );
        $ ( closebuttonid ).off ( MOUSEHANDLER.MOUSEDOWN );
        
        if ( b ) {
            cursor = "pointer";
            $ ( closebuttonid ).on ( MOUSEHANDLER.MOUSEOVER, $.proxy ( this, "_closeWordOver" ) );
            $ ( closebuttonid ).on ( MOUSEHANDLER.MOUSEOUT, $.proxy ( this, "_closeWordOut" ) );
            $ ( closebuttonid ).on ( MOUSEHANDLER.MOUSEDOWN, $.proxy ( this, "_closeWordDown" ) );            
        }
        this._setCloseOver ( closebuttonid, false );
        $ ( closebuttonid ).css ({
            cursor: cursor
        });
    };
    
    this._closeWordOver = function ( e ) {
        var spanid = e.target.id;
        this._setCloseOver ( "#" + spanid, true );
    };
    this._closeWordOut = function ( e ) {
        var spanid = e.target.id;
        this._setCloseOver ( "#" + spanid, false );
    };    
    this._closeWordDown = function ( e ) {
        var id = e.target.id;
        var ui = String ( id ).lastIndexOf ( "_" );
        var index = String ( id ).substr ( ui + 1 );        
        log ( "_closeWord: " + index );
        NAVIGATIONMANAGER.removeWordLink ( index );
    };
    
    this._setCloseOver = function ( spanid, b ) {
        var bgcolor = b? GLOBALDATA.CLR_BLACK : GLOBALDATA.CLR_PURPLE;
        var color = b? GLOBALDATA.CLR_WHITE : "#ff0000";//GLOBALDATA.CLR_DARKRED;
        $ ( spanid ).css ({
            backgroundColor: bgcolor,
            color: color
        });
    };
    
    
    
    this._listenToWordPicker = function ( id, b ) {
        $ ( "#circlebutton_bs_" + String ( id ) ).off ( "checkedChange", $.proxy ( this, "_checkedWord" ) );
        if ( b ) {
            $ ( "#circlebutton_bs_" + String ( id ) ).on ( "checkedChange", $.proxy ( this, "_checkedWord" ) );
        }
    };
    
    this._checkedWord = function ( event, id, clr ) {
        //MAIN.log ( "a word has been checked, id: " + id + ", clr: " + clr );
        //MAIN.log ( "id2: " + id.substring ( 3 ) );
        this._redrawHandle ( id.substring ( 3 ) );
    };
    
    this._redrawHandle = function ( id ) {
        var canvasid = "wrdcnv1_" + String ( id );
        var ctx = getContext ( canvasid );
        ctx.clearRect ( 0, 0, 80, 20 );
        var wb = MAIN._layoutmanager.topwordnavigation.getWordButton ( id, NAVIGATIONMANAGER.LINKTYPE_WORD );
        var clr = wb.buttonselect.getColor ();
        
        /*
        var strokestyles = [
            GLOBALDATA.CLR_GOLD,
            GLOBALDATA.CLR_DARKRED,
            GLOBALDATA.CLR_PURPLE,
            GLOBALDATA.CLR_WHITE,
            GLOBALDATA.CLR_GREY,
            GLOBALDATA.CLR_WHITEBLUE,
            GLOBALDATA.CLR_GREY2,
            GLOBALDATA.HL_CLR1,
            GLOBALDATA.HL_CLR2,
            GLOBALDATA.HL_CLR3,
            GLOBALDATA.HL_CLR4,
            GLOBALDATA.HL_CLR5
            
        ];
        var clrs = strokestyles [ Math.floor ( strokestyles.length * Math.random () ) ];
        */
        var clrs = GLOBALDATA.CLR_WHITE;
        
        ctx.lineWidth = 1;
        ctx.strokeStyle = clrs;//GLOBALDATA.CLR_GOLD;
        ctx.lineCap = "round";
        
        
        var r = 8;
        var h = 10;
        var e = 4;
        ctx.beginPath ();
        ctx.moveTo ( 80 - ( 2 * h ) - ( 2 * r ) - 1, h );
        ctx.lineTo ( 80 - ( 2 * h ), h );
        ctx.moveTo ( 80 - ( 2 * h ), e );
        ctx.lineTo ( 80 - ( 2 * h ), 20 - e );
        ctx.closePath ();
        ctx.stroke ();
        
        //ctx.beginPath ();
        //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle
        //ctx.arc ( 80 - ( 2 * h ) + r + 1, h, r, 0, 2 * Math.PI, false );
        //ctx.ellipse ( 80 - ( 2 * h ) + r + 1, h, r, r - 3, 0, 2 * Math.PI, false );
        var centerx = 80 - ( 2 * h ) + r;// + 1;
        var centery = h;
        var w = 2 * r;
        var h = 2 * ( r - 3 );
        _drawEllipse ( ctx, centerx, centery, w, h );
        //ctx.closePath ();
        ctx.lineWidth = 2;
        ctx.stroke ();
        
        if ( clr !== GLOBALDATA.CLR_BLACK ) {
            ctx.fillStyle = clr;
            ctx.beginPath ();
            ctx.arc ( centerx, centery, r - 5, 0, 2 * Math.PI, false );
            
            ctx.closePath ();
            ctx.fill ();
        }
    };
    
    
    this._insertAtIndex = function ( targetid, elementid, index ) {
        var target = $ ( "#" + targetid );
        var element = $ ( "#" + elementid );
        var children = target.children ();
        //MAIN.log ( "children: " + children );
        //logObject ( children );
        if ( index >= children.length ) {
            target.append ( element );
        }
        else {
            var before = children.eq ( index );
            //MAIN.log ( "found before: " + before );
            element.insertBefore ( before );
        }
    };

    this._wordSpanPresent = function ( id ) {
        var sl = this.active_spanid_order.length;
        var i;
        var spanid;
        var lookforid = "wrd_" + String ( id );
        for ( i = 0; i < sl; i ++ ) {
            spanid = this.active_spanid_order [ i ];
            if ( lookforid === spanid ) {
                //spanid is already present
                //remove it from list
                this.active_spanid_order.splice ( i , 1 );
                return true;
            }
        }
        return false;
        
        //it's not found so create a new one and add it to viewport [or whatever it's called, append to parent-span]
        

    };
    
    
    
    
    
    
};