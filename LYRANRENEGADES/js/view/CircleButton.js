


var CircleButton = function ( parentid, id, styleid, left, top, type ) {
    
    
    
    
    this.type = type;
    //valid types: 
    //cross
    //checkbox
    
    this.id = id;
    this.span_id = "cb_" + this.id;
    this.parentid = parentid;
    
    this.style = MAIN._styledata.getStyle ( styleid );    
    //styleid, e.g. "def_circlebutton", return object 
    /*
        style = {
            width: 20,
            height: 20,
            bgcolor: "#000000",
            defcolor: "#ffffff",
            overcolor: GLOBALDATA.CLR_GOLD,
            linethickness: 1,
            fillcolors: [ GLOBALDATA.CLR_GOLD, GLOBALDATA.CLR_DARKRED, GLOBALDATA.CLR_WHITE ]
        };
        
     */

    
    this.canvas = document.createElement ( "canvas" );
    this.canvas.id = "circlebutton_" + String ( this.id );
    this.canvas.width = this.style.width;
    this.canvas.height = this.style.height;
    this.canvas.style.position = "relative";
    this.canvas.style.zIndex = 10;
    
    this.canvas.style.left = String ( left ) + "px";
    this.canvas.style.top = String ( top ) + "px";
    
    
    this.STATE_DEF = "d";
    this.STATE_OVER = "o";
    
    this.state = this.STATE_DEF;
    //in case of checkbox
    this.CHECKED_AMOUNT = 0;
    if ( this.type === "checkbox" ) {
        if ( Math.random () < .05 ) {
            MAIN.log ( "RANDOM CHECKEDSTATE FOR CIRCLEBUTTON" );
            var fl = this.style.fillcolors.length;
            this.CHECKED_AMOUNT = Math.floor ( ( fl - 1 ) * Math.random () ) + 1;
        }
    }
    
    this.enabled = false;
    
    this.install = function () {
        var html = "<span id=\"" + this.span_id + "\"></span>";
        $ ( "#" + this.parentid ).append ( html );
        $ ( "#" + this.parentid + " #" + this.span_id ).append ( this.canvas );
        
        this.enabled = false;
        
        this.setAble ( true );
        
    };
    
    
    
    this.setAble = function ( b ) {
        this.state = this.STATE_DEF;
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
    
    
    this.getColor = function () {
        if ( this.type === "cross" ) {
            MAIN.log ( "cross type circlebutton getColor called", 1 );
        }
        return this.style.fillcolors [ this.CHECKED_AMOUNT ]
    };
    
    /////////////
    // PRIVATE //
    /////////////
    
    this._redraw = function () {
        this.ctx = getContext ( this.canvas.id );
        this.ctx.clearRect ( 0, 0, this.style.width, this.style.height );
        
        this.ctx.fillStyle = this.style.bgcolor;
        this.ctx.fillRect ( 0, 0, this.style.width, this.style.height );

        this.ctx.lineWidth = this.style.linethickness;
        //this.ctx.strokeStyle = ( this.over )? this.LINECLR_OVER : this.LINECLR_OUT;
        
        var cx = this.style.width / 2;
        var cy = this.style.height /2;
        
        this.ctx.beginPath ();
        var radius = Math.round ( ( Math.min ( this.style.width, this.style.height ) ) / 2 );
        this.ctx.arc ( cx, cy, radius, 0, 2 * Math.PI, false );
        this.ctx.closePath ();
        //this.ctx.strokeStyle = this.style.defcolor;
        this.ctx.strokeStyle = ( this.state === this.STATE_DEF )? this.style.defcolor : this.style.overcolor;
        this.ctx.stroke ();
        
        //CUSTOM PART
        if ( this.type === "cross" ) {
            //assume width and height are the same, it's a circle after all
            var dx = radius / ( Math.pow ( 2, 0.5 ) );
            this.ctx.beginPath ();
            this.ctx.moveTo ( cx - dx, cy - dx );
            this.ctx.lineTo ( cx + dx, cy + dx );
            
            this.ctx.moveTo ( cx + dx, cy - dx );
            this.ctx.lineTo ( cx - dx, cy + dx );
            
            this.ctx.closePath ();
            this.ctx.stroke ();
            
        }
        else if ( this.type === "checkbox" ) {
            radius -= 2;
            this.ctx.beginPath ();
            this.ctx.fillStyle = this.style.fillcolors [ this.CHECKED_AMOUNT ];
            this.ctx.arc ( cx, cy, radius, 0, 2 * Math.PI, false );
            this.ctx.closePath ();
            this.ctx.fill ();
            if ( this.CHECKED_AMOUNT === 0 ) this.ctx.stroke ();
        }
        
    };
    
    this._mouseOver = function () {
        this.state = this.STATE_OVER;
        this._redraw ();
    };
    this._mouseOut = function () {
        this.state = this.STATE_DEF;
        this._redraw ();
    };    
    this._mouseDown = function () {
        if ( this.type === "cross" ) {
            var cid = "#" + String ( this.canvas.id );
            $ ( cid ).trigger ( "crossdown" );
        }
        else if ( this.type === "checkbox" ) {
            this.CHECKED_AMOUNT ++;
            if ( this.CHECKED_AMOUNT >= this.style.fillcolors.length ) {
                this.CHECKED_AMOUNT = 0;
            }
            this._redraw ();
            $ ( "#" + this.canvas.id ).trigger ( "checkedChange", [ this.id, this.getColor() ] );
        }
        
        //MAIN.log ( "MOUSEDOWN ON CIRCLEBUTTON: " + this.id );
        //this._redraw ();
    };       
    
};