

var GameOfLife = function () {
    
    
    //GAMEPHASE 0
    this.PERCEPTION_CIRCLEPARTS = 64;
    
    
    this.TEXTTICKER = null;
    this.canvas = null;
    this.topcanvas = null;
    
    this.textcanvas = null;
    this.installed = false;
    this.lastdrawbounds = { x:0, y:0, w:0, h: 0 };
    this.toplastdrawbounds = { x:0, y:0, w:0, h: 0 };
    
    this.active = false;
    
    this.LOCAL_MOUSEPOS = { x:0, y: 0 };
    
    this.gamephase = {};
    
    this.initialize = function () {
        this.canvas = document.createElement ( 'canvas' );
        this.canvas.id = "gameoflife";
        this.canvas.style.zIndex = 1;
        this.canvas.style.position = "absolute";
        
        this.topcanvas = document.createElement ( 'canvas' );
        this.topcanvas.id = "gameoflifetop";
        this.topcanvas.style.zIndex = 4;
        this.topcanvas.style.position = "absolute";
        
        this.textcanvas = document.createElement ( 'canvas' );
        this.textcanvas.id = "gameoflife_text";
        this.textcanvas.style.zIndex = 3;
        this.textcanvas.style.position = "absolute";


        $ ( "#zgamezdiv" ).append ( this.canvas );
        $ ( "#zgamezdiv" ).append ( this.textcanvas );
        $ ( "#zgamezdiv" ).append ( this.topcanvas );
        this.TEXTTICKER = new TextTicker ( [], false, "gameoflife_text" );
        this.TEXTTICKER.hidden = false;
        this.TEXTTICKER.initialize ();
        
        
        
        log ( "gameoflife init " );
        
        
        
        this.installed = true;
        this.resizeScreen ();
        this.restart ();
        
    };
    
    this.restart = function () {
        this.gamephase = { phase: 0, frame: 0, maxf:50, paused: false, circleparts: [], drawing: false, dragging: false, perceptionradius: 100 };
        var i = 0;
        for ( i = 0; i < this.PERCEPTION_CIRCLEPARTS; i ++ ) {
            this.gamephase.circleparts.push ( -1 );
        }
        
        this.setPerceptionDrawing ( false );
    };
    
    this.continue = function () {
        log ( "continue game of life" );
        this.active = true;
        this.TEXTTICKER.setActive ( true );
        this.TEXTTICKER._resizeScreen ();
        
        this.drawCurrentState ( true );
        
        if ( this.gamephase.phase === 0 ) {
            this.setPerceptionDrawing ( this.gamephase.drawing );
        }
    };
    
    this.setPerceptionDrawing = function ( b ) {
        //log ( "setPerceptionDrawing " + b );
        this.gamephase.dragging = false;
        $ ( "body" ).css ( "cursor", "default" );
        
        $ ( document ).off ( MOUSEHANDLER.MOUSEMOVE );
        $ ( document ).off ( MOUSEHANDLER.MOUSEUP );
        $ ( document ).off ( MOUSEHANDLER.MOUSEDOWN );
        this._clearTopLayer ();
        if ( b ) {
            $ ( document ).on ( MOUSEHANDLER.MOUSEMOVE, $.proxy ( this, "_mouseMovePerception" ) );
            $ ( document ).on ( MOUSEHANDLER.MOUSEUP, $.proxy ( this, "_mouseUpPerception" ) );
            $ ( document ).on ( MOUSEHANDLER.MOUSEDOWN, $.proxy ( this, "_mouseDownPerception" ) );
            //log ( "mousemove: " + MOUSEHANDLER.MOUSEMOVE + ", target: " + $ ( "#gameoflife" ) );
        }

        
    };
    
    this._mouseMovePerception = function ( e ) {
        var pos = pointerEventToXY ( e );
        this.LOCAL_MOUSEPOS.x = pos.x;
        this.LOCAL_MOUSEPOS.y = pos.y - $ ( "#gameoflife" ).offset ().top;
        
        if ( this.gamephase.dragging ) {
            //draw line to point starting from center, with max gamephase.perceptionradius
            this._drawPerceptionLine ( this.LOCAL_MOUSEPOS );
        }
        else {
            //create pointer if over center
            var cursor = "default";
            if ( _checkMouseWithinLocalBounds ( this.lastdrawbounds, this.LOCAL_MOUSEPOS ) ) {
                cursor = "pointer";
                
            }

            $ ( "body" ).css ( "cursor", cursor );
        }
    };
    
    this._mouseDownPerception = function ( e ) {
        var pos = pointerEventToXY ( e );
        this.LOCAL_MOUSEPOS.x = pos.x;
        this.LOCAL_MOUSEPOS.y = pos.y - $ ( "#gameoflife" ).offset ().top;     
        if ( _checkMouseWithinLocalBounds ( this.lastdrawbounds, this.LOCAL_MOUSEPOS ) ) {
            this.gamephase.dragging = true;
            //log ( "dragging percpetion!" );
        }
    };
    
    this._mouseUpPerception = function () {
        this.gamephase.dragging = false;
        this._clearTopLayer ();
    };
    
    this._drawPerceptionLine = function ( position ) {
        //log ( "_drawPerceptionLine "  + position.x + ", " + position.y );
        this._clearTopLayer ();
        var cw = ( this.canvas.width / 2 );
        var ch = ( this.canvas.height / 2 );
            
        var dx = position.x - cw;
        var dy = position.y - ch;
        var angle = Math.atan2 ( dy, dx );
        
        
        var dis = Math.pow ( Math.pow ( dx, 2 ) + Math.pow ( dy, 2 ), .5 );
        dis = Math.min ( dis, this.gamephase.perceptionradius );
        
        var angle = ( Math.PI / 2 ) - angle;
        if ( angle < 0 ) angle += ( 2 * Math.PI );
        
        var px = ( dis * Math.sin ( angle ) );
        var py = ( dis * Math.cos ( angle ) );
        
        //log ( "angle: " + angle  );
        
        var realradius = this.gamephase.perceptionradius + 15;
        
        this.toplastdrawbounds = { 
            x: Math.floor ( cw - realradius ),
            y: Math.floor ( ch - realradius ), 
            w: Math.ceil ( 2 * realradius ) + 1, 
            h: Math.ceil ( 2 * realradius ) + 1
        };
        
        var ctx = getContext ( this.topcanvas.id );
        ctx.strokeStyle = "rgba(255,255,255,0.5)";
        ctx.lineWidth = 3;
        ctx.beginPath ();
        ctx.moveTo ( cw, ch );
        ctx.lineTo ( cw + px, ch + py );
        ctx.stroke ();
        
        var r = 10;
        var clr = "rgba(255,255,255,1)";
        var clr0 = "rgba(255,255,255,0)";

        var grd = ctx.createRadialGradient ( cw + px, ch + py, r/10, cw + px, ch + py, r );
        grd.addColorStop ( 0, clr );
        grd.addColorStop ( 1, clr0 );            

        ctx.fillStyle = grd;
        drawQuickCirle ( cw + px, ch + py, r, this.topcanvas.id );        
        //ctx.closePath ();
        
        

        if ( dis === this.gamephase.perceptionradius ) {
            var part_size = Math.PI * 2 / this.PERCEPTION_CIRCLEPARTS;
            angle = ( 2 * Math.PI ) - angle;
            //angle += ( part_size / 2 );
            if ( angle > ( 2 * Math.PI ) ) angle -= ( 2 * Math.PI );
            var cp_index = Math.floor ( angle / part_size );
            
            if ( this.gamephase.circleparts [ cp_index ] === -1 ) {
                this.gamephase.circleparts [ cp_index ] = 0;
            }
            
        }
        
        
        //ctx.fillStyle = "#ffffff";
        //ctx.fillRect ( cw, ch, px, py );
        
    };
    
    
    
    
    this.pause = function () {
        $ ( "body" ).css ( "cursor", "default" );
        this.active = false;
        this.TEXTTICKER.setActive ( false );
    };
    
    
    this.frameTick = function () {
        //log ( "frameTick" );

        this.drawCurrentState ();

        if ( this.gamephase.phase === 0 ) {
            if ( this.gamephase.frame >= this.gamephase.maxf ) {
                
                
                this._setGamePhase ( 1 );
            }
            this.gamephase.frame ++;
        }
            

    };
    this._setGamePhase = function ( phase ) {
        log ( "GameOfLife _setGamePhase: " + phase );
        var tt = null;
        var drawing = false;
        
        if ( phase === 1 ) {
            tt = [ "%I exist<<<<<AM.% " ];
            drawing = true;
        }
        else if ( phase === 2 ) {
            tt = [ "$I perceive... ...<<<...$<<<<<<.. " ];
            drawing = true;
        }
        else if ( phase === 3 ) {
            tt = [ "^...***<<<Nothing^***<<<<<<<< " ];
            drawing = false;
            this.gamephase.frame = 0;
        }

        if ( tt !== null ) {
            this.TEXTTICKER.setNewText ( tt );
            this.TEXTTICKER.setActive ( this.active );
        }
        
        if ( this.gamephase.drawing !== drawing ) {
            this.gamephase.drawing = drawing;
            this.setPerceptionDrawing ( this.gamephase.drawing );        
        }
        this.gamephase.phase = phase;
    };
    
    this.drawCurrentState = function ( all ) {
        if ( this.gamephase.phase === 3 ) {
            var a = .5 + ( this.gamephase.frame / 20 );
            
            if ( this.gamephase.frame < this.gamephase.maxf ) {
                this.gamephase.frame ++;
            }
            a = Math.min ( a, 1 );
            this._clearLastDrawn ();
            var r = this.gamephase.perceptionradius;
            var cw = ( this.canvas.width / 2 );
            var ch = ( this.canvas.height / 2 );            
            
            var ctx = getContext ( this.canvas.id );
            ctx.lineWidth = 3;            
            ctx.strokeStyle = "rgba(255,255,255," + String ( a ) + ")";
            ctx.beginPath ();
            ctx.arc ( cw, ch, r, 0, 2 * Math.PI );
            ctx.stroke ();            
            r += 5;
            this.lastdrawbounds = { x: Math.floor ( cw - r ), y: Math.floor ( ch - r ), w: Math.ceil ( r * 2 ) + 1, h: Math.ceil ( r * 2 ) + 1 };
            
        }
        
        if ( this.gamephase.phase === 1 || this.gamephase.phase === 2 ) {
            this._clearLastDrawn ();
            //outerparts
            var r = this.gamephase.perceptionradius;
            var cw = ( this.canvas.width / 2 );
            var ch = ( this.canvas.height / 2 );            
            var i;
            var a;
            var sa;
            var ea;
            var maxa = .5;
            var inc = Math.PI / 2;// - ( Math.PI / this.PERCEPTION_CIRCLEPARTS );
            var circlepart = Math.PI * 2 / this.PERCEPTION_CIRCLEPARTS;
            var ctx = getContext ( this.canvas.id );
            ctx.lineWidth = 3;
            //ctx.lineCap = "round";
            var allshown = true;
            for ( i = 0; i < this.PERCEPTION_CIRCLEPARTS; i ++ ) {
                if ( this.gamephase.circleparts [ i ] === -1 ) {
                    if ( i === 0 ) {
                        //first one
                        if ( this.gamephase.circleparts [ this.PERCEPTION_CIRCLEPARTS - 1 ] !== -1 ) {
                            if ( this.gamephase.circleparts [ i + 1 ] !== -1 ) {
                                this.gamephase.circleparts [ i ] = 0;
                            }
                        }                        
                    }
                    else if ( i === ( this.PERCEPTION_CIRCLEPARTS - 1 ) ) {
                        //last one
                        if ( this.gamephase.circleparts [ i - 1 ] !== -1 ) {
                            if ( this.gamephase.circleparts [ 0 ] !== -1 ) {
                                this.gamephase.circleparts [ i ] = 0;
                            }
                        }                        
                    }
                    else {
                        if ( this.gamephase.circleparts [ i - 1 ] !== -1 ) {
                            if ( this.gamephase.circleparts [ i + 1 ] !== -1 ) {
                                this.gamephase.circleparts [ i ] = 0;
                            }
                        }
                    }
                    
                }
                
                if ( this.gamephase.circleparts [ i ] !== -1 ) {
                    
                    this.gamephase.circleparts [ i ] ++;
                    a = Math.min ( maxa, this.gamephase.circleparts [ i ] / 30 );
                    if ( a !== maxa ) allshown = false;
                    else {
                        if ( this.gamephase.phase === 1 ) this._setGamePhase ( 2 );
                    }
                    //a = 1;
                    sa = inc + ( i * circlepart );
                    ea = sa + circlepart;
                    
                    if ( ea > ( 2 * Math.PI ) ) {
                        sa -= ( 2 * Math.PI );
                        ea -= ( 2 * Math.PI );
                    }
                    ctx.strokeStyle = "rgba(255,255,255," + String ( a ) + ")";
                    ctx.beginPath ();
                    ctx.arc ( cw, ch, r, sa, ea );
                    ctx.stroke ();
                }
                else allshown = false;
            }
            
            if ( allshown ) {
                this._setGamePhase ( 3 );
                
                
            }
            r += 5;
            this.lastdrawbounds = { x: Math.floor ( cw - r ), y: Math.floor ( ch - r ), w: Math.ceil ( r * 2 ) + 1, h: Math.ceil ( r * 2 ) + 1 };
            //ctx.strokeRect ( this.lastdrawbounds.x, this.lastdrawbounds.y, this.lastdrawbounds.w, this.lastdrawbounds.h );
            
        }        
        if ( this.gamephase.phase >= 0 || all === true ) {
            if ( this.gamephase.phase === 0 ) this._clearLastDrawn ();

            var cw = ( this.canvas.width / 2 );
            var ch = ( this.canvas.height / 2 );
            var maxr = 10;
            var a = Math.min ( 1, this.gamephase.frame / 10 );

            var pi = Math.PI * .7 * this.gamephase.frame / this.gamephase.maxf;
            var r = maxr * Math.sin ( pi );
            var clr = "rgba(255,255,255," + String ( a ) + ")";
            var clr0 = "rgba(255,255,255,0)";
            var ctx = getContext ( this.canvas.id );
            
            var grd = ctx.createRadialGradient ( cw, ch, r/3, cw, ch, r );
            grd.addColorStop ( 0, clr );
            grd.addColorStop ( 1, clr0 );            
            
            ctx.fillStyle = grd;
            drawQuickCirle ( cw, ch, r, this.canvas.id );
            if ( this.gamephase.phase === 0 ) {
                this.lastdrawbounds = { x: Math.floor ( cw - r ), y: Math.floor ( ch - r ), w: Math.ceil ( r * 2 ) + 1, h: Math.ceil ( r * 2 ) + 1 };
            }
        }

        
        
        
        
    };
    
    this._clearLastDrawn = function () {
        var ctx = getContext ( this.canvas.id );
        ctx.clearRect ( this.lastdrawbounds.x, this.lastdrawbounds.y, this.lastdrawbounds.w, this.lastdrawbounds.h );
        //ctx.clearRect ( 0, 0, WIDTH, HEIGHT );
    };
    
    this._clearTopLayer = function () {
        var ctx = getContext ( this.topcanvas.id );
        ctx.clearRect ( this.toplastdrawbounds.x, this.toplastdrawbounds.y, this.toplastdrawbounds.w, this.toplastdrawbounds.h );
    };    
    
    this.resizeScreen = function () {
        if ( !this.installed ) return;
        if ( !this.active ) return;
        
        //var t = $ ( "#zgamezdiv" ).offset ().top;
        //var b = $ ( "#footerbar" ).offset ().top;
        var h = HEIGHT - 150;
        //log ( "gameoflife resize: " + t + ", " + b + " = " + h );
        this.canvas.width = WIDTH;
        this.canvas.height = h;
        this.canvas.style.width = String ( WIDTH ) + "px";
        this.canvas.style.height = String ( h ) + "px";
        
        
        this.topcanvas.width = WIDTH;
        this.topcanvas.height = h;
        this.topcanvas.style.width = String ( WIDTH ) + "px";
        this.topcanvas.style.height = String ( h ) + "px";
        
        
        this.textcanvas.width = WIDTH;
        this.textcanvas.height = h;
        this.textcanvas.style.width = String ( WIDTH ) + "px";
        this.textcanvas.style.height = String ( h ) + "px";

        this.TEXTTICKER.offsetX = ( WIDTH / 2 ) + 20;
        this.TEXTTICKER.offsetY = ( h / 2 ) + 10;

        this.TEXTTICKER._resizeScreen ();
        //var ctx = getContext ( this.canvas.id );
        //ctx.fillStyle = "#ff0000";
        //ctx.fillRect ( 10, 10, ( WIDTH / 2 ), ( h / 2 ) );
        this.drawCurrentState ( true );
        
        
    };
    
    
    
    
    this.initialize ();
    
    
    
};