/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var GlobalData = function () {
    
    this.PAGE_HOR_MARGINS = 20;
    
    
    /*
    this.navdata = new NavData ();
    this.currentpage = {};
    
    this.setCurrentPage = function ( field, val, push ) {
        
        log ( "setcurrentpage: " + field + " -> " + val );
        switch ( field ) {
            case "language":
            case "mainpage":
            case "overviewtag":
            case "subpage":
                this.currentpage [ field ] = val;
                break;
            default:
                log ( "invalid field [" + field + "] in GLOBALDATA.currentpage setting" );
        };
        if ( push ) this._pushHistory ();
    };
    
    this._pushHistory = function () {
        this.currentpage.colorscheme = LANGUAGEMANAGER.colorscheme;
        history.pushState ( this.currentpage, "", "" );
    };
    */
   
   this.getElementColor = function ( id ) {
       //SPIRIT, FIRE, AIR, WATER, EARTH       
       var colors_def = [ "#ffffff", "#ff0074", "#ff9700", "#138bff", "#97ff00" ];
       
       return colors_def [ id - 1 ];
       
   };
   
   
    this.CLR_GOLD = "#FFCD00";
    this.CLR_PURPLE = "#2d0f55";
    this.CLR_DARKRED = "#bf034d";//"#990000";
    this.CLR_BLUE = "#0000ff";
    
    this.CLR_WHITE = "#ffffff";
    this.CLR_WHITEYELLOW = "#ffffd0";
    this.CLR_WHITEBLUE = "#d0ffff";
    
    this.CLR_GREY = "#e0e0e0";
    this.CLR_GREY2 = "#999999";
    this.CLR_BLACK = "#000000";
    this.CLR_DARKGREY = "#666666";
    this.CLR_VERYDARKGREY = "#333333";
    //http://colorschemedesigner.com/csd-3.5/#2K32Pw0w0w0w0
    
    this.HL_CLR1 = "#FFCD00";//"#fff800";//
    this.HL_CLR2 = "rgb(205,255,0)";//#2DD700";//"#05e937";//
    this.HL_CLR3 = "#f105bd";//"#FA3E54";//"#F5001D";
    this.HL_CLR4 = "#b0ff05";
    this.HL_CLR5 = "#b170db";
    this.DL_CLR1 = "rgb(3,77,205)";//#0000ff";//"#3016B0";//"#059a25";//
    this.DL_CLR2 = "#1D8B00";//"#9e055c";//
    this.DL_CLR3 = "#190773";
    
    this.NEWS_BACKGROUND_ALPHA = 0.6;
    
    /*
    var chars = "\*";
    
    for ( var i = 0; i < chars.length; i ++ ) {
        log ( i + " :" + chars [ i ] + ", code: " + chars.charCodeAt ( i ) );
    }*/
    
    
    

    
    
};