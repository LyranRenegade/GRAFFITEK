////////////////////////
/// QUINTESSENT 2017 ///
////////////////////////

var MainPage = function () {
    
    this.TOP_Y = 60;
    this.MARGIN = 70;
    
    this.logoanimation = null;
    
    
    this.TEACHER_TAG = "Ondersteunende_les";
    this.ESSAY_TAG = "Filosofie";
    this.HOME_TAG = "Home";
    
    this.buttonids = [];
    this.currentTopic = null;
    
    
    this.contentteacher = null;
    
    this.build = function () {
 
        this.logoanimation = new LogoAnimation ();
        
        
        var i, id, cnv;
        for ( i = 1; i < 4; i ++ ) {
            id = "#logocanvas" + String ( i );
            $ ( id ).css ( {
                width: String ( GLOBALDATA.LOGO_SIZE ) + "px",
                height: String ( GLOBALDATA.LOGO_SIZE ) + "px"
            });
            cnv = document.querySelector ( id );
            cnv.width  = GLOBALDATA.LOGO_SIZE;
            cnv.height  = GLOBALDATA.LOGO_SIZE;
        }
        
        
        
        
        var mainpaqediv = "<div id='mainpage' style='z-index:2;'></div>";
        $ ( "#parentdiv" ).append ( mainpaqediv );
        
        this.contentteacher = new ContentTeacher ( "#mainpage" );
        
        
        $ ( "#parentdiv" ).css ( {
            //overflow: "hidden"
        });
        
        $ ( "#mainpage" ).css ( {
            position: "absolute",
            width: "100%",
            
            top: String ( this.TOP_Y ) + "px"
            //display: "none"
        });
        
        $ ( "#mainpage" ).addClass ( "unselectable" );
        
        
        
        var tip = "<p id=\"tip\" style=\"opacity:0;text-align:center;width:100%;" + FONT ( "quattrocento_regular", 14, GLOBALDATA.CLR_BLACK ) + "\">" + "Klik voor eind" + "</p>";
        var header = "<p id=\"header_title\" style=\"text-align:center;width:100%;" + FONT ( "quattrocento_regular", 50, GLOBALDATA.CLR_BLACK ) + "\">" + "Quintessent" + "</p>";
        var footer = "<div id=\"footer\" style=\"width:100%;\"><p style=\"text-align:center;width:100%;" + FONT ( "quattrocento_regular", 27, GLOBALDATA.CLR_BLACK ) + "\">" + "- de kunst van leren -" + "</p>";
        footer += "<p style=\"text-align:center;width:100%;" + FONT ( "quattrocento_regular", 15, GLOBALDATA.CLR_BLACK ) + "\">" + "Homepage van Simon van Gerwen" + "</p>";        
        footer += "<p style=\"text-align:center;width:100%;" + FONT ( "quattrocento_regular", 18, GLOBALDATA.CLR_PURPLE ) + "\">" + "<br/>Nieuwe website in aanbouw, <a href='mailto:svg.quintessent@gmail.com'>e-mail hier</a>" + "</p>";        
        footer += "</div>";


        
        
        
        


        
        var buttonbar = "<div id=\"buttonbar\"></div>";
        var html = tip + header + footer + buttonbar;

        $ ( "#mainpage" ).append ( html );
        
        
        $ ( "#tip" ).css ( {
            position: "absolute",
            top: "-40px"
        });        
        $ ( "#header_title" ).css ( {
            opacity: "0.1"
        });
        
        $ ( "#footer" ).css ( {
            position: "absolute",
            //width: "100%",
            top: String ( ( this.MARGIN + GLOBALDATA.LOGO_SIZE ) ) + "px",
            opacity: "0"
        });
        
        
        $ ( "#mainpage #buttonbar" ).css ( {
            position: "absolute",
            display: "inline-block"
        });        
        
        
        
        //this._addButton ( "#buttonbar", "Home", GLOBALDATA.CLR_YELLOW, GLOBALDATA.CLR_BLACK, false );
        var buttonteach = this._addButton ( "#buttonbar", this.TEACHER_TAG, GLOBALDATA.CLR_GREEN, GLOBALDATA.CLR_BLACK );
        var buttonphilosophy = this._addButton ( "#buttonbar", this.ESSAY_TAG, GLOBALDATA.CLR_YELLOW, GLOBALDATA.CLR_BLACK );


        this.buttonids = [ buttonteach, buttonphilosophy ];
        
        
        
        this._resizeScreen ();
        this._setAbleButtons ( true );
        
        $ ( "#mainpage #buttonbar" ).css ( {
            opacity: 0
        });     
        
        
        //start intro
        $ ( "#tip" ).animate ( 
        {
            opacity: 0.8 
        }, 
        500, function () {
            $ ( "#tip" ).animate ( {
                opacity: 0
            }, 1000 );
        } );
        
        
        
        $ ( document ).on ( "newMainTopic", $.proxy ( this, "_newMainTopic" ) );
        $ ( document ).on ( "resizeUpdate", $.proxy ( this, "_resizeScreen" ) );
    
    };
    
    
    this.buttonClicked = function ( id ) {
        this.currentTopic = id;
        log ( "Main menu _newMainTopic " + this.currentTopic );
        return;
        
        this.contentteacher.setAble ( id === "button_" + this.TEACHER_TAG, true );
        this.setAble ( id === "button_" + this.HOME_TAG );
        
        //this._resizeScreen ();
    };
    
    this.setAble = function ( b ) {
        this._setAbleButtons ( b );
    };
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /////////////
    // PRIVATE //
    /////////////    
    

    
    this._resizeScreen = function () {
        //MAINMENU.currentTopic === "#button_" + MAINMENU.FREELANCETAG
        log ( "mainpaqe resizeScreen" );
        
        
        
        
        var xp = Math.round ( ( WIDTH - GLOBALDATA.LOGO_SIZE ) / 2 );
        var yp = this.TOP_Y + ( this.MARGIN );//Math.round ( ( HEIGHT - GLOBALDATA.LOGO_SIZE ) / 2 );

        var i, id;
        for ( i = 1; i < 4; i ++ ) {
            id = "#logocanvas" + String ( i );
            $ ( id ).css ( {
                top: String ( yp ) + "px",
                left: String ( xp ) + "px"
            });
        }
        /*
        var buttonH = $ ( this.buttonids [ 1 ] ).height ();
        
        var edge = Math.round ( WIDTH * .05 );
        var buttonY = HEIGHT - buttonH - edge;
        $ ( this.buttonids [ 0 ] ).css ( {
            top: String ( buttonY ) + "px",
            left: String ( edge ) + "px"
        });
        
        var button2W = $ ( this.buttonids [ 1 ] ).width ();
        
        
        $ ( this.buttonids [ 1 ] ).css ( {
            top: String ( buttonY ) + "px",
            left: String ( WIDTH - edge - button2W ) + "px"
        });        */
        
        
        var h = 28;//$ ( "#buttonbar" ).height ();
        var maxtop = HEIGHT - h - 10 - this.TOP_Y;
        var top = yp + GLOBALDATA.LOGO_SIZE + 50;
        
        //log ( "top: " + top + " maxtop: " + maxtop );
        //top = Math.min ( maxtop, top );
        
        var w = $ ( "#buttonbar" ).width ();
        var ow = $ ( "#buttonbar" ).outerWidth ();
        var left = Math.round ( ( WIDTH - w ) / 2 );
        
        log ( "Buttonbar w: " + w + " total: " + WIDTH + " ow: " + ow );
        
        $ ( "#buttonbar" ).css ( {
            left: String ( left ) + "px",
            top: String ( top ) + "px"
        });
        
        
    };
    
    
    
    
    
    this._addButton = function ( parentid, tag, backcolor, fontcolor, underline ) {
        
        var buttonid = "button_" + tag;
        var button = "<div id=\"" + buttonid + "\" style=\"margin-top:0px; margin-left:10px; margin-right:10px;\">";
        var label = tag.replace ( /_/g, " " ); 
        button += "<p id=\"button_tag\" style=\"margin-top:7px; margin-bottom: 7px; margin-left: 10px; margin-right:10px; " + FONT ( "quattrocento_regular", 18, fontcolor ) + "\"><b>" + label + "</b></p>"; 
        button += "</div>";
        $ ( parentid ).append ( button );
        

        
        var textdec = underline? "underline" : "none"
        $ ( "#" + buttonid + " #button_tag" ).css ( {
            textDecoration: textdec
            
        });        
        $ ( "#" + buttonid ).css ( {
            borderColor: GLOBALDATA.CLR_BLACK,
            borderStyle: "dotted",
            borderWidth: "0.5px",            
            backgroundColor: backcolor,
            float: "left"
        });        


        return "#" + buttonid;
    };
    
    
    
    this._setAbleButtons = function ( b ) {
        log ( "home.setAblebuttons " + b );
        var bl = this.buttonids.length;
        var i, bid;
        var cursor;
        for ( i = 0; i < bl; i ++ ) {
            bid = this.buttonids [ i ];
            cursor = b? "pointer" : "default";
            
            $ ( bid ).off ( MOUSEHANDLER.CLICK );
            if ( b ) {
                $ ( bid ).on ( MOUSEHANDLER.CLICK, function () {
                    MAINPAGE.buttonClicked ( this.id );
                    //$ ( document ).trigger ( "newMainTopic" );
                });
            }
            
            $ ( bid ).css( {
                cursor : cursor
            });        
            
        }
    };
    
    
    
    
    
    
    
    
    
    
    

    

    
    ////////////
    // PUBLIC //
    ////////////
    
    
    
    
    
    
    
    
    
    
    this.build ();
};


