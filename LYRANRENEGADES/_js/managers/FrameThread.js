

var FrameThread = function () {

    this.FRAMECOUNTER = 0;
    this.FRAMEDELAY = 2;
    
    
    this.startLooping = function ( b ) {
        if ( b === true ) {
            window.requestAnimFrame = 
            window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
                window.setTimeout ( callback, 1000 / 60 );
            };    
            this.animloop ();    
        }
        else window.requestAnimFrame = null;
    };
    
    this.animloop = function () {
        window.requestAnimFrame ( FRAMETHREAD.animloop );
        //MAIN.log ( "FrameThread.animloop" );
        if ( FRAMETHREAD.FRAMECOUNTER >= FRAMETHREAD.FRAMEDELAY ) {
            FRAMETHREAD.FRAMECOUNTER = 0;
            FRAMETHREAD._frameTick ();
        }
        FRAMETHREAD.FRAMECOUNTER ++;
    };

    this._frameTick = function () {
        //MAIN.log ( "frametick" );
        $ ( document ).trigger ( "frameTick" );
    };

    
};