

var MainMenu = function () {
    
    this.top = 0;
    this.buttonids = [];
    this.currentTopic = "NONE";
    
    
    this.FREELANCETAG = "FreeLancing";
    this.NEWSTAG = "README_txt";
    this.GAMESTAG = "zGamez";
    this.BLOGTAG = "MiNdFuKcFaIrYTaLeS";
    
    this.headerCLR1 = GLOBALDATA.CLR_WHITE;
    this.headerCLR2 = GLOBALDATA.CLR_WHITE;//HL_CLR4;
    
    this.barheight = 20;//8;
    /////////////////
    // CONSTRUCTOR //
    /////////////////
    
    this.headerASCII1 = "";
    this.headerASCII2 = "";
    
    //CONSTANTS
    this.PANELWIDTH = 200;
    this.PANELMARGIN = 20;
    this.BLOGTICKER_ROOM = 100;
    
    this.headerwave = null;
    this.footerwave = null;
    
    this.build = function () {
        this.currentTopic = "#button_" + this.FREELANCETAG;
        this.top = HEIGHT / 3;
        
        var menudiv = "<div id='mainmenu'></div>";
        $ ( "#parentdiv" ).append ( menudiv );
        
        $ ( "#mainmenu" ).css ( {
            display: "none"
        });
        $ ( "#mainmenu" ).addClass ( "unselectable" );
        
        
        $ ( document ).on ( "resizeUpdate", $.proxy ( this, "_resizeScreen" ) );

        
 
        var ht = "   __________  ___    ______________________________ __<br/>"
        ht +=    "  / ____/ __ \\/   |  / ____/ ____/  _/_  __/ ____/ //_/<br/>";
        ht +=    " / / __/ /_/ / /| | / /_  / /_   / /  / / / __/ / ,<   <br/>";
        ht +=    "/ /_/ / _, _/ ___ |/ __/ / __/ _/ /  / / / /___/ /| |_  <br/>";
        ht +=    "\\____/_/ |_/_/  |_/_/   /_/   /___/ /_/ /_____/_/ |_(_)  <br/>";
        
        
        ht = ht.replace ( / /g, "&nbsp;" ); 

        this.headerASCII1 = this._setOpacityLines ( ht );
        
        var ht2 = "   _____ _                      _____                 <br/>";
        ht2 +=    "  / ___/(_)___ ___  ____  ____ / ___/____ ___  ________<br/>";
        ht2 +=    "  \\__ \\/ / __ `__ \\/ __ \\/ __ \\\\__ \\/ __ `/ / / / ___(_)<br/>";
        ht2 +=    " ___/ / / / / / / / /_/ / / / /__/ / /_/ / /_/ (__  ) <br/>";
        ht2 +=    "/____/_/_/ /_/ /_/\\____/_/ /_/____/\\__,_/\\__, /____(_)  <br/>";
        ht2 +=    "                                        /____/        <br/>";

        ht2 = ht2.replace ( / /g, "&nbsp;" ); 
        //log ( "ht: " + ht );
        
        this.headerASCII2 = this._setOpacityLines ( ht2 );
        
        
        //var header = "<p id=\"header_title\" style=\"float:left; " + FONT ( "bold", 60, GLOBALDATA.CLR_WHITE ) + "\">GRAFFITEK</p>";
        var header = "<p id=\"header_title\" style=\"margin-left: 4px; margin-top:0px; float:left; line-height:10px;" + FONT ( "Courier New", 10, this.headerCLR1 ) + "\">" + this.headerASCII1 + "</p>";
        $ ( "#mainmenu" ).append ( header );
        


        this._addButtonBar ( "#mainmenu", [ this.FREELANCETAG, this.NEWSTAG, this.GAMESTAG, this.BLOGTAG ] );
        
        
        var bar = "<div id=\"headerbar\"></div>";
        $ ( "#mainmenu" ).append ( bar );
        $ ( "#headerbar" ).css ( {
            position: "absolute",
            height: String ( this.barheight ) + "px",
            //backgroundColor: GLOBALDATA.CLR_WHITE,
            left: "2px"
            //float: "left"
        });
        
        this.headerwave = new StandingWave ( "headerbar" );
        
        var footerbar = "<div id=\"footerbar\"></div>";
        $ ( "#parentdiv" ).append ( footerbar );
        $ ( "#footerbar" ).css ( {
            position: "absolute",
            //backgroundColor: GLOBALDATA.CLR_DARKGREY,
            height: String ( this.barheight ) + "px"            
            //float: "left"
        });        
        
        this.footerwave = new StandingWave ( "footerbar" );
        this.footerwave.linewidth = 1.5;
        this.footerwave.AMPLITUDE = 3;
        this.footerwave.ENDING = "LEFT";
        
        
        var newsdiv = "<div id=\"left_newspanel\"></div><div id=\"newsdiv\" style=\"display:none;\"><div id=\"newscontent\"></div></div><div align=\"right\" id=\"right_newspanel\"></div>";
        $ ( "#parentdiv" ).append ( newsdiv );
        $ ( "#newsdiv" ).css ( {
            position: "absolute"
            
        });        
        $ ( "#newscontent" ).css ( {
            position: "absolute",
            top: String ( this.BLOGTICKER_ROOM ) + "px",
            overflow: "hidden",
            backgroundColor: "rgba(0,0,0," + String ( GLOBALDATA.NEWS_BACKGROUND_ALPHA ) + ")",//GLOBALDATA.CLR_BLACK,
            //borderColor: GLOBALDATA.CLR_BLACK,
            //borderStyle: "solid",
            //borderWidth: "1px"
        });        
        
        $ ( "#left_newspanel" ).css ( {
            position: "absolute",
            left: String ( this.PANELMARGIN ) + "px",
            width: String ( this.PANELWIDTH ) + "px",
            display: "none"
        });
        $ ( "#right_newspanel" ).css ( {
            position: "absolute",
            width: String ( this.PANELWIDTH ) + "px",
            display: "none"
        });
        
        
        var zgamezdiv = "<div id=\"zgamezdiv\"></div>";
        $ ( "#parentdiv" ).append ( zgamezdiv );
        $ ( "#zgamezdiv" ).css ( {
            position: "absolute",
            display: "none"
        });           
        
        //var contentcontainer = "<div id=\"contentcontainer\"></div>";
        //$ ( "#mainmenu" ).append ( contentcontainer );
        
        
        this._resizeScreen ( true );        
        
        $ ( "#mainmenu" ).css ( {
            display: "block"
        });        
        
        this.selectButton ( this.buttonids [ 0 ] );
        
        $ ( "#buttonbar" ).css ( {
            opacity: 100
        });
        
        $ ( document ).on ( "newMainTopic", $.proxy ( this, "_newMainTopic" ));
        
    };
    
    /////////////
    // PRIVATE //
    /////////////    
    
    this._setOpacityLines = function ( txt ) {
        var lines = txt.split ( "<br/>" );
        var newtext = "";
        var i;
        var ll = lines.length;
        var a = .4;
        for ( i = 0; i < ll; i ++ ) {
            newtext += "<span style=\"opacity:" + String ( a ) + ";\">" + lines [ i ] + "<br/></span>";
            a += ( .6 / ( ll - 1 ) );
        }
        
        
        return newtext;  
    };
    
    this._resizeScreen = function ( fix ) {
        //MAINMENU.currentTopic === "#button_" + MAINMENU.FREELANCETAG
        log ( "menubar resizeScreen" );
        this.top = HEIGHT / 5;


        if ( this.currentTopic === "#button_" + this.FREELANCETAG ) {
            this.top = HEIGHT / 5;
        }
        else if ( this.currentTopic === "#button_" + this.BLOGTAG ) {
            this.top = HEIGHT - 116;
        }
        else {
            this.top = 10;
        }

        $ ( "#mainmenu" ).css ( {
            position: "absolute",
            left: "10px"
        });
        
        
        var headerbartop = 58;//65;
        var buttonbarleft = 440;
        var buttonbartop = 19;
        var topiccontainertop = 96;
        var quoteheight = 100;
        var footertop = HEIGHT - 40;//35;
        
        if ( WIDTH < 1050 ) {
            buttonbarleft = -17;
            buttonbartop += 40;
            headerbartop += 40;
            topiccontainertop += 40;
        }
        
        var menudivtop = this.top + topiccontainertop;
        
        $ ( "#buttonbar" ).css ( {
            position: "absolute",
            width: String ( WIDTH - 20 ) + "px",
            //top: String ( buttonbartop ) + "px",
            left: String ( buttonbarleft ) + "px"
        });
        
        var hbw = ( WIDTH / 1.2 );
        $ ( "#headerbar" ).css ( {
           position: "absolute",
           //top: String ( headerbartop ) + "px",
           width: String ( hbw ) + "px"
        });    
        
        /*$ ( "#newscontent" ).css ( {
            height: String ( footertop - menudivtop - 110 ) + "px"
        });*/
        
        var fbw = WIDTH / 1.2;
        var fbl = WIDTH - fbw - 12;
        var newsw = hbw - fbl + 12;
        
        $ ( "#footerbar" ).css ( {
           position: "absolute",
           left: String ( fbl ) + "px",
           //top: String ( headerbartop ) + "px",
           width: String ( fbw ) + "px"
        });                
        $ ( "#footercanvas" ).css ( {
           left: String ( fbl - 0 ) + "px"
        });           
        
        $ ( "#newsdiv" ).css ( {
            left: String ( fbl ) + "px"
        });
         $ ( "#newscontent" ).css ( {
             width: String ( newsw ) + "px"
         });
         
        $ ( "#right_newspanel" ).css ( {
            left: String ( WIDTH - this.PANELMARGIN - this.PANELWIDTH ) + "px"
        });

        
         var quotecanvas = document.getElementById ( "quotecanvas" );
         quotecanvas.width = newsw;
         quotecanvas.height = quoteheight;
         quotecanvas.style.left = String ( fbl ) + "px";
         
         /*var ctx = getContext ( "quotecanvas" );
         ctx.fillStyle = "#ff0000";
         ctx.fillRect ( 0, 0, newsw, quoteheight );
        */
        
        
        var duration = fix? 0 : 500;
        
        var nch = footertop - menudivtop - quoteheight - 20;
        
        $ ( "#newscontent" ).animate ( {
            height: String ( nch ) + "px"
        }, duration );
        
        if ( CONTENT_NEWS !== null ) {
            CONTENT_NEWS.CONTENT_BOUNDS.x = fbl;
            CONTENT_NEWS.CONTENT_BOUNDS.y = menudivtop + 100;
            CONTENT_NEWS.CONTENT_BOUNDS.w = newsw;
            CONTENT_NEWS.CONTENT_BOUNDS.h = nch;
            
            if ( CONTENT_NEWS.scrollbar !== null ) {
                
                CONTENT_NEWS.scrollbar.setBounds ( fbl + newsw + 20, menudivtop + 100, nch );
            }
            
        }
        
        $ ( "#zgamezdiv" ).css ( {
            top: String ( menudivtop ) + "px"
        });
        
        $ ( "#newsdiv" ).animate ( {
            top: String ( menudivtop ) + "px"
        }, duration );

        $ ( "#left_newspanel" ).animate ( {
            top: String ( menudivtop + this.BLOGTICKER_ROOM ) + "px",
            height: String ( nch ) + "px"
        }, duration );
        $ ( "#right_newspanel" ).animate ( {
            top: String ( menudivtop + this.BLOGTICKER_ROOM ) + "px",
            height: String ( nch ) + "px"
        }, duration );        
        
        $ ( "#quotecanvas" ).animate ( {
            top: String ( menudivtop ) + "px"
        }, duration );        
        
        $ ( "#mainmenu" ).animate ( {
            top: "" + String ( this.top ) + "px"
        }, duration );

        $ ( "#buttonbar" ).animate ( {
            top: String ( buttonbartop ) + "px"
        }, duration );
        
        $ ( "#headerbar" ).animate ( {
           top: String ( headerbartop - 5 ) + "px"
        }, duration );  

        $ ( "#maintopic" ).animate ( {
            top: "" + String ( this.top + topiccontainertop ) + "px"
        }, duration );
        
        $ ( "#footerbar" ).animate ( {
            top: "" + String ( footertop ) + "px"
        }, duration );              
        
        $ ( "#footercanvas" ).animate ( {
            top: "" + String ( footertop  + 5 ) + "px"
        }, duration );        
        
        
        $ ( document ).trigger ( "newPositions" );
        
        this.headerwave.updateSize ();
        this.footerwave.updateSize ();
    };
    
    this._addButtonBar = function ( parentid, tags ) {
        var buttonbar = "<div id=\"buttonbar\"></div>";
        
        $ ( parentid ).append ( buttonbar );
        $ ( parentid + " #buttonbar" ).css ( {
            opacity: 0
            //float: "right"
        });
        
        this.buttonids = [];
        
        var i;
        var tl = tags.length;
        for ( i = 0; i < tl; i ++ ) {
            this.buttonids.push ( this._addButton ( "#buttonbar", tags [ i ] ) );
        }
    };
    
    this._addButton = function ( parentid, tag ) {
        
        var buttonid = "button_" + tag;
        var button = "<div id=\"" + buttonid + "\" style=\"margin-top:5px; margin-left:10px;\">";
        button += "<p id=\"button_tag\" style=\"margin-top:3px; margin-bottom: 3px; margin-left: 6px; margin-right:6px; " + FONT ( "roboto_mono_regular", 14, GLOBALDATA.CLR_WHITE ) + "\">" + tag + "</p>"; 
        button += "</div>";
        $ ( parentid ).append ( button );
        
        $ ( "#" + buttonid ).css ( {
            borderColor: GLOBALDATA.CLR_GREY,
            borderStyle: "dotted",
            borderWidth: "0.5px",
            float: "left"
        });
        
        return "#" + buttonid;
    };
    
    this._newMainTopic = function () {
        log ( "Main menu _newMainTopic" );
        log ( this.currentTopic );
        
        /*
        var footerbarclr = GLOBALDATA.DL_CLR1;
        if ( this.currentTopic === "#button_" + this.BLOGTAG ) {
            footerbarclr = GLOBALDATA.CLR_GREY;
        }
        else if ( this.currentTopic === "#button_" + this.NEWSTAG ) {
            footerbarclr = GLOBALDATA.CLR_DARKGREY;
        }
        footerbarclr = GLOBALDATA.CLR_DARKGREY;
        */
        var header = this.headerASCII1;
        var color = this.headerCLR1;
        var topmargin = 0;
        if ( ( this.currentTopic === "#button_" + this.BLOGTAG ) || ( this.currentTopic === "#button_" + this.NEWSTAG ) )  {
            header = this.headerASCII2;
            topmargin = -5;
            color = this.headerCLR2;
        }
        
        
        $ ( "#mainmenu #header_title" ).html ( header );
        $ ( "#mainmenu #header_title" ).css ( {
            "marginTop": String ( topmargin ) + "px",
            "color": color
        });
        
        
        //$ ( "#footerbar" ).css ( "backgroundColor", footerbarclr );
        
        
        this._resizeScreen ();
    };
    
    ////////////
    // PUBLIC //
    ////////////
    
    this.buttonClicked = function ( event ) {
        
    };
    
    this.selectButton = function ( id ) {
        this.currentTopic = id;
        var i;
        var bl = this.buttonids.length;
        
        var backgroundcolor;
        var fontcolor;
        var bid;
        for ( i = 0; i < bl; i ++ ) {
            bid = this.buttonids [ i ];
            backgroundcolor = ( id === bid )? GLOBALDATA.CLR_WHITE : "transparent";
            fontcolor = ( id === bid )? GLOBALDATA.CLR_BLACK : GLOBALDATA.CLR_WHITE;
            //bordercolor = ( id === bid)
            $ ( bid ).css ( {
                backgroundColor: backgroundcolor
                
            });
            $ ( bid + " #button_tag" ).css ( {
                color: fontcolor
            });
            
            $ ( bid ).off ( MOUSEHANDLER.CLICK );
            if ( id !== bid ) {
                $ ( bid ).on ( MOUSEHANDLER.CLICK, function () {
                    //log ( "this.id " + this.id );
                    MAINMENU.selectButton ( "#" + this.id );
                    $ ( document ).trigger ( "newMainTopic" );
                });
                $ ( bid ).css( {
                    cursor : "pointer"
                });
            }
            else {
                $ ( bid ).css ( "cursor", "default" );
            }
        }
    };
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    this.build ();
};
