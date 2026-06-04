


var ButtonSetDIV = function ( baseid, buttonlist, clickevent ) {
    //this.ALIGNMENT_RIGHT = "RIGHT";
    //this.ALIGNMENT_LEFT = "LEFT";
    //this.alignment = alignment;
    
    /*  buttonlist:
     *  array with
     *  {
     *      label: label
     *      value: dispatchEvent-value
     * 
     * }
     * sv: scrollvalue for parentduc
     */
    
    /*CONSTANTS*/
    //this.BACKCLR_DEF = "rgba ()
    
    this.buttonlist = buttonlist;
    this.clickevent = clickevent;
    
    //this.parentid = parentid;
    this.baseid = baseid;
    
    this.fonttype = "arial_narrow_bold";
    this.fontsize = 20;
    this.fontcolor = GLOBALDATA.CLR_DARKGREY;
    
    this.fontovercolor = GLOBALDATA.CLR_WHITE;
    this.currentSV = 0;
    this.div = null;
    this.selected = -1;
    this.enabled = false;
    
    this.tooltip = "";
    
    this.install = function () {
        var i;
        var bl = this.buttonlist.length;
        var spandiv = "<div id=\"" + this.baseid + "\">";
        var id;
        var buttondata;
        for ( i = 0; i < bl; i ++ ) {
            buttondata = this.buttonlist [ i ];
            id = this.baseid + "_" + buttondata.value;
            spandiv += "<span id=\"" + id + "\" style=\"" + FONT ( this.fonttype, this.fontsize, this.fontcolor ) + " text-decoration:none;\">" + buttondata.label + "</span>";
            buttondata.spanid = id;
            if ( i < ( bl - 1 ) ) spandiv += "<br/>";
        }
        spandiv += "</div>";
        this.div = spandiv;
        
    };
    
    
    
    this.setSelected = function ( index ) {
        //set to -1 for none
        this.selected = index;
        TOOLTIPMANAGER.revokeTip ();
        if ( this.enabled ) this.setAble ( true );
    };
    
    this.setAble = function ( b ) {
        TOOLTIPMANAGER.revokeTip ();
        this.enabled = b;
        var i;
        var bl = this.buttonlist.length;
        var buttondata;
        var cursor;
        this.currentSV = 0;
        for ( i = 0; i < bl; i ++ ) {
            cursor = "default";
            buttondata = buttonlist [ i ];
            $ ( "#" + buttondata.spanid ).css ( "color", this.fontcolor );
            $ ( "#" + buttondata.spanid ).off ( MOUSEHANDLER.MOUSEOVER, $.proxy ( this, "_mouseOver" ) );
            $ ( "#" + buttondata.spanid ).off ( MOUSEHANDLER.MOUSEOUT, $.proxy ( this, "_mouseOut" ) );
            $ ( "#" + buttondata.spanid ).off ( MOUSEHANDLER.CLICK, $.proxy ( this, "_mouseClick" ) );
            
            if ( b && ( this.selected !== i ) ) {
                $ ( "#" + buttondata.spanid ).on ( MOUSEHANDLER.MOUSEOVER, $.proxy ( this, "_mouseOver" ) );
                $ ( "#" + buttondata.spanid ).on ( MOUSEHANDLER.MOUSEOUT, $.proxy ( this, "_mouseOut" ) );
                $ ( "#" + buttondata.spanid ).on ( MOUSEHANDLER.CLICK, $.proxy ( this, "_mouseClick" ) );                
                cursor = "pointer";
            }
            
            $ ( "#" + buttondata.spanid ).css ( "cursor", cursor );
            
            if ( this.selected === i ) {
                $ ( "#" + buttondata.spanid ).css ( {
                    textDecoration: "underline",
                    color: GLOBALDATA.CLR_WHITE
                });
            }
            else {
                $ ( "#" + buttondata.spanid ).css ( {
                    textDecoration: "none"
                });                
            }
        }
        var display = b? "block" : "none";
        $ ( "#" + this.baseid ).css ( {
            display: display
        });
        
    };
    
    
    // PRIVATE //
    
    this._mouseOver = function ( e ) {
        //log ( "mouseOver: " + e.currentTarget );
        $ ( "#" + e.currentTarget.id ).css ( { 
            color: this.fontovercolor,
            textDecoration: "underline"
        });
        
        var buttondata = this._getButtonData ( e.currentTarget.id );
        
        if ( buttondata.tooltip !== "" ) {
            var cid = "#" + e.currentTarget.id;
            var pos = $ ( cid ).offset ();

            var margin = 2;

            var x = pos.left + $ ( cid ).width () + margin;
            var y = pos.top;            
            TOOLTIPMANAGER.invokeTip ( buttondata.tooltip, x, y );
        }
        
    };
    this._mouseOut = function ( e ) {
        //log ( "_mouseOut: " + e.currentTarget );
        $ ( "#" + e.currentTarget.id ).css ( { 
            color: this.fontcolor,
            textDecoration: "none"
        });        
        //if ( this.tooltip !== "" ) {
            TOOLTIPMANAGER.revokeTip ();
        //}
        
    };
    
    this._getButtonData = function ( id ) {
        var li_ = id.indexOf ( "_" );
        var value = id.substr ( li_ + 1 );
        
        var i;
        var bl = this.buttonlist.length;
        var buttondata;
        for ( i = 0; i < bl; i ++ ) {
            buttondata = buttonlist [ i ];
            if ( String ( buttondata.value ) === String ( value ) ) {
                return buttondata;
            }
        }        
        return null;
    };
    
    
    this._mouseClick = function ( e ) {
        var buttondata = this._getButtonData ( e.currentTarget.id );
        this.currentSV = buttondata.sv;
        $ ( document ).trigger ( this.clickevent );
        TOOLTIPMANAGER.revokeTip ();
    };    
    
    
    
    
    this.install ();
    
    
    
};

