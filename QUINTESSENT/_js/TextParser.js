////////////////////////
/// QUINTESSENT 2017 ///
////////////////////////





var TextParser = function () {
    
     /*
     * ^: CLR_1
     * $: CLR_2
     * %: CLR_3
     * `: GREY
     * <: WHITE
     * >: LINK
     * >: escape next character
     * #: underline start
     * |: DCLR_1    
     * +: CLR_4
    */
   
    this.keys = [ 
        { key: "^", style: "color: " + GLOBALDATA.HL_CLR1 + "; " },
        { key: "$", style: "color: " + GLOBALDATA.HL_CLR2 + "; "},
        { key: "%", style: "color: " + GLOBALDATA.HL_CLR3 + "; "},
        { key: "+", style: "color: " + GLOBALDATA.HL_CLR4 + "; "},
        { key: "`", style: "color: " + GLOBALDATA.CLR_GREY + "; " },
        { key: "<", style: "color: " + GLOBALDATA.CLR_BLACK + "; " },
        { key: "|", style: "color: " + GLOBALDATA.DL_CLR2 + "; " },
        { key: "#", style: "text-decoration: underline; " },
        { key: "&", style: "font-family: quattrocento_regular; font-size: 18px; color: " + GLOBALDATA.CLR_BLACK + "; " },
        { key: "*", style: "font-family: quattrocento_regular; font-size: 26px;" }
    ];
    
    
    this._getStyle = function ( char ) {
        var i;
        var kl = this.keys.length;
        var keydata;
        for ( i = 0; i < kl; i ++ ) {
            keydata = this.keys [ i ];
            if ( keydata.key === char ) {
                return keydata.style;
            }
        }
        return "";
    };

    this.addOptionalText = function ( txt, parentid, tooltip, nested, inserted ) {
        var newtext = this.parseText ( txt );
        
        //create a span with the button and a span with the text
        //button is visible def state -> text invisible
        //button is invisible open state -> text visible

        var button = CASCADEBUTTONMANAGER.createButton ( tooltip );

        var spanid = "optionalspan_" + String ( button.index );
        var buttonspanid = "cascade_button_" + String ( button.index );
        var textspanid = "optionaltext_" + String ( button.index );
        
        var optionalHTML = "<span id=\"" + spanid + "\">";
        optionalHTML += "<span id=\"" + buttonspanid + "\"></span>";
        optionalHTML += "<span id=\"" + textspanid + "\" style=\"display:none;\"><span>" + newtext + "</span></span>";
        optionalHTML += "</span>";
        
        $ ( parentid ).append ( optionalHTML );
        $ ( "#" + buttonspanid ).append ( button.canvas );
        
        var paddingright = nested? 0 : 2;
        
        var backclr = inserted? GLOBALDATA.DL_CLR3: GLOBALDATA.DL_CLR1;
        
        $ ( "#" + textspanid ).css ( {
            backgroundColor: backclr,
            marginLeft: "5px",
            paddingLeft: "4px",
            paddingRight: String ( paddingright ) + "px",
            color: GLOBALDATA.CLR_WHITE
            
        });
        $ ( "#" + spanid ).css ( {
            marginLeft: "5px",
            marginRight: "5px"
            //lineHeight: "22px"
        });
        
        
        
        
        $ ( "#" + button.canvas.id ).on ( "stateTo_" + button.STATE_CLOSED, $.proxy ( this, "_closeText" ) );
        $ ( "#" + button.canvas.id ).on ( "stateTo_" + button.STATE_OPEN, $.proxy ( this, "_openText" ) );
        
        button.install ();
        button.setAble ( true );
        
        return textspanid;
    };
    
    this._openText = function ( e ) {
        //log ( "openText: " + e.target.id );
        var ui = String ( e.target.id ).lastIndexOf ( "_" );
        var index = String ( e.target.id ).substr ( ui + 1 );
        //log ( "index: " + index );
        
        var textid = "#optionalspan_" + String ( index ) + " #optionaltext_" + String ( index );
        $ ( textid ).css ( "display", "inline" );
        $ ( document ).trigger ( "textChange" );
        //logObject ( e );
    };
    
    this._closeText = function ( e ) {
        //log ( "_closeText: " + e.target.id );
        var ui = String ( e.target.id ).lastIndexOf ( "_" );
        var index = String ( e.target.id ).substr ( ui + 1 );
        //log ( "index: " + index );
        
        var textid = "#optionalspan_" + String ( index ) + " #optionaltext_" + String ( index );
        $ ( textid ).css ( "display", "none" );      
        $ ( document ).trigger ( "textChange" );
    };
    
    
    this.parseText = function ( txt, anchorname ) {
        var parsedtext = "";
        
        if ( anchorname !== undefined ) {
            parsedtext += "<a name=\"" + anchorname + "\"/>";
        }
        
        var spans_open = [];
        var tl = txt.length;
        var i;
        var char;
        var style;
        var ignorenext = false;
        
        var si;
        for ( i = 0; i < tl; i ++ ) {
            char = txt [ i ];
            
            
            
            if ( ignorenext) {
                parsedtext += char;
                ignorenext = false;
            }
            else {
                style = this._getStyle ( char );

                if ( style !== "" ) {
                    si = arrayIndexOf ( spans_open, char );
                    if ( si !== -1 ) {
                        parsedtext += "</span>";
                        spans_open.splice ( si, 1 );
                    }
                    else {
                        parsedtext += "<span style=\"" + style + "\">";
                        spans_open.push ( char );
                    }
                }
                else {
                    if ( char === ">" ) {
                        //log ( "ignorenext" );
                        ignorenext = true;
                    }
                    else if ( char === "~" ) {
                        //tilde
                        parsedtext += "<br/>";
                    }
                    else if ( char === "_") {
                        //underscore
                        parsedtext += "<span style=\"background-color:#ffffff;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>";
                    }
                    else parsedtext += char;
                }
            }
        }
    
        return parsedtext;
    };
    
    
    
    
    
    
    
    
};