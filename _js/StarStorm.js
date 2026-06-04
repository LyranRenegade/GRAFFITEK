
var Universe = function () {
    this.dimensionX = 200000;
    this.dimensionY = 200000;
    this.dimensionZ = 500000;
    
};


var StarStorm = function () {
    
    
    this.stars = [];
    
    this.lastdrawn = [];
    
    this.minscale = 0.002;
    this.maxscale = 1;
    
    this.ufos = [];
    
    this.maxS = 0;
    this._initialize = function () {
        this.maxS = 0;
        var i;
        var star;
        var ms = 1000;//10000;
        for ( i = 0; i < ms; i ++ ) {
            star = new Star ( i );
            this.stars.push ( star );
        }
        
        
        var pentangle_system = [];
        
        //add pentangle
        var a = 0;
        var x = 0;//UNIVERSE.dimensionX - Math.round ( 2 * UNIVERSE.dimensionX * Math.random () );
        var y = 0;//UNIVERSE.dimensionY - Math.round ( 2 * UNIVERSE.dimensionY * Math.random () );
        var z = UNIVERSE.dimensionZ - Math.round ( 0.5 * UNIVERSE.dimensionZ * Math.random () );
        var centre_star = new Star ( ms, new Point ( x, y, z ), "pentangle", true );
        this.stars.push ( centre_star );
        
        var xt, yt;
        var distance = 10000;
        var ran = 1000;
        for ( i = 0; i < 5; i ++ ) {
            xt = x + ( Math.cos ( a ) * distance ) + ( ran * Math.random () ) - ( ran / 2 );
            yt = y + ( Math.sin ( a ) * distance ) + ( ran * Math.random () ) - ( ran / 2 );
            star = new Star ( ( ms + i + 1 ), new Point ( xt, yt, z + ( 2 * ran * Math.random () ) - ( 2 * ran / 2 ) ), "pentangle" );
            star.size = 20 + Math.round ( 150 * Math.random () );
            this.stars.push ( star );
            pentangle_system.push ( star );
            a += ( Math.PI / 2.5 );
        }
        
        centre_star.systemstars = pentangle_system;
        
        
        var ctx = getContext ( "starmap" );
        ctx.fillStyle = GLOBALDATA.CLR_WHITE;
        
        
        for ( i = 0; i < 1; i ++ ) {
            this.ufos.push ( new UFO ( i ) );
        }
        for ( i = 0; i < 1; i ++ ) {
            this.ufos.push ( new UFO2 ( i + 5 ) );
        }
        

        
        /*
        this.stars = this.stars.sortOn ( "centerdistance" );
        var basechance = .01;
        var chance = basechance;
        var chanceupped = false;
        for ( i = 0; i < ( ms - 2 ); i ++ ) {
            chanceupped = false;
            if ( Math.random () < chance ) {
                this.stars [ i ].addConnection ( this.stars [ i + 1 ], true );
                if ( Math.random () < ( 10 * chance ) ) {
                    this.stars [ i ].addConnection ( this.stars [ i + 2 ], true );
                }
                if ( chance === basechance ) {
                    //star added, so increase odds for next star
                    chance += .6;
                    chanceupped = true;
                }
            }
            if ( !chanceupped ) {
                if ( chance !== basechance ) {
                    chance = basechance;
                }
            }
        }
        */
        
        
        

        $ ( document ).on ( "resizeUpdate", function () {
            STARSTORM.redrawStaticStars ();
            STARSTORM.draw ();
        });
        //this.redrawStaticStars ();
    };
    
    
    
    this.redrawStaticStars = function () {
        return;
        var ctx = getContext ( "starmap_static" );
        ctx.clearRect ( 0, 0, WIDTH, HEIGHT );
        ctx.fillStyle = "#ffff00";
        
        var sa = 100;
        var i, xp, yp, a;
        
        
        for ( i = 0; i < sa; i ++ ) {
            xp = WIDTH * Math.random ();
            yp = HEIGHT * Math.random ();
            a = .5 + ( .5 * Math.random () );
            ctx.fillStyle = "rgba(255,255,255," + String ( a ) + ")";
            drawQuickCirle ( xp, yp, .7, "starmap_static" );
        }
        
        
    };
    
    
    
    this.transForm3D2D = function ( star, camrotations, ufo, nonormalize ) {
        var x = star.x;
        var y = star.y;
        var z = star.z;

        //normalize
        
        if ( nonormalize !== false && ( star.system === "none" || star.centerstar || ufo !== false ) ) {
            var c = false;
            if ( x < -UNIVERSE.dimensionX ) {
                x += ( 2 * UNIVERSE.dimensionX );
                c = true;
                if ( star.centerstar ) {
                    star.systemMove ( "x", ( 2 * UNIVERSE.dimensionX ) );
                }
            }
            else if ( x > UNIVERSE.dimensionX ) {
                x -=  ( 2 * UNIVERSE.dimensionX );
                c = true;
                if ( star.centerstar ) {
                    star.systemMove ( "x", - ( 2 * UNIVERSE.dimensionX ) );
                }                
            }
            if ( y < -UNIVERSE.dimensionY ) {
                y += ( 2 * UNIVERSE.dimensionY );
                c = true;
                if ( star.centerstar ) {
                    star.systemMove ( "y", ( 2 * UNIVERSE.dimensionY ) );
                }                
            }
            else if ( y > UNIVERSE.dimensionY ) {
                y -= ( 2 * UNIVERSE.dimensionY );
                c = true;
                if ( star.centerstar ) {
                    star.systemMove ( "y", - ( 2 * UNIVERSE.dimensionY ) );
                }                
            }
            if ( ( z - CAMERA.z ) < 0 ) {
                if ( ufo !== false ) {
                    if ( z - CAMERA.z < - ( UNIVERSE.dimensionZ / 1000 ) ) {
                        z += UNIVERSE.dimensionZ;
                        c = true;
                    }
                }
                else { 
                    z += UNIVERSE.dimensionZ;
                    c = true;
                    if ( star.centerstar ) {
                        star.systemMove ( "z", ( 1 * UNIVERSE.dimensionZ ) );
                    }                
                    
                }
                
            }
            else if ( ( z - CAMERA.z ) > UNIVERSE.dimensionZ ) {
                z -= UNIVERSE.dimensionZ;
                c = true;
                if ( star.centerstar ) {
                    star.systemMove ( "z", - ( 1 * UNIVERSE.dimensionZ ) );
                }                
            }

            if ( c ) {
                //log ( "star changed" );
                star.x = x;
                star.y = y;
                star.z = z;            
                //star.setCenterDistance ();
                if ( ufo !== false ) {
                    
                    ufo.points.cp.x = x;
                    ufo.points.cp.y = y;
                    ufo.points.cp.z = z;
                    ufo.alterSpeeds ();
                    //log ( "ufo transposed to: " + x + ", " + y + ", " + z + ".. " + ufo.points.cp.x + ", " + ufo.points.cp.y + ", " + ufo.points.cp.z );
                    //ufo.update ();
                    return false;
                }
            }
        }
        z -= CAMERA.z;       
        
        
        //normalize end
                
        //var cam_rotations = CAMERA.getRotations ();

        var sx = camrotations.sx;//Math.sin ( cam_rotations.x );
        var cx = camrotations.cx;//Math.cos ( cam_rotations.x );
        var sy = camrotations.sy;//Math.sin ( cam_rotations.y );
        var cy = camrotations.cy;//Math.cos ( cam_rotations.y );
        var sz = camrotations.sz;//Math.sin ( cam_rotations.z );
        var cz = camrotations.cz;//Math.cos ( cam_rotations.z );

        // rotation around x
        var xy = cx * y - sx * z;
        var xz = sx * y + cx * z;
        // rotation around y
        var yz = cy * xz - sy * x;
        var yx = sy * xz + cy * x;
        // rotation around z
        var zx = cz * yx - sz * xy;
        var zy = sz * yx + cz * xy;

        var xp;
        var yp;
        var depth = yz;
        
        
        var sf = CAMERA.FOCALLENGTH / ( CAMERA.FOCALLENGTH + depth );
        xp = zx * sf;
        yp = zy * sf;

        xp += CAMERA.x;
        yp += CAMERA.y;
        
        if ( nonormalize ) xp = Math.round ( xp );
        if ( nonormalize ) yp = Math.round ( yp );
        
        return { x: xp, y: yp, d: depth, s: sf };
    };
    
    
    this.frameTick = function () {
        
        CAMERA.moveBackward ();
        this.draw ();
        
    };
    
    

    
    this.draw = function () {
        //return;
        //clear this.lastdrawn = [];
        
        /*var i;
        var ldl = this.lastdrawn.length;
        var ctx = getContext ( "starmap" );
        ctx.fillStyle = "#ffffff";
        //setDropShadow ( "starmap", 0, 0, 5, "rgba(255, 255, 255, 1)" );                
        var ld;
        for ( i = 0; i < ldl; i ++ ) {
            ld = this.lastdrawn [ i ];
            ctx.clearRect ( ld.x - ld.radius - 1, ld.y - ld.radius - 1, 2 + ( ld.radius * 2 ), 2 + ( ld.radius * 2 ) );
            //log ( i + " clear " + ld.x + ", " + ld.y + ", rad: " + ld.radius );
        }*/
        var ctx = getContext ( "starmap" );
        ctx.clearRect ( 0, 0, WIDTH, HEIGHT );
        
        //ctx.strokeStyle = "#FFFF00";//rgba (255,255,255,1)";//"#ffffff";
        //ctx.lineWidth = 1;
        
        this.lastdrawn = [];

        var coordinates = [];
        //var minscale = 0.001;
        
        var s;
        var i;
        var sl = this.stars.length;
        var ddata;
        var cr = CAMERA.getAllRotations ();
        
        var assumedradius = 100;
        
        
        
        
        for ( i = 0; i < sl; i ++ ) {
            s = this.stars [ i ];
            ddata = this.transForm3D2D ( s, cr, false );
            
            s.ddata = ddata;
            ddata.size = s.size;
            ddata.clr = s.clr;
            ddata.star = s;
            //log ( " connections: " + s.connections.length );
            if ( ddata.x > -assumedradius && ddata.x < ( WIDTH + assumedradius ) ) {
                if ( ddata.y > -assumedradius && ddata.y < ( HEIGHT + assumedradius ) ) {
                    if ( ddata.s > this.minscale && ddata.s < 1 ) {
                        coordinates.push ( ddata );
                    
                    }
                    //else log ( "too small" );
                }
                //else log ( "y out of bounds: " + ddata.y );
            }
            //else log ( "x out of bounds: " + ddata.x );
        }
        
        
        
        
        coordinates = coordinates.sortOn ( "s" );
        var dl = coordinates.length;
        var radius;
        /*
        var a;
        var rm = 0;
        var gm = 1;
        var bm = 1;
        var rgba;*/
        var grd;
        
        var grdinc_m = 1.5;//1;//.1;
        var grdinc_x;
        var grdinc_y;
        for ( i = 0; i < dl; i ++ ) {

            ddata = coordinates [ i ]
            /*if ( i === 0 || i === ( dl - 1 ) ) {
                log ( i + ": " + ddata.s + ", max: " + this.maxS );
                this.maxS = Math.max ( this.maxS, ddata.s );
            } */           
            radius = Math.max ( .5, 2 * ddata.size * ddata.s );
            //a = Math.min ( 1, Math.max ( 0.5, ( 80 * ddata.size * ddata.s ) ) );
            //rm = Math.min ( 1, ( 12 * ddata.s ) );
            //gm = Math.min ( 1, ( 3 * ddata.s ) );
            //bm = Math.min ( 1, ( 6 * ddata.s ) );
            /*rgba = "rgba(";
            rgba += String ( Math.round ( ( 1 - rm ) * 255 ) ) + ",";
            rgba += String ( Math.round ( ( 1 - gm ) * 255 ) ) + ",";
            rgba += String ( Math.round ( ( 1 - bm ) * 255 ) ) + ",";
            rgba += String ( a ) + ") ";
            //log ( "rgba: " + rgba );
            ctx.fillStyle = rgba;*/
            
            if ( ddata.s > .015 ) {
                grdinc_x = grdinc_m * radius * Math.cos ( CAMERA.rotZ );
                grdinc_y = grdinc_m * radius * Math.sin ( CAMERA.rotZ );
                grd = ctx.createRadialGradient ( ddata.x, ddata.y, radius / 10, ddata.x + grdinc_x, ddata.y + grdinc_y, radius * 3 );
                grd.addColorStop ( 0, ddata.clr );
                grd.addColorStop ( 1, GLOBALDATA.CLR_BLACK );

                ctx.fillStyle = grd;//ddata.clr;
                /*
                ctx.strokeStyle = GLOBALDATA.HL_CLR1;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc ( ddata.x, ddata.y, radius * 2, 0, 2 * Math.PI, false );
                ctx.closePath ();
                ctx.stroke ();*/
            }
            else ctx.fillStyle = ddata.clr;
            
            
            if ( ddata.star.centerstar === true ) {
                
                if ( ddata.star.system === "pentangle" ) {
                    if ( ddata.s > .025 && ddata.s < .035 ) {
                        this.drawSystem ( ddata.star.systemstars, "pentangle" );
                    }
                }
                
            }
            else {
                drawQuickCirle ( ddata.x, ddata.y, radius, "starmap" );
            }
            //this.lastdrawn.push ( { x: ddata.x, y: ddata.y, radius: radius + 2 } );
            //log ( "s: " + ddata.s );
            /*if ( ddata.s > .005 && ddata.s < 0.01) {
                if ( ddata.star.connections.length > 0 ) {
                    this._drawConnections ( ddata.star, [] );
                }
            } */   
            //log ( "star " + i );
            //logObject ( coordinates [ i ] );
            
        }
        
        var us = this.ufos.length;
        var ufo;
        
        var ddata_a, ddata_b, ddata_c, ddata_d, ddata_e, ddata_f, ddata_g, ddata_h;

        var a = 1;
        var ddatas = [];
        var j, ddl, k, l;
        var colormul= 1;
        var ur = 1000;
        var clr;
        for ( i = 0; i < us; i ++ ) {
            ufo = this.ufos [ i ];
            ufo.update ();
            //log ( "BEFORE: " + i + " z: " + ufo.points.cp.z );
        }
        var pl;
        this.ufos = this.ufos.sortOn ( "z" );
        this.ufos.reverse ();
        
        var dx, dy, dz;
        var div;
        
        var pointLetters = [ "a", "b", "c", "d", "e" ];
        var dists = [ 0, 0, 0, 0, 0 ];
        
        for ( i = 0; i < us; i ++ ) {
            ur = 100;
            ufo = this.ufos [ i ];
            //log ( "AFTER: " + i + " z: " + ufo.points.cp.z );
            //draw ufo
                        
            ddata = this.transForm3D2D ( ufo.points.cp, cr, ufo );
            if ( !ddata ) continue;
            if ( ddata.x > -assumedradius && ddata.x < ( WIDTH + assumedradius ) ) {
                if ( ddata.y > -assumedradius && ddata.y < ( HEIGHT + assumedradius ) ) {
                    if ( ddata.s > ( this.minscale ) && ddata.s < 2 ) {
                        //log ( "ufo s: " + ddata.s );
                        if ( ddata.s > 0.1 && ddata.s < 0.3 && ufo.mode === ufo.MODE_MANEUVER ) {
                            if ( ( Math.random () * ufo.modecount ) > 20 ) {
                                ufo.changeMode ();
                            }
                            //log ( "ufo halted" );
                        }
                        if ( ufo.type === "1" ) {
                            
                            ddata_a = this.transForm3D2D ( ufo.points.a, cr, false, false );
                            ddata_b = this.transForm3D2D ( ufo.points.b, cr, false, false );
                            ddata_c = this.transForm3D2D ( ufo.points.c, cr, false, false );
                            ddata_d = this.transForm3D2D ( ufo.points.d, cr, false, false );
                            ddata_e = this.transForm3D2D ( ufo.points.e, cr, false, false );
                            ddata_f = this.transForm3D2D ( ufo.points.f, cr, false, false );
                            ddata_g = this.transForm3D2D ( ufo.points.g, cr, false, false );
                            ddata_h = this.transForm3D2D ( ufo.points.h, cr, false, false );

                            ddatas = [ ddata, ddata_a, ddata_b, ddata_c, ddata_d, ddata_e, ddata_f, ddata_g, ddata_h ];
                            ddatas = ddatas.sortOn ( "s" );
                            ddl = ddatas.length;

                            ctx.strokeStyle = ufo.getColor ( 0.6, 0.9 );//"rgba(100,100,100,0.5)";
                            ctx.lineWidth = 10 * ( ddata.s );
                            ctx.lineCap = "round";
                            ctx.beginPath ();
                            ctx.moveTo ( ddata_a.x, ddata_a.y );
                            ctx.lineTo ( ddata_g.x, ddata_g.y );
                            ctx.moveTo ( ddata_b.x, ddata_b.y );
                            ctx.lineTo ( ddata_h.x, ddata_h.y );
                            ctx.moveTo ( ddata_c.x, ddata_c.y );
                            ctx.lineTo ( ddata_e.x, ddata_e.y );
                            ctx.moveTo ( ddata_d.x, ddata_d.y );
                            ctx.lineTo ( ddata_f.x, ddata_f.y );
                            ctx.stroke ();

                            a = 1;
                            for ( j = 0; j < ddl; j ++ ) {
                                if ( ddatas [ j ] === ddata ) {
                                    a = 1;
                                    colormul = 1;                                
                                    ur = ufo.corelength / 1.5;
                                }
                                else if ( ddatas [ j ] === ddata_a || ddatas [ j ] === ddata_g ) {
                                    a = .9;
                                    colormul = 1.5;
                                    ur = ufo.corelength / 3;

                                }
                                else {
                                    a = .7;
                                    colormul = 0.7;
                                    ur = ufo.corelength / 4;
                                }

                                radius = ur * ddatas [ j ].s;
                                clr = ufo.getColor ( colormul, a );    
                                if ( ddata.s > 0.06 ) {
                                    //if ( j === 0 ) log ( "GRADIENT FOR UFO"  );
                                    grdinc_x = grdinc_m * radius * Math.cos ( CAMERA.rotZ );
                                    grdinc_y = grdinc_m * radius * Math.sin ( CAMERA.rotZ );
                                    grd = ctx.createRadialGradient ( ddatas [ j ].x, ddatas [ j ].y, radius / 10, ddatas [ j ].x + grdinc_x, ddatas [ j ].y + grdinc_y, radius * 3 );
                                    grd.addColorStop ( 0, clr );
                                    grd.addColorStop ( 1, GLOBALDATA.CLR_BLACK );       
                                    ctx.fillStyle = grd;
                                } 
                                else ctx.fillStyle = clr;

                                ctx.beginPath();
                                ctx.arc ( ddatas [ j ].x, ddatas [ j ].y , radius, 0, 2 * Math.PI, false );
                                ctx.closePath ();
                                //ctx.stroke (); 
                                ctx.fill ();
                            }
                        }
                        else if ( ufo.type === "2" ) {
                            
                            ddata_a = this.transForm3D2D ( ufo.points.a, cr, false, false );
                            ddata_b = this.transForm3D2D ( ufo.points.b, cr, false, false );
                            ddata_c = this.transForm3D2D ( ufo.points.c, cr, false, false );
                            ddata_d = this.transForm3D2D ( ufo.points.d, cr, false, false );
                            ddata_e = this.transForm3D2D ( ufo.points.e, cr, false, false );


                            ctx.strokeStyle = ufo.getColor ( 1, 1 );//"rgba(100,100,100,0.5)";
                            ctx.lineWidth = 5 * ( ddata.s );
                            //ctx.lineCap = "round";
                            /*
                            ctx.beginPath ();
                            ctx.moveTo ( ddata_a.x, ddata_a.y );
                            ctx.lineTo ( ddata_b.x, ddata_b.y );
                            ctx.lineTo ( ddata_c.x, ddata_c.y );
                            ctx.lineTo ( ddata_d.x, ddata_d.y );
                            ctx.lineTo ( ddata_a.x, ddata_a.y );
                            ctx.lineTo ( ddata_e.x, ddata_e.y );
                            ctx.lineTo ( ddata_b.x, ddata_b.y );
                            ctx.moveTo ( ddata_e.x, ddata_e.y );
                            ctx.lineTo ( ddata_c.x, ddata_c.y );
                            ctx.moveTo ( ddata_e.x, ddata_e.y );
                            ctx.lineTo ( ddata_d.x, ddata_d.y );
                            
                            ctx.stroke ();
                            ctx.closePath ();
                            */
                           //log ( "***" );
                           
                            for ( l = 0; l < 5; l ++ ) {
                                dx = ufo.points [ pointLetters [ l ] ].x - CAMERA.x;
                                dy = ufo.points [ pointLetters [ l ] ].y - CAMERA.y;
                                dz = ufo.points [ pointLetters [ l ] ].z - CAMERA.z;
                                dists [ l ] = Math.pow ( ( Math.pow ( dx, 2 ) + Math.pow ( dy, 2) + Math.pow ( dz, 2 ) ), 0.5 );
                                //log ( "point: " + pointLetters [ l ] + ", dis: " + dists [ l ] );
                            }
                            //log ( "point a: " + dx + ", " + dy + ", " + dz );
                            
                            
                            ddatas = [ 
                                
                                new D3PointSet ( [ ddata_a, ddata_b, ddata_e ], 1, dists [ 0 ] + dists [ 1 ] + dists [ 4 ] ),
                                new D3PointSet ( [ ddata_b, ddata_c, ddata_e ], 2, dists [ 1 ] + dists [ 2 ] + dists [ 4 ] ),
                                new D3PointSet ( [ ddata_c, ddata_d, ddata_e ], 3, dists [ 2 ] + dists [ 3 ] + dists [ 4 ] ),
                                new D3PointSet ( [ ddata_d, ddata_a, ddata_e ], 4, dists [ 0 ] + dists [ 3 ] + dists [ 4 ] ),
                                new D3PointSet ( [ ddata_a, ddata_b, ddata_c, ddata_d ], 0, dists [ 0 ] + dists [ 1 ] + dists [ 2 ] + dists [ 3 ] )
                            ];
                            
                           //var temp = ddatas.slice ( 0 );//copyObject ( ddatas );
                            ddatas = ddatas.sortOn ( "totaldis" );
                            
                            
                            
                            
                            
                     
              
                            /*
                            var index = 2;
                            var baseps = new D3PointSet ( [ ddata_a, ddata_b, ddata_c, ddata_d ], 0 );
                            
                            if (  ( ddatas [ 2 ].average_scale <= baseps.average_scale ) || ( ddatas [ 3 ].average_scale <= baseps.average_scale ) ) {
                                log ( "index set to 3d" );
                                index = 3;
                            }
                            
                            ddatas.splice ( index, 0, baseps );
                            */
                            //log ( "same? " + arrayCompare ( temp, ddatas ) );
                            ddl = ddatas.length;
                            a = 1;//.5;//.5;
                            
                            /*log ( "" );
                            log ( " *** UFO 2 REDRAW " );
                            
                            if ( ufo.points.cp.z <= CAMERA.FOCALLENGTH ) {
                                log ( "ufo within focallength " );
                            }*/
                            
                            for ( j = ddl-1; j > -1; j -- ) {
                               //log ( ddatas [ j ].index + ", totaldis: " + ddatas [ j ].totaldis );
                                colormul = .5 + ( ddatas [ j ].index * .1 );
                                clr = ufo.getColor ( colormul, a );    
                                /*
                                if ( ddata.s > 0.06 ) {
                                    //if ( j === 0 ) log ( "GRADIENT FOR UFO"  );
                                    grdinc_x = grdinc_m * radius * Math.cos ( CAMERA.rotZ );
                                    grdinc_y = grdinc_m * radius * Math.sin ( CAMERA.rotZ );
                                    grd = ctx.createRadialGradient ( ddatas [ j ].x, ddatas [ j ].y, radius / 10, ddatas [ j ].x + grdinc_x, ddatas [ j ].y + grdinc_y, radius * 3 );
                                    grd.addColorStop ( 0, clr );
                                    grd.addColorStop ( 1, GLOBALDATA.CLR_BLACK );       
                                    ctx.fillStyle = grd;
                                } 
                                else ctx.fillStyle = clr;
                                */
                                ctx.fillStyle = clr;
                                ctx.beginPath();
                                pl = ddatas [ j ].points.length;
                                //log ( "points at: " + j + ": " + ddatas [ j ].average_scale );
                                
                                for ( k = 0; k < pl; k ++ ) {
                                    if ( k === 0 ) {
                                        ctx.moveTo ( ddatas [ j ].points [ k ].x, ddatas [ j ].points [ k ].y );
                                    }
                                    else {
                                        ctx.lineTo ( ddatas [ j ].points [ k ].x, ddatas [ j ].points [ k ].y );
                                    }
                                    if ( k === ( pl - 1 ) ) {
                                        ctx.lineTo ( ddatas [ j ].points [ 0 ].x, ddatas [ j ].points [ 0 ].y );
                                    }
                                }
                                ctx.stroke ();
                                ctx.fill ();
                                ctx.closePath ();
                                //ctx.stroke (); 
                                
                                //a += .1;
                            }
                            
                        }


                    }
                    else if ( ddata.s < this.maxscale ) {
                        //log ( "ufo far away " );
                        if ( ( Math.random () * ufo.modecount ) > 30 ) {
                            log ( "relocate ufo" );
                            ufo.relocateNear ();
                        }
                        else if ( ufo.mode !== ufo.MODE_MANEUVER ) {
                            if ( Math.random () * ufo.modecount < 10 ) {
                                ufo.changeMode ();
                            }
                        }
                    }
                }
            }            
        }
    };
    
    this.drawSystem = function ( stars, systemname ) {
        var ctx = getContext ( "starmap" );
        ctx.strokeStyle = "rgba(255,255,255,0.5)";//GLOBALDATA.CLR_WHITE;
        ctx.beginPath ();
        if ( systemname === "pentangle" ) {
            ctx.moveTo ( stars [ 0 ].ddata.x, stars [ 0 ].ddata.y );
            ctx.lineTo ( stars [ 2 ].ddata.x, stars [ 2 ].ddata.y );
            ctx.lineTo ( stars [ 4 ].ddata.x, stars [ 4 ].ddata.y );
            ctx.lineTo ( stars [ 1 ].ddata.x, stars [ 1 ].ddata.y );
            ctx.lineTo ( stars [ 3 ].ddata.x, stars [ 3 ].ddata.y );
            ctx.lineTo ( stars [ 0 ].ddata.x, stars [ 0 ].ddata.y );
            
        }
        ctx.stroke ();
        ctx.closePath ();
        
    };
    /*
    this.drawUfoSide = function ( pointset ) {
        var ctx = getContext ( "starmap" );
        //ctx.fillStyle = GLOBALDATA.DL_CLR1;
        ctx.strokeStyle = GLOBALDATA.CLR_WHITE;
        ctx.lineWidth = 1;
        ctx.beginPath ();
        ctx.moveTo ( pointset [ 0 ].x, pointset [ 0 ].y );
        ctx.lineTo ( pointset [ 1 ].x, pointset [ 1 ].y );
        ctx.lineTo ( pointset [ 2 ].x, pointset [ 2 ].y );
        ctx.lineTo ( pointset [ 3 ].x, pointset [ 3 ].y );
        ctx.lineTo ( pointset [ 0 ].x, pointset [ 0 ].y );
        ctx.stroke ();
        //ctx.fill ();
        ctx.closePath ();
    };    */
    
    this._drawConnections = function ( star, excludes ) {
        //log ( "draw connections!" );
        var ctx = getContext ( "starmap" );
        var i, j;
        var el = excludes.length;
        var cl = star.connections.length;
        var otherstar;
        var skip;
        
        if ( el === 0 ) {
            ctx.beginPath ();
            ctx.moveTo ( star.ddata.x, star.ddata.y );
        }        
        
        for ( i = 0; i < cl; i ++ ) {
            skip = false;
            otherstar = star.connections [ i ];
            for ( j = 0; j < el; j ++ ) {
                if ( otherstar === excludes [ j ] ) {
                    skip = true;
                    break;
                }
            }
            if ( skip ) continue;
            
            excludes.push ( star );
            this._drawConnections ( otherstar, excludes );
            ctx.lineTo ( otherstar.ddata.x, otherstar.ddata.y );
            ctx.moveTo ( star.ddata.x, star.ddata.y );
            //log ( "line drawn" );
        }
        
        if ( el === 0 ) {
            ctx.stroke ();
            ctx.closePath ();
        }
        
    };
    
    
    
    this._initialize ();
};





