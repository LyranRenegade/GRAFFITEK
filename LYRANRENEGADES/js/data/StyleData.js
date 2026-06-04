/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var StyleData = function () {


    this.author_colors = [
        {
            //Simon Says / spirit
            bgr: "rgb(255,0,205)",
            txt: "rgb(255,100,205)"
        },
        {
            //The Orion Council / Fire
            bgr: "rgb(255,3,77)",
            txt: "rgb(255,103,77)"
        },
        {
            //?? / Air
            bgr: "rgb(205,255,0)",
            txt: "rgb(205,255,100)"
        },
        {
            //?? / Water
            bgr: "rgb(3,77,205)",
            txt: "rgb(3,177,205)"
        },
        {
            //UNDA / Earth
            bgr: "rgb(255,205,0)",
            txt: "rgb(255,205,100)"
        }        
    ];
    
    
    
    this.getFontStyle = function ( id ) {
        
        var font = "Tahoma";
        var clr = "#ffffff";
        var fontsize = 14;
        
        
        switch ( id ) {
            case "siteloader":
                fontsize = 12;
                break;
            case "wordpicker":
                font = "roboto_mono_regular";
                fontsize = 12;
                break;                
            case "test":
                fontsize = 14;
                font = "roboto_mono_regular";
                break;
            case "tooltip":
                font = "roboto_mono_regular";
                clr = GLOBALDATA.CLR_BLACK;
                fontsize = 14;                
                break;
            case "wordnavbutton":
                font = "roboto_mono_regular";
                font = "arial_narrow_regular";
                fontsize = 14;
                clr = "#ffffff";
                break;
            case "welcome_message":
                font = "roboto_mono_thin";
                fontsize = 40;
                clr = GLOBALDATA.CLR_DARKRED;
                break;
            case "wrd_title":                
                fontsize = 33;
                font = "roboto_mono_medium";
                clr = GLOBALDATA.CLR_GOLD;
                break;
            case "wrd_title_addendum":
                fontsize = 16;
                font = "roboto_mono_regular";
                clr = GLOBALDATA.CLR_GREY2;
                break;            
            case "wrd_tldr":
                fontsize = 16;
                font = "roboto_mono_bold";
                clr = GLOBALDATA.CLR_DARKRED;
                break;
            case "wrd_expl":
                fontsize = 12;
                font = "roboto_mono_regular";
                clr = GLOBALDATA.CLR_WHITE;
                break;        
            case "wrd_closebanner":
                fontsize = 12;
                font = "roboto_mono_regular";
                clr = "#ff0000";//GLOBALDATA.CLR_DARKRED;
                break;
        }
        
        
        
        return MAIN._htmlshortcuts.FONT ( font, fontsize, clr );
        
    };
    
    this.getCanvasFontStyle = function ( id ) {
        
        var fontstyle = "30px Arial";
        switch ( id ) {
            case "cascade_symbol":
                fontstyle = "bold 16px Tahoma";
                break;
            
        }
        
        return fontstyle;
    };
    
    this.getStyle = function ( id ) {
        var style = "";
        switch ( id ) {
            case "wordnavbutton":
                style = "margin-right:7px;margin-top:7px;display:inline-block; border-color:" + GLOBALDATA.CLR_DARKGREY + "; border-style: solid; border-width: 2px; background-color:#000000;padding-left:7px;padding-right:7px;padding-bottom:2px;padding-top:2px;border-radius:0px;";
                break;
            case "def_circlebutton":
                style = {
                    width: 12,
                    height: 12,
                    bgcolor: "#000000",
                    defcolor: "#ffffff",
                    overcolor: GLOBALDATA.CLR_GOLD,
                    linethickness: 1,
                    fillcolors: [ GLOBALDATA.CLR_BLACK, "rgb(255,3,77)", "rgb(205,255,0)", "rgb(3,77,205)", GLOBALDATA.CLR_GOLD, GLOBALDATA.CLR_WHITE ]
                   
                };
                break;
            case "welcome_message":
                style = "position:relative;line-height:40px;margin-top:7px;display:block;background-color:" + GLOBALDATA.CLR_GOLD + ";padding-left:10px;padding-right:13px;padding-bottom:10px;padding-top:10px;border-radius:1px;white-space:nowrap;";
                style += this.getFontStyle ( id );
                break;
            case "wrd_title":
                style = "position:relative;top:-5px;white-space:nowrap;";
                style += this.getFontStyle ( id );
                break;
            case "wrd_title_addendum":
                style = "margin-top:12px;margin-left:5px;margin-right:7px;white-space:nowrap;";
                style += this.getFontStyle ( id );
                break;
            case "wrd_tldr":
                style = "display:block;margin-left:0px;margin-top:10px;text-decoration:none;padding-left:0px;padding-right:0px;";//background-color:" + GLOBALDATA.CLR_WHITE + ";";
                style += this.getFontStyle ( id );
                break;                
            case "wrd_expl":
                style = "display:block;margin-top:24px;";
                style += this.getFontStyle ( id );
                break;
            case "wrd_div":
                style = "margin-left:66px;display:flex;overflow:hidden;";
                break;     
            case "wrd_div2":
                style = "margin-left:70px;";
                break;                     
            case "wrd_cnv":
                style = "margin-left:0px;margin-top:0px;position:absolute";
                break;
            case "wrd_closebanner":
                style = "flex-grow:1;margin-top:15px;margin-left:5px;margin-bottom:12px;display:inline;width+100%;background-color:" + GLOBALDATA.CLR_PURPLE + ";padding-left:10px;padding-right:0px;padding-bottom:0px;padding-top:0px;border-radius:1px;";
                style += this.getFontStyle ( id );
                break;
            case "wrd_cmnt_div":
                style = "margin-bottom:5px;";
                break;
            case "wrd_hr":
                style = "border-style:solid;border-color:rgb(72,72,72);"
                break;
        }
        
        return style;
        
    };
    
    this.getWordCommentStyle = function ( type, clrdata ) {
        var style = "";
        

        
        //clrdata
        /*
            bgr: "rgb(205,255,0)",
            txt: "rgb(205,255,100)"            
         */
        
        if ( type === "button" ) {
            style += "font-size:12px;color:rgb(0,0,0);padding-left:10px;padding-right:10px;padding-bottom:1px;font-family:roboto_mono_bold;background-color:" + clrdata.bgr + ";";
        }
        else if ( type === "text" ) {
            style = "font-family:roboto_mono_regular;font-size:12px;margin:10px;color:" + clrdata.txt + ";";
        }   
        

        
        
        return style;
    };
    
    
    
    
    
    
    
    
    
    
    
    
    
    
};