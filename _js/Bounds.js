


var BOUNDS = function ( x, y, w, h ) {
    this.x = ( x === undefined )? 0 : Math.round ( x );
    this.y = ( y === undefined )? 0 : Math.round ( y );
    this.w = ( w === undefined )? 0 : Math.round ( w );
    this.h = ( h === undefined )? 0 : Math.round ( h );
    
    this.setX = function ( xp ) { this.x = Math.round ( xp ); };
    this.setY = function ( yp ) { this.y = Math.round ( yp ); };
    this.setW = function ( wp ) { this.w = Math.round ( wp ); };
    this.setH = function ( hp ) { this.h = Math.round ( hp ); };
    
    this.clone = function () {
        return new BOUNDS ( this.x, this.y, this.w, this.h );
    };
    
    this.setPos = function ( xp, yp ) {
        this.setX ( xp );
        this.setY ( yp );
    };
    
    this.equals = function ( b ) {
        if ( this.x !== b.x ) return false;
        if ( this.y !== b.y ) return false;
        if ( this.w !== b.w ) return false;
        if ( this.h !== b.h ) return false;
        return true;
    };
    
    this.toString = function () {
        return ( "X: " + this.x + ", Y: " + this.y + ", W: " + this.w + ", H: " + this.h );
    };
    
    /*
    this.multiply = function ( field, value ) {
      this [ field ] = Math.round ( this [ field ] * value );
    };*/
    
};


var ANGLEDBOUNDS = function ( x1, y1, x2, y2, width ) {
    this.x1 = Math.round ( x1 );
    this.y1 = Math.round ( y1 );
    this.x2 = Math.round ( x2 );
    this.y2 = Math.round ( y2 );
    this.w = width;
    
    this.xdif = x2 - x1;
    this.ydif = y2 - y1;
    this.rc = this.ydif / this.xdif;//y increases with this value per x
    
    
    
};