
/////////////////////
// DANCING DIAMOND //
/////////////////////

var DancingDiamond = function ( xp, yp, canvasID, sidelength, color, thickness ) {
    this.xp = xp;
    this.yp = yp;
    this.ctx = getContext ( canvasID );
    this.sidelength = sidelength;
    this.color = color;
    this.thickness = thickness;
    
    var clearlength = ( sidelength + ( thickness / 2 ) ) * 3;
    this.clearBounds = { x: xp - clearlength / 2, y: yp - clearlength / 2, w: clearlength, h: clearlength };
    
    this.position = 0;
    this.maxposition = Math.cos ( Math.PI / 4 ) * sidelength;
    this.posinc = this.sidelength / 10;
    this.direction = 1;
    
    
    
    this.fade = "IN";
    this.alpha = 1;
    this.alphinc = 1 / 20;
    
    this.draw = function () {
        this.ctx.clearRect ( this.clearBounds.x, this.clearBounds.y, this.clearBounds.w, this.clearBounds.h );
        this.ctx.lineWidth = this.thickness;
        this.ctx.strokeStyle = this.color;
        this.ctx.lineCap = "square";
        this.ctx.globalAlpha = this.alpha;
        
        
        var dx = Math.cos ( Math.PI / 4 ) * this.sidelength;
        var dy = Math.sin ( Math.PI / 4 ) * this.sidelength;
        var i;
        
        var position = this.position;
        
        for ( i = 0; i < 2; i ++ ) {
            if ( i === 1 ) {
                dx = -dx;
                position = - this.position;
            }
            this.ctx.beginPath ();
            this.ctx.moveTo ( this.xp - position + dx, this.yp + dy );
            this.ctx.lineTo ( this.xp - position, this.yp );
            this.ctx.closePath ();
            this.ctx.stroke ();
            
            
            this.ctx.beginPath ();
            this.ctx.moveTo ( this.xp - position, this.yp );
            this.ctx.lineTo ( this.xp - position + dx, this.yp - dy );
            this.ctx.closePath ();
            this.ctx.stroke ();
            
            
        }
    };
    
    
    
    this.frameTick = function () {
         this.position += ( this.posinc * this.direction );
         
         if ( this.position >= this.maxposition && this.direction === 1 ) {
             this.direction = -1;
         }
         else if ( this.position <= 0 && this.direction === -1 ) {
             this.direction = 1;
         }
         
         this.draw ();
     };
     
     this.setPos = function ( xp, yp ) {
         this.xp = xp;
         this.yp = yp;
         this.draw ();
         var clearlength = this.sidelength + ( this.thickness / 2 );
         this.clearBounds = { x: xp - clearlength / 2, y: yp - clearlength / 2, w: clearlength, h: clearlength };
     };     
    
    
    this.draw ();
    ANIMATORCONTROLLER.registerObject ( this );
    
    
    
};

///////////////////
// ROTATING LINE //
///////////////////

 var RotatingLine = function ( xp, yp, canvasID, parentID, zindex, length, color, thickness, endrotation ) {
     
     
    this.canvas = document.createElement ( 'canvas' );
    this.canvas.id = canvasID;
    this.canvas.width = 0;
    this.canvas.height = 0;
    this.canvas.style.zIndex = zindex;
    this.canvas.style.position = "absolute";
    $ ( parentID ).append ( this.canvas );
    
     this.canvasID = "#" + canvasID;
     
     
     this.ctx = getContext ( canvasID );
     log ( " context: " + this.ctx );
     this.length = length;
     this.color = color;
     this.thickness = thickness;
     
     
     var clearlength = length + ( thickness / 2 );
     
     this.clearBounds = { w: clearlength, h: clearlength };
     
     this.rotation = endrotation;//Math.PI / 4 * 3;
     this.rotinc = Math.PI / 8;
     this.xp = xp;
     this.yp = yp;
     
     this.endrotation = endrotation;
     this.ENDCALLED = false;

     this.visible = true;
     
     this.draw = function () {
        $ ( this.canvasID ).css ( {
            left: String ( this.xp - this.length ) + "px",
            top: String ( this.yp - this.length ) + "px"
        });         
            
         this.canvas.width = this.clearBounds.w * 2;
         this.canvas.height = this.clearBounds.h * 2;
         
         //this.ctx.fillStyle = "#ff0000";
         //this.ctx.fillRect ( 0, 0 , this.clearBounds.w, this.clearBounds.h );
         
         
         this.ctx.clearRect ( 0, 0, this.clearBounds.w * 2, this.clearBounds.h * 2 );
         if ( !this.visible ) return;
         else {
             var hl = this.length / 2;
            this.ctx.lineWidth = this.thickness;
            this.ctx.strokeStyle = this.color;
            

         
            var dx = ( this.length / 2 ) * Math.cos ( this.rotation );
            var dy = ( this.length / 2 ) * Math.sin ( this.rotation );
            this.ctx.beginPath ();
            this.ctx.moveTo ( this.length + dx, this.length + dy );
            this.ctx.lineTo ( this.length - dx, this.length - dy );
            this.ctx.closePath ();
            this.ctx.stroke ();
        }
     };
     
     this.frameTick = function () {
         if ( this.ENDCALLED && ( roundOn ( this.rotation, 2 ) === roundOn ( this.endrotation, 2 ) ) ) {
            ANIMATORCONTROLLER.unRegisterObject ( this );
         }
         else {
            this.rotation += this.rotinc;
            while ( this.rotation > ( 2 * Math.PI ) ) this.rotation -= ( 2 * Math.PI );
            while ( this.rotation < 0 ) this.rotation += ( 2 * Math.PI );
            this.draw ();
        }
        
        if ( this.ENDCALLED ) {
            //log ( "rot: " + this.rotation + " != " + this.endrotation );
            
        }
     };
     
     this.setPos = function ( xp, yp ) {
         this.xp = xp;
         this.yp = yp;
         this.draw ();
         var clearlength = this.length + ( this.thickness / 2 );
         this.clearBounds = { w: clearlength, h: clearlength };
     };
     
     this.callEnd = function () {
        this.ENDCALLED = true;
     };
     
     this.setVisible = function ( b ) {
         //log ( "setvisible: " + b + ", animatingline " );
         if ( this.visible === b ) return;
         else {
             this.visible = b;
             this.draw ();
         }
     };
     
     this.draw ();
     ANIMATORCONTROLLER.registerObject ( this );
 };


