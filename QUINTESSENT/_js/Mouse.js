////////////////////////
/// QUINTESSENT 2017 ///
////////////////////////


MOUSEDOWN = false;

////////////////
// USER INPUT //
////////////////


function clickButtonLayer ( event ) {
    
    event = null;
    
 
}

function _checkMouseWithinLocalBounds ( bounds, localbounds ) {	
    if ( localbounds.x >= bounds.x && localbounds.x <= ( bounds.x + bounds.w ) ) {
        if ( localbounds.y >= bounds.y && localbounds.y <= ( bounds.y + bounds.h ) ) {
                return true;
        }
    }
    return false;
}



function _checkMouseWithinBounds ( bounds ) {	
    if ( GLOBAL_MOUSEPOS.x >= bounds.x && GLOBAL_MOUSEPOS.x <= ( bounds.x + bounds.w ) ) {
        if ( GLOBAL_MOUSEPOS.y >= bounds.y && GLOBAL_MOUSEPOS.y <= ( bounds.y + bounds.h ) ) {
                return true;
        }
    }
    return false;
}

function pointerEventToXY ( e ) {
    var out = { x:0, y:0 };
    if ( e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend' || e.type === 'touchcancel' ) {
        var touch = e.targetTouches [ e.targetTouches.length - 1 ];
        
        out.x = touch.pageX;
        out.y = touch.pageY;
    } 
    else {
        out.x = e.pageX;
        out.y = e.pageY;
    }
    return out;
};


function onMouseMove ( event ) {
    
    
    if ( event !== null ) {
        var x = event.x;
        var y = event.y;

        if ( x === undefined ) x = event.clientX;
        if ( y === undefined ) y = event.clientY;

        GLOBAL_MOUSEPOS.x = x / DEFSCALE;
        GLOBAL_MOUSEPOS.y = y / DEFSCALE;
    }
    
    var cursor = "default";	
    
    
    
    
    document.body.style.cursor = cursor;
}



function onMouseUp ( event ) {
    event = null;    
    MOUSEDOWN = false;
    document.body.style.cursor = "default";
}

function onMouseDown ( event ) {
    
    MOUSEDOWN = true;  
    onMouseMove ( event );
   
}