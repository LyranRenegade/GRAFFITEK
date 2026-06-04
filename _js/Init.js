/////////////////////
/// GRAFFITEK INIT ///
//////////////////////



//var RESIZELISTENERS = [];



window.addEventListener ( "load", function () {	
    start ();
}, false );



    
    
////////////
// BOUNDS //
////////////


var RESIZE_TIMEOUT = null;

function resizeCanvas () {
    
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;

    var elems = document.querySelectorAll ( "canvas" );
    var el = elems.length;
    var i;
    var c;

    var ctx;
    
    var tempcanvas;
    for ( i = 0; i < el; i++ ) {
       c = elems [ i ];
       ctx = c.getContext ( "2d" );
       //ctx.scale ( 1, 1 );
       /*
       if ( c.id === "maintopic" || c.id === "footercanvas" || c.id === "mindfuckcanvas" ) {
           tempcanvas = duplicateCanvas ( c );
           log ( "tempcanvas: " + tempcanvas );
       }*/
       
       if ( c.id === "quotecanvas" ) continue;
       if ( String ( c.id ).indexOf ( "cascade" ) !== -1 ) continue;
       if ( String ( c.id ).indexOf ( "shadecanvas" ) !== -1 ) continue;
       if ( String ( c.id ).indexOf ( "scroll" ) !== -1 ) continue;
       
       c.width = WIDTH;
       c.height = HEIGHT;
       
       $ ( c ).css ( {
           width: WIDTH + "px",
           height: HEIGHT + "px",
       });
       
       /* 
       if ( c.id === "maintopic" || c.id === "footercanvas" || c.id === "mindfuckcanvas" ) {
           log ( "maintopic: " + tempcanvas );
           ctx.drawImage ( tempcanvas, 0, 0 );
       } */       
       
    }
     $ ( document ).trigger ( "resizeUpdate" );
     
    RESIZE_TIMEOUT = setTimeout ( _dispatchResize, 200 );
        
    //log ( "resizecanvas" );
    
    
}

function _dispatchResize () {
    //log ( "_dispatchResize" );
    RESIZE_TIMEOUT = null;
    $ ( document ).trigger ( "resizeUpdate2" );
    
}








function loadNextAudio () {
    var event;
    var i;
    var al = AUDIO_FILES.length;
    var o;
    for ( i = 0; i < al; i ++ ) {
        o = AUDIO_FILES [ i ];
        if ( o.loaded === false ) {
            o.loaded = true ;
            o.audio =  document.createElement ( 'audio' );
            o.audio.autoplay = false;
            o.audio.loop = false;
            o.audio.preload = "metadata";
            o.audio.addEventListener ( "canplaythrough", audioReady ( event ) );
            o.audio.src = "Audio/" + o.file;
            break;
        }
        else {
            o.audio.pause ();
        }
    }
    if ( al === 0 ) start ();
}


function checkAudioFilesProgress () {
    var i;
    var al = AUDIO_FILES.length;
    var o;
    var progressline = " audio controleren";
    var ran = Math.ceil ( 3 * Math.random () );

    for ( i = 0; i < 3; i ++ ) {
        if ( i < ran ) progressline += ".";
        else progressline += " ";
    }	
    for ( i = 0; i < al; i ++ ) {
        o = AUDIO_FILES [ i ];
        if ( o.audio.networkState !== 1 && isNaN ( o.audio.duration ) ) {
                log ( "NAN: " + o.audio.duration + ", " + o.file + " nwstate: " + o.audio.networkState );
                setProgress ( i / al, progressline  );
                setTimeout ( checkAudioFilesProgress, 100 );
                return;
        }
        else {
            //o.audio.pause ();
            //o.audio.currentTime = 0;
        }
        //log ( i + " progress: " + o.audio.currentTime + ", " + o.audio.duration );
    }
    log ( "all done" );
    start ();

}

function audioReady ( event ) {
    //TODO:TEST VERSION

    if ( !event ) event = window.event;
    AUDIO_LOADCOUNT ++;
    //log ( "audio ready: " + AUDIO_LOADCOUNT + "/ " + AUDIO_FILES.length );

    var timeout = DEBUGMODE? 1 : 100;

    setProgress ( AUDIO_LOADCOUNT / AUDIO_FILES.length, "audio inladen.."  );

    if ( AUDIO_LOADCOUNT === AUDIO_FILES.length ) {
        log ( "all audio loaded " );

        if ( DEBUGMODE === false ) setTimeout ( checkAudioFilesProgress, 50 );
        else start ();
    }
    else setTimeout ( loadNextAudio, timeout );
	
}


function setProgress ( ratio, message ) {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    document.querySelector ( '#progress').width = WIDTH;
    document.querySelector ( '#progress').height = WIDTH;

    //log ( "setProgress: " + ratio );
    //ratio = .5;

    var ctx = getContext ( "progress" );
    ctx.clearRect ( 0, 0, WIDTH, HEIGHT );
    ctx.fillStyle = "#763d70";
    ctx.fillRect ( 0, 0, WIDTH, HEIGHT );
    if ( ratio >= 1 ) return;

    var scale = WIDTH / DEFWIDTH;

    var w = ( WIDTH / 5 );
    var h = w / 6;

    var fontsize = 6 + Math.round ( 20 * scale );


    var x = ( WIDTH - w ) / 2;
    var y = ( ( HEIGHT - h ) / 2 ) - ( HEIGHT / 20 );


    ctx.font = String ( fontsize ) + "px Arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    fontsize -= 2;

    ctx.fillStyle = "#ffffff";
    ctx.fillText ( message, x + ( w / 2 ), y );
    
    //build squares
    var MINALPHA = .3;
    var MAXALPHA = 1;
    
    var COLORS = [ "#2162af", "#f58220", "#7fc241", "#da2128", "#993f98", "#5991cc" ];
    var i;
    var yp = y + fontsize;
    var xp = x;
    var alpha;
    var alphainc = MAXALPHA - MINALPHA;
    for ( i = 0; i < 6; i ++ ) {
        ctx.fillStyle = COLORS [ i ];
        alpha = MINALPHA;
        if ( ratio > ( i / 6 ) ) {
            alpha += alphainc * ( ratio / ( ( i + 1 ) / 6 ) );
        }
        alpha = Math.min ( alpha, MAXALPHA );
        ctx.globalAlpha = alpha;
        ctx.fillRect ( xp, yp, h, h );
        xp += h;
    }
    ctx.globalAlpha = 1;

}

