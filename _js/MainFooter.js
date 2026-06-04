

var MainFooter = function () {
    
    
    this.textlines = [ "`>I'VE GOT A SLOW PC>`    `>TEXT OPTIONS>`    `TEXT-SPEED:` as intended    `>LYRANRENEGADES.NET>`    " ];
    this.linklabels = [ { label: "slowpc", rect: { x: 0, y: 0, w: 0, h: 0 } }, { label: "freakysnot", rect: { x: 0, y: 0, w: 0, h: 0 } }, { label: "lyranrenegades", rect: { x: 0, y: 0, w: 0, h: 0 } } ];
    this.TEXTTICKER = null;
    
    this.initialze = function () {
        this.TEXTTICKER = new TextTicker ( this.linklabels, this.textlines, "footercanvas" );
        this.TEXTTICKER.font = "10pt roboto_mono_regular";
        this.TEXTTICKER.charwidth = 7;
        this.TEXTTICKER.lineheight = 14;
        this.TEXTTICKER.initialize ();
        $ ( document ).on ( "click_slowpc", $.proxy ( this, "_clickSlowPc" ) );
        $ ( document ).on ( "click_freakysnot", $.proxy ( this, "_clickFreakySnot" ) );
        $ ( document ).on ( "newMainTopic", $.proxy ( this, "_newMainTopic" ));
        $ ( document ).on ( "click_lyranrenegades", $.proxy ( this, "_clickLyranRenegades" ) );
        this.TEXTTICKER.setHidden ( false );
        this.TEXTTICKER.setActive ( true );
    };
    
    
    /////////////
    // PRIVATE //
    /////////////
    
    this._clickSlowPc = function () {
        log ( "_clickSlowPc" );
    };

    this._clickFreakySnot = function () {
        log ( "_clickFreakySnot" );
    };    
    
    this._clickLyranRenegades = function () {
        window.open ( "http://www.lyranrenegades.net", "_blank" );
        log ( "_clickLyranRenegades" );
    };    
    
    this._newMainTopic = function () {
        
    };
    
    //this.initialze ();
    
};