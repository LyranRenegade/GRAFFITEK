
var Star = function ( id, initpoint, system, centerstar ) {
    
    
    this.system = ( system === undefined )? "none" : system;
    this.centerstar = ( centerstar )? centerstar: false;
    this.id = id;
    
    this.systemstars = [];
    
    this.x = ( initpoint )? initpoint.x : UNIVERSE.dimensionX - Math.round ( 2 * UNIVERSE.dimensionX * Math.random () );
    this.y = ( initpoint )? initpoint.y : UNIVERSE.dimensionY - Math.round ( 2 * UNIVERSE.dimensionY * Math.random () );
    this.z = ( initpoint )? initpoint.z : Math.round ( 2 * UNIVERSE.dimensionZ * Math.random () );
    
    this.centerdistance = 0;
    
    this.setCenterDistance = function () {
        this.centerdistance = Math.pow ( ( Math.pow ( this.x, 2 ) + Math.pow ( this.y, 2 ) + Math.pow ( this.z, 2 ) ), .5 );
    };
    
    //log ( "Star at: " + this.x + ", " + this.y + ", " + this.z );
    
    
    this.systemMove = function ( property, increment ) {
        var i;
        var sl = this.systemstars.length;
        var star;
        for ( i = 0; i < sl; i ++ ) {
            star = this.systemstars [ i ];
            star [ property ] += increment;
        }
    };
    
    
    this._normalize = function () {
        //while ( this.x < -UNIVERSE.dimensionX ) this.x +=
    };
    
    this.connections = 1;
    while ( Math.random () < .3 ) this.connections ++;
            
    this.size = 50 + Math.round ( 100 * Math.random () );
    //this.size *= 50;
    this.clr = GLOBALDATA.CLR_WHITE;//"#ffffff";
    
    if ( Math.random () < .01 ) {
        this.clr = GLOBALDATA.HL_CLR1;
    }
    else if ( Math.random () < .01 ) {
        this.clr = GLOBALDATA.HL_CLR2;
    }
    else if ( Math.random () < .01 ) {
        this.clr = GLOBALDATA.HL_CLR3;
    }    
    else if ( Math.random () < .01 ) {
        this.clr = GLOBALDATA.DL_CLR1;
    }
    else if ( Math.random () < .01 ) {
        this.clr = GLOBALDATA.DL_CLR2;
    }    
    
    this.connections = [];
    
    this.addConnection = function ( star, recurse ) {
        if ( !this._connectionPresent ( star ) ) {
            this.connections.push ( star );
        }
        if ( recurse ) star.addConnection ( this, false );
    };
    
    this._connectionPresent = function ( star ) {
        var i;
        var cl = this.connections.length;
        for ( i = 0; i < cl; i ++ ) {
            if ( this.connections [ i ].id === star.id ) return true;
        }
        return false;
    };
    
    this.ddata = {};
    
    //this.coordinates = { x: this.x, y: this.y, z: this.z };
    
    this.craters = [];
    this._addCraters = function ( amount ) {
        this.craters = [];
        var i;
        var offset = 2 / amount;
        var inc = Math.PI * ( 3 - Math.pow ( 5, .5 ) );
        var x, y, z, r;
        var phi;
        for ( i = 0; i < amount; i ++ ) {
            y = ( ( i * offset ) - 1 ) + ( offset / 2 );
            r = Math.pow ( ( 1 - Math.pow ( y, 2 ) ), .5 );
            phi = ( i % amount ) * inc;
            x = Math.cos ( phi ) * r;
            z = Math.sin ( phi ) * r;
            
            
        }
        
        
    };
    
    
    this._addCraters ( 100 );
    this.setCenterDistance ();
};


