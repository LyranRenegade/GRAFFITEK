

var TextTicker = function ( linklabels, textlines, ctxid ) {
    
    
    this.caretindex = { line: 0, index: 0, lastisgarble: false, removed: 0, linksadded : 0, fs: GLOBALDATA.CLR_WHITE };
    this.allshown = false;
    this.installed = false;
    
    this.LINK = false;
    this.UNDERLINE = false;
    this.ESCAPENEXT = false;
    this.active = false;
    
    this.ctxid = ctxid;
    this.ctx = getContext ( ctxid );
    this.offsetX = 13;
    this.offsetY = 0;
            
    this.linklabels = linklabels;
    //[ { label: "emailme", rect: { x: 0, y: 0, w: 0, h: 0 } } ];
    
    this.textlines = textlines;
    this.pausecount = 0;
    this.PAUSEAMOUNT = 30;
    
    this.font = "12pt roboto_mono_regular";
    this.charwidth = 9;
    this.lineheight = 18;
    
    this.autoScrollDown = false;
    this.bottomroom = 140;
    this.scrollY = 0;
    
    this.hidden = true;
    
    /*
     * RESERVED SIGNS
     * ^: CLR_1
     * $: CLR_2
     * %: CLR_3
     * `: GREY
     * <: BACK
     * >: LINK
     * /: escape next character
     * #: underline start
     * |: DCLR_1
     */
    
    this.reset = function ( soft ) {
        if ( !soft ) {
            this.caretindex = { line: 0, index: 0, lastisgarble: false, removed: 0, linksadded : 0, fs: GLOBALDATA.CLR_WHITE };
            this.scrollY = 0;
            this.ctx.clearRect ( this.offsetX, this.offsetY, WIDTH, HEIGHT );
        }
        this.allshown = false;        
        this.LINK = false;
        this.ESCAPENEXT = false;
        this.UNDERLINE = false;
        this.ctx.font = this.font;
        this.ctx.fillStyle = GLOBALDATA.CLR_WHITE;
        this.ctx.strokeStyle = GLOBALDATA.CLR_WHITE;
        this.ctx.lineWidth = 1.5;
        this.ctx.textBaseline = "top";        
        
    };
    
    this.setNewText = function ( textlines ) {
        if ( textlines === this.textlines ) {
            log ( "TEXTTICKER " + ctxid + " newtext same as previous!" );
            return;
        }
        this.setActive ( false );
        this.reset ();
        this.textlines = textlines;
    };
    
    this.addNewText = function ( textlines ) {
        this.setActive ( false );
        this.reset ( true );
        this.textlines = this.textlines.concat ( textlines );
    };    
    
    this.initialize = function () {
        //log ( "init: " + this.allshown );
        this.installed = true;
        this.allshown = false;
        this.reset ();
        
        this.ctx.font = this.font;
        this.ctx.fillStyle = GLOBALDATA.CLR_WHITE;
        this.ctx.strokeStyle = GLOBALDATA.CLR_WHITE;
        this.ctx.lineWidth = 1.5;//0.5;
        this.ctx.textBaseline = "top";
        
        //this._resizeScreen ();
        $ ( document ).on ( "resizeUpdate2", $.proxy ( this, "_resizeScreen" ) );
    };
    
    this.setActive = function ( b ) {
        if ( this.textlines === false && b ) return;
        
        this.active = b;
        //log ( "textticker.setActive: " + b + " textlines " + this.textlines [ 0 ] );
        //log ( "linklabels: " + this.linklabels.length )
        $ ( document ).off ( "frameTick", $.proxy ( this, "_frameTick" ) );
        if ( b ) {
            //this.setHidden ( false );
            if ( !this.allshown ) {
                $ ( document ).on ( "frameTick", $.proxy ( this, "_frameTick" ) );
            }
        }

    };    
    
    this.setHidden = function ( b ) {
        if ( this.hidden === b ) return;
        this.hidden = b;
        if ( !b ) {
            this._resizeScreen ();
        }        
        
        var i;
        var ll = this.linklabels.length;
        for ( i = 0; i < ll; i ++ ) {
            if ( b ) {
                MOUSEHANDLER.unregisterListener ( this.linklabels [ i ] );
            }
            else MOUSEHANDLER.registerListener ( this.linklabels [ i ] );
        }
        
        
    };
    
    /////////////
    // PRIVATE //
    /////////////
    
    
    this._frameTick = function () {
        
        this._drawNextChar ( null );
    };
    
    this._drawNextChar = function ( givencaretindex ) {

        var lastrun = false;
        
        var caretindex = ( givencaretindex !== null )? givencaretindex : this.caretindex;
        //log ( "given? " + String ( givencaretindex !== null ) + " index: " + caretindex.index + ", line: " + caretindex.line + " id: " + ctxid );
        
        //CONSTANTS
        var succeschance = 1 / 2.5;
        var doublechance = 1 / 2;
        var char = "NONE";
        var charwidth = this.charwidth;
        var lineheight = this.lineheight;
        var offsetX = this.offsetX;
        var offsetY = this.offsetY;
        
        var currenttextline = this.textlines [ caretindex.line ];
        var nextchar = currenttextline.charAt ( caretindex.index );
        
        var inc = false;//jump to next character? 
        var remove = false;//remove last written character?
        var skipthis = false;//skip this char to next
        
        //current caret-index
        var xp = offsetX + ( ( caretindex.index - caretindex.removed ) * charwidth );
        var yp = offsetY + ( ( 1 + caretindex.line - this.scrollY ) * lineheight );        
        
        var ctx = this.ctx;
        
        if ( nextchar === "/" && !this.ESCAPENEXT ) {
            this.ESCAPENEXT = true;
            skipthis = true;
            inc = true;
            caretindex.removed +=1;     
            //log ( "escape next on" );
        }
        else if ( nextchar === "#" && !this.ESCAPENEXT ) {
            skipthis = true;
            inc = true;
            caretindex.removed +=1;            
            this.UNDERLINE = !this.UNDERLINE;
        }
        else if ( nextchar === ">" && !this.ESCAPENEXT ) {
            skipthis = true;
            inc = true;
            caretindex.removed +=1;
            this.LINK = !this.LINK;
            
            var linklabel = this.linklabels [ caretindex.linksadded ];
            
            if ( this.LINK ) {
                var top = $ ( "#" + this.ctxid ).offset ().top;
                var left = $ ( "#" + this.ctxid ).offset ().left;                
                linklabel.rect.x = left + xp;
                linklabel.rect.y = top + yp;
                linklabel.rect.h = lineheight;
            }
            else {
                var left = $ ( "#" + this.ctxid ).offset ().left;  
                linklabel.rect.w = xp - ( linklabel.rect.x - left );
                caretindex.linksadded ++;
                this._addLink ( linklabel );
            }
        }
        else if ( ( nextchar === "|" || nextchar === "^" || nextchar === "$" || nextchar === "%" || nextchar === "`" ) && !this.ESCAPENEXT ) {
            skipthis = true;
            inc = true;
            caretindex.removed +=1;
            var fs;
            if ( ctx.fillStyle === GLOBALDATA.CLR_WHITE ) {
                if ( nextchar === "^" ) fs = GLOBALDATA.HL_CLR1;
                else if ( nextchar === "$" ) fs = GLOBALDATA.HL_CLR2;
                else if ( nextchar === "%" ) fs = GLOBALDATA.HL_CLR3;
                else if ( nextchar === "`" ) fs = GLOBALDATA.CLR_GREY;
                else if ( nextchar === "|" ) fs = GLOBALDATA.DL_CLR2;
                else {
                    log ( "Huh, unknown char " + nextchar + " for color in Textticker?>?" );
                }
            }
            else {
                fs = GLOBALDATA.CLR_WHITE;
            }
            ctx.fillStyle = fs;            
            ctx.strokeStyle = fs;
            caretindex.fs = fs;
        }    
        else if ( ( nextchar === "<" ) && !this.ESCAPENEXT ) {
            remove = true;
            inc = true;
            caretindex.removed +=2;
            caretindex.lastisgarble = true;
        }
        else {
            
            //33-126
            if ( caretindex.lastisgarble === true ) {
                //last char was bogus, first remove current one
                remove = true;
            }
            
            if ( ( givencaretindex !== null && !( nextchar === "*" ) ) || ( !( nextchar === "*" && ( this.pausecount < this.PAUSEAMOUNT ) ) && ( nextchar === " " || nextchar === "-" || ( Math.random () < succeschance ) ) ) ) {
                /*if ( this.ctxid === "footercanvas" ) {
                    log ( "placing char: " + nextchar );
                }*/
                //place correct char
                char = nextchar;
                caretindex.lastisgarble = false;
                inc = true;
                if ( this.ESCAPENEXT ) {
                    this.ESCAPENEXT = false;
                    //log ( "escape next off, char placed: " + char );
                }
            }
            else {
                //place garble char

                
                if ( nextchar === "*" ) {
                    this.pausecount ++;
                    if ( this.pausecount >= this.PAUSEAMOUNT ) {
                        this.pausecount = 0;
                        caretindex.removed ++;
                        inc = true;
                        //remove = true;
                        
                    }
                }
                else {
                    var charcode = 33 + Math.round ( ( 126 - 33 ) * Math.random () );
                    char = String.fromCharCode ( charcode );
                    caretindex.lastisgarble = true;
                    inc = false;                    
                }
            }
        }
        if ( remove ) {
            //REMOVE CHAR
            ctx.clearRect ( xp, yp - 2, charwidth, lineheight + 2 );       
        }
        if ( char !== "NONE" ) {
            //PLACE CHAR
            

            
            ctx.fillText ( char, xp, yp );            
            if ( this.LINK || this.UNDERLINE ) {
                ctx.beginPath ();
                
                var ly = lineheight - 2;
                var lw = charwidth - 1;
                ctx.moveTo ( xp, yp + ly );
                ctx.lineTo ( xp + lw, yp + ly );
                ctx.stroke ();
                ctx.closePath ();
            }
        }
        
        if ( inc ) {
            //INCREMENT INDEX
            var currenttextline = this.textlines [ caretindex.line ];
            if ( caretindex.index >= ( currenttextline.length - 1 ) ) {
                if ( caretindex.line >= ( this.textlines.length - 1 ) ) {
                    //log ( "cf text ready..!" );
                    this.allshown = true;
                    lastrun = true;
                    //this._installLinks ();
                    this.setActive ( false );
                }
                else {
                    caretindex.removed = 0;
                    caretindex.index = 0;
                    caretindex.line ++;
                    if ( this.autoScrollDown ) {
                        //log ( "autoscrollDown " + ctxid + ", height: " + HEIGHT + ", br: " + this.bottomroom );
                        var top = $ ( "#" + this.ctxid ).offset ().top;                        
                        if ( ( top + yp + lineheight ) >= ( HEIGHT - this.bottomroom ) ) {
                            if ( givencaretindex !== null )  {
                                this.scrollY ++;
                            }                            
                            else this._scrollDown ( 1 );
                        }
                    }
                }
            }
            else {
                caretindex.index ++;
            }            
        }
        if ( givencaretindex === null ) {
            if ( ( skipthis || Math.random () < doublechance ) && !this.allshown && !caretindex.lastisgarble ) {
                this._frameTick ();
            }
        }
        if ( givencaretindex !== null ) {
            if ( lastrun ) {
                log ( 'lastrun' );
                return false;
            }
            else if ( givencaretindex.index === ( this.caretindex.index ) ) {
                if ( givencaretindex.line === this.caretindex.line ) {
                    return false;
                }
            }
            return true;
        }
    };
    
    this._addLink = function ( linklabel ) {
        MOUSEHANDLER.registerListener ( linklabel );
    };
    
    /*
    this._installLinks = function () {
        var top = $ ( "#" + this.ctxid ).offset ().top;
        var left = $ ( "#" + this.ctxid ).offset ().left;
        var i;
        var ll = this.linklabels.length;
        for ( i = 0; i < ll; i ++ ) {
            if ( !this.linklabels [ i ].set ) {
                this.linklabels [ i ].set = true;
                this.linklabels [ i ].rect.x += left;
                this.linklabels [ i ].rect.y += top;
                MOUSEHANDLER.registerListener ( this.linklabels [ i ] );
                
            }
        }
    };*/
    
    this._scrollDown = function ( lineamount ) {
        this.scrollY += lineamount;
        this._refreshPage ();
    };
    
    this._refreshPage = function () {
        log ( "refreshpage: " + this.ctxid );
        var active = this.active;
        this.setActive ( false );
        this.ctx.clearRect ( this.offsetX, this.offsetY, WIDTH, HEIGHT );
        
        this.LINK = false;
        this.ESCAPENEXT = false;
        this.UNDERLINE = false;        
        var emptycaretindex = { line: this.scrollY, index: 0, lastisgarble: false, removed: 0, linksadded : 0, fs: GLOBALDATA.CLR_WHITE };
        
        this.ctx.fillStyle = GLOBALDATA.CLR_WHITE;
        this.ctx.strokeStyle = GLOBALDATA.CLR_WHITE;
        
        var c = ( this.caretindex.index !== 0 || this.caretindex.line !== 0 );
        while ( c ) {
            c = this._drawNextChar ( emptycaretindex );
        }
        if ( active ) this.setActive ( active );
    };
    
    
    this._resizeScreen = function () {
        //if ( this.hidden === true ) return;
        //log ( "textticker.resizescreen: " + this.ctxid + " fs: " + this.caretindex.fs );
        this.ctx.font = this.font;//"12pt roboto_mono_regular";
        this.ctx.fillStyle = this.caretindex.fs;
        this.ctx.strokeStyle = this.caretindex.fs;
        this.ctx.lineWidth = 1.5;//0.5;
        this.ctx.textBaseline = "top";         
        
        var top = $ ( "#" + this.ctxid ).offset ().top;
        
        
        var maxlineindex = Math.floor ( ( HEIGHT - this.offsetY - top - this.bottomroom ) / this.lineheight ) - 1;
        maxlineindex = Math.max ( 0, maxlineindex );
        
        ///log ( "maxlineindex: " + maxlineindex + ", " + HEIGHT + ", " + this.offsetY + ", " + top + ", " + this.bottomroom + ", " + this.lineheight  );
        this.scrollY = Math.max ( 0, this.caretindex.line - maxlineindex );
        //log ( "scrollY: " + this.scrollY );
        if ( this.textlines === false ) return;
        
        if ( this.installed && !this.hidden ) {
            this._refreshPage ();
        }
        
    };
    
    //this.initialize ();
    
};

