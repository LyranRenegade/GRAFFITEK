var Camera = function () {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    
    this.rotX = 0;
    this.rotY = 0.2;
    this.rotZ = 0;
    
    this.FOCALLENGTH = 1000;
    
    this.DEFSPEED = 100;
    this.zspeed = 0;
    this.zdir = -1;
    
    this.scrollspeed = 1;
    
    $ ( document ).on ( MOUSEHANDLER.MOUSEMOVE, function ( event ) {
        var maxZspeed = 0.003;
        var mousepos = pointerEventToXY ( event );
        //log ( "mousepos: " + mousepos.x + ", " + mousepos.y );
        var dis = ( mousepos.x / WIDTH * 2 ) - 1;
        //log ( "dis: " + dis );
        CAMERA.zspeed = Math.floor ( 10000 * dis * maxZspeed ) / 10000;
        //log ( "zspeed: " + this.zspeed );
    });
    
    $ ( document ).on ( MOUSEHANDLER.MOUSEDOWN, function ( event ) {
        CAMERA.zdir = 1;
    });
    $ ( document ).on ( MOUSEHANDLER.MOUSEUP, function ( event ) {
        CAMERA.zdir = -1;
    });        
    
    $ ( document ).on ( "keydown", function ( event ) {
        
        if ( [ 32, 37, 38, 39, 40 ].indexOf ( event.keyCode ) > -1 ) {
            event.preventDefault ();
        }
        return;
        switch ( String ( event.keyCode ) )  {
            case "37":
                CAMERA.x += CAMERA.scrollspeed;
                break;
            case "38":
                CAMERA.y += CAMERA.scrollspeed;
                break;
            case "39":
                CAMERA.x -= CAMERA.scrollspeed;
                break;
            case "40":
                CAMERA.y -= CAMERA.scrollspeed;
                break;
            default:

        }
       
    });
    
    
    this.moveBackward = function () {
        
        this.z -= ( this.DEFSPEED * this.zdir );
        this.rotZ += this.zspeed;
        
    };
    
    this.setPos = function ( x, y ) {
        this.x = x;
        this.y = y;
        log ( "*** NEW CAMERA POSITION: " + this.x + ", " + this.y );
    };
    
    this.rotateX = function ( inc ) {
        this.rotX += inc;
        $ ( document ).trigger ( "cameraRotate" );
    };

    this.rotateY = function ( inc ) {
        this.rotY += inc;
        $ ( document ).trigger ( "cameraRotate" );
    };

    this.rotateZ = function ( inc ) {
        this.rotZ += inc;
        $ ( document ).trigger ( "cameraRotate" );
    };


    this.reset = function () {
        this.x = this.y = this.z = 0;
        this.rotX = this.rotY = this.rotZ = 0;
        $ ( document ).trigger ( "cameraRotate" );
    };
    
    
    this.getRotations = function () {
        return { x: this.rotX, y: this.rotY, z: this.rotZ };
    };
    
    this.getAllRotations = function () {
        var sx = Math.sin ( this.rotX );
        var cx = Math.cos ( this.rotX );
        var sy = Math.sin ( this.rotY );
        var cy = Math.cos ( this.rotY );
        var sz = Math.sin ( this.rotZ );
        var cz = Math.cos ( this.rotZ );
        
        return { x: this.rotX, y: this.rotY, z: this.rotZ, sx: sx, cx: cx, sy: sy, cy: cy, sz: sz, cz: cz };
    };
    
    
    this._centerCamera = function () {
        CAMERA.setPos ( WIDTH / 2, HEIGHT / 2 );
    };
    
    $ ( document ).on ( "resizeUpdate", this._centerCamera );
    
    
};