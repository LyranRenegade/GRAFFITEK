

var LogoAnimation = function () {
    
    this.CENTER_LINELENGTH;
    this.EDGE_LINELENGTH;
    this.CIRCLE_MAXRADIUS;
    this.CIRCLE_MAXRADIUS2;
    
    this.DOT_MAXRADIUS = 7;
    this.DOT_CLR = GLOBALDATA.CLR_BLACK;
    
    this.points = [];
    
    this.maxcounters = [ 33, 15, 49, 77 ];
    //this.animended = false;
    
    this.staralpha = 0;
    this.quintcounter = 0;
    
    this.init = function () {
    
        
        
        var rad72 = 72 / 180 * Math.PI;
        var cos72 = Math.cos ( rad72 );
        var sin72 = Math.sin ( rad72 );
        var div = 4;//3 + cos72;
        this.CENTER_LINELENGTH = GLOBALDATA.LOGO_SIZE / div;
        
        //correction to make it fall within for sure
        var edge = 2;
        this.CENTER_LINELENGTH -= edge;
        
        this.CIRCLE_MAXRADIUS = this.CENTER_LINELENGTH * .59;//( 1 - cos72 );
        this.CIRCLE_MAXRADIUS2 = this.CENTER_LINELENGTH;// * ( 1 - cos72 );
        
        //this.DOT_MAXRADIUS = this.CIRCLE_MAXRADIUS / 1.21;
        
        this.EDGE_LINELENGTH = 2 * sin72 * this.CENTER_LINELENGTH;
        

        var cx = GLOBALDATA.LOGO_SIZE / 2;
        var cy = edge + cx;
        
        var degs = [ 270, 126, 342, 198, 54 ];
        var clrs = [ GLOBALDATA.CLR_WHITE, GLOBALDATA.CLR_GREEN, GLOBALDATA.CLR_PURPLE, GLOBALDATA.CLR_YELLOW, GLOBALDATA.CLR_RED ];
        
        var xp, yp, i, rad, clr;
        for ( i = 0; i < 5; i ++ ) {
            rad = degs [ i ] / 180 * Math.PI;
            clr = clrs [ i ];
            xp = cx + ( Math.cos ( rad ) * this.CENTER_LINELENGTH );
            yp = cy + ( Math.sin ( rad ) * this.CENTER_LINELENGTH );
            this._addPoint ( xp, yp, rad, clr );    
        }
        
                
        //log ( "LogoAnimation, centerline: " + this.CENTER_LINELENGTH + ", radius: " + this.CIRCLE_MAXRADIUS + ", edgeline: " + this.EDGE_LINELENGTH );
        
        this.restartAnimation ();
        
    };
    
    this.restartAnimation = function () {
        
        var pl = this.points.length;
        var i;
        var p;
        for ( i = 0; i < pl; i ++ ) {
            p = this.points [ i ];
            p.phase = ( i === 0 )? 1 : 0;
            p.phase3 = false;
            p.phase1counter = 0;
            p.phase2counter = 0;
            p.phase3counter = 0;
        }
        this.staralpha = 0;
        this.quintalpha = 0;
        
        $ ( document ).on ( "frameTick", $.proxy ( this, "_frameTick" ) );
        $ ( document ).on ( MOUSEHANDLER.CLICK, $.proxy ( this, "_speedUp" ) );
    };
    
    
   
    /////////////
    // PRIVATE //
    /////////////
    
    this._speedUp = function () {
        log ( "speedup" );
        $ ( document ).off ( "frameTick", $.proxy ( this, "_frameTick" ) );
        $ ( document ).off ( MOUSEHANDLER.CLICK, $.proxy ( this, "_speedUp" ) );
        
        
        var i;
        var p;
        var pl = this.points.length;
        
        
        for ( i = 0; i < pl; i ++ ) {
            p = this.points [ i ];
            p.phase1counter = this.maxcounters [ 0 ];
            p.phase2counter = this.maxcounters [ 1 ];
            p.phase3counter = this.maxcounters [ 2 ];
            p.phase = 3;
            p.phase3 = true;
        }
        
        this.staralpha = 1;
        this.quintcounter = this.maxcounters [ 3 ];

        
        $ ( "#header_title" ).css ( {
            opacity: 1             
        });
        $ ( "#footer" ).css ( {
            opacity: 1             
        });
        $ ( "#buttonbar" ).css ( {
            opacity: 1             
        });

        this._redraw ();    
    };
    
    this._frameTick = function () {
        //log ( "logo0animation FT" );
        var i;
        var p;
        var pl = this.points.length;
        var endedcount = 0;

        for ( i = 0; i < pl; i ++ ) {
            p = this.points [ i ];
            if ( p.phase === 0 ) {

            }
            else if ( p.phase === 1 ) {
                p.phase1counter ++;
                
                if ( p.phase1counter === Math.floor ( this.maxcounters [ 0 ] / 3 ) ) {
                    //notify next one
                    if ( i < ( pl - 1 ) ) {
                        this.points [ i + 1 ].phase = 1;
                    }
                }
                if ( p.phase1counter === this.maxcounters [ 0 ] ) {
                    if ( i === 0 ) p.phase = 2;
                    else p.phase = 1.1;
                }
            }
            else if ( p.phase === 2 ) {
                p.phase2counter ++;
                if ( p.phase2counter === this.maxcounters [ 1 ] ) {
                    p.phase = 3;
                    //notify next one
                    if ( i < ( pl - 1 ) ) {
                        this.points [ i + 1 ].phase = 2;
                        this.points [ i + 1 ].phase3 = true;
                    }
                    else {
                        this.points [ 0 ].phase3 = true;
                    }
                }
            }

            if ( p.phase3 === true ) {
                p.phase3counter = Math.min ( p.phase3counter + 1, this.maxcounters [ 2 ] );
                if ( p.phase3counter === this.maxcounters [ 2 ] ) {
                    endedcount ++;
                }
            }
        }
        
        if ( this.quintcounter >= this.maxcounters [ 3 ] ) {
        //if ( endedcount === pl ) {
            log ( "logoanim all finished" );
            $ ( document ).off ( "frameTick", $.proxy ( this, "_frameTick" ) );
        }            
            
        this._redraw ();    
        
    };
    
    
    this._addPoint = function ( xp, yp, rad, clr ) {
        this.points.push ( {
           angle: rad,
           clr: clr,
           xp: xp,
           yp: yp,
           phase: 0,
           phase3: false,
           phase1counter: 0,
           phase2counter: 0,
           phase3counter: 0
        });
    };
    
    

    
    
    
     this._redraw = function () {
        //log ( "logoanimation redraw" );
        //clear ctxs and store
        var i;
        var ctx;
        var ctxs = [];
        for ( i = 1; i < 4; i ++ ) {
            ctx = getContext ( "logocanvas" + String ( i ) );
            ctx.clearRect ( 0, 0, GLOBALDATA.LOGO_SIZE, GLOBALDATA.LOGO_SIZE );
            ctxs.push ( ctx );
        }
        
        
        //reused vars
        var pl = this.points.length;
        var p, np;
        
        //edgelines
        
        ctx = ctxs [ 2 ];
        ctx.lineWidth = 1;
        ctx.strokeStyle = getRGBA ( "#000000", 1 );;
        ctx.lineCap = "round";        
        
        
        var rad18 = 18 / 180 * Math.PI;
        
        var all = true;
        //if ( this.staralpha < 1 ) {
            ctx.beginPath ();
            var ll, tx, ty, angle;
            
            for ( i = 0; i < pl; i ++ ) {
                p = this.points [ i ];
                if ( p.phase >= 2 ) {
                    //log ( "point: " + i + " at phase 2 " );
                    if ( i < ( pl - 1 ) ) {
                        np = this.points [ i + 1 ];
                    }
                    else np = this.points [ 0 ];

                    angle = np.angle - rad18;
                    ll = this.EDGE_LINELENGTH / this.maxcounters [ 1 ] * p.phase2counter;
                    if ( ll < this.EDGE_LINELENGTH ) all = false;
                    tx = p.xp + ( Math.cos ( angle) * ll );
                    ty = p.yp + ( Math.sin ( angle ) * ll );


                    ctx.moveTo ( p.xp, p.yp );
                    ctx.lineTo ( tx, ty );
                    ctx.stroke ();
                    //log ( "stroke from: " + p.xp + ", " + p.yp + " to: " + tx + ", " + ty );
                }
                else all = false

            }
           ctx.closePath ();
       //}
       
       
       if ( all ) {
           //log ( "ALL LINES DRAWNM")
           
           this.staralpha = Math.min ( this.staralpha + .03, 1 );
           //ctx.lineWidth = 2;
           ctx.fillStyle = getRGBA ( GLOBALDATA.CLR_WHITE, this.staralpha );
           //ctx.strokeStyle = getRGBA ( GLOBALDATA.CLR_WHITE, this.staralpha );
           
           ctx.beginPath ();
           for ( i = 0; i < pl; i ++ ) {
               p = this.points [ i ];
               if ( i === 0 ) {
                   ctx.moveTo ( p.xp, p.yp );
               }
               else ctx.lineTo ( p.xp, p.yp );
               if ( i === ( pl - 1 ) ) {
                   ctx.lineTo ( this.points [ 0 ].xp, this.points [ 0 ].yp );
               }
           }
           ctx.fill ();
           //ctx.stroke ();
           ctx.closePath ();
           
       }
       
       //startcircles
       ctx = ctxs [ 1 ];  
       ctx.lineWidth = 1;
       
       
       var a, dr, clr;  
       var halfA = 1;//.2;
       for ( i = 0; i < pl; i ++ ) {
            p = this.points [ i ];
            if ( p.phase > 0 ) {
                //draw the circle
                a = p.phase1counter / this.maxcounters [ 0 ]; //between 0 and 1
                dr = this.DOT_MAXRADIUS * a;
                //clr = getRGBA ( this.DOT_CLR, a );
                ctx.fillStyle = p.clr;
                ctx.strokeStyle = p.clr;
                ctx.beginPath();
                ctx.arc ( p.xp, p.yp, dr, 0, 2 * Math.PI, false );
                ctx.closePath ();
                //ctx.fill ();
                if ( i === 0 ) {
                    ctx.strokeStyle = GLOBALDATA.CLR_BLACK;
                    ctx.fillStyle = GLOBALDATA.CLR_BLACK;
                }
                
                if ( i === 0 ) ctx.strokeStyle = getRGBA ( GLOBALDATA.CLR_BLACK, halfA );
                else ctx.strokeStyle = getRGBA ( p.clr, halfA );
           
                ctx.stroke ();
                
                
                
                
                //ctx.beginPath();
                //ctx.arc ( p.xp, p.yp, 3, 0, 2 * Math.PI, false );
                //ctx.closePath ();
                //ctx.fill ();
                
            }
       }
         
       //endcircles
       ctx = ctxs [ 0 ];
       ctx.lineWidth = 1;
       ctx.strokeStyle = GLOBALDATA.CLR_BLACK;
       a = 1;//.3;
       var r;
       halfA = .7;
       
       var fadeFrames = 33;
       var delayframes = Math.floor ( ( this.maxcounters [ 3 ] - fadeFrames ) / 7 );
       
       
       var cc;
       var maxA = .7;
       
       
       
       var j, sa, la;
       for ( i = ( pl - 1 ); i > -1; i -- ) {
           p = this.points [ i ];
           clr = getRGBA ( p.clr, a );
           r = p.phase3counter / this.maxcounters [ 2 ] * this.CIRCLE_MAXRADIUS;
           
           ctx.fillStyle = clr;
           if ( i === 0 ) ctx.strokeStyle = GLOBALDATA.CLR_BLACK;
           else ctx.strokeStyle = p.clr;
           ctx.beginPath ();
           ctx.arc ( p.xp, p.yp, r, 0, 2 * Math.PI, false );
           ctx.closePath ();
           ctx.fill ();
           ctx.stroke ();
           
           if ( i === 0 ) ctx.strokeStyle = getRGBA ( GLOBALDATA.CLR_BLACK, halfA );
           else ctx.strokeStyle = getRGBA ( p.clr, halfA );
           
           
           r = p.phase3counter / this.maxcounters [ 2 ] * this.CIRCLE_MAXRADIUS2;
           ctx.beginPath ();
           ctx.arc ( p.xp, p.yp, r, 0, 2 * Math.PI, false );
           ctx.closePath ();
           ctx.stroke ();
           
           if ( i === 0 ) {
               
               if ( p.phase3counter === this.maxcounters [ 2 ] ) {
                   
                   if ( this.quintcounter === 0 ) {
                       //log ( "mp fade in" );
                       $ ( "#header_title" ).animate ( 
                            {
                                opacity: 1 
                            }, 
                            1111, function () {
                                $ ( "#footer" ).animate ( {
                                    opacity: 1
                                }, 3333, function () {
                                    $ ( "#buttonbar" ).animate ( {
                                        opacity: 1
                                    }, 500 );

                                }  );
                            } );
                   }
                   
                   this.quintcounter ++;
                   //8 lines
                   sa = 144;
                   
                   for ( j = 0; j < 8; j ++ ) {
                       
                       ctx.lineWidth = 0;
                       
                       //la = .7;//1 - ( j * .1 );
                       cc = this.quintcounter - ( j * delayframes );
                       
                       
                       if ( cc > 0 ) {
                           la = Math.min ( maxA, cc / fadeFrames * maxA );
                           
                       }
                       else la = 0;
                       
                       
                       if ( la > 0 ) {
                            tx = p.xp + ( this.CIRCLE_MAXRADIUS * Math.cos ( sa / 180 * Math.PI ) );
                            ty = p.yp + ( this.CIRCLE_MAXRADIUS * Math.sin ( sa / 180 * Math.PI ) );
                            ctx.beginPath ();
                            ctx.strokeStyle = getRGBA ( GLOBALDATA.CLR_BLACK, la );
                            ctx.moveTo ( p.xp, p.yp );
                            ctx.lineTo ( tx, ty );
                            ctx.stroke ();
                            ctx.closePath ();
                        }
                       
                       //log ( "drawing inner lines: " + la + ", sa " + sa );
                       sa += 36;
                   }

                   
                   
                   
               }
           }
           
           
       };
        
        
         
        
        
        
    };
    
    
    
    
    
    
    this.init ();
    
    
    
    
    
    
};

