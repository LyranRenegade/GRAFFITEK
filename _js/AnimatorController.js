



AnimatorController = function () {
    
    this.registeredObjects = [];
    
    
    this.frameTick = function () {
        var i;
        var rl = this.registeredObjects.length;
        var o;
        for ( i = 0; i < rl; i ++ ) {
            if ( this.registeredObjects [ i ] ) {
                o = this.registeredObjects [ i ];
                if ( o ) o.frameTick ();
            }
        }
        
    };
    
    this.registerObject = function ( object ) {
        this.registeredObjects.push ( object );
    };
    
    this.unRegisterObject = function ( object ) {
        //log ( "unregisterObject" );
        var i;
        var rl = this.registeredObjects.length;
        var o;
        for ( i = 0; i < rl; i ++ ) {
            o = this.registeredObjects [ i ];
            if ( o === object ) {
                this.registeredObjects.splice ( i, 1 );
                break;
            }
        }
    };
    
    
    
    
    
    
    
    
    
    
    
    
    
};


