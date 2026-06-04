

var Point = function ( x, y, z ) {
    this.x = ( x !== undefined )? x : 0;
    this.y = ( x !== undefined )? y : 0;
    this.z = ( x !== undefined )? z : 0;
    
    this.transpose = function ( p ) {
        this.x += p.x;
        this.y += p.y;
        this.z += p.z;
    };
    
};

this.Rotate3DPoint = function ( point, rotations ) {
    var x = point.x;
    var y = point.y;
    var z = point.z;

    var sx = rotations.sx;//Math.sin ( cam_rotations.x );
    var cx = rotations.cx;//Math.cos ( cam_rotations.x );
    var sy = rotations.sy;//Math.sin ( cam_rotations.y );
    var cy = rotations.cy;//Math.cos ( cam_rotations.y );
    var sz = rotations.sz;//Math.sin ( cam_rotations.z );
    var cz = rotations.cz;//Math.cos ( cam_rotations.z );

    
    // rotation around x
    var xy = cx * y - sx * z;//y
    var xz = sx * y + cx * z;//z

    // rotation around y
    var yx = sy * xz + cy * x;//x
    var yz = cy * xz - sy * x;//z
    

    // rotation around z
    var zx = cz * yx - sz * xy;//x
    var zy = sz * yx + cz * xy;//y

    return new Point ( zx, zy, yz );
};

var D3PointSet = function ( points, index, totaldis ) {
    this.points = points;
    this.index = index;
    this.totaldis = totaldis / this.points.length;
    /*
    var i;
    var pl = this.points.length;
    var ts = 0;
    var mins = Number.POSITIVE_INFINITY;
    var maxs = Number.NEGATIVE_INFINITY;
    var xd, yd, zd, dis;
    var tdis = 0;
    for ( i = 0; i < pl; i ++ ) {
        xd = this.points [ i ].x - CAMERA.x;
        yd = this.points [ i ].y - CAMERA.y;
        zd = this.points [ i ].d + CAMERA.z;
        dis = Math.pow ( ( Math.pow ( xd, 2 ) + Math.pow ( yd, 2 ) + Math.pow ( zd, 2 ) ), .5 );
        tdis += dis;
        //log ( this.index + ", pointI: " + i +  "x,y,z: " + xd + ", " + yd + ", " + zd );
        
        ts += this.points [ i ].d;
        mins = Math.min ( mins, this.points [ i ]. s );
        maxs = Math.min ( maxs, this.points [ i ]. s );
    }
    this.average_depth = ts / pl;
    this.average_dis = tdis / pl;
    this.minscale = mins;
    this.maxscale = maxs;
    */
    //log ( "av scale: " + this.average_scale );
    
};