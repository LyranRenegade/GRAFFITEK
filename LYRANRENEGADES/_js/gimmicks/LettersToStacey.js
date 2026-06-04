


var LettersToStacey = function () {
    
    this.letterdata = [];
    
    this.install = function () {
        
        var ltsTitle1 = "<h1>Breif aan Stacey (*brief #1)</h1>";
                
        var ltsText1 = "<br/><br/><br/><br/><br/><br/>";
        ltsText1 += "<i>Beste Stacey,<br/><br/>";
        ltsText1 += ".. Hier even een berichtje van down under.. <br/>";
        ltsText1 += "De mensen zijn krankzinnig, heb het altijd al geweten maar het begint steeds meer op te vallen. Spoedig hebben we het met z\'n allen door, dat hoop ik dan maar.<br/>";
        ltsText1 += "Ondertussen is het de uwe oprechte niet al te best vergaan. Ik was laatst met een optochtje meegelopen waarbij we dan riepen om vrijheid! En van: \'En wanneer willen we het??\' en dat dan iedereen keihard \'NU!\' brult. We riepen vanalles door elkaar maar al met al was het best een gezellige boel. Maar dat wordt dus ook absoluut bestreden kan ik wel melden, ik werd door agenten verkleed als burger in de cel gesmeten, ze hebben en passant nog even mijn sleutelbeen de vernieling in geholpen.! (Hij was al gebroken, maar toch, dat kon ze geen ene zak schelen natuurlijk). Een hele nacht hebben ze me erin gehouden! En nou zag ik gisteren dat ze me ook nog voor ongeveer 500,- aan boetes hebben gestuurd. Dat is verrekte veel dat kan ik je vertellen. Dat is ongeveer wat je nodig hebt om 2 weken te leven met inbegrip van alle privileges die ik op dit moment mag genieten. Voedsel, drinkwater en een dak boven je hoofd, dat is het wel zo'n beetje.<br/>";
        ltsText1 += "Zoals je weet is het duivelse ideaal -wat eigenlijk niet uitgesproken mag worden hier- dat iedereen meedoet in een meester-slaaf relatie met elkaar waarbij degene met het meeste \'kapitaal\' elk die onder hem zit een beetje kan zitten martelen of rond-commanderen of wat deze dan ook goeddunkt. Het schijnt een nogal kicke spel te zijn waarbij je jezelf laat misbruiken in ruil voor de permissie hetzelfde bij anderen te doen. Zoiets denk ik, ik vind het maar een raar idee.<br/>";
        ltsText1 += "Goed, dat was het weer, ik hou je wel op de hoogte want ik heb het idee dat er wel wat interessants staat te gebeuren binnenkort.<br/>";
        ltsText1 += "Ik bedoel, ik baal als een stekker al een paar dagen maar we slaan ons er wel weer doorheen. Of zoiets. This too will pass..<br/>";
        ltsText1 += "Much of love to MeLmAk<br/><br/>";
        ltsText1 += "*5*<br/><br/>";
        ltsText1 += "<br/></i>";
        var ltsFooter1 = "<i>.Aarde, Tilburg, 19 februari 2021</i>";

        this.letterdata.push ( { title: ltsTitle1, text: ltsText1, footer: ltsFooter1 } );
        
    };
    
    
    
    this.getLetter = function ( x ) {
        return this.letterdata [ x - 1 ];
        
        
        
    };
    
    
    
    
    
    
    
    
    
    this.install ();
    
    
    
    
};