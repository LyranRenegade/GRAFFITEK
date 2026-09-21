


var TooltipManager = function () {
    
    
    this.parentid = "#tooltipdiv";
    
    this.timer = null;
    
    this.initialize = function () {
        var html = "<span id=\"tooltip\" style=\"display:none; border-color:#000000; border-style: solid; border-width: 1px; background-color:#ffff00; position:fixed; padding-left:5px;padding-right:5px;padding-bottom:1px;border-radius:2px;" + MAIN._styledata.getFontStyle ( "tooltip" ) + "\">TEST</span>";
        
        $ ( this.parentid ).append ( html );
    };
    
    this.invokeTip = function ( tip, x, y ) {
        $ ( "#tooltip" ).html ( tip );
        var ttw = $ ( "#tooltip" ).width ();
        /*MAIN.log ( "Ttw: " + ttw + ", sreenw: " + MAIN._resizemanager.WIDTH + " x + ttw: " + ( x + ttw ) );
        if ( ( x + ttw > MAIN._resizemanager.WIDTH ) && ( ( ttw + 2 ) < x ) ) {
            //put it on the rightside
            x -= ( ttw + 4 );
        }*/
        
        $ ( "#tooltip" ).css ( {
            left: String ( x ) + "px",
            top: String ( y ) + "px"
        });
        this.timer = setTimeout ( $.proxy ( this, "_show" ), 500 );
        
        
    };
    
    this.revokeTip = function () {
        if ( this.timer !== null ) {
            clearTimeout ( this.timer );
            this.timer = null;
        }
        $ ( "#tooltip" ).fadeOut ( 50 );
        
        
    };
    
    this._show = function () {
        $ ( "#tooltip" ).fadeIn ( 100 );
    };
    
    
    
    
    
    
    
    this.initialize ();
};