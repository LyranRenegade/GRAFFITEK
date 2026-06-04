/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var HeaderCanvas = function () {
    
    this.headercolor = "#8665ff";
    this.headercolorD = "#7450a7";
    this.ctx = null;
    this.scalew = 2;
    this.h = 0;
    
    this.create = function ( ctxid, w, h ) {
        var canvas = document.createElement ( 'canvas' );
        this.h = h;
        canvas.id = ctxid;
        canvas.width = w;
        canvas.height = h;
        //canvas.style.zIndex = zindex;
        //canvas.style.position = "absolute";
        //document.body.appendChild ( canvas );
        //log ( "ctxid: " + ctxid );

        //var cnv = getCanvas ( ctxid );
        //log ( "cnv: " + cnv + " canvas " + canvas );
        var ctx = canvas.getContext( '2d' );
        ctx.scale ( this.scalew, 1 );
        //var ctx = getContext ( ctxid );
        
        
        this.ctx = ctx;
        
        this.redraw ( w );
        return canvas;
    };
    
    this.redraw = function ( w ) {
        ctx = this.ctx;
        ctx.setTransform ( this.scalew, 0, 0, 1, 0, 0 );
        ctx.clearRect ( 0, 0, 3000, this.h );
        
        
        
        ctx.font = "21px Lato Black";
        
        //ctx.shadowBlur = 3;
        //ctx.shadowOffsetX = 1;
        //ctx.shadowOffsetY = 0;
        
        ctx.globalAlpha = "1";
        
        var text = "LYRAN RENEGADES PRESENT";
        var tw = ctx.measureText ( text ).width;
        var xp = ( w / 2 ) - ( tw * this.scalew / 2 );
        var yp = 40;
        xp /= this.scalew;
        //ctx.textAlign = "center";
        console.log ( "xp" + xp + " halftw: " + ( tw * this.scalew / 2 ) );
        
        
        //ctx.shadowColor = "#000000";
        ctx.fillStyle = this.headercolorD;
        ctx.fillText ( text, xp, yp );
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#000000";
        ctx.strokeText ( text, xp, yp );
        
        /*
        xp += ( ctx.measureText ( "LYRAN" ).width + 1 );
        
        ctx.shadowColor = "#000000";
        ctx.fillStyle = "#000000";
        ctx.fillText ( "RENEGADES", xp, yp );
        ctx.strokeStyle = "#ffffff";
        ctx.strokeText ( "RENEGADES", xp, yp );
        */
       
        ctx.setTransform ( 1, 0, 0, 1, 0, 0 );
        ctx.globalAlpha = "1";
        ctx.fillStyle = this.headercolor;
        ctx.font = "bold 36px MV Boli";
        
        yp += 26;
        
        var title = "(EARTH, the soaring twenties:) A Tale about SMARTNESS";
        var tw = ctx.measureText ( title ).width;
        xp = ( w / 2 ) - ( tw  / 2 );
        ctx.fillText ( title, xp, yp )
        ctx.strokeText ( title, xp, yp )

        
        
    };
    
    
    
    
};