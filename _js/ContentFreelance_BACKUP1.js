

var ContentFreelance = function () {
    
    
    this.TEXTTICKER = null;
    
    
    this.caretindex = { line: 0, index: 0, lastisgarble: false, removed: 0, linksadded : 0, fs: GLOBALDATA.CLR_WHITE };
    this.allshown = false;
    this.linklabels = [ { label: "emailme", rect: { x: 0, y: 0, w: 0, h: 0 } } ];
    this.LINK = false;
    
    
    
    this.active = false;
    
    /*
     * RESERVED SIGNS
     * ^: CLR_1
     * $: CLR_2
     * %: CLR_3
     * <: BACK
     * >: LINK
     */
    
    
    this.textlines = [ 
        "Sovereign<<<<<<<<vr. Simon van Gerwen; Freelance Computerprogrammer. $Autodidact!!!$<<< since 16<531<<<<I WAS BORN!!<<<<<<<<<<<<2002<3.",
        "Computer-languages in order of expertise [pretty basic to high]:",
        "[pretty] BASIC, ColdFusion, ASP, Prolog, SQL, HTML???<<<<<<<not a language!!<<<<<<<<<<<<<<<<<<, C / C++, PHP, JAVA[script], ActionScript 1<2<3.000<<<0 ..",
        "---------------------------------------------------------------------------------------------",
        "Studied $Mathematics$ & Artificial Intelligence [offical], [A bit of journalism as well].",
        "Unofficial topics include LSD<<<Philosophy, DMT<<<seX<<<!<Metaphysics, Esotericism, Linguistics, aaa<<<Formal Logic.",
        "AI: Neural Networks, Evolutionary Algorithms, etc.",
        "if ( <<B ! x || {}) { pushh<<<<<<<<<<<<<<<<<<<<<<<--------------------------------------------------",
        "Contact me for work on computer-gamez!!!<<<, AI, tantra-~<<<<<<<<Creative Writing, Troubleshooting....<<",
        "AND JUST IF YOU NEED SOME FREAKING B<br<RA<ai<IN<ns<S!! RIGHT!?<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<...<<<ok..<<<<<",
        "E: >^SVG@< AT screwthecia<<<<<<<<<<<GRAFFITEK.nl^> // Tilburg, Ze<<The High<<<<Netherlands.",
        "Sofia, I ^LOVE^ you!<!!<<<<<<<<<<<<<<<<<<<$end of transmission .. .  .   .    .     .$<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"
        
    ];
    
    
    /*
    this.reset = function () {
        this.caretindex = { line: 0, index: 0, lastisgarble: false, removed: 0, linksadded : 0, fs: GLOBALDATA.CLR_WHITE };
        this.allshown = false;        
        this.linklabels = [ { label: "emailme", rect: { x: 0, y: 0, w: 0, h: 0 } } ];
        this.LINK = false;
    };*/
    
    this.initialize = function () {
        //log ( "init: " + this.allshown );
        this.allshown = false;
        //this.reset ();
        
        
        this.TEXTTICKER = new TextTicker ( this.linklabels, this.textlines, "maintopic" );
        
        
        $ ( document ).on ( "newMainTopic", $.proxy ( this, "_hideOrShow" ));
        
        /*
        $ ( document ).on ( "resizeUpdate", this._resizeScreen );
        
        
        var ctx = getContext ( "maintopic" );
        ctx.font = "12pt roboto_mono_regular";
        ctx.fillStyle = "#ffffff";
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 1.5;//0.5;
        ctx.textBaseline = "top";
        */
       
        this._resizeScreen ();
        this._hideOrShow ();

        
    };
    
    
    /////////////
    // PRIVATE //
    /////////////
    
    this._frameTick = function () {
        
        CONTENT_FREELANCE._drawNextChar ();
    };
    
    this._drawNextChar = function () {

        //CONSTANTS
        var succeschance = 1 / 2.5;
        var doublechance = 1 / 2;
        var char = "NONE";
        var charwidth = 9;
        var lineheight = 18;
        var offsetX = 13;
        var offsetY = 0;
        
        var currenttextline = CONTENT_FREELANCE.textlines [ CONTENT_FREELANCE.caretindex.line ];
        var nextchar = currenttextline.charAt ( CONTENT_FREELANCE.caretindex.index );
        
        var inc = false;//jump to next character? 
        var remove = false;//remove last written character?
        //var colorflip = false;//change to other color?
        var skipthis = false;//skip this char to next
        
        
        //current caret-index
        var xp = offsetX + ( ( CONTENT_FREELANCE.caretindex.index - CONTENT_FREELANCE.caretindex.removed ) * charwidth );
        var yp = offsetY + ( ( 1 + CONTENT_FREELANCE.caretindex.line ) * lineheight );        
        
        var ctx = getContext ( "maintopic" );
        
        //log ( "NextChar: " + nextchar + ", caret at: " + xp + ", " + yp + " index: " + CONTENT_FREELANCE.caretindex.index + ", steps back: " + CONTENT_FREELANCE.caretindex.removed );
        
        if ( nextchar === ">" ) {
            skipthis = true;
            inc = true;
            CONTENT_FREELANCE.caretindex.removed +=1;
            CONTENT_FREELANCE.LINK = !CONTENT_FREELANCE.LINK;
            
            var linklabel = CONTENT_FREELANCE.linklabels [ CONTENT_FREELANCE.caretindex.linksadded ];
            
            if ( CONTENT_FREELANCE.LINK ) {
                //linklabels = [ { label: "emailme", rect: { x: 0, y: 0, w: 0, h: 0 } } ];
                linklabel.rect.x = xp;
                linklabel.rect.y = yp;
                linklabel.rect.h = lineheight;
            }
            else {
                linklabel.rect.w = xp - linklabel.rect.x;
                
                //ctx.fillRect ( linklabel.rect.x, linklabel.rect.y, linklabel.rect.w, linklabel.rect.h );
                
                CONTENT_FREELANCE.caretindex.linksadded ++;
            }
        }
        else if ( nextchar === "^" || nextchar === "$" || nextchar === "%" ) {
            skipthis = true;
            inc = true;
            CONTENT_FREELANCE.caretindex.removed +=1;
            var fs;
            if ( ctx.fillStyle === GLOBALDATA.CLR_WHITE ) {
                if ( nextchar === "^" ) fs = GLOBALDATA.HL_CLR1;
                else if ( nextchar === "$" ) fs = GLOBALDATA.HL_CLR2;
                else if ( nextchar === "%" ) fs = GLOBALDATA.HL_CLR3;
            }
            else {
                fs = GLOBALDATA.CLR_WHITE;
            }
                //    = ( ctx.fillStyle === GLOBALDATA.CLR_WHITE )? ( ( nextchar === "^" )? GLOBALDATA.HL_CLR1 : GLOBALDATA.HL_CLR2 ) : GLOBALDATA.CLR_WHITE;
            ctx.fillStyle = fs;            
            ctx.strokeStyle = fs;
            
            CONTENT_FREELANCE.caretindex.fs = fs;
        }    
        else if ( nextchar === "<" ) {
            //remove previous character
            remove = true;
            //try place next character
            inc = true;
            CONTENT_FREELANCE.caretindex.removed +=2;
            CONTENT_FREELANCE.caretindex.lastisgarble = true;
            //log ( "remove previous, increment index " );
            
        }
        else {
            //33-126
            //CONTENT_FREELANCE.caretindex.removed = 0;
            
            if ( CONTENT_FREELANCE.caretindex.lastisgarble === true ) {
                //last char was bogus, first remove current one
                remove = true;
                
                //log ( "remove previous" );
            }
            
            if ( nextchar === " " || nextchar === "-" || ( Math.random () < succeschance ) ) {
                //log ( "char start:" + char + ".end");
                //place correct char
                char = nextchar;
                CONTENT_FREELANCE.caretindex.lastisgarble = false;
                inc = true;
                //log ( "correct char, inc" );
                
            }
            else {
                //place garble char
                var charcode = 33 + Math.round ( ( 126 - 33 ) * Math.random () );
                char = String.fromCharCode ( charcode );
                //char = nextchar;
                CONTENT_FREELANCE.caretindex.lastisgarble = true;
                inc = false;
                //log ( "incorrect char, no inc" );
            }
        }
        if ( remove ) {
            //REMOVE CHAR
            ctx.clearRect ( xp, yp - 2, charwidth, lineheight + 2 );       
            //log ( "clear character" );
        }
        if ( char !== "NONE" ) {
            //PLACE CHAR
            //log ( "place char: " + char );
            ctx.fillText ( char, xp, yp );            
            //log ( "drawing char: " + char + " at: " + xp + ", " + yp );
            //$ ( textcontainerid ).append ( "<span id=\"" + spanid + "\">" + char + "</span>" );
            
            if ( CONTENT_FREELANCE.LINK ) {
                ctx.beginPath ();
                
                var ly = lineheight - 2;
                var lw = charwidth - 1;
                ctx.moveTo ( xp, yp + ly );
                ctx.lineTo ( xp + lw, yp + ly );
                ctx.stroke ();
                ctx.closePath ();
            }
        }
        //else log ( "no char to place" );
        
        if ( inc ) {
            //INCREMENT INDEX
            var currenttextline = CONTENT_FREELANCE.textlines [ CONTENT_FREELANCE.caretindex.line ];
            if ( CONTENT_FREELANCE.caretindex.index >= ( currenttextline.length - 1 ) ) {
                if ( CONTENT_FREELANCE.caretindex.line >= ( CONTENT_FREELANCE.textlines.length - 1 ) ) {
                    log ( "cf text ready..!" );
                    CONTENT_FREELANCE.allshown = true;
                    CONTENT_FREELANCE._installLinks ();
                    $ ( document ).off ( "frameTick", CONTENT_FREELANCE._frameTick );
                }
                else {
                    CONTENT_FREELANCE.caretindex.removed = 0;
                    CONTENT_FREELANCE.caretindex.index = 0;
                    CONTENT_FREELANCE.caretindex.line ++;
                }
            }
            else {
                CONTENT_FREELANCE.caretindex.index ++;
            }            
            
            //log ( "inc index, new: " + CONTENT_FREELANCE.caretindex.index + ", line: " + CONTENT_FREELANCE.caretindex.line );
        }
        
        
        if ( ( skipthis || Math.random () < doublechance ) && !CONTENT_FREELANCE.allshown && !CONTENT_FREELANCE.caretindex.lastisgarble ) {
            CONTENT_FREELANCE._frameTick ();
        }
        
    };
    
    this._installLinks = function () {
        //this.linklabels = [ { label: "emailme", rect: { x: 0, y: 0, w: 0, h: 0 } } ];
        //log ( "top: " + $ ( "#maintopic" ).offset ().top );
        var top = $ ( "#maintopic" ).offset ().top;
        var i;
        var ll = this.linklabels.length;
        for ( i = 0; i < ll; i ++ ) {
            this.linklabels [ i ].rect.y += top;
            MOUSEHANDLER.registerListener ( this.linklabels [ i ] );
        }
        
        $ ( document ).on ( "click_emailme", $.proxy ( this, "_emailMe" ) );
        
    };
    
    this._emailMe = function () {
        window.location.assign ( 'mailto:svg@graffitek.nl' );
    };


    
    this._resizeScreen = function () {
        log ( "resize contentFreelance" );
        var ctx = getContext ( "maintopic" );
        ctx.font = "12pt roboto_mono_regular";
        ctx.fillStyle = CONTENT_FREELANCE.caretindex.fs;
        ctx.strokeStyle = CONTENT_FREELANCE.caretindex.fs;
        ctx.lineWidth = 1.5;//0.5;
        ctx.textBaseline = "top";           
    };
    
    
    
    
    this._hideOrShow = function () {
        var ta = ( MAINMENU.currentTopic === "#button_" + MAINMENU.FREELANCETAG )? 100 : 0;
        
        CONTENT_FREELANCE.active = ( ta === 100 );
        //$ ( document ).off ( "frameTick", CONTENT_FREELANCE._frameTick );
        
        this.TEXTTICKER.setActive ( false );
        
        if ( ta === 100 ) {
            if ( !this.allshown ) {
                //$ ( document ).on ( "frameTick", CONTENT_FREELANCE._frameTick );
                this.TEXTTICKER.setActive ( true );
            }
            $ ( "#maintopic" ).fadeIn ( 500, false );
        }
        else {
            $ ( "#maintopic" ).fadeOut ( 100, false );
        }
        
        log ( "ContentFreelance._hideOrShow (): " + ta + " ct: " + MAINMENU.currentTopic + " active? " + CONTENT_FREELANCE.active + ", allshown? " + CONTENT_FREELANCE.allshown  );
    };
    
    
    
    //this.build ();
    
};

