/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var HTMLshortcuts = function () {
    
    
    this.FONT = function ( fonttype, pixelsize, color ) {
      if ( !color ) color = "#000000";
      var fontname;
      switch ( fonttype.toLowerCase () ) {
          case "bold": fontname = "arial_narrow_bold";break;
          case "bold_italic": fontname = "arial_narrow_bold";break;
          case "italic": fontname = "arial_narrow_italic";break;
          case "roboto_mono_thin": fontname = "roboto_mono_thin";break;
          case "roboto_mono_regular": fontname = "roboto_mono_regular";break;
          case "roboto_mono_medium": fontname = "roboto_mono_medium";break;
          case "roboto_mono_bold": fontname = "roboto_mono_bold";break;
          case "regular": fontname = "arial_narrow_regular";break;
          default: fontname = fonttype;//"arial_narrow_regular";//"arial_narrow_regular";    
      }
      return " font-family:" + fontname + "; font-size:" + String ( pixelsize ) + "px; color:" + color + "; ";
    };

    this.POSITION = function ( xp, yp ) {
        return " position:absolute; left:" + xp + "px; top:" + yp + "px; ";
    
    };
    
};