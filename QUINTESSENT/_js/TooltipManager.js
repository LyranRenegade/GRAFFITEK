////////////////////////
/// QUINTESSENT 2017 ///
////////////////////////


var TooltipManager = function () {
    
    
    this.parentid = "#tooltipdiv";
    
    this.font = "quattrocento_regular";
    this.fontcolor = GLOBALDATA.CLR_BLACK;
    this.fontsize = 14;
    
    this.initialize = function () {
        var html = "<span id=\"tooltip\" style=\"display:none; border-color:#000000; border-style: solid; border-width: 1px; background-color:#ffff00; position:fixed; padding-left:5px;padding-right:5px;padding-bottom:1px;border-radius:2px;" + FONT ( this.font, this.fontsize, this.fontcolor ) + "\">TEST</span>";
        
        $ ( this.parentid ).append ( html );
    };
    
    this.invokeTip = function ( tip, x, y ) {
        $ ( "#tooltip" ).html ( tip );
        $ ( "#tooltip" ).css ( {
            left: String ( x ) + "px",
            top: String ( y ) + "px"
        });
        
        $ ( "#tooltip" ).fadeIn ( 200 );
        
    };
    
    this.revokeTip = function () {
        $ ( "#tooltip" ).fadeOut ( 100 );
        
    };
    
    
    
    
    
    
    
    
    this.initialize ();
};