///////////////////////////
/// GRAFFITEK2014 MOUSE ///
///////////////////////////


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
    
    /*
    
    
    var i, j, dl, container, cb, boundsrect;
    var fl = FRAMES.length;
    var frame;
    var xspeed, yspeed;
    var xdif, ydif;
    var maxspeed = 10;
    var centerx, centery;
    
    for ( i = 0; i < fl; i ++ ) {
        frame = FRAMES [ i ];
        //dragimages
        dl = frame.dragimages.length;
        for ( j = 0; j < dl; j ++ ) {
            container = frame.dragimages [ j ].container;
            boundsrect = container.getBoundingClientRect();
            cb = new BOUNDS ( boundsrect.left, boundsrect.top, boundsrect.width, boundsrect.height );
            if ( _checkMouseWithinBounds ( cb ) ) {
                
                if ( MOUSEDOWN ) {
                    cursor = "e-resize";
                    DRAGOBJECT = { type: "dragimage", targetdata: frame.dragimages [ j ] };
                    centerx = boundsrect.left + container.offsetWidth / 2;
                    centery = boundsrect.top + container.offsetHeight / 2;
                    xdif = GLOBAL_MOUSEPOS.x - centerx;
                    ydif = GLOBAL_MOUSEPOS.y - centery;
                    xspeed = xdif / ( container.offsetWidth / 2 ) * maxspeed;
                    yspeed = ydif / ( container.offsetHeight / 2 ) * maxspeed;
                    frame.dragimages [ j ].speed = { x: -xspeed, y: -yspeed };
                    //frame.dragimages [ j ].centeroffset.x -= xspeed;
                    //frame.dragimages [ j ].centeroffset.y -= yspeed;
                    //frame._redrawDragImage ( frame.dragimages [ j ] );
                    //break;
                }
                else {
                    cursor = "pointer";
                }
            }
            else {
                frame.dragimages [ j ].speed = { x: 0, y: 0 };
            }
            if (!MOUSEDOWN ) {
                frame.dragimages [ j ].speed = { x: 0, y: 0 };
            }
        }
    }
    
    */
    
    
    
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