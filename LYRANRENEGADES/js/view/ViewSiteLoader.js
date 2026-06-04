/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var ViewSiteLoader = function ( parentid ) {
    
    this.parentid = parentid;
    this.id = "v_sl";
    
    
    
    this.build = function () {
        var sl_paragrah = "<p id=\"" + this.id + "\" style=\"" + MAIN._styledata.getFontStyle ( "siteloader" ) + MAIN._htmlshortcuts.POSITION ( 12, 12 ) + "\"></p>";
        
        $ ( "#" + this.parentid ).append ( sl_paragrah );        
        $ ( "#" + this.id ).addClass ( "unselectable" );
        

        this.setMessage ( "loading" );
    };
    
    this.setMessage = function ( s ) {
        $ ( "#" + this.id ).html ( s );
        
    };
    
  
    
    
    
};