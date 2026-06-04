function log ( s ) {
	if ( window.console ) window.console.log ( s );
}

function logObject ( o ) {
    var e;
    for ( e in o ) {
        log ( e + " --> " + o [ e ] );
        //if ( typeof o [ e ] === "object" ) logObject ( o [ e ] );
    }
}


function getFileExtension ( filename ) {
    var dI = filename.lastIndexOf ( "." );
    var ext = filename.substring ( dI + 1 );
    return ext;
}

/*
Array.prototype.sortOn = function () { 
  var dup = this.slice ();
  if ( !arguments.length ) return dup.sort ();
  var args = Array.prototype.slice.call ( arguments );
  return dup.sort ( function ( a, b ) {
        var props = args.slice ();
        var prop = props.shift ();
        while ( a [ prop ] === b [ prop ] && props.length ) prop = props.shift ();
        return a [ prop ] === b [ prop ] ? 0 : a [ prop ] > b [ prop ] ? 1 : -1;
  });
};*/


function arrayCompare ( a1, a2 ) {
    var a1l = a1.length;
    var a2l = a2.length;
    if ( a1l !== a2l ) return false;
    var i;
    for ( i = 0; i < a1l; i ++ ) {
        if ( a1 [ i ] != a2 [ i ] ) return false;
    }
    return true;
};

CanvasRenderingContext2D.prototype.clearBounds = function ( bounds ) {
    this.clearRect ( bounds.x - 1, bounds.y - 1, bounds.w + 2, bounds.h + 2 );    
};

function parseSQLDate ( date ) {
    //yyyy-mm-dd to dd / mm / yyyy
    return date.substr ( 8, 2 ) + "/" + date.substr ( 5, 2 ) + "/" + date.substr ( 0, 4 );
    
}

function arrayRemoveDuplicates ( a ) {
    var al = a.length;
    if ( al <= 1 ) return a;
    var i;
    var j;
    var r = [];
    var d;
    for ( i = 0; i < ( al - 1 ); i ++ ) {
        d = false;
        for ( j = ( i + 1 ); j < al; j ++ ) {
            if ( a [ i ] === a [ j ] ) {
                d = true;
                break;
            }
        }
        if ( d === false ) r.push ( a [ i ] );
    }
    r.push ( a [ al - 1 ] );
    return r;
    
}

function arrayRemoveDuplicates2 ( a ) {
    var al = a.length;
    if ( al <= 1 ) return a;
    var i;
    var j;
    var r = [ a [ 0 ] ];
    var rl = 1;
    var d;
    for ( i = 1; i < al; i ++ ) {
        d = false;
        for ( j = 0; j < rl; j ++ ) {
            if ( a [ i ] === r [ j ] ) {
                d = true;
                break;
            }
            
        }
        if ( d === false ) {
            r.push ( a [ i ] );
            rl ++;
        }
    }
    
    return r;
    
}


function removeFromArray ( a, item ) {
    var al = a.length;
    var i;
    var n = [];
    for ( i = 0; i < al; i ++ ) {
        if ( a [ i ] !== item ) n.push ( a [ i ] );
    }
    return n;
}

function getDatePlusDays ( plusdays ) {
    if ( plusdays === undefined ) plusdays = 0;
    var d = new Date ();
    d.setDate ( d.getDate () + plusdays );
    
    var m = d.getMonth ();
    var months = [ "januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december" ];
    //return "31 september";
    return { day: String ( d.getDate () ), month: months [ m ] };
    //return String ( d.getDate () ) + " " + months [ m ];
}


function copyObject ( o ) {
    var a = {};
    var e;
    for ( e in o ) {
        //log ( "copying " + e + ": " + o [ e ] );
        a [ e ] = o [ e ];
        
    }
    return a;
}




function objectEqual ( o1, o2 ) {
    if ( o1 === null ) return false;
    if ( o2 === null ) return false;
    
    var e;
    for ( e in o1 ) {
        if ( o2 [ e ] === null ) return false;
        if ( o1 [ e ] !== o2 [ e ] ) return false;
    }
    for ( e in o2 ) {
        if ( o1 [ e ] === null ) return false;
        if ( o1 [ e ] !== o2 [ e ] ) return false;
    }
    return true;
}

function addCanvas ( ctxid, zindex, w, h, s ) {
    if ( w === undefined ) w = WIDTH;
    if ( h === undefined ) h = HEIGHT;
    if ( s === undefined ) s = DEFSCALE;
    
    var canvas = document.createElement ( 'canvas' );
    canvas.id = ctxid;
    canvas.width = w;
    canvas.height = h;
    canvas.style.zIndex = zindex;
    canvas.style.position = "absolute";
    document.body.appendChild ( canvas );
    //log ( "ctxid: " + ctxid );
    
    //var cnv = getCanvas ( ctxid );
    //log ( "cnv: " + cnv + " canvas " + canvas );
    var ctx = canvas.getContext( '2d' );
    //var ctx = getContext ( ctxid );
    ctx.scale ( s, s );
    
    
    return canvas;
}

function removeCanvas ( canvas ) {
    document.body.removeChild ( canvas );
    //list = document.getElementById ( id );
    //list.parentNode.removeChild ( list );
}


function roundOn ( value, decimals ) {
    var p = Math.pow ( 10, decimals );
    var newval = Math.round ( value * p );
    newval /= p;
    return newval;
    
}

function arrayIndexOf ( array, element ) {
    var al = array.length;
    var i;
    for ( i = 0; i < al; i ++ ) {
        if ( array [ i ] === element ) return i;
    }
    return -1;
}

function arrayIndexOfFieldValue ( array, fieldname, value ) {
    var al = array.length;
    var i;
    var o;//object
    for ( i = 0; i < al; i ++ ) {
        o = array [ i ];
       if ( o [ fieldname ] === value ) return i;
    }
    return -1;
}