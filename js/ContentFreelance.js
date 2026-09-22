

var ContentFreelance = function () {
    
    
    this.TEXTTICKER = null;
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
        "(!)Sovereign<<<<<<<<vr. #Simon van Gerwen#; Freelance -EX- Computerprogrammer. $Autodidact!!!$<<< since 16<531<<<<forever<<<<<<<2002<3...<<<?<<<<<orwhoknows?<<<<<<<at",
        /*"Computer-languages -- ------ -- <<<<<<<<<<<<<in order of expertise [pretty basic to high]:",*/
        "[pretty] BASIC, ColdFusion, ASP, Prolog, SQL, HTML???<<<<<<<not a language!!<<<<<<<<<<<<<<<<<<, C / C++, PHP, JAVA[script], ActionScript 1<2<3.000<<<0 ..",
        "--------------------------------------------------------------------------------------------",
        "$Mathematics$ & %Artificial Intelligence%, [journalism,art,etc.].",
        "LSD<<<Philosophy, DMT<<<!<Metaphysics, Esotericism, Linguistics, aaa<<<Formal Logic.",
        "AI: Neural Networks, Evolutionary Algorithms, uhuh<<<<etc.",
        "if ( /</<B ! x || {}) { pushh<<<<<<<<<<<<<<<<<<<<<<<<<--------------------------------------------------",
        /*"Contact me for work on computer-gamez!!!<<<, AI, #advanced# internet-programming, tantra-~<<<<<<<<Creative Writing, Troubleshooting....<<",*/
        
        "E: >^SVG@< AT screwthecia<<<<<<<<<<<GRAFFITEK.nl^> // Tilburg, Ze<<The High<<<<Netherlands.",
        "ONE LOVE<<<<<<<<<<|end of transmission .. .  .   .    .     .|<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< "
        
    ];
    this.linklabels = [ { label: "emailme", rect: { x: 0, y: 0, w: 0, h: 0 } } ];    
    
    this.initialize = function () {
        
        this.TEXTTICKER = new TextTicker ( this.linklabels, this.textlines, "maintopic" );
        //this.TEXTTICKER.HACKVALUE = 1;
        this.TEXTTICKER.autoScrollDown = true;
        this.TEXTTICKER.bottomroom = 60;

        this.TEXTTICKER.font = "10pt roboto_mono_regular";
        this.TEXTTICKER.charwidth = 7;
        this.TEXTTICKER.lineheight = 14;
        
        
        this.TEXTTICKER.initialize ();
        
        $ ( document ).on ( "newMainTopic", $.proxy ( this, "_hideOrShow" ));
        this._resizeScreen ();
        this._hideOrShow ();
        
        $ ( document ).on ( "click_emailme", $.proxy ( this, "_emailMe" ) );
    };
    
    
    /////////////
    // PRIVATE //
    /////////////
    
    
    this._emailMe = function () {
        window.location.assign ( 'mailto:svg@graffitek.nl' );
    };


    
    this._resizeScreen = function () {
        //log ( "resize contentFreelance" );

    };
    
    
    
    
    this._hideOrShow = function () {
        this.active = ( MAINMENU.currentTopic === "#button_" + MAINMENU.FREELANCETAG );

        this.TEXTTICKER.setActive ( false );
        
        if ( this.active ) {
            this.TEXTTICKER.setHidden ( false );
            if ( !this.TEXTTICKER.allshown ) {
                this.TEXTTICKER.setActive ( true );
            }
            
            $ ( "#maintopic" ).fadeIn ( 500, false );
        }
        else {
            var duration = 100;
            if ( MAINMENU.currentTopic === "#button_" + MAINMENU.BLOGTAG ) {
                $ ( "#maintopic" ).css ( "display", "none" );
            }
            else $ ( "#maintopic" ).fadeOut ( duration, false );
            
            this.TEXTTICKER.setHidden ( true );
        }
        
        //log ( "ContentFreelance._hideOrShow (): " + this.active + " ct: " + MAINMENU.currentTopic + ", allshown? " + this.TEXTTICKER.allshown  );
    };
    
    
    
    //this.build ();
    
};

