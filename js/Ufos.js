
var UFO2 = function ( id ) {
    this.id = id;
    this.rgb = [ 255, 255, 208 ];
    this.alpha = 0.1;
    this.type = "2";
    
    this.relocateNear = function () {
        this.alpha = 0.1;
        var z = ( 500 + ( 10000 * Math.random () ) );;
        this.points.cp.x = - ( z * 1.3 ) + ( z * 2 * Math.random () );
        this.points.cp.y = - ( z * 1.3 ) + ( z * 2 * Math.random () );
        this.points.cp.z = CAMERA.z + z;
        
        this.speed = 0;
        this.acceleration = 0;
        if ( this.mode === this.MODE_MANEUVER ) this.changeMode ();
        //log ( "ufo relocated" );
    };
    
    
    this.rotX = Math.PI * 2 * Math.random ();
    this.rotY = Math.PI * 2 * Math.random ();
    this.rotZ = Math.PI * 2 * Math.random ();
    
    
    this.speed = 0;
    this.maxspeed = 15;
    this.acceleration = 0;
    
    
    this.MODE_EXPLORATION = "e";
    this.MODE_MANEUVER = "m";
    this.modecount = 0;
    
    this.rotSpeedX = 0;
    this.rotSpeedY = 0;
    this.rotSpeedZ = 0;
    
    this.rotations = {};
    
    var x = -100;//-100;//UNIVERSE.dimensionX - Math.round ( 2 * UNIVERSE.dimensionX * Math.random () );
    var y = -100;//-100;//UNIVERSE.dimensionY - Math.round ( 2 * UNIVERSE.dimensionY * Math.random () );
    var z = 1000;///*UNIVERSE.dimensionZ +*/ Math.round ( 1 * UNIVERSE.dimensionZ * Math.random () );        
    this.points = { cp: new Point ( x, y, z ), 
        a: new Point (), b: new Point (), c: new Point (), d: new Point (), 
        e: new Point () };
    this.relocateNear ();
    
    this.corelength = 400;//height
    
    
    this.newSpeed = function () {
        var divisor = ( this.mode === this.MODE_EXPLORATION )? 30 : 120;
        return ( 1 - ( 2 * Math.random () ) ) / divisor;
    };
    
    this.newAcceleration = function () {
        var acc = 5 - ( 10 * Math.random () );
        if ( this.mode === this.MODE_MANEUVER ) acc *= 15;
        return acc;
    };
    
    this.mode = this.MODE_EXPLORATION;
    
    this.changeMode = function () {
        if ( this.mode === this.MODE_EXPLORATION ) this.mode = this.MODE_MANEUVER;
        else this.mode = this.MODE_EXPLORATION;
        
        this.maxspeed = ( this.mode === this.MODE_EXPLORATION )? 15 : 10000;
        this.modecount = ( this.mode === this.MODE_EXPLORATION )? -150 : 0;
        
        //this.acceleration = this.newAcceleration ();
        //log ( "ufo " + this.id + " new mode: " + this.mode );
    };
    
    this.z = this.points.cp.z;
    
    
    
    
    this.update = function () {

        if ( this.alpha < 1 ) {
            this.alpha = Math.min ( 1, this.alpha * 1.1 );
        }
        else {
            this.modecount ++;
            if ( Math.random () < 0.005 ) this.rotSpeedX = this.newSpeed ();
            if ( Math.random () < 0.005 ) this.rotSpeedY = this.newSpeed ();
            if ( Math.random () < 0.005 ) this.rotSpeedZ = this.newSpeed ();

            if ( Math.random () < 0.002 ) this.acceleration = this.newAcceleration ();
            if ( ( this.modecount * Math.random () * Math.random () ) > 50 ) this.changeMode ();
                    
        }
        
        this.rotX += this.rotSpeedX;
        this.rotY += this.rotSpeedY;
        this.rotZ += this.rotSpeedZ;
        
        this.speed += this.acceleration;
        this.speed = Math.min ( this.maxspeed, Math.max ( - this.maxspeed, this.speed ) );
        
        var camspeed_multiplier = ( this.mode === this.MODE_EXPLORATION )? 1.5 : .1;
        
        
        this.rotX = 0;
        
        this.rotZ += ( -CAMERA.rotZ - this.rotZ ) / 10;
        
        this.points.cp.z += CAMERA.DEFSPEED * camspeed_multiplier;
        
        this.rotations = {
            cx: Math.cos ( this.rotX ),
            sx: Math.sin ( this.rotX ),
            cy: Math.cos ( this.rotY ),
            sy: Math.sin ( this.rotY ),
            cz: Math.cos ( this.rotZ ),
            sz: Math.sin ( this.rotZ )
        };
        
        this.points.cp.x += this.speed * this.rotations.cz * this.rotations.sy;
        this.points.cp.y += this.speed * this.rotations.sy;
        this.points.cp.z += this.speed * this.rotations.cz * this.rotations.cy;
        this.z = this.points.cp.z;
        
        
        var hcl = this.corelength / 2;
        var a = Math.pow ( 2 * Math.pow ( this.corelength, 2 ), .5 );
        var ha = a / 2;
        
        //log ( "corelength: " + this.corelength + " a: " + a );
        
        //var ext1 = this.corelength / 4 * Math.pow ( 2, .5 );
        

        
        this.points.a = Rotate3DPoint ( new Point ( -ha,  hcl, -ha ), this.rotations );
        this.points.b = Rotate3DPoint ( new Point (  ha,  hcl, -ha ), this.rotations );
        this.points.c = Rotate3DPoint ( new Point (  ha,  hcl,  ha ), this.rotations );
        this.points.d = Rotate3DPoint ( new Point ( -ha,  hcl,  ha ), this.rotations );
        this.points.e = Rotate3DPoint ( new Point (   0, -hcl,  0  ), this.rotations );
        
        this.points.a.transpose ( this.points.cp );
        this.points.b.transpose ( this.points.cp );
        this.points.c.transpose ( this.points.cp );
        this.points.d.transpose ( this.points.cp );
        this.points.e.transpose ( this.points.cp );
        
    };
    

    
    this.alterSpeeds = function () {
        this.rotSpeedX = this.newSpeed ();
        this.rotSpeedY = this.newSpeed ();
        this.rotSpeedZ = this.newSpeed ();
        this.acceleration = this.newAcceleration ();
    };
    
    
    this.setTargetLocation = function ( point ) {
        this.targetLocation = point;
    };
    
    
    this.getColor = function ( m, a ) {
        a = a * this.alpha;
        var rgba = "rgba(" + String ( Math.round ( this.rgb [ 0 ] * m ) ) + "," + 
                  String ( Math.round ( this.rgb [ 1 ] * m ) ) + "," + 
                  String ( Math.round ( this.rgb [ 2 ] * m ) ) + "," +
                  String ( a ) + ")";
          
        return rgba;  
    };
    
    
    var colorvalr = 200 + Math.floor ( 56 * Math.random () );
    var colorvalg = 200 + Math.floor ( 56 * Math.random () );
    var colorvalb = 100 + Math.floor ( 156 * Math.random () );
    
    /*
    var avg = ( colorvalr + colorvalg + colorvalb ) / 3;
    colorvalr = Math.floor ( ( colorvalr + ( 8 * avg ) ) / 7 );
    colorvalg = Math.floor ( ( colorvalg + ( 8 * avg ) ) / 7 );
    colorvalb = Math.floor ( ( colorvalb + ( 8 * avg ) ) / 7 );
    */
    this.rgb = [ colorvalr, colorvalg, colorvalb ];
    
    
    this.alterSpeeds ();
};























var UFO = function ( id ) {
    this.id = id;
    this.rgb = [ 245,206,190 ];
    this.alpha = 0.1;
    this.type = "1";
    
    this.relocateNear = function () {
        this.alpha = 0.1;
        var z = ( 500 + ( 10000 * Math.random () ) );;
        this.points.cp.x = - ( z * 1.3 ) + ( z * 2 * Math.random () );
        this.points.cp.y = - ( z * 1.3 ) + ( z * 2 * Math.random () );
        this.points.cp.z = CAMERA.z + z;
        
        this.speed = 0;
        this.acceleration = 0;
        if ( this.mode === this.MODE_MANEUVER ) this.changeMode ();
        //log ( "ufo relocated" );
    };
    
    
    this.rotX = Math.PI * 2 * Math.random ();
    this.rotY = Math.PI * 2 * Math.random ();
    this.rotZ = Math.PI * 2 * Math.random ();
    
    
    this.speed = 0;
    this.maxspeed = 50;
    this.acceleration = 0;
    
    
    this.MODE_EXPLORATION = "e";
    this.MODE_MANEUVER = "m";
    this.modecount = 0;
    
    this.rotSpeedX = 0;
    this.rotSpeedY = 0;
    this.rotSpeedZ = 0;
    
    this.rotations = {};
    
    var x = -100;//-100;//UNIVERSE.dimensionX - Math.round ( 2 * UNIVERSE.dimensionX * Math.random () );
    var y = -100;//-100;//UNIVERSE.dimensionY - Math.round ( 2 * UNIVERSE.dimensionY * Math.random () );
    var z = 1000;///*UNIVERSE.dimensionZ +*/ Math.round ( 1 * UNIVERSE.dimensionZ * Math.random () );        
    this.points = { cp: new Point ( x, y, z ), 
        a: new Point (), b: new Point (), c: new Point (), d: new Point (), 
        e: new Point (), f: new Point (), g: new Point (), h: new Point () };
    this.relocateNear ();
    
    this.corelength = 100;
    
    
    this.newSpeed = function () {
        var divisor = ( this.mode === this.MODE_EXPLORATION )? 10 : 60;
        return ( 1 - ( 2 * Math.random () ) ) / divisor;
    };
    
    this.newAcceleration = function () {
        var acc = 20 - ( 40 * Math.random () );
        if ( this.mode === this.MODE_MANEUVER ) acc *= 10;
        return acc;
    };
    
    this.mode = this.MODE_EXPLORATION;
    
    this.changeMode = function () {
        if ( this.mode === this.MODE_EXPLORATION ) this.mode = this.MODE_MANEUVER;
        else this.mode = this.MODE_EXPLORATION;
        
        this.maxspeed = ( this.mode === this.MODE_EXPLORATION )? 50 : 5000;
        this.modecount = ( this.mode === this.MODE_EXPLORATION )? -50 : 0;
        
        //this.acceleration = this.newAcceleration ();
        //log ( "ufo " + this.id + " new mode: " + this.mode );
    };
    
    this.z = this.points.cp.z;
    
    
    this.minextendspeed = 1.05;
    this.maxextendspeed = 1.25;
    
    this.maxextend = 1.5;
    this.minextend = 1;
    
    
    this.extenddata = [];
    var i;
    for ( i = 0; i < 6; i ++ ) {
        this.extenddata.push ( { extending: false, dir: 1, value: 1, speed: this.minextendspeed } );
    }
    
    
    this.update = function () {

        if ( this.alpha < 1 ) {
            this.alpha = Math.min ( 1, this.alpha * 1.1 );
        }
        else {
        this.modecount ++;
            if ( Math.random () < 0.02 ) this.rotSpeedX = this.newSpeed ();
            if ( Math.random () < 0.02 ) this.rotSpeedY = this.newSpeed ();
            if ( Math.random () < 0.02 ) this.rotSpeedZ = this.newSpeed ();

            if ( Math.random () < 0.015 ) this.acceleration = this.newAcceleration ();
            if ( ( this.modecount * Math.random () * Math.random () ) > 50 ) this.changeMode ();
                    
        }
        
        this.rotX += this.rotSpeedX;
        this.rotY += this.rotSpeedY;
        this.rotZ += this.rotSpeedZ;
        
        this.speed += this.acceleration;
        this.speed = Math.min ( this.maxspeed, Math.max ( - this.maxspeed, this.speed ) );
        
        var camspeed_multiplier = ( this.mode === this.MODE_EXPLORATION )? 1.15 : .1;
        
        

        var i;
        var ed;
        var es;
        for ( i = 0; i < 6; i ++ ) {
            //this.extenddata.push ( { extending: false, dir: 1, value: 1 } );
            ed = this.extenddata [ i ];
            if ( ed.extending ) {
                es = ed.speed;
                if ( this.mode === this.MODE_MANEUVER ) {
                    es = this.maxextendspeed;
                    ed.dir = -1;
                }
                if ( ed.dir === 1 ) {
                    //extend
                    ed.value *= es;
                    if ( ed.value >= this.maxextend ) {
                        ed.value = this.maxextend;
                        ed.dir = -1;
                    }
                }
                else {
                    //retract
                    ed.value /= es;
                    if ( ed.value <= this.minextend ) {
                        ed.value = this.minextend;
                        ed.dir = 1;
                        ed.extending = false;
                    }
                }

            }
            else if ( this.mode === this.MODE_EXPLORATION ) {
                //chance of 1 in 100
                if ( Math.random () < 0.01 ) {
                    ed.extending = true;
                    ed.speed = this.minextendspeed + ( ( this.maxextendspeed - this.minextendspeed ) * Math.random () );
                }
            }
        }
            
            
 
        
        
        
        this.points.cp.z += CAMERA.DEFSPEED * camspeed_multiplier;
        //this.rotX = 0;
        
        this.rotations = {
            cx: Math.cos ( this.rotX ),
            sx: Math.sin ( this.rotX ),
            cy: Math.cos ( this.rotY ),
            sy: Math.sin ( this.rotY ),
            cz: Math.cos ( this.rotZ ),
            sz: Math.sin ( this.rotZ )
        };
        
        this.points.cp.x += this.speed * this.rotations.cz * this.rotations.sy;
        this.points.cp.y += this.speed * this.rotations.sy;
        this.points.cp.z += this.speed * this.rotations.cz * this.rotations.cy;
        this.z = this.points.cp.z;
        
        var ext0 = this.corelength / 2;
        
        var exts = [];
        for ( i = 0; i < 6; i ++ ) {
            exts.push ( ext0 * this.extenddata [ i ].value );
        }
        
        
        //var ext1 = this.corelength / 4 * Math.pow ( 2, .5 );
        
        this.points.a = Rotate3DPoint ( new Point ( -ext0,  ext0,  ext0 ), this.rotations );
        this.points.b = Rotate3DPoint ( new Point (  exts [ 0 ],  exts [ 0 ],  exts [ 0 ] ), this.rotations );
        this.points.c = Rotate3DPoint ( new Point (  exts [ 1 ], -exts [ 1 ],  exts [ 1 ] ), this.rotations );
        this.points.d = Rotate3DPoint ( new Point ( -exts [ 2 ], -exts [ 2 ],  exts [ 2 ] ), this.rotations );
        this.points.e = Rotate3DPoint ( new Point ( -exts [ 3 ],  exts [ 3 ], -exts [ 3 ] ), this.rotations );
        this.points.f = Rotate3DPoint ( new Point (  exts [ 4 ],  exts [ 4 ], -exts [ 4 ] ), this.rotations );
        this.points.g = Rotate3DPoint ( new Point (  ext0, -ext0, -ext0 ), this.rotations );
        this.points.h = Rotate3DPoint ( new Point ( -exts [ 5 ], -exts [ 5 ], -exts [ 5 ] ), this.rotations );
        
        this.points.a.transpose ( this.points.cp );
        this.points.b.transpose ( this.points.cp );
        this.points.c.transpose ( this.points.cp );
        this.points.d.transpose ( this.points.cp );
        this.points.e.transpose ( this.points.cp );
        this.points.f.transpose ( this.points.cp );
        this.points.g.transpose ( this.points.cp );
        this.points.h.transpose ( this.points.cp );
        
    };
    
    this.setCenterDistance = function () {
        
    };
    
    this.alterSpeeds = function () {
        this.rotSpeedX = this.newSpeed ();
        this.rotSpeedY = this.newSpeed ();
        this.rotSpeedZ = this.newSpeed ();
        this.acceleration = this.newAcceleration ();
    };
    
    
    this.setTargetLocation = function ( point ) {
        this.targetLocation = point;
    };
    
    
    this.getColor = function ( m, a ) {
        a = a * this.alpha;
        var rgba = "rgba(" + String ( Math.round ( this.rgb [ 0 ] * m ) ) + "," + 
                  String ( Math.round ( this.rgb [ 1 ] * m ) ) + "," + 
                  String ( Math.round ( this.rgb [ 2 ] * m ) ) + "," +
                  String ( a ) + ")";
          
        return rgba;  
    };
    
    
    var colorvalr = Math.floor ( 256 * Math.random () );
    var colorvalg = Math.floor ( 256 * Math.random () );
    var colorvalb = Math.floor ( 256 * Math.random () );
    
    var avg = ( colorvalr + colorvalg + colorvalb ) / 3;
    colorvalr = Math.floor ( ( colorvalr + ( 8 * avg ) ) / 7 );
    colorvalg = Math.floor ( ( colorvalg + ( 8 * avg ) ) / 7 );
    colorvalb = Math.floor ( ( colorvalb + ( 8 * avg ) ) / 7 );
    
    this.rgb = [ colorvalr, colorvalg, colorvalb ];
    
    
    this.alterSpeeds ();
    
    
    
};