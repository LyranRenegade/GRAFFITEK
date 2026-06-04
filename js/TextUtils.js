



////////////
/// TEXT ///
////////////


function validateAsInt ( evt ) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  //log ( "key: " + key );
  if ( key == 8 || key == 37 || key == 39 ) return true;
  key = String.fromCharCode ( key );
  var regex = /[0-9]|\./;
  if( !regex.test ( key ) ) {
    theEvent.returnValue = false;
    if ( theEvent.preventDefault ) theEvent.preventDefault();
  }
}


function addslashes ( string ) {
    return string;
    var str = string.replace(/'/g, "\\'");
    return str;
    
    return string.replace(/\\/g, '\\\\').
        replace(/\u0008/g, '\\b').
        replace(/\t/g, '\\t').
        replace(/\n/g, '\\n').
        replace(/\f/g, '\\f').
        replace(/\r/g, '\\r').
        replace(/'/g, '\\\'').
        replace(/"/g, '\\"');
}

function stripslashes ( string ) {
    return string.replace ( "\\", "" );
    
}

function addslashes2 ( string ) {
    
    return string.replace(/\\/g, '\\\\').
        replace(/\u0008/g, '\\b').
        replace(/\t/g, '\\t').
        replace(/\n/g, '\\n').
        replace(/\f/g, '\\f').
        replace(/\r/g, '\\r').
        replace(/'/g, '\\\'').
        replace(/"/g, '\\"');
}

function mysql_real_escape_string ( str ) {
    var newstr = mysql_real_escape_string2 ( str );
    return encodeURIComponent ( newstr );
}

function mysql_real_escape_string2 ( str ) {
    
    return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function ( char ) {
        switch (char) {
            case "\0":
                return "\\0";
            case "\x08":
                return "\\b";
            case "\x09":
                return "\\t";
            case "\x1a":
                return "\\z";
            case "\n":
                return "\\n";
            case "\r":
                return "\\r";
            case "\"":
            case "'":
            case "\\":
            case "%":
                return "\\"+char; // prepends a backslash to backslash, percent,
                                  // and double/single quotes
        }
    });
}



function printString ( string, context, fontname, fontsize, color, xp, yp, textalign, backgroundcolor ) {
    
    if ( textalign === undefined ) textalign = "left";
    var ctx = getContext ( context );
    
    ctx.textAlign = textalign;
    ctx.font = "" + String ( fontsize ) + "px " + fontname;
    
    if ( backgroundcolor !== undefined ) {
        ctx.fillStyle = backgroundcolor;
        var d = ctx.measureText ( string );
        var w = d.width + 20;
        var h = 38;//d.height + 10;
        //log ( "bc: " + backgroundcolor );
        //logObject ( d );
        ctx.fillRect ( xp - ( w / 2 ), yp - ( h / 2 ) - 7, w, h );
    }
    
    

    ctx.fillStyle = color;
    
    ctx.fillText ( string, xp, yp );    
}


function wrapText (context, text, x, y, maxWidth, lineHeight ) {
	var cars = text.split("\n");
	var ii;
	var n;
	var wl;
	var cl = cars.length;
	
	var line;
	var words;
	var testLine;
	var metrics;
	var testWidth;
	
	for ( ii = 0; ii < cl; ii++ ) {

		line = "";
		words = cars[ii].split ( " " );
		wl = words.length;
		
		for ( n = 0; n < wl; n++ ) {
			testLine = line + words[n] + " ";
			metrics = context.measureText(testLine);
			testWidth = metrics.width;

			if ( testWidth > maxWidth ) {
				context.fillText ( line, x, y );
				line = words [ n ] + " ";
				y += lineHeight;
			}
			else {
				line = testLine;
			}
		}

		context.fillText ( line, x, y );
		y += lineHeight;
	}
	
	return y;
	
 }
 