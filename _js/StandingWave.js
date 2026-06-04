/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var StandingWave = function ( parentid ) {
    
    this.parentid = parentid;
    this.canvas = null;
    //this.canvas.style.top = "2px";
    
    //layout
    this.color = GLOBALDATA.CLR_WHITE;
    this.linewidth = 2;
    this.linecap = "round";
    this.width = 0;
    this.height = 0;
    
    //constants
    this.AMPLITUDE = 10;
    this.WAVELENGTH = 30;
    this.ANGULAR_FREQUENCY = Math.PI / 5;
    this.XSTEP = 15;
    
    //variables
    this.time = 0;
    this.maxtime = 25;
    
    this.DELAY = 3;//3;
    this.delaycount = 0;
    
    this.ENDING = "RIGHT";
    
    this.install = function () {
        this.time = 0;
        
        this.canvas = document.createElement ( "canvas" );
        this.canvas.id = parentid + "_wave";
        this.canvas.style.zIndex = 1;
        this.canvas.style.position = "relative";
        
        
        $ ( "#" + this.parentid ).append ( this.canvas );
        this.updateSize ();
        //$ ( document ).on ( MOUSEHANDLER.CLICK, $.proxy ( this, "trigger" ) );
        
    };
    
    this.trigger = function () {
        this.time = 0;
        this.delaycount = 0;
        $ ( document ).on ( "frameTick", $.proxy ( this, "frameTick" ) );
    };
    
    
    this.updateSize = function () {
        var $parent = $ ( "#" + this.parentid );
        this.width = $parent.width ();
        this.height = $parent.height ();

        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.style.width = String ( this.width ) + "px";
        this.canvas.style.height = String ( this.height ) + "px";
        this._redraw ();
    };
    
    
    this.frameTick = function () {
        this.delaycount ++;
        if ( this.delaycount >= this.DELAY ) {
            this.delaycount = 0;
            this.time ++;
            this._redraw ();
            if ( this.time >= this.maxtime ) {
                $ ( document ).off ( "frameTick", $.proxy ( this, "frameTick" ) );
            }
        }
    };
    
    //PRIVATE
    
    this._redraw = function () {
        var basey = this.height / 2;
        
        var ctx = getContext ( this.canvas.id );
        ctx.clearRect ( 0, 0, this.width, this.height );
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.linewidth;
        //ctx.lineCap = this.linecap;
        
        ctx.beginPath ();
        var sx = 0;
        if ( this.ENDING === "RIGHT" ) {
            ctx.moveTo ( 0, basey );
        }
        else {
            sx += this.XSTEP;
            ctx.moveTo ( 0, this.height );
            ctx.lineTo ( sx, basey );
        }
        
        //ctx.stroke ();
        //ctx.closePath ();
        //ctx.beginPath ();
        //var optimaldis = ( this.time / ( this.maxtime - 1 ) ) * this.width;
        //var mul;
        var x;
        var y;
        var a;
        a = .4;
        for ( x = sx; x < this.width; x+= this.XSTEP ) {
            
            
            a = ( ( a + 1.1 ) / 2 );
            a = Math.min ( 1, a );
            
            //mul = 1 - ( this.time / this.maxtime );//Math.max ( 0, 1 - ( 10 * ( Math.abs ( optimaldis - x ) / this.width )) );
            //y = this.AMPLITUDE * Math.sin ( ( ( Math.PI * 2 * x ) / this.WAVELENGTH ) - ( this.time * this.ANGULAR_FREQUENCY ) );
            
            if ( x > 0 && x < ( this.width - this.XSTEP ) ) {
                
                if ( Math.random () < .25 ) {
                    a -= .05;
                    while ( Math.random () < .9 ) x += this.XSTEP;
                    while ( Math.random () < .8 ) a -= .05;
                    a = Math.max ( a, .3 );
                    x = Math.min ( x, ( this.width - this.XSTEP ));
                    //ctx.moveTo ( x, basey + y );
                    //continue;
                }
            }
            
            //y *= mul;
            //y += Math.random ();
            //y -= Math.random ();
            
            
            ctx.strokeStyle = "rgba(255,255,255," + String ( a ) + ")";
            ctx.lineTo ( x, basey );
            ctx.stroke ();
            ctx.closePath ();
            ctx.beginPath ();
            ctx.moveTo ( x, basey );
        }
        
        if ( this.ENDING === "RIGHT" ) {
            //ctx.closePath ();
            //ctx.beginPath ();
            //ctx.moveTo ( this.width, basey );
            ctx.lineTo ( this.width, 0 );
            
        }
        else {
        }
        
        
        ctx.stroke ();
        ctx.closePath ();
        
    };
    
    
    
    this.install ();
    
    
};