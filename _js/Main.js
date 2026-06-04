//////////////////////////
/// GRAFFITEK2017 MAIN ///
/////////////////////////


var UNIVERSE = null;
var MOUSEHANDLER = null;
var CAMERA = null;
var SERVERDATA = null;
var CASCADEBUTTONMANAGER = null;
var TEXTPARSER = null;
var STARSTORM = null;
var ANIMATORCONTROLLER = null;
var TOOLTIPMANAGER = null;
var GLOBALDATA = null;
var MAINMENU = null;
var ZGAMEZCONTENT = null;
var CONTENT_FREELANCE = null;
var CONTENT_NEWS = null;
var MAINFOOTER = null;
var MFFT = null;

var FRAMECOUNTER = 0;
var FRAMEDELAY = 2;
var FIRSTVISIT = true;



var GlobalData = function () {
    
    
    /*
    this.navdata = new NavData ();
    this.currentpage = {};
    
    this.setCurrentPage = function ( field, val, push ) {
        
        log ( "setcurrentpage: " + field + " -> " + val );
        switch ( field ) {
            case "language":
            case "mainpage":
            case "overviewtag":
            case "subpage":
                this.currentpage [ field ] = val;
                break;
            default:
                log ( "invalid field [" + field + "] in GLOBALDATA.currentpage setting" );
        };
        if ( push ) this._pushHistory ();
    };
    
    this._pushHistory = function () {
        this.currentpage.colorscheme = LANGUAGEMANAGER.colorscheme;
        history.pushState ( this.currentpage, "", "" );
    };
    */
    
    this.CLR_WHITE = "#ffffff";
    this.CLR_WHITEYELLOW = "#ffffd0";
    this.CLR_WHITEBLUE = "#d0ffff";
    this.CLR_WHITEPURPLE = "#ffd0ff";
    this.CLR_GREY = "#d0d0d0";//"#e0e0e0";
    this.CLR_GREY2 = "#999999";
    this.CLR_BLACK = "#000000";
    this.CLR_DARKGREY = "#666666";
    //http://colorschemedesigner.com/csd-3.5/#2K32Pw0w0w0w0
    
    this.HL_CLR1 = "#FFCD00";//"#fff800";//
    this.HL_CLR2 = "#2DD700";//"#05e937";//
    this.HL_CLR3 = "#f105bd";//"#FA3E54";//"#F5001D";
    this.HL_CLR4 = "#b0ff05";
    this.HL_CLR5 = "#b170db";
    this.DL_CLR1 = "#3016B0";//"#059a25";//
    this.DL_CLR2 = "#1D8B00";//"#9e055c";//
    this.DL_CLR3 = "#190773";
    
    this.NEWS_BACKGROUND_ALPHA = 0.6;
    
    /*
    var chars = "\*";
    
    for ( var i = 0; i < chars.length; i ++ ) {
        log ( i + " :" + chars [ i ] + ", code: " + chars.charCodeAt ( i ) );
    }*/
    
    
};

function _onPopPage ( event ) {
    if ( FIRSTVISIT === true ) return;
    log ( "onPopPage" );
    logObject ( event.state );
    
};



function newExternalPage () {
    //from start or poppage
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function ( s ) { return decodeURIComponent ( s.replace ( pl, " " ) ); },
        query  = window.location.search.substring ( 1 );

    var urlParams = {};
    while ( ( match = search.exec ( query ) ) !== null ) {
       urlParams [ decode ( match [ 1 ] ) ] = decode ( match [ 2 ] );
    }
   
    //var lan = ( urlParams [ "lan" ] )? urlParams [ "lan" ]: LANGUAGEMANAGER.LANGUAGE_NL;
    //var mainpage = ( urlParams [ "m" ] )? urlParams [ "m" ] : "1";
    //var overview = ( urlParams [ "o" ] )? urlParams [ "o" ] : "0";
    //var subpage = ( urlParams [ "s" ] )? urlParams [ "s" ] : "0";
    //GLOBALDATA.setCurrentPage ( "language", lan );
    
};


function start () {
    _logAscii ();
    
    $ ( document ).on ( "resizeUpdate", _redrawAll );
    window.addEventListener( 'resize', resizeCanvas, false);
    //resizeCanvas ();
    
    if ( FIRSTVISIT === true ) {
        
        log ( "FIRSTVISIT" );
        document.body.style.zoom = 1.0;

        log ( "zoomlevel: " + document.body.style.zoom );
        log ( "browser: " + BrowserDetect.browser );
        log ( "browser ver.: " + BrowserDetect.version );
        log ( "browser OS: " + BrowserDetect.OS );

        if ( BrowserDetect.browser === "Explorer" ) BROWSER_ISBUGGY = true;
        
        window.onpopstate = _onPopPage;
      
        FIRSTVISIT = false;
    }
     
    _initialize ();
}


function _logAscii () {
    

    
    
}



function _initialize () {
    $ ( window ).scrollTop ( 0 );

    UNIVERSE = new Universe ();
    MOUSEHANDLER = new MouseHandler ();
    GLOBALDATA = new GlobalData ();
    CAMERA = new Camera ();
    //SERVERDATA = new ServerData ( true );
    ANIMATORCONTROLLER = new AnimatorController ();
    STARSTORM = new StarStorm ();
    CASCADEBUTTONMANAGER = new CascadeButtonManager ();
    TEXTPARSER = new TextParser ();
    TOOLTIPMANAGER = new TooltipManager ();
    MAINMENU = new MainMenu ();
    CONTENT_FREELANCE = new ContentFreelance ();
    ZGAMEZCONTENT = new ZGamezContent ();
    CONTENT_NEWS = new ContentNews ();
    MAINFOOTER = new MainFooter ();
    MFFT = new Mfft ();
    
    window.requestAnimFrame = 
    window.requestAnimationFrame       ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    function( callback ){
        window.setTimeout ( callback, 1000 / 60 );
    };    
    animloop ();
    
    //_checkFonts ();
    _loadData ();
    
    
    
    
}




function _loadData () {
    /*
    var commands = [
        { command: "riptable", data: "categories", rf: SERVERDATA._parseCategoryData },
        { command: "riptable", data: "pages", rf: SERVERDATA._parsePagesData },
        { command: "riptable", data: "page_segments", rf: SERVERDATA._parsePageSegmentsData },
        { command: "riptable", data: "media", rf: SERVERDATA._parseMediaData },
        { command: "riptable", data: "contact", rf: SERVERDATA._parseContactData }
    ];
        
    SERVERDATA.addBatchCommands ( commands );
    SERVERDATA.callServer ( initialDataLoaded );
    */
   initialDataLoaded ();
};

function initialDataLoaded () {
    log ( "all ready" );
    
    resizeCanvas ();
    
    //INITIAL QUERY
    //newExternalPage ();
    STARSTORM.draw ();
    CONTENT_FREELANCE.initialize ();
    ZGAMEZCONTENT.initialize ();
    CONTENT_NEWS.initialize ();
    MAINFOOTER.initialze ();
    MOUSEHANDLER.initialize ();
}



function _checkFonts () {
    var i;
    var fonttypes = [ "boLd", "bold_itALic", "extrabold", "extrabold_italic", "italic", "light", "light_italic", "semibold", "semibold_italic", "regular" ];
    var index;
    var html;
    var size;
    var sizes = [ 18, 24 ];
    var yp = 100;
    for ( i = 0; i < ( fonttypes.length * 2 ); i ++ ) {
        index = Math.floor ( i / 2 );
        size = sizes [ i % 2 ];
        yp += 25;
        html = "<p style=\"" + FONT ( fonttypes [ index ], size, "#ffffff" ) + POSITION ( 100, yp ) + "\">The fox jumped over the lazy brown puddle</p><br/>";
        
        //log ( html );
        $ ( "#parentdiv" ).append ( html );
    }
}


/// HTML SHORTCUTS

function FONT ( fonttype, pixelsize, color ) {
    if ( !color ) color = "#000000";
    var fontname;
    switch ( fonttype.toLowerCase () ) {
        case "bold": fontname = "arial_narrow_bold";break;
        case "bold_italic": fontname = "arial_narrow_bold";break;
        case "italic": fontname = "arial_narrow_italic";break;
        case "roboto_mono_thin": fontname = "roboto_mono_thin";break;
        case "roboto_mono_regular": fontname = "roboto_mono_regular";break;
        case "roboto_mono_medium": fontname = "roboto_mono_medium";break;
        case "roboto_mono_bold": fontname = "roboto_mono_bold";break;
        case "regular": fontname = "arial_narrow_regular";break;
        default: fontname = fonttype;//"arial_narrow_regular";//"arial_narrow_regular";    
    }
    return " font-family:" + fontname + "; font-size:" + String ( pixelsize ) + "px; color:" + color + "; ";
};

function POSITION ( xp, yp ) {
    return " position:absolute; left:" + xp + "px; top:" + yp + "px; ";
    
};




function _redrawAll () {
    log ( "_redrawAll" );

    
    //_rebuildFrames ( false );
    _redrawBackground ();
    //if ( HeaderBar !== null ) HeaderBar.stageResize ();    
}

function _redrawBackground () {
    
    clearContext ( "background" );
    var ctx = getContext ( "background" );

    ctx.fillStyle = GLOBALDATA.CLR_BLACK;
    ctx.fillRect ( 0, 0, WIDTH, HEIGHT );

}



function _frameTick () {
    if ( ANIMATORCONTROLLER !== null ) {
        ANIMATORCONTROLLER.frameTick ();
    }
    
    if ( CONTENT_FREELANCE ) {
        if ( CONTENT_FREELANCE.TEXTTICKER ) {
            if ( !CONTENT_FREELANCE.active || CONTENT_FREELANCE.TEXTTICKER.allshown ) {
                STARSTORM.frameTick ();
            }
        }
    }
    if ( CONTENT_NEWS ) {
        if ( CONTENT_NEWS.active ) {
            CONTENT_NEWS.frameTick ();
        }
    }
    if ( ZGAMEZCONTENT ) {
        if ( ZGAMEZCONTENT.active ) {
            ZGAMEZCONTENT.frameTick ();
        }
    }
    
    
}



function animloop () {
    $ ( document ).trigger ( "frameTick" );
  //log ( "animloop" );
  requestAnimFrame ( animloop );
  
  if ( FRAMECOUNTER >= FRAMEDELAY ) {
      FRAMECOUNTER = 0;
     _frameTick ();
   }
   FRAMECOUNTER ++;
}

