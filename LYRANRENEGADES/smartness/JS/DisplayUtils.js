


function _drawEllipse ( ctx, centerX, centerY, width, height, fillcolor, strokecolor ) {
    //var ctx = getContext ( ctxid );
    ctx.beginPath();

    ctx.moveTo(centerX, centerY - height/2); // A1

    ctx.bezierCurveTo(
      centerX + width/2, centerY - height/2, // C1
      centerX + width/2, centerY + height/2, // C2
      centerX, centerY + height/2); // A2

    ctx.bezierCurveTo(
      centerX - width/2, centerY + height/2, // C3
      centerX - width/2, centerY - height/2, // C4
      centerX, centerY - height/2); // A1

    if ( fillcolor !== undefined )   {
        ctx.fillStyle = fillcolor;
        ctx.fill ();
    }
    if ( strokecolor !== undefined ) {
        ctx.strokeStyle = strokecolor;
        ctx.stroke ();
    }
    ctx.closePath();	
}

function duplicateCanvas ( canvas ) {
    var tempcanvas = document.createElement ( "canvas" );
    tempcanvas.width = canvas.width;
    tempcanvas.height = canvas.height;
    var tctx = tempcanvas.getContext ( "2d" );
    tctx.drawImage ( canvas, 0, 0 );
    return tempcanvas;
}


function drawRotatedSquare ( ctxid, x, y, size, angle ) {
    var ctx = getContext ( ctxid );
    var centerheight = size / 2;
    
    var points = [];
    var i;
    var a = angle;
    var p;
    for ( i = 0; i < 4; i ++ ) {
        p = { x: x + ( centerheight * Math.cos ( a ) ), y: y + ( centerheight * Math.sin ( a ) ) };
        points.push ( p );
        a += ( Math.PI / 2 );
    }  
    
    ctx.moveTo ( points [ 0 ].x, points [ 0 ].y );
    ctx.lineTo ( points [ 1 ].x, points [ 1 ].y );
    ctx.lineTo ( points [ 2 ].x, points [ 2 ].y );
    ctx.lineTo ( points [ 3 ].x, points [ 3 ].y );
    ctx.lineTo ( points [ 0 ].x, points [ 0 ].y );
    
}

function drawArrow ( ctxid, x, y, size, angle ) {
    var ctx = getContext ( ctxid );
    
    var centerheight = size / 3 * 2;
    
    var points = [];
    var i;
    var a = angle;
    var p;
    for ( i = 0; i < 3; i ++ ) {
        p = { x: x + ( centerheight * Math.cos ( a ) ), y: y + ( centerheight * Math.sin ( a ) ) };
        points.push ( p );
        a += ( Math.PI * 2 / 3 );
    }
    
    ctx.moveTo ( points [ 0 ].x, points [ 0 ].y );
    ctx.lineTo ( points [ 1 ].x, points [ 1 ].y );
    ctx.lineTo ( points [ 2 ].x, points [ 2 ].y );
    ctx.lineTo ( points [ 0 ].x, points [ 0 ].y );
    
}


function _strokeEllipse ( ctxid, centerX, centerY, width, height, strokecolor ) {
    var ctx = getContext ( ctxid );
    ctx.beginPath();

    ctx.moveTo(centerX, centerY - height/2); // A1

    ctx.bezierCurveTo(
      centerX + width/2, centerY - height/2, // C1
      centerX + width/2, centerY + height/2, // C2
      centerX, centerY + height/2); // A2

    ctx.bezierCurveTo(
      centerX - width/2, centerY + height/2, // C3
      centerX - width/2, centerY - height/2, // C4
      centerX, centerY - height/2); // A1

      
    ctx.fillStyle = strokecolor;
    ctx.fill ();
    ctx.closePath();	
}



function colorizeCanvas ( ctxid, r, g, b, a ) {
    var ctx = getContext ( ctxid );
    var cnv = getCanvas ( ctxid );
    var w = cnv.width;
    var h = cnv.height;
    var imageData = ctx.getImageData ( 0, 0, w, h );
    
    var dl = imageData.data.length;
    //log ( "data length: " + dl );
    var i;
    for ( i = 0; i < dl; i ++ ) {
        if ( imageData.data [ i + 3 ] > 0 ) {
            //log ( "some color found" );
            imageData.data [ i + 0 ] = r;
            imageData.data [ i + 1 ] = g;
            imageData.data [ i + 2 ] = b;
            imageData.data [ i + 3 ] = 255;
        }
    }
    ctx.putImageData ( imageData, 0, 0 );// at coords 0,0
}

function setPixel ( imageData, x, y, r, g, b, a, loggit ) {
    if ( loggit === true ) log ( "setting pixel at " + x + ", " + y + " = " + r + ", " + g + ", " + b + ", " + a );
    var index = ( x + ( y * imageData.width ) ) * 4;
    imageData.data[index+0] = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = a;
}




function setDropShadow ( ctxid, offsetX, offsetY, blur, rgbacolor ) {
    var ctx = getContext ( ctxid );
    ctx.shadowColor = rgbacolor;
    ctx.shadowOffsetX = offsetX;
    ctx.shadowOffsetY = offsetY;
    ctx.shadowBlur = blur;       
}

var AnimObject = function ( origX, origY, origScale, origAlpha, targetX, targetY, targetScale, targetAlpha, framecount ) {
    this.currentframe = 0;
    this.framecount = framecount;
    
    this.origX = origX;
    this.origY = origY;
    this.origScale = origScale;
    this.origAlpha = origAlpha;
    
    this.xdiv = targetX - origX;
    this.ydiv = targetY - origY;
    this.scalediv = targetScale - origScale;
    this.alphadiv = targetAlpha - origAlpha;
    
    this.incrementFrame = function () {
        this.currentframe ++;
        return ( this.currentframe <= this.framecount );
    };
    
    this.getCurrentX = function () {
        return this.origX + ( ( this.xdiv ) * ( this.currentframe / this.framecount ) );
    };
    this.getCurrentY = function () {
        return this.origY + ( ( this.ydiv ) * ( this.currentframe / this.framecount ) );
    };
    this.getCurrentScale = function () {
        return this.origScale + ( ( this.scalediv ) * ( this.currentframe / this.framecount ) );
    };    
    this.getCurrentAlpha = function () {
        return this.origAlpha + ( ( this.alphadiv ) * ( this.currentframe / this.framecount ) );
    };       

};

var AnimObject2 = function ( origX, origY, origRotation, targetX, targetY, targetRotation, framecount ) {
    this.currentframe = 0;
    this.framecount = framecount;
    
    this.origX = origX;
    this.origY = origY;
    this.origRotation = origRotation;
    
    this.xdiv = targetX - origX;
    this.ydiv = targetY - origY;
    this.rotationdiv = targetRotation - origRotation;
    
    this.incrementFrame = function () {
        this.currentframe ++;
        return ( this.currentframe <= this.framecount );
    };
    
    this.getCurrentX = function () {
        return this.origX + ( ( this.xdiv ) * ( this.currentframe / this.framecount ) );
    };
    this.getCurrentY = function () {
        return this.origY + ( ( this.ydiv ) * ( this.currentframe / this.framecount ) );
    };
    this.getCurrentRotation = function () {
        return this.origRotation + ( ( this.rotationdiv ) * ( this.currentframe / this.framecount ) );
    };    

};


var AnimObject_Bounds = function ( origBounds, targetBounds, framecount ) {
    this.currentframe = 0;
    this.framecount = framecount;
    
    this.origBounds = origBounds.clone ();
    this.targetBounds = targetBounds.clone ();
    
    this.xdiv = targetBounds.x - origBounds.x;
    this.ydiv = targetBounds.y - origBounds.y;
    this.wdiv = targetBounds.w - origBounds.w;
    this.hdiv = targetBounds.h - origBounds.h;
    
    this.incrementFrame = function () {
        this.currentframe ++;
        return ( this.currentframe <= this.framecount );
    };
    
    this.getCurrentX = function () {
        return this.origBounds.x + ( ( this.xdiv ) * ( this.currentframe / this.framecount ) );
    };
    this.getCurrentY = function () {
        return this.origBounds.y + ( ( this.ydiv ) * ( this.currentframe / this.framecount ) );
    };
     this.getCurrentW = function () {
        return this.origBounds.w + ( ( this.wdiv ) * ( this.currentframe / this.framecount ) );
    };
    this.getCurrentH = function () {
        return this.origBounds.h + ( ( this.hdiv ) * ( this.currentframe / this.framecount ) );
    };

};


////////////////
/// GRAPHICS ///
////////////////

function clearContext ( ctxid ) {
    var ctx = getContext ( ctxid );
    //context.clearRect(0, 0, canvas.width, canvas.height);
    ctx.clearRect ( 0, 0, CLEARSIZE, CLEARSIZE );
}

function clearCanvas ( canvas ) {
    var ctx = canvas.getContext( '2d' );
    ctx.clearRect ( 0, 0, CLEARSIZE, CLEARSIZE );
}



function _drawLine ( ctxid, x1, y1, x2, y2, clr, clear, thickness ) {
    if ( thickness === undefined ) thickness = 1;
    if ( clear === undefined ) clear = false;
    var ctx = getContext ( ctxid );
    if ( clear ) ctx.clearRect ( 0, 0, CLEARSIZE, CLEARSIZE );
    ctx.lineWidth = thickness;
    ctx.strokeStyle = clr;
    ctx.beginPath ();
    ctx.moveTo ( x1, y1 );
    ctx.lineTo ( x2, y2 );
    ctx.closePath();
    ctx.stroke ();
}

/**
 * Draws a rounded rectangle using the current state of the canvas. 
 * If you omit the last three params, it will draw a rectangle 
 * outline with a 5 pixel border radius 
 * @param {CanvasRenderingContext2D} ctx
 * @param {Number} x The top left x coordinate
 * @param {Number} y The top left y coordinate 
 * @param {Number} width The width of the rectangle 
 * @param {Number} height The height of the rectangle
 * @param {Number} radius The corner radius. Defaults to 5;
 * @param {Boolean} fill Whether to fill the rectangle. Defaults to false.
 * @param {Boolean} stroke Whether to stroke the rectangle. Defaults to true.
 */
function roundRect ( ctx, x, y, width, height, radius, fill, stroke ) {
    if ( typeof stroke === "undefined" ) {
          stroke = true;
    }
    if ( typeof radius === "undefined" ) {
          radius = 5;
    }
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    if (stroke) {
          ctx.stroke();
    }
    if (fill) {
          ctx.fill();
    }        
}

	 
function roundRectComplex ( ctx, x, y, width, height, radiusleftop, radiusleftbottom, radiusrighttop, radiusrightbottom, fill, stroke ) {
	
    ctx.beginPath  ();
    ctx.moveTo ( x + radiusleftop, y );
    ctx.lineTo ( x + width - radiusrighttop, y );
    ctx.quadraticCurveTo ( x + width, y, x + width, y + radiusrighttop );
    ctx.lineTo ( x + width, y + height - radiusrightbottom );
    ctx.quadraticCurveTo ( x + width, y + height, x + width - radiusrightbottom, y + height );
    ctx.lineTo ( x + radiusleftbottom, y + height );
    ctx.quadraticCurveTo ( x, y + height, x, y + height - radiusleftbottom );
    ctx.lineTo ( x, y + radiusleftop );
    ctx.quadraticCurveTo ( x, y, x + radiusleftop, y );
    ctx.closePath ();

    if ( stroke ) ctx.stroke ();
    if ( fill ) ctx.fill ();
	
}

function getContext ( id ) {
    id = "#" + id;
    var ctx = document.querySelector ( id ).getContext( '2d' );
    return ctx;
}

function getCanvas ( id ) {
    id = "#" + id;
    var cnv = document.querySelector ( id );
    return cnv;
}

function redrawImage ( imagename, contextid, bounds, clear, alpha, clearbounds ) {
    
    if ( clear === undefined ) clear = true;
    if ( alpha === undefined ) alpha = 1;
    var image = getImage ( imagename );
    log ( "image found: " + image );
    var ctx = getContext ( contextid );
    log ( "redrawimage in: " + ctx );
    //ctx.restore ();
    if ( ctx.globalAlpha !== alpha ) ctx.globalAlpha = alpha;
    if ( clear === true ) {
        ctx.save ();
        ctx.scale ( 1, 1 );
        ctx.clearRect ( 0, 0, CLEARSIZE, CLEARSIZE );
        ctx.restore ();
    }
    else if ( clearbounds !== undefined ) {
        ctx.clearRect ( clearbounds.x, clearbounds.y, clearbounds.w, clearbounds.h );
    }
    
    var imagewidth = image.width;
    var imageheight = image.height;
    //if ( bounds.w !== undefined ) imagewidth = bounds.w;
    //if ( bounds.h !== undefined ) imageheight = bounds.h;
    
    ctx.drawImage ( image, bounds.x, bounds.y, imagewidth, imageheight );
    
}

function _drawRotatedImage ( ctx, imagename, x, y, width, height, angle, offsetx, offsety ) { 
    //ctx.restore ();
    // save the current co-ordinate system 
    // before we screw with it
    //ctx.clearRect ( 0, 0, CLEARSIZE, CLEARSIZE );
    ctx.save (); 

    // move to the middle of where we want to draw our image
    ctx.translate ( x, y );

    // rotate around that point, converting our 
    // angle from degrees to radians 
    ctx.rotate ( angle );
    ctx.translate ( offsetx, offsety );

    // draw it up and to the left by half the width
    // and height of the image 
    ctx.drawImage ( getImage ( imagename ), -width / 2 , - height / 2 );

    // and restore the co-ords to how they were when we began
    ctx.restore (); 
}

function getImage ( textid ) {
	var i;
	var il = IMAGE_FILES.length;
	for ( i = 0; i < il; i ++ ) {
		if ( IMAGE_FILES [ i ].textid === textid ) {
			return IMAGE_FILES [ i ].image;
		}
	}
	return null;
}

function getImageObject ( image ) {
	var i;
	var il = IMAGE_FILES.length;
	for ( i = 0; i < il; i ++ ) {
		if ( IMAGE_FILES [ i ].image === image ) {
			return IMAGE_FILES [ i ];
		}
	}
	return null;
}
function drawQuickCircle ( x, y, radius, ctxid ) {
    var ctx = getContext ( ctxid );
    
    ctx.beginPath();
    ctx.arc ( x, y, radius, 0, 2 * Math.PI, false );
    ctx.closePath ();
    ctx.fill ();
    
}


function drawCircle ( x, y, radius, ctxid, clear, fillcolor, strokecolor ) {
    var ctx = getContext ( ctxid );
    if ( clear ) ctx.clearRect ( 0, 0, CLEARSIZE, CLEARSIZE );
    
    
    ctx.beginPath();
    ctx.arc ( x, y, radius, 0, 2 * Math.PI, false );
    ctx.closePath ();
    if ( fillcolor !== undefined ) {
        ctx.fillStyle = fillcolor;
        ctx.fill ();
    }
    if ( strokecolor !== undefined ) {
        //ctx.lineWidth = 5;
        ctx.strokeStyle = strokecolor;
        ctx.stroke ();
    }
    
}

function _getRandomClr () {
    var values = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F" ];
    var i;
    var clrstring = "#";
    var index;
    var vl = values.length;
    for ( i = 0; i < 6; i ++ ) {
        index = Math.floor ( vl * Math.random () );
        clrstring += values [ index ];
    }
    return clrstring;
	

}