///////////////
/// LR MAIN DEPRECATED ///
///////////////



var MOUSEHANDLER = null;
var SERVERDATA = null;
var CASCADEBUTTONMANAGER = null;
var TEXTPARSER = null;

//var ANIMATORCONTROLLER = null;
var TOOLTIPMANAGER = null;
var GLOBALDATA = null;

//var MAINMENU = null;
//var ZGAMEZCONTENT = null;
//var CONTENT_FREELANCE = null;
//var CONTENT_NEWS = null;
//var MAINFOOTER = null;
//var MFFT = null;

var _FRAMECOUNTER = 0;
var _FRAMEDELAY = 2;
//var _FIRSTVISIT = true;





function _onPopPage ( event ) {    
    if ( FIRSTVISIT === true ) {
        log ( "onPopPage.FirstVisit" );
        return;
    }
    log ( "onPopPage.NextVisit" );
    logObject ( event.state );    
};


/*
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
    
};*/


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

    //UNIVERSE = new Universe ();
    MOUSEHANDLER = new MouseHandler ();
    GLOBALDATA = new GlobalData ();
    //CAMERA = new Camera ();
    
    SERVERDATA = new ServerData ( true );
    //ANIMATORCONTROLLER = new AnimatorController ();
    //STARSTORM = new StarStorm ();
    CASCADEBUTTONMANAGER = new CascadeButtonManager ();
    TEXTPARSER = new TextParser ();
    TOOLTIPMANAGER = new TooltipManager ();
    //MAINMENU = new MainMenu ();
    //CONTENT_FREELANCE = new ContentFreelance ();
    //ZGAMEZCONTENT = new ZGamezContent ();
    //CONTENT_NEWS = new ContentNews ();
    //MAINFOOTER = new MainFooter ();
    //MFFT = new Mfft ();
    
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
    //STARSTORM.draw ();
    //CONTENT_FREELANCE.initialize ();
    //ZGAMEZCONTENT.initialize ();
    //CONTENT_NEWS.initialize ();
    //MAINFOOTER.initialze ();
    
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
    
    /*
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
    }*/
    
    
}



function animloop () {
    $ ( document ).trigger ( "frameTick" );
  //log ( "animloop" );
  requestAnimFrame ( animloop );
  
  if ( _FRAMECOUNTER >= _FRAMEDELAY ) {
      _FRAMECOUNTER = 0;
     _frameTick ();
   }
   _FRAMECOUNTER ++;
}

