/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var HeaderCanvas = function () {
    
    
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
        
        
        ctx.lineWidth = 2;
        ctx.font = "21px Lato Black";
        
        //ctx.shadowBlur = 3;
        //ctx.shadowOffsetX = 1;
        //ctx.shadowOffsetY = 0;
        
        ctx.globalAlpha = "1";
        
        var text = "LYRAN RENEGADES PRESENT";
        var tw = ctx.measureText ( text ).width;
        var xp = ( w / 2 ) - ( tw * this.scalew / 2 );
        var yp = 23;
        xp /= this.scalew;
        //ctx.textAlign = "center";
        console.log ( "xp" + xp + " halftw: " + ( tw * this.scalew / 2 ) );
        
        
        //ctx.shadowColor = "#000000";
        ctx.fillStyle = "#ff00ff";
        ctx.fillText ( text, xp, yp );
        ctx.strokeStyle = "#ff00ff";
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
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 42px MV Boli";
        
        yp += 50;
        
        var title = "(EARTH, yr20s:) A Tale about SMARTNESS";
        var tw = ctx.measureText ( title ).width;
        xp = ( w / 2 ) - ( tw  / 2 );
        ctx.fillText ( title, xp, yp )

        
        
    };
    
    
    
    
};