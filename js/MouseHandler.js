


var MouseHandler = function () {
    
    
    this.CLICK = "click";
    
    this.MOUSEOVER = "mouseover";
    this.MOUSEOUT = "mouseout";    
    
    this.MOUSEDOWN = "mousedown";  
    this.MOUSEUP = "mouseup";  
    
    this.MOUSEENTER = "mouseenter";
    this.MOUSELEAVE = "mouseleave";
    
    
    this.MOUSEMOVE = "mousemove";
    
    this.objects = [];
    
    
    
    this.registerListener = function ( object ) {
        //log ( "registerListener: " + object.label + " xywh: " + object.rect.x + ", " + object.rect.y + ", " + object.rect.w + ", " + object.rect.h );
        //{ label: label, rect: { x: x, y: y, w: w, h: h } };
        var i;
        var ol = this.objects.length;
        for ( i = 0; i < ol; i ++ ) {
            if ( this.objects [ i ].label === object.label ) {
                //overwrite it
                //log ( "overwrite registerListener: " + object.label );
                this.objects [ i ] = object;
                //log ( "mouselistener overwritten: " + object.label );
                //logObject ( object.rect );
                return false;
            }
        }
        //log ( "mouselistener added: " + object.label );
        //logObject ( object.rect );
        this.objects.push ( object );
        return true;
    };
    
    this.unregisterListener = function ( object ) {
        var i;
        var ol = this.objects.length;
        for ( i = 0; i < ol; i ++ ) {
            if ( this.objects [ i ].label === object.label ) {
                //log ( "mouselistener removed: " + object.label );
                this.objects.splice ( i, 1 );
                return true;
            }
        }
        return false;
    };
    
    
    this.initialize = function () {
        this.objects = [];

        if ( document.ontouchstart !== undefined ) {
            this.MOUSEMOVE = "touchmove";
            this.CLICK = "touchend";
            this.MOUSEDOWN = "touchstart";  
            this.MOUSEUP = "touchend";             
        }
        
        $ ( document ).on ( this.MOUSEMOVE, $.proxy ( this, "_mouseMove" ));
        $ ( document ).on ( this.MOUSEDOWN, $.proxy ( this, "_mouseDown" ));
        //$ ( document ).on ( this.MOUSEUP, $.proxy ( this, "_mouseUp" ));
        $ ( document ).on ( this.CLICK, $.proxy ( this, "_click" ));
        
        
        
    };
    
    this.pointerEventToXY = function ( e ) {
        var out = { x:0, y:0 };
        if ( e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend' || e.type === 'touchcancel' ) {
            var touch;
            if ( e.type === "touchend" ) {
                touch = e.changedTouches [ e.changedTouches.length - 1 ];
            }
            else {
                 touch = e.targetTouches [ e.targetTouches.length - 1 ];
            }
            out.x = touch.pageX;
            out.y = touch.pageY;
            //log ( "event: " + e + " targetTouches: " + e.targetTouches.length );
        } 
        else {
            out.x = e.pageX;
            out.y = e.pageY;
        }
        return out;
    };    
    
    //////////////
    // HANDLERS //
    //////////////
    
    this._mouseWithinBounds = function ( bounds, mouseloc ) {
        if ( bounds.x <= mouseloc.x ) {
            if ( bounds.x + bounds.w >= mouseloc.x ) {
                if ( bounds.y <= mouseloc.y ) {
                    if ( bounds.y + bounds.h >= mouseloc.y ) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    
    this._mouseMove = function ( e ) {
        
        var pos = this.pointerEventToXY ( e );
        var cursor = "default";
        
        var i;
        var ol = this.objects.length;
        //log ( "listeners: " + ol );
        for ( i = 0; i < ol; i ++ ) {
            
            if ( this._mouseWithinBounds ( this.objects [ i ].rect, pos ) ) {
                cursor = "pointer";
              
                break;
            }
        }
        
        $ ( document.body ).css ( "cursor", cursor );
    };
    
    
    this._click = function ( e ) {
        var pos = this.pointerEventToXY ( e );

        var i;
        var ol = this.objects.length;
        for ( i = 0; i < ol; i ++ ) {
            if ( this._mouseWithinBounds ( this.objects [ i ].rect, pos ) ) {
                //log ( "click: " + this.objects [ i ].label );
                $ ( document ).trigger ( "click_" + this.objects [ i ].label );
                break;
            }
        }        
    };
    
    this._mouseDown = function ( e ) {
        var pos = this.pointerEventToXY ( e );

        var i;
        var ol = this.objects.length;
        for ( i = 0; i < ol; i ++ ) {
            if ( this._mouseWithinBounds ( this.objects [ i ].rect, pos ) ) {
                log ( "DOWn: " + this.objects [ i ].label );
                $ ( document ).trigger ( "down_" + this.objects [ i ].label );
                break;
            }
        }        
    };    
    
    
    
    
    
};