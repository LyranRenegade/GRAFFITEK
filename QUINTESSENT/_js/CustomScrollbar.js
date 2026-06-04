

var CustomScrollbar = function ( parentid ) {
    
    
    this.WIDTH = 12;
    this.C_RADIUS = 5;
    
    this.LINEWIDTH = 2;
    this.LINECLR = GLOBALDATA.CLR_DARKGREY;
    this.CBACK_CLR = GLOBALDATA.CLR_DARKGREY;
    this.COVER_CLR = GLOBALDATA.CLR_BLACK;
    this.SCROLLERBACK_CLR = GLOBALDATA.CLR_BLACK;
    
    this.parentid = parentid;
    
    this.canvasb_id = "scroll_b_" + parentid;
    this.canvasc0_id = "scroll_c0_" + parentid;
    this.canvasc1_id = "scroll_c1_" + parentid;
    this.canvasf_id = "scroll_f_" + parentid;
    
    this.canvasids = [ this.canvasb_id, this.canvasc0_id, this.canvasc1_id, this.canvasf_id ];
    this.ctxs = [];
    
    this.active = false;
    
    this.maxYinc = 0;
    this.draggerheight = 0;
    this.maxScroll = 0;
    
    this.scrollDownY = { mousepos: -1, scrolltop: 0 };
    this.scrollspeed = 32;//16;
    
    this.BOUNDS = { x: 0, y: 0, h: 0, th: 0 };
    
    
    this.powerup = 0;//false;
    this.powerdown = 0;//false;
    this.container = null;
    this.mousedown = false;
    
    this.unneeded = false;
    
    
    this._init = function () {
        var ctx;
        var zindex = 10;
        
        var i;
        var canvas;
        var div = document.createElement ( "div" );
        div.id = "scrolldiv_" + this.parentid;
        div.style.position = "fixed";
        div.style.zIndex = zindex;
        div.style.display = "none";
        this.container = div;
        document.body.appendChild ( div );
        for ( i = 0; i < 4; i ++ ) {
            canvas = document.createElement ( "canvas" );
            canvas.id = this.canvasids [ i ];
            canvas.width = this.WIDTH;
            canvas.height = this.WIDTH;
            canvas.style.height = String ( this.WIDTH ) + "px";
            canvas.style.width = String ( this.WIDTH ) + "px";
            canvas.style.zIndex = i;
            canvas.style.position = "fixed";
            canvas.style.cursor = "pointer";
            //log ( "canvas " + i + ": " + canvas + " id; " + canvas.id );
            
            
            $ ( "#" + div.id ).append ( canvas );
            //document.body.appendChild ( canvas );
            ctx = getContext ( canvas.id );
            log ( "ctx: " + ctx );
            this.ctxs.push ( ctx );
        }
    };
    
    this.updateTotalHeight = function ( th ) {
        
        this.BOUNDS.th = th;
        //log ( "new total height: " + th );
        this.maxScroll = this.BOUNDS.th - this.BOUNDS.h + 40;
        
        //log ( "new macscroll: " + this.maxScroll );
        if ( this.maxScroll <= 0 ) {
            this.unneeded = true;
            $ ( "#" + this.container.id ).fadeOut ( 200 );
            $ ( "#" + this.parentid ).scrollTop ( 0 );
        }
        else {
            if ( this.unneeded ) $ ( "#" + this.container.id ).fadeIn ( 200 );
            this.unneeded = false;
            this.redrawDragger ();
        }
    };
    
    
    this.setBounds = function ( x, y, h ) {
        
        x = Math.round ( x );
        
        
        this.BOUNDS.x = Math.round ( x );
        this.BOUNDS.y = y;
        this.BOUNDS.h = h;
        
        var i;
        var ctx;
        for ( i = 0; i < 4; i ++ ) {
            ctx = this.ctxs [ i ];
            if ( i === 0 || i === 3 ) {
                ctx.canvas.height = h;
                ctx.canvas.style.height = String ( h ) + "px";
            }
            ctx.canvas.style.left = String ( x ) + "px";
            if ( i === 2 ) {
                ctx.canvas.style.top = String ( y + h - ( this.C_RADIUS * 2 ) ) + "px";
            }
            else {
                ctx.canvas.style.top = String ( y ) + "px";
            }
        }

        
        this.ctxs [ 0 ].canvas.height = h;
        this.ctxs [ 0 ].canvas.style.height = String ( h ) + "px";
        
        if ( this.active ) this.redrawAll ();
    };
    
    this.setActive = function ( b ) {
        
        this.redrawAll ();
        if ( this.active === b ) return;
        
        this.powerup = 0;//false;
        this.powerdown = 0;//false;        
        
        
        //remove listeners
        this.active = b;
        this._mouseUp ();
        
        $ ( "#" + this.parentid ).off ( "mousewheel DOMMouseScroll", $.proxy ( this, "_onMouseWheel" ) );
        
        $ ( document ).off ( MOUSEHANDLER.MOUSEUP, $.proxy ( this, "_mouseUp" ) );
        $ ( "#" + this.canvasids [ 0 ] ).off ( MOUSEHANDLER.MOUSEDOWN, $.proxy ( this, "_backDown" ) );
        $ ( "#" + this.canvasids [ 1 ] ).off ( MOUSEHANDLER.MOUSEDOWN, $.proxy ( this, "_powerUpActivate" ) );
        $ ( "#" + this.canvasids [ 2 ] ).off ( MOUSEHANDLER.MOUSEDOWN, $.proxy ( this, "_powerDownActivate" ) );
        $ ( "#" + this.canvasids [ 3 ] ).off ( MOUSEHANDLER.MOUSEDOWN, $.proxy ( this, "_frontDown" ) );
        
        $ ( document ).off ( MOUSEHANDLER.MOUSEMOVE, $.proxy ( this, "_frontDrag" ) );
        
        if ( b ) {
            $ ( "#" + this.parentid ).on ( "mousewheel DOMMouseScroll", $.proxy ( this, "_onMouseWheel" ) );
            if ( !this.unneeded ) {
                $ ( "#" + this.container.id ).stop ( true ).fadeIn ( 500 );
            }
            //var cid = "#" + this.canvasids [ 1 ];
            //log ( "cid: " + cid );
            //var $canvas = $ ( cid );
            //log ( $canvas );
            
            $ ( "#" + this.canvasids [ 0 ] ).on ( MOUSEHANDLER.MOUSEDOWN, $.proxy ( this, "_backDown" ) );
            $ ( "#" + this.canvasids [ 1 ] ).on ( MOUSEHANDLER.MOUSEDOWN, $.proxy ( this, "_powerUpActivate" ) );
            $ ( "#" + this.canvasids [ 2 ] ).on ( MOUSEHANDLER.MOUSEDOWN, $.proxy ( this, "_powerDownActivate" ) );
            $ ( "#" + this.canvasids [ 3 ] ).on ( MOUSEHANDLER.MOUSEDOWN, $.proxy ( this, "_frontDown" ) );
        
            
                //mousedown ( $.proxy ( this, "_powerUpActivate" ) );
            
            //$ ( "#" + this.canvasids [ 1 ] ).on ( MOUSEHANDLER.MOUSEUP, $.proxy ( this, "_powerUpDeactivate" ) );
            //$ ( "#" + this.canvasids [ 2 ] ).on ( MOUSEHANDLER.MOUSEDOWN, $.proxy ( this, "_powerDownActivate" ) );
            //$ ( "#" + this.canvasids [ 2 ] ).on ( MOUSEHANDLER.MOUSEUP, $.proxy ( this, "_powerDownDeactivate" ) );
            
            //add listeners
            $ ( document ).on ( MOUSEHANDLER.MOUSEUP, $.proxy ( this, "_mouseUp" ) );
        }
        else {
            $ ( "#" + this.container.id ).stop ( true ).fadeOut ( 200 );
        }
        
        this._checkFrameListener ();
       
        
    };
    

    
    /// MOUSE STUFF START ///
    this._checkFrameListener = function () {
        //log ( "ssb _checkFrameListener" );
        $ ( document ).off ( "frameTick", $.proxy ( this, "_frameTick" ) );
        
        if ( this.powerup > 0 || this.powerdown > 0 ) {
            $ ( document ).on ( "frameTick", $.proxy ( this, "_frameTick" ) );
        }
        
    };
    
    this._frameTick = function () {
        
        
        var scrolltop = $ ( "#" + this.parentid ).scrollTop ();
        var update = false;
        if ( this.powerup > 0 ) {
            $ ( "#" + this.parentid ).scrollTop ( scrolltop - ( this.scrollspeed * this.powerup ) );
            update = true;
        }
        else if ( this.powerdown > 0 ) {
            $ ( "#" + this.parentid ).scrollTop ( scrolltop + ( this.scrollspeed * this.powerdown ) );
            update = true;
        }

        if ( this.mousedown === false ) {
            if ( this.powerup > 0 ) {
                this.powerup /= 1.2;
                if ( this.powerup < 0.2 ) {
                    this.powerup = 0;
                    this._checkFrameListener ();
                }
                this.drawPowerCircle ( 0, this.powerup );                
            }
            if ( this.powerdown > 0 ) {
                this.powerdown /= 1.2;
                if ( this.powerdown < 0.2 ) {
                    this.powerdown = 0;
                    this._checkFrameListener ();
                }
                this.drawPowerCircle ( 1, this.powerdown );                
            }            
            
        }
        
        if ( update ) {
            this._repositionDragger ();
        }
        
    };
    
    this._onMouseWheel = function ( e ) {
        if ( this.maxScroll <= 0 ) return;
        
        var delta = ( e.originalEvent.wheelDelta / - 40 ) || e.originalEvent.detail;
        
        delta /= 3;
        var scrolltop = $ ( "#" + this.parentid ).scrollTop ();
        scrolltop += delta * this.scrollspeed;
        $ ( "#" + this.parentid ).scrollTop ( scrolltop );
        //log ( "mouseWHEEL: " + delta );
        
        this._repositionDragger ();   
    };
    
    this._powerUpActivate = function () {
        //log ( "ssb _powerUpActivate " );
        this.mousedown = true;
        this.powerup = 1.5;
        this.drawPowerCircle ( 0, this.powerup  );
        this._checkFrameListener ();
    };
    this._powerDownActivate = function () {
        this.mousedown = true;
        this.powerdown = 1.5;
        this.drawPowerCircle ( 1, this.powerdown );
        this._checkFrameListener ();
    };
    

    this._backDown = function ( e ) {
        //log ( "backdown" );
        this._redrawLine ( true );
        var pos = MOUSEHANDLER.pointerEventToXY ( e );
        var scrollratio = this.maxScroll / this.maxYinc;
        
        var ypos = pos.y - ( this.draggerheight / 2 ) - this.BOUNDS.y + this.WIDTH;
        //ypos = Math.max ( this.BOUNDS.y + this.WIDTH, ypos );
        //ypos = Math.min ( this.maxYinc - this.BOUNDS.y + this.WIDTH, ypos );
        
        var scrolltop = ypos * scrollratio;
        $ ( "#" + this.parentid ).scrollTop ( scrolltop );
        this.mousedown = true;
        this._repositionDragger ();        
        
    };
    
    
    this._frontDown = function ( e ) {
        this.mousedown = true;
        var pos = MOUSEHANDLER.pointerEventToXY ( e );
        var scrolltop = $ ( "#" + this.parentid ).scrollTop ();
        this.scrollDownY = { mousepos: pos.y, scrolltop: scrolltop };
        
        $ ( document ).on ( MOUSEHANDLER.MOUSEMOVE, $.proxy ( this, "_frontDrag" ) );
        this.redrawDragger ( true );
    };  
    
    this._frontDrag = function ( e ) {
        if ( this.scrollDownY.mousepos === -1 ) {
            return;
        }
        var pos = MOUSEHANDLER.pointerEventToXY ( e );
        var inc = pos.y - this.scrollDownY.mousepos;
        var scrollratio = this.maxScroll / this.maxYinc;
        var scrolltop = this.scrollDownY.scrolltop + ( inc * scrollratio );
        $ ( "#" + this.parentid ).scrollTop ( scrolltop );
        
        this._repositionDragger ();
    };
    
    this._mouseUp = function () {
        //if ( this.powerup ) this.drawPowerCircle ( 0, false );
        //if ( this.powerdown ) this.drawPowerCircle ( 1, false );
        
        $ ( document ).off ( MOUSEHANDLER.MOUSEMOVE, $.proxy ( this, "_frontDrag" ) );
        
        this.scrollDownY = { mousepos: -1, scrolltop: 0 };
        //this.powerup = false;
        //this.powerdown = false;
        this.mousedown = false;
        this._checkFrameListener ();
        this.redrawDragger ( false );
        this._redrawLine ( false );
    };
    
    
    
    
    /// MOUSE STUFF END ///
    
    this.redrawAll = function () {
        //log ( "CSB redrawAll " + this.BOUNDS.h );
        
        this._redrawLine ( false );
        
        this.drawPowerCircle ( 0, 0 );
        this.drawPowerCircle ( 1, 0 );
        
        this.redrawDragger ( false );
    };
    
    this._redrawLine = function ( down ) {
        var ctx = this.ctxs [ 0 ];
        ctx.clearRect ( 0, 0, ctx.canvas.width, ctx.canvas.height );
        ctx.strokeStyle = down? GLOBALDATA.CLR_GREY2 : this.LINECLR;
        ctx.lineWidth = this.LINEWIDTH;
        ctx.beginPath ();
        ctx.moveTo ( this.WIDTH / 2, 0 );
        ctx.lineTo ( this.WIDTH / 2, this.BOUNDS.h );
        ctx.closePath ();
        ctx.stroke ();
    };
    
    this._repositionDragger = function () {
        
        var availableroom = this.BOUNDS.h - ( 2 * this.WIDTH );
        this.draggerheight = Math.max ( this.WIDTH, Math.pow ( availableroom, 2 ) / this.BOUNDS.th );
        this.maxYinc = availableroom - this.draggerheight;
        
        
        var scrolltop = $ ( "#" + this.parentid ).scrollTop ();
        this.maxScroll = this.BOUNDS.th - this.BOUNDS.h + 40;//margin
        
        //$ ( "#" + this.parentid ).scrollTop ( this.maxScroll );
        //scrolltop = $ ( "#" + this.parentid ).scrollTop ();
        var scrolledratio = scrolltop / this.maxScroll;
        var ypos = this.BOUNDS.y + this.WIDTH + ( this.maxYinc * scrolledratio );
        
        var ctx = this.ctxs [ 3 ];
        ctx.canvas.style.top = String ( ypos ) + "px";
        
    };
    
    
    
    this.redrawDragger = function ( selected ) {
        if ( this.BOUNDS.th === 0 ) return;
        
        this._repositionDragger ();
        
        var ctx = this.ctxs [ 3 ];        
        
        ctx.clearRect ( 0, 0, ctx.canvas.width, ctx.canvas.height );
        ctx.canvas.height = this.draggerheight;
        ctx.canvas.width = this.WIDTH;
        ctx.canvas.style.height = String ( this.draggerheight ) + "px";
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = selected? GLOBALDATA.CLR_GREY : GLOBALDATA.CLR_GREY2;//GLOBALDATA.CLR_WHITE;
        ctx.fillStyle = "rgba(0,0,0,0)";        

        ctx.fillRect ( 0, 0, this.WIDTH, this.draggerheight );
        ctx.beginPath ();
        ctx.arc ( this.WIDTH / 2,( this.WIDTH / 2 ), this.C_RADIUS, Math.PI, 2 * Math.PI, false );
        ctx.moveTo ( this.WIDTH - 1,( this.WIDTH / 2 ) );
        ctx.lineTo ( this.WIDTH - 1, this.draggerheight - ( this.WIDTH / 2 ) );
        ctx.arc ( this.WIDTH / 2, this.draggerheight - ( this.WIDTH / 2 ), this.C_RADIUS, 0, 1 * Math.PI, false );
        ctx.moveTo ( 1,  this.draggerheight - ( this.WIDTH / 2 ) );
        ctx.lineTo ( 1, ( this.WIDTH / 2 ));
        ctx.stroke ();
        ctx.closePath ();
    };
    
    this.drawPowerCircle = function ( index, activation ) {
        var ctx = this.ctxs [ index + 1 ];
        ctx.clearRect ( 0, 0, ctx.canvas.width, ctx.canvas.height );
        
        ctx.fillStyle = "rgba(255,255,255," + String ( activation / 1.5 ) + ")";
        ctx.strokeStyle = GLOBALDATA.CLR_GREY;
        ctx.lineWidth = 1.5;//this.LINEWIDTH;
        ctx.beginPath ();
        ctx.arc ( this.WIDTH / 2, this.WIDTH / 2, this.C_RADIUS, 0, 2 * Math.PI, false );
        ctx.closePath ();
        ctx.fill ();
        ctx.stroke ();
        
    };
    
    
    
    
    this._init ();
    
};