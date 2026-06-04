


var ZGamezContent = function () {
    
    
    this.currentGameIndex = -1;
    this.games = [];
    
    this.active = false;
    
    this.initialize = function () {
        
        
        this.games.push ( new GameOfLife () );
        
        
        $ ( document ).on ( "newMainTopic", $.proxy ( this, "_hideOrShow" ));
        this._resizeScreen ();
        this._hideOrShow ();
        
        
        this._setCurrentGame ( 0 );
        
        $ ( document ).on ( "newPositions", $.proxy ( this, "_resizeScreen" ) );
        
        //$ ( document ).on ( "newPositions" );

    };
            
    
    
    
    this.frameTick = function () {
        if ( this.active ) {
            if ( this.currentGameIndex !== -1 ) {
                var game = this.games [ this.currentGameIndex ];
                game.frameTick ();
            }
        }
        
        
    };
    

    
    /////////////
    // PRIVATE //
    /////////////
    
    this._setCurrentGame = function ( index ) {
        if ( index === this.currentGameIndex ) return;
        else {
            this._pauseCurrentGame ();
            
            var game = this.games [ index ];
            game.continue ();
            this.currentGameIndex = index;
            this._resizeScreen ();
        }
    };
    
    this._pauseCurrentGame = function () {
        if ( this.currentGameIndex !== -1 ) {
           var game = this.games [  this.currentGameIndex  ];
           game.pause ();
       }
    };
    
    this._continueCurrentGame = function () {
        if ( this.currentGameIndex !== -1 ) {
           var game = this.games [  this.currentGameIndex  ];
           game.continue ();
       }
    };

    
    this._resizeScreen = function () {
        //log ( "resize contentZgamez" );
        //if ( this.active ) {
            if ( this.currentGameIndex !== -1 ) {
                var game = this.games [ this.currentGameIndex ];
                game.resizeScreen ();
            }
        //}
    };
    
    
    
    
    this._hideOrShow = function () {
        this.active = ( MAINMENU.currentTopic === "#button_" + MAINMENU.GAMESTAG );

        //this.TEXTTICKER.setActive ( false );
        
        if ( this.active ) {
            /*this.TEXTTICKER.setHidden ( false );
            if ( !this.TEXTTICKER.allshown ) {
                this.TEXTTICKER.setActive ( true );
            }*/
            
            $ ( "#zgamezdiv" ).fadeIn ( 500, false );
            this._continueCurrentGame ();
        }
        else {
            var duration = 100;
            if ( MAINMENU.currentTopic === "#button_" + MAINMENU.BLOGTAG ) {
                $ ( "#zgamezdiv" ).css ( "display", "none" );
            }
            else $ ( "#zgamezdiv" ).fadeOut ( duration, false );
            this._pauseCurrentGame ();
            //this.TEXTTICKER.setHidden ( true );
        }
        
        //log ( "ZGamezContent._hideOrShow (): " + this.active + " ct: " + MAINMENU.currentTopic );
    };
    
    
    
    
};

