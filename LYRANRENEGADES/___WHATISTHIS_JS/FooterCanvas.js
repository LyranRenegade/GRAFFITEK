/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var FooterCanvas = function () {
    
    
    this.ctx = null;
    this.scalew = 1;
    this.h = 0;
    this.w = 0;
    this.title = "test";
    this.canvas = null;
    
    this.create = function ( ctxid, w, h ) {
        var canvas = document.createElement ( 'canvas' );
        this.canvas = canvas;
        this.h = h;
        this.w = w;
        
        canvas.id = ctxid;
        canvas.width = w;
        canvas.height = h;
        var ctx = canvas.getContext( '2d' );
        ctx.scale ( this.scalew, 1 );
        
        this.ctx = ctx;
        
        this.redraw ( w );
        return canvas;
    };
    
    
    this.setTitle = function ( t ) {
        this.title = t;
        this.redraw ( this.w );
    };
    
    this.redraw = function ( w ) {
        this.w = w;
        ctx = this.ctx;
        ctx.clearRect ( 0, 0, 3000, this.h );
     
        ctx.globalAlpha = "1";
        ctx.fillStyle = "#ffffff";
        ctx.strokeStyle = "#000000";
        ctx.font = "bold 21px MV Boli";
        ctx.lineWidth = 1;
        
        var title = "- " + this.title + " -";
        var tw = ctx.measureText ( title ).width;
        var yp = 60;
        var xp = ( w / 2 ) - ( tw  / 2 );
        ctx.fillText ( title, xp, yp );
        ctx.strokeText ( title, xp, yp );
        
        
    };
    
    
    
    
};