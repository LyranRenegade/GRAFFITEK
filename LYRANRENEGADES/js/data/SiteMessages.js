


var SiteMessages = function () {

    this.messages = [];
    this.origmessages = [];
    
    this.install = function () {
        this.origmessages = [
            "WE HAVE A MESSAGE FOR YOU",
            "IN LAK'ECH ALA K'IN",
            "DECIDING DEFINITIONS.. MEANINGS..",
            //"DO THE FUCKING DISHES..",
            "ONE SONG, ONE LOVE",
            "WE TRANSMIT.. YOU INTERCEPT",
            "IN THE BEGINNING.. THERE WAS LOGOS",
            "SPELLS ARE SPOKEN",
            "WORDS ><>< ETYMOLOGY ><>< SEMIOTICS ><>< LOGOS",
            "A GATHERING OF MINDS",
            "THE TAO THAT CAN BE NAMED IS NOT THE ETERNAL TAO",
            "THE TAO IS BOTH NAMED AND NAMELESS",
            "NAMED IT IS THE MOTHER OF MYRIADS",
            "NAMELESS IT IS THE ORIGIN OF ALL",
            "DECODE THE BULLSHIT",
            //"WE CARE A LOT",
            "A CRASHCOURSE AUTONOMOUS THINKING",
            "I SPEAK WITH AUTHORITY"
            














        ];
        
        this._resetToOrigMessages ();
        
    };
    
    
    
    
    this.getWeightedRandomMessage = function () {
        var ml = this.messages.length;
        var index = Math.floor ( ml * Math.random () );
        var message = this.messages [ index ];
        //MAIN.log ( "getWeightedRandomMessage: " + index + ":: " + message );
        this.messages.splice ( index, 1 );
        if ( this.messages.length === 0 ) {
            this._resetToOrigMessages ();
        }
        return message;
    };
    
    /////////////
    // PRIVATE //
    /////////////
    
    this._resetToOrigMessages = function () {
        this.messages = [];
        var ol = this.origmessages.length;
        var i;
        for ( i = 0; i < ol; i ++ ) {
            this.messages.push ( this.origmessages [ i ] );
        }
    };
    
    
    
    
    
    
    
};