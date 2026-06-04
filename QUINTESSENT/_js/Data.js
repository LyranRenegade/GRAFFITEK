////////////////////////
/// QUINTESSENT 2017 ///
////////////////////////


//var CONTENTTYPE_TEXT = "text";

// STATIC DATA

var DEFWIDTH = 10;//24;
var DEFHEIGHT = 778;
var CLEARSIZE = 0;
var DEFSCALE = 1;
var YSCALE = 1;
var XSCALE = 1;
var WIDTH;
var HEIGHT;
var BROWSER_ISBUGGY = false;
var GLOBAL_MOUSEPOS = { x: 0, y: 0 };
var DEBUGMODE = false;




function addAudioFiles () {
    //addAudio ( "t1", "t1.mp3", .2 );
    


}

//AUDIO

var AUDIO_FILES = [];
var AUDIO_LOADCOUNT = 0;
var AUDIO_CHECKCOUNT = 0;

function addAudio ( name, file, defvolume ) {
    AUDIO_FILES.push ( { audio: null, name: name, file: file, defvolume: defvolume, loaded: false, checked: false } );
}


//IMAGES


var IMAGE_FILES = [];
var IMAGE_LOADCOUNT = 0;


function _installImages () {
    
    
    var i;
    var il = IMAGEDATA.length;
    var data;
    for ( i = 0; i < il; i ++ ) {
        data = IMAGEDATA [ i ];
        
        addImage ( data.text_id, data.path, ( String ( data.preload ) === "1" ) );
        
    }
    //

    loadNextImage ();
    
}


function addImage ( textid, filepath, preload ) {
    IMAGE_FILES.push ( { image: null, textid: textid, filepath: filepath, loaded: false, preload: preload } );

}



function loadNextImage () {
    var i;
    var il = IMAGE_FILES.length;
    var o;

    if ( il === 0 ) checkReallyLoaded ();

    for ( i = 0; i < il; i ++ ) {
        //log ( "checking image: "+ i );
        o = IMAGE_FILES [ i ];
        if ( o.loaded || o.preload === false ) continue;

        //log ( "loading next image: " + o.name );

        o.image = new Image ();
        o.image.onerror = function () {
            log ( "image failed to load" );
        };
        o.image.onload = function () {
            if ('naturalHeight' in this) {
                if (this.naturalHeight + this.naturalWidth === 0) {
                    this.onerror();
                    //return;
                }
            } else if (this.width + this.height === 0) {
                this.onerror();
                //return;
            }            
            IMAGE_LOADCOUNT ++;
            //setProgress ( IMAGE_LOADCOUNT / IMAGE_FILES.length, "beeldmateriaal laden.."  );
            var io = getImageObject ( this );
            //log ( "image found: " + io.name );
            io.loaded = true;

            if ( IMAGE_LOADCOUNT === IMAGE_FILES.length ) {
                checkReallyLoaded ();
            }
            else {
                loadNextImage ();
            }
        };
        o.image.src = o.filepath;
        break;
    }
}


function checkReallyLoaded () {
    var i;
    var il = IMAGE_FILES.length;
    var o;

    for ( i = 0; i < il; i ++ ) {
        o = IMAGE_FILES [ i ];	
        if ( o.preload === false ) continue;
        if ( isNaN ( o.image.width ) || isNaN ( o.image.height ) ) {
            setTimeout ( checkReallyLoaded, 50 );
            return;
        }
    }    
    log ( "images really ready" );
    
    /*if ( AUDIO_FILES.length === 0 ) start ();
    else loadNextAudio ();*/
    _loadData ( 6 );
    
}