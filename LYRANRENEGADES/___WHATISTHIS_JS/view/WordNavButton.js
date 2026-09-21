


var WordNavButton = function ( id, type ) {
    
    
    
    
    this.id = id;
    this.type = type;
    this.spanid = "wnb_" + this.id + "_" + this.type;
    this.button_spanid1 = this.spanid + "_btn1";
    this.button_spanid2 = this.spanid + "_btn2";
    this.text_spanid = this.spanid + "_txt";
    
    this.html = "";
    
    this.buttonclose;
    this.buttonselect;
    this.active = false;
    
    this.buildHTML = function () {
        
        var html = "<span id='" + this.spanid + "' style='" + MAIN._styledata.getStyle ( "wordnavbutton" ) + MAIN._styledata.getFontStyle ( "wordnavbutton" ) + "' >";

        
        html += "<span id='" + this.button_spanid1 + "' style='margin:3px;'></span>";

        var worddata = MAIN._serverdata.getDataByID ( MAIN._serverdata.WORDS_ROOT, this.id );
        html += "<span id='" + this.text_spanid + "' style='margin-left:3px'>" + worddata.title.toUpperCase () + "</span>";
        html += "<span id='" + this.button_spanid2 + "' style='margin:4px;'></span>";
        html += "</span>";
        
        MAIN.log ( "building html for button: " + this.id );
        
        this.buttonclose = new CircleButton ( this.button_spanid1, "bc_" + this.id, "def_circlebutton", -1, 1, "cross" );
        this.buttonselect = new CircleButton ( this.button_spanid2, "bs_" + this.id, "def_circlebutton", 3, 1, "checkbox" );
        
        this.html = html;
    };
    
    this.install = function () {
        //MAIN.log ( "installing button: " + this.id );
        this.buttonclose.install ();
        this.buttonselect.install ();
        
        $ ( "#" + this.buttonclose.canvas.id ).on ( "crossdown", $.proxy ( this, "_closeWord" ) );        
    };
    
    this.setActive = function ( b ) {
        this._WRD_out ();
        this.active = b;
        var color = b? GLOBALDATA.CLR_GOLD : GLOBALDATA.CLR_WHITE;
        $ ( "#" + this.text_spanid ).css ( {
            color: color
        });
        this._setAble ( !b );
    };
    

    /////////////
    // PRIVATE //
    /////////////
    this._setAble = function ( b ) {
        var sid = "#" + this.text_spanid;
        var cursor = "default";
        $ ( sid ).off ( MOUSEHANDLER.MOUSEOVER );
        $ ( sid ).off ( MOUSEHANDLER.MOUSEOUT );
        $ ( sid ).off ( MOUSEHANDLER.CLICK );
        
        if ( b ) {
            cursor = "pointer";
            $ ( sid ).on ( MOUSEHANDLER.MOUSEOVER, $.proxy ( this, "_WRD_over" ) );
            $ ( sid ).on ( MOUSEHANDLER.MOUSEOUT, $.proxy ( this, "_WRD_out" ) );
            $ ( sid ).on ( MOUSEHANDLER.CLICK, $.proxy ( this, "_WRD_click" ) );         
        }
        $ ( sid  ).css ( "cursor", cursor );
    };
    
    this._WRD_over = function () {
        $ ( "#" + this.text_spanid ).css ( {
            textDecoration: "underline"
        });
    };
    this._WRD_out = function () {
        $ ( "#" + this.text_spanid ).css ( {
            textDecoration: "none"
        });
    };
    this._WRD_click = function () {
        var link = {
            id: this.id,
            type: NAVIGATIONMANAGER.LINKTYPE_WORD
        }
        NAVIGATIONMANAGER.openWordLinkDirect ( link );
    };    
    
    this._closeWord = function ( e ) {
        var id = e.target.id;
        var ui = String ( id ).lastIndexOf ( "_" );
        var index = String ( id ).substr ( ui + 1 );        
        log ( "_closeWord: " + index );
        NAVIGATIONMANAGER.removeWordLink ( index );
    };
    
};