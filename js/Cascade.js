
var CascadeButtonManager = function () {
    this.amount = 0;
    
    
    this.createButton = function ( tooltip ) {
        
        var cascadebutton = new CascadeButton ( this.amount, tooltip );
        
        this.amount ++;
        return cascadebutton;
    };
    
    
    
    
};



var CascadeButton = function ( index, tooltip ) {
    
    
    this.index = index;
    this.tooltip = tooltip;
    
    this.STATE_CLOSED = "c";
    this.STATE_OPEN = "o";
    
    this.BACKCLR = GLOBALDATA.CLR_BLACK;
    //this.EDGECLR = GLOBALDATA.CLR_GREY;
    this.LINECLR_OVER = GLOBALDATA.CLR_WHITE;
    this.LINECLR_OUT = GLOBALDATA.CLR_GREY;
    
    
    
    this.SIZE = 12;
    this.EDGEROOM = 2;
    this.LINEWIDTH = 1.5;
    
    this.canvas = document.createElement ( "canvas" );
    this.canvas.id = "cascade_" + String ( this.index );
    this.canvas.width = this.SIZE;
    this.canvas.height = this.SIZE;
    
    this.canvas.style.zIndex = 10;
    //this.canvas.style.display = "inline";
    this.canvas.style.position = "relative";
    this.canvas.style.top = "2px";
    
    this.enabled = false;
    
    this.state = this.STATE_CLOSED;
    this.over = false;
    
    
    this._mouseOver = function ( e ) {
        //log ( "cascadebutton: " + index + " mouseOver" );
        this.over = true;
        this._redraw ();
        
        var cid = "#" + String ( this.canvas.id );
        var pos = $ ( cid ).offset ();
        
        var margin = 2;
        
        var x = pos.left + this.SIZE + margin;
        var y = pos.top;
        
        
        
        TOOLTIPMANAGER.invokeTip ( this.tooltip, x, y );
    };
    this._mouseOut = function ( e ) {
        //log ( "cascadebutton: " + index + " _mouseOut" );
        this.over = false;
        this._redraw ();        
        TOOLTIPMANAGER.revokeTip ();
    };
    this._mouseDown = function ( e ) {
        //log ( "cascadebutton: " + index + " _mouseDown " );
        
        this._changeState ();
        TOOLTIPMANAGER.revokeTip ();
    };   
    
    this._changeState = function () {
        if ( this.state === this.STATE_CLOSED ) this.state = this.STATE_OPEN;
        else this.state = this.STATE_CLOSED;
        
        
        var cid = "#" + String ( this.canvas.id );
        $ ( cid ).trigger ( "stateTo_" + this.state );
         this._redraw ();
    };
    
    this.setAble = function ( b ) {
        this.over = false;
        if ( this.enabled === b ) return;
        
        var cid = "#" + String ( this.canvas.id );
        
        $ ( cid ).off ( MOUSEHANDLER.MOUSEOVER );
        $ ( cid ).off ( MOUSEHANDLER.MOUSEOUT );
        $ ( cid ).off ( MOUSEHANDLER.MOUSEDOWN );
        var cursor = "default";
        if ( b ) {
            cursor = "pointer";
            $ ( cid ).on ( MOUSEHANDLER.MOUSEOVER, $.proxy ( this, "_mouseOver" ) );
            $ ( cid ).on ( MOUSEHANDLER.MOUSEOUT, $.proxy ( this, "_mouseOut" ) );
            $ ( cid ).on ( MOUSEHANDLER.MOUSEDOWN, $.proxy ( this, "_mouseDown" ) );
        }
        
        $ ( cid ).css ( "cursor", cursor );
        this.enabled = b;
        this._redraw ();
    };
    
    this._redraw = function () {
        this.ctx = getContext ( this.canvas.id );
        this.ctx.clearRect ( 0, 0, this.SIZE, this.SIZE );
        this.ctx.lineWidth = this.LINEWIDTH;
        
        this.ctx.fillStyle = this.BACKCLR;
        this.ctx.fillRect ( 0, 0, this.SIZE, this.SIZE );
        this.ctx.strokeStyle = ( this.over )? this.LINECLR_OVER : this.LINECLR_OUT;
        this.ctx.strokeRect ( 0, 0, this.SIZE, this.SIZE );
        
        
        
        //horizontal line
        this.ctx.beginPath ();
        this.ctx.moveTo ( this.EDGEROOM, this.SIZE / 2 );
        this.ctx.lineTo ( this.SIZE - this.EDGEROOM, this.SIZE / 2 );
        
        if ( this.state === this.STATE_CLOSED ) {
            //vertical line
            this.ctx.moveTo ( this.SIZE / 2, this.EDGEROOM );
            this.ctx.lineTo ( this.SIZE / 2, this.SIZE - this.EDGEROOM );
        }
        
        this.ctx.stroke ();
        this.ctx.closePath ();
        
    };
    
    this.setOver = function ( b ) {
        if ( b === this.over ) return;
        this.over = b;
        this.redraw ();
    };
    
    this.setState = function ( s ) {
        if ( this.state === s ) return;
        this.state = s;
        this.redraw ();
    };
    
    
    //this.redraw ();
    
    this.install = function () {
        this._redraw ();

        
    };
    
    
    
    
};