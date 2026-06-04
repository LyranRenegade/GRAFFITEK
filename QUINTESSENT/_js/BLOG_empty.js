/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var BLOG_empty = function ( parentid ) {
    
    this.parentid = parentid;
    this.quotes = [];
    this.inserts = 0;
    this.plaintextcolor = GLOBALDATA.CLR_WHITEYELLOW;
    this.contentid = "newsparagraph";
    
    this._installQuotes = function () {
        var quoteOrwell = [ "\"^#Journalism^# is printing what someone else does not want published;", 
                            "everything else is $public relations$.\"",
                            "%-- George Orwell%"
                        ];

        this.quotes = [ quoteOrwell ];        
    };
    
    
    this._addParagraph = function () {
        
        var newsparagrah = "<p id=\"" + this.contentid + "\" style=\"" + FONT ( "Tahoma", 14, this.plaintextcolor ) + "\"></p>";
        
        $ ( "#" + this.parentid ).append ( newsparagrah );
        $ ( "#" + this.contentid ).css ({
            lineHeight: "140%",
            //marginRight: "40px",
            //marginLeft: "40px",
            marginTop: "20px",
            marginBottom: "20px"
        });
        
        var p = "*^NEW-NEWs^*~_Yes, the 21st century! ^#THE INTERNET^#!!, a true world-wonder! Never has information been so easily accessible..  [Well... not that I know of..]~";
        
        p = TEXTPARSER.parseText ( p, "NEW NEWS" );
        $ ( "#" + this.contentid ).append ( p );
        
        TEXTPARSER.addOptionalText ( "<How to build a house from tires and bottles, Democracy in [at] Iceland, Watch Gogol Bordello make Germans dance, read the Nag Hammadi scrolls and the missing testaments, listen to Foetus and Popol Vuh, find out about Atlantis, Le MU of RA, Meditate upon the Law of 1, Memorize the game-mechanics of ADOM [in an eternal dance of death], Understand why Mr. Mathis says PI = 4, Watch GM's play bulletchess, Experience the clear spirits like Krishnamurti >& Mooji, Wrestle through the Bibliotheca-Pl>&>#233;yades, Solve Notpron, then the Cicada puzzle, see your vague acquintances their new shoes on facebook, the Crystal Palace, Pyramids, learn star-constellations, Aliens!, learn about tele(m)pathy, astral travelling and remote-viewing, what Scaruffi thinks of the Beatles, see people do stuff while on acid, look at cats.. <", "#" + this.contentid, "things to research" );

    };    
    
    
    
    
    this._installQuotes ();
    this._addParagraph ();
    
    
    
    
    
    
    
};