/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ResizeManager = function () {
    
    /*PROPERTIES*/
    this.WIDTH = 0;
    this.HEIGHT = 0;
    
    this.FS_REFS = [];//references to fullscreen objects
    
    
    this.initialize = function () {
        //window.addEventListener ( 'resize', this.newSize, false );
        $ ( window ).on ( "resize", $.proxy ( this, "newSize" ) );
        
        this.registerForFS ( $ ( "#cnv_layer1" ) [ 0 ] );
        this.registerForFS ( $ ( "#cnv_layer10" ) [ 0 ] );
        this.registerForFS ( $ ( "#cnv_layer20" ) [ 0 ] );
        this.registerForFS ( $ ( "#cnv_layer30" ) [ 0 ] );
        this.registerForFS ( $ ( "#cnv_layer40" ) [ 0 ] );
        
        this.newSize ();        
    };
    
    this.newSize = function () {
        //set global sizes
        this.WIDTH = window.innerWidth;
        this.HEIGHT = window.innerHeight;
        
        //MAIN.log ( "w: " + this.WIDTH + ", " + this.HEIGHT );
        
        
        //fullscreen all registered canvii
        this._setFS_CANVI ();
        
        
    };
    
    this.registerForFS = function ( element ) {
        MAIN.log ( "registerForFS: " + element );
        this.FS_REFS.push ( element );
        
    };
    
    
    /////////////
    // PRIVATE //
    /////////////
    
    //sets all registered canvi to fullscreen
    this._setFS_CANVI = function () {
        var i = 0;
        var l = this.FS_REFS.length;
        var c;
        var ctx;
        for ( i = 0; i < l; i ++ ) {
            c = this.FS_REFS [ i ];
            ctx = c.getContext ( "2d" );
            c.width = this.WIDTH;
            c.height = this.HEIGHT;

            $ ( c ).css ( {
                width: this.WIDTH + "px",
                height: this.HEIGHT + "px"
            });            
        }
        
    };
    
    
    
};
