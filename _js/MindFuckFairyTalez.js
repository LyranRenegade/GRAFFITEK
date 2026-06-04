

var Mfft = function () {
    
    
    this.words = [
        "to", "I", "you", "we", "they", "us", "your", "our", "soul", "spirit", "sex", "life", "death",
        "communication", "talk", "converse", "speak", "telepathic", "telempathic", "abnormal", "normal",
        "travel", "voyage", "go", "tell", "say", "said", "told", "think", "feel", "emotion", "fear",
        "knowledge", "gnosis", "logos", "logic", "temperament", "instinct", "intuition", "axiom",
        "elohim", "shalayim", "malat", "science", "tech", "technology", "break", "go", "leave", "transcend",
        "conscious", "consciousness", "aware", "awareness", "being", "entity", "live", "liveform", "form",
        "body", "physics", "physicality", "at", "to", "in", "on", "over", "beneath", "under", "from", "acknowledge",
        "sentient", "feel", "feeling", "heart", "mind", "cosmos", "universe", "traverse", "have", "will", "want",
        "pain", "suffering", "forgiveness", "forgive", "love", "sorry", "excuse", "me", "thank", "thanks", "grateful",
        "grace", "divine", "angel", "God", "gods", "Gaia", "Sofia", "wisdom", "belief", "know", "when", "then",
        "this", "that", "than", "those", "who", "whose", "what", "how", "why", "ask", "question", "evil", "good",
        "light", "darkness", "eternal", "infinity", "change", "flux", "definition", "definite", "allow",
        "allowance", "potential", "power", "true", "self", "selves", "one", "others", "no", "yes", "nature",
        "tree", "animal", "plant", "flora", "fauna", "star", "system", "hard", "soft", "amazing", "amaze",
        "wonder", "ponder", "wondering", "none", "all", "is", "were", "was", "will", "be", "true", "false",
        "truth", "hidden", "kaballah", "geometry", "pattern", "sacred", "consecrate", "like", "illusion",
        "maya", "off", "too", "two", "zero", "blank", "many", "alien", "earth", "terra", "terrestrial",
        "the", "the", "the", "the", "the", "the", "the", "the", "the", "the", "the", "the", "the", "the", 
        "be", "be", "be", "be", "be", "be", "be", "be", "be", "be", "be", "be", "be", "and", "and", "and",
        "a", "a", "a", "a", "with", "she", "he", "as", "their", "can", "get", "if", "would", "about", "people",
        "human", "humans", "just", "see", "vision", "clear", "crystal", "him", "could", "now", "soon", "future",
        "past", "its", "because", "day", "night", "use", "man", "woman", "men", "women", "find", "give", "gift",
        "praise", "honor", "well", "good", "excellent", "positive", "negative", "only", "very", "work", "down",
        "may", "after", "call", "world", "planet", "still", "last", "need", "leave", "family", "put", "old",
        "ancient", "young", "children", "child", "pure", "innocent", "innocence", "perfect", "splendid", "fantasy",
        "fantastic", "magic", "magically", "wonderful", "awesome", "aweful", "group", "start", "end", "begin",
        "final", "apocalypse", "enlighten", "help", "assist", "keep", "adept", "learn", "teach", "student",
        "teacher", "talk", "problem", "against", "such", "few", "case", "most", "cycle", "date", "lunar", "solar",
        "construct", "concept", "fraud", "corrupt", "corrupted", "cleanse", "clearing", "purification", "purify",
        "emerge", "new", "fresh", "born", "reborn", "phoenix", "each", "every", "everyone", "small", "big", "large",
        "total", "move", "point", "believe", "next", "without", "within", "young", "fact", "story", "tale", "lot",
        "right", "study", "book", "eye", "job", "word", "words", "sentence", "stories", "side", "kind", "friend",
        "friendly", "companion", "helping", "service", "often", "yet", "until", "game", "test", "line", "among",
        "meet", "community", "social", "set", "happy", "relief", "relieved", "laughter", "laugh", "laughing", "humor",
        "hilarious", "fun", "funny", "sexual", "sexuality", "spirituality", "immortal", "dead", "great", "Ra",
        "law", "law of one", "message", "messenger", "heaven", "heavens", "rain", "winter", "summer", "autumn", "spring",
        "godly", "heavenly", "bless", "blessing", "blessings", "graceful", "grateful", "peace", "peaceful", "integrity",
        "intelligence", "intellect", "smart", "pretty", "handsome", "beautiful", "cute", "appealing", "charm", "charmed",
        "charming", "dazzling", "delicate", "delight", "elegant", "exquisite", "fascinate", "please", "pleasing", "angelic",
        "splendid", "lovely", "gorgeous", "fine", "marvelous", "sublime", "ravishing", "foxy", "ideal", "admire", "admirable",
        "magnificient", "brilliant", "grand", "gradiose", "impose", "imposing", "impress", "impressive", "lavish", "super",
        "string", "event", "superb", "outstanding", "noble", "radiant", "radiation", "radiating", "aura", "majestic", "royal",
        "royalty", "magnanimous", "transcendent", "fair", "honest", "integrity", "honesty", "truthful", "unreal", "real",
        "value", "valuable", "keen", "solid", "rare", "wicked", "worthy", "reliable", "satisfying", "satisfy", "satisfied",
        "rely", "relied", "model", "laudable", "decent", "choice", "free", "freedom", "option", "options", "exemplary",
        "example", "precious", "righteous", "priceless", "price", "helpful", "treasure", "treasured", "relevant", "important",
        "useful", "dear", "hot", "precious", "seviceable", "beneficial", "profitable", "trauma", "hurt", "heal", "healing",
        "Skippy", "LSD", "DMT", "marihuana", "hallucinogenic", "hallucination", "hallucinate", "opium", "mushroom",
        "mushrooms", "mescal", "peyote", "san pedro", "saint", "holy", "bonzai", "banzai", "breast",
        "ass", "breasts", "foetus", "fetish", "passion", "obsession", "obsess", "crucial", "essential", "erotic",
        "erotica", "exotic", "orgasm", "cooperative", "convenient", "constructive", "construc", "construction", "taste",
        "tasteful", "smile", "smiley", "joy", "joyful", "lively", "glad", "elated", "ecstatic", "cheerful", "erection",
        "content", "upbeat", "blest", "blissful", "gay", "tantra", "pleasant", "elated", "wasted", "stoned", "high",
        "huge", "immense", "long", "soaring", "tremendous", "colossal", "gigantic", "giant", "hover", "lift", "sky",
        "nephilim", "lyran", "arcturan", "arcturus", "lyra", "essassani", "pleiadan", "pleiades", "grey", "tall", "white",
        "orion", "anunnaki", "zeta reticuli", "alpha centauri", "leo", "draco", "Giza", "Angkor", "coincidence",
        "Navajos", "Aboriginals", "Maya", "Inca", "Hopi", "Dogon", "Atlantis", "Mu", "Lemuria", "Dropa", "Dogu",
        "koyaanisqatsi", "buddha", "Shiva", "Kali", "Visnu", "jezus", "Genghis Khan", "Rasputin", "Wingmakers",
        "reptilian", "archon", "archons", "Cassandra", "circe", "Hermes", "gnosticism", "pneuma", "medusa", "mercurius",
        "mars", "venus", "jupiter", "saturnus", "uranus", "pluto", "Sheliak", "Vega", "Alcyone", "Merope", "Io", "Electra",
        "Taygeta", "understand", "comprehend", "Atlas", "Maia", "Polaris", "Taurus", "Auriga", "Perseus", "Gemini", "Capricorn",
        "Cetus", "Eridanus", "Aries", "liberation", "free will", "cosmic", "transmission", "reception", "sign", "symbol",
        "symbolism", "occult", "esoteric", "esotericism", "shinboru", "tarot", "spiral", "dance", "magical", "formula",
        "divination", "zodiac", "zenith", "jericho", "Babylon", "Tanakh", "bible", "Torah", "Koran", "Chaldea",
        "Capricornus", "Libra", "Cancer", "equinox", "Scorpio", "Aquarius", "aqua", "water", "soil", "Virgo", "Scorpius",
        "Pisces", "Ophiuchus", "Celus", "Pollux", "Athena", "Castor", "Propus", "Wasat", "Mekbuda", "Lynx", "mother",
        "father", "tibetan", "bedlam", "inferno", "limbo", "hell", "devil", "demon", "djinn", "purgatory", "knock", "happily",
        "hope", "hopeful", "hopefully", "though", "through", "tough", "whether", "weather", "cold", "warm", "hot", "freezing", "froze",
        "rose", "heart", "heartly", "brainy", "brain", "happiness", "cadaver", "content", "delight", "delighted", "ascenscion",
        "ascend", "enlighten", "enlightenment", "euphoria", "eureka", "cheer", "glee", "genial", "geniality", "sanctity", "play",
        "playing", "playful", "playfulness", "paradise", "mirth", "merry", "merriment", "hilarity", "seventh", "ecstasy",
        "exhilaration", "exhhilarating", "nihil", "nihilism", "elated", "exuberance", "to", "to", "too", "at", "in",
        "Asgard", "Tuoni", "tuonela", "shisu", "shaman", "guru", "shamanic", "ritual", "rite", "abracadabra", "hocus pocus",
        "transport", "Yeshua", "Yoshua", "Aleph", "atom"
        
    ];
    
    this.WORDAMOUNT;
    
    this.letterfrequencies = [
        /*a*/ 8.167,
        /*b*/ 1.492,
        /*c*/ 2.782,
        /*d*/ 4.253,
        /*e*/ 12.702,
        /*f*/ 2.228,
        /*g*/ 2.015,
        /*h*/ 6.094,
        /*i*/ 6.966,
        /*j*/ 0.153,
        /*k*/ 0.772,
        /*l*/ 4.025,
        /*m*/ 2.406,
        /*n*/ 6.749,
        /*o*/ 7.507,
        /*p*/ 1.929,
        /*q*/ 0.095,
        /*r*/ 5.987,
        /*s*/ 6.327,
        /*t*/ 9.056,
        /*u*/ 2.758,
        /*v*/ 0.978,
        /*w*/ 2.360,
        /*x*/ 0.150,
        /*y*/ 1.974,
        /*z*/ 0.076
    ];
    
    this.basetextlines = [ "^..click a star^", "|(All stuff<<<<<texts sprouted<<<<<<<<written & generated by Simon van Gerwen <<<<<<<<<<<Says)|" ];// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< " ];
     /*
     * RESERVED SIGNS
     * ^: CLR_1
     * $: CLR_2
     * %: CLR_3
     * <: BACK
     * >: LINK
     * *: 10-caret pause
     */
    
    this.BASE_TEXTTICKER = null;
    this.MF_TEXTTICKER = null;
    this.active = false;
    this.firstclick = true;
    
    this.initialze = function () {
        this.WORDAMOUNT = this.words.length;
        this.BASE_TEXTTICKER = new TextTicker ( [], this.basetextlines, "mindfuckcanvas" );
        this.BASE_TEXTTICKER.initialize ();
        this.MF_TEXTTICKER = new TextTicker ( [], [], "mindfuckcanvas1" );
        this.MF_TEXTTICKER.autoScrollDown = true;
        this.MF_TEXTTICKER.offsetY = 50;
        this.MF_TEXTTICKER.initialize ();
        this.MF_TEXTTICKER.allshown = true;
        /*
        this.TEXTTICKER.font = "10pt roboto_mono_regular";
        this.TEXTTICKER.charwidth = 7;
        this.TEXTTICKER.lineheight = 16;
        this.TEXTTICKER.initialize ();*/
        $ ( document ).on ( "newMainTopic", $.proxy ( this, "_newMainTopic" ));
        
        $ ( "#mindfuckcanvas" ).css ( "display", "none" );
        $ ( "#mindfuckcanvas1" ).css ( "display", "none" );
        
        //this.TEXTTICKER.setActive ( true );
        
    };
    
    this._getWeightedLetter = function () {
        var r = 100 * Math.random ();
        var lf = this.letterfrequencies.length;
        var i;
        var tf = 0;
        for ( i = 0; i < lf; i ++ ) {
            tf += this.letterfrequencies [ i ];
            if ( r < tf ) break;
        }
        
        var char = String.fromCharCode ( i + 97 );
        return char;
    };
    

    this._getGarbleChar = function () {
        // + = 
        var r = Math.random ();
        var signs = [ "-", "-", "-", "-", ".", ".", "_", "'" ];
        var i;
        var sl = signs.length;
        var v = 0;
        var inc = 1 / sl;
        for ( i = 0; i < sl; i ++ ) {
            v += inc;
            if ( r < v ) return signs [ i ];
        }
        return "???";
    };
    
    this._createRandomText = function () {
        var garblechance = ( Math.random () * Math.random () );
        var aos = 1 + Math.floor ( 2 * Math.random () );
        var i, j, k, l, wl;
        var char, word, sentence;
        var charcode;
        var text = [];
        var aow, aol;
        var colorchar;
        var wi;
        var ended;
        for ( i = 0; i < aos; i ++ ) {
            sentence = "";
            aow = 1 + Math.floor ( 8 * Math.random () );
            for ( j = 0; j < aow; j ++ ) {
                word = "";
                aol = 2 + Math.floor ( 8 * Math.random () );
                
                if ( Math.random () < .02 ) colorchar = "^";
                else if ( Math.random () < .02 ) colorchar = "$";
                else if ( Math.random () < .02 ) colorchar = "%";
                else if ( Math.random () < .02 ) colorchar = "#";
                else if ( Math.random () < .02 ) colorchar = "|";
                else if ( Math.random () < .02 ) colorchar = "'";
                else if ( Math.random () < .02 ) colorchar = "\"";
                else if ( Math.random () < .02 ) colorchar = "`";
                else colorchar = "";
                word += colorchar;
                
                
                if ( Math.random () < .6 ) {
                    wi = Math.floor ( this.WORDAMOUNT * Math.random () );
                    char = this.words [ wi ];
                    if ( j === 0 ) {
                        char = char.substr ( 0, 1 ).toUpperCase () + char.substr ( 1 );
                    }
                    wl = char.length;
                    for ( l = 0; l < wl; l ++ ) {
                        if ( Math.random () < ( garblechance / 2 ) ) {
                            char = char.substring ( 0, l ) + this._getGarbleChar () + char.substr ( l + 1 );
                            //break;
                        }
                    }
                    word += char;
                }
                else if ( Math.random () < .05 ) {
                    //create a number
                    aol = 1 + Math.floor ( 6 * Math.random () );
                    for ( k = 0; k < aol; k ++ ) {
                        charcode = 48 + Math.floor ( ( 9 ) * Math.random () ); 
                        word += String.fromCharCode ( charcode );
                    }
                }
                else {
                    for ( k = 0; k < aol; k ++ ) {
                        char = this._getWeightedLetter ();
                        if ( ( j === 0 && k === 0 ) || ( k === 0 && Math.random () < 0.05 ) ) {
                            //capital
                            //charcode = 65 + Math.floor ( ( 26 ) * Math.random () );
                            //char = String.fromCharCode ( charcode );
                            //log ( "capital? " + char );
                            char = char.toUpperCase ();
                        }
                        if ( Math.random () < ( garblechance ) ) {
                            char = this._getGarbleChar ();
                        }
                        /*
                        else if ( ( j > 0 ) && ( Math.random () < .2 ) ) {
                            //backward
                            //charcode = 60;
                            //k --;
                        }
                        else {
                            charcode = 97 + Math.floor ( ( 26 ) * Math.random () );
                        }*/
                        
                        word += char;
                    }
                }
                if ( Math.random () < .03 ) word = word.toUpperCase ();
                word += colorchar;
                
                
                if ( ( Math.random () < 0.25 ) && colorchar === "" ) {
                    wl = word.length;
                    for ( l = 0; l < wl; l ++ ) {
                        word += "<";
                    }
                    //word += "<";
                    j --;
                    sentence += word;
                    continue;
                }
                sentence += word;
                //end of sentence
                if ( j < ( aow - 1 ) ) sentence += " ";
                else {
                    ended = false
                    while ( Math.random () < 0.1 ) {
                        if ( Math.random () < .4 ) sentence += "!";
                        else sentence += "?";
                        ended = true;
                    }
                    //else if ( Math.random () < 0.2 ) sentence += "?";
                    if ( !ended ) sentence += ".";
                }
                if ( Math.random () < .05 ) sentence += "*";
            }
            text.push ( sentence );
        }
        return text;
    };
    
    this.tellStory = function ( nr ) {
        log ( "telling the " + String ( nr ) + "th story.." );
        var newlines = [];
        var randomlines = [
            "Weakness only exists because of strength... <<<<<<<<<<<<< (the absence of) Strength.",
            "True<<<<Real <<<<<^i<Intelligence^ / LOGOS <<<<<<<< is merely <<<<<<<an exhibition of divine %love% through attention and $focus$.",
            "$FEAR$. .  .   . * shows what you #wrongly believe#.. <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<",
            ".*.*.*.*.*.**.*.*.<<7< ",
            "The opposite of true <<<<.divine <<<<<<. %love% is $hate$ <<<<<^FEAR^ <<<<<%indifference% *<<<<<<<<<<<<<#judgement#"
            
        ];
        var add = false;
        if ( nr === 0 ) {
            add = true;
            
            if ( Math.random () < .9 ) {
                newlines = this._createRandomText ();
                
            }
            else {
                var index = Math.floor ( Math.random () * randomlines.length );
                newlines = [ randomlines [ index ] ];
            }
            
            
            
        }
        else if ( nr === 1 ) {
            newlines = [ 
                "I've got some questions for you...........<<<<<?<**",
                "Ever won<<<w<pondered the real <<<<<nature of #knowing#?**",
                "You could <<<<<<should always ask ^what^?<.. WHAT is THAT..?<?<?<?<?*",
                "and $that$ thing, that thing which is what.... What is what<<<<w<that? *etc...*",
                "...until you come *at the point where your brain rose<<<<froze and your heart rose..**",
                "And* then*....<<<< shut up <<<<<<<<wait......<<<< be still<<<<<<<<<",
                "..............................<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<#You already know.#",
                "****",
                "What is the 'I'?..",
                "What is the 'I' that knows?**",
                "Do you exist?****...<<< ",
                "Who is the one KNOWING things?*",
                "Who is the one pondering.. who is asking itself if it exists?*",
                "**You<<<I know, YOU know<<<<<<<<<<..<**",
                "**%..calculating infinity.. .   .    .%<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*",
                "What constitutes matter?* Is it the atom-core?**",
                "Which leaves 99.99999998<9999999<../% of NOTHING<<<<<<<Unidentied<<<<<<<<<Frigging<<<<<<<Ordering-principles<<<<<<<<<<<<<<<<<<'s*<<<<<$what$?*",
                "You<<<I think you<<<I know physics, %they% instructed<<<<<<<<<<told<<<<taught me* [a whole bunch of neat formulas explaining what? <<<<<<some<<<<any<<<nothing<<<<<<<..]",
                "They, who are not the YOU<<<#I# that knows, but YOU<<<I decided THEY know.. [#not anymore#]<<<<<<<<<<<<not anymore]*",
                "It is the I that [might've] decided that..* and it changed..<<<<<<<<<<<<<<<<<*",
                "What makes matter fall down..** GRAVITY, right..** but #what# is that?**",
                "$mass$<<<<mass attracting $mass$<<<<mass..** what causes it?** A graviton-particle perhaps(?) %they% say.. (another ^unknown^ force????<?) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<",
                "One day again science writes down another ^formula^.. I p<wonder..*** what would make $that$ #concept# work then..?**",
                "And what (again) causes what<<<<%that%.*< mechanism??< %ad infinitum.. .  .   . %<<<<<<<<<<<<<<<<<<<<<<<<*etc..",
                "What is ^under <standing^* #really#?*",
                "*$Spell-ing it out$<<<<<<<<<<<<<<<<*",
                "To stand under <<<<<<beneath something..*",
                "And then to look down saying I KNOW THIS...**",
                "Or <<<And to look up and see your <<<<<my horizon's expanded..** There's so much <<<<<<<<more to come..",
                "***",
                "You <<<<I know what <<<ere an axiom is?<* [something deemed unprovable]*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*:",
                "It's at the end of the 'scientific method'.*",
                "And at the start of I<i^#-MAGIC-#^*<<<<<<<<$imagic<nation$...*<<<",
                "The whole UNIVERSE is full of fucking<<<<<<reaking <<<<<<<<<energy, no atom stands still.",
                "yet... we wage wars <<<<<<<<<<%burn% wood<<<<oil<<<people<<<<<<stuff to get it...",
                "***",
                "You want to know a secret?***",
                "*Magic <<<<<<Formula <<<<<<<<< SPELLing it out <<<<<<<<<! <<<<<<<<<**",
                "I<You already know <<<<<<<<<<<<<<<<<I'll tell you<<<<<<<<<<<<<..<<(The %star <<<<pirit% <<<<<<<#quintessence# rules <<<<<<< points upwards)<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<!<later<<<<<now<<<soon now.. <<<<<<<<<<<< "
                
                
            ];
            
            
        }
        
        if ( add ) {
            this.MF_TEXTTICKER.addNewText ( newlines.concat ( [ " " ] ) );
        }
        else {
            this.MF_TEXTTICKER.setNewText ( newlines );
        }
        this.MF_TEXTTICKER.setActive ( true );
        
    };
    
    
    /////////////
    // PRIVATE //
    /////////////

    this._checkPixel = function ( event ) {
        if ( this.firstclick === true ) {
            this.firstclick = false;
            return;
        }
        var loc = MOUSEHANDLER.pointerEventToXY ( event );
        
        
        
        var ctx = getContext ( "starmap" );
        var imagedata = ctx.getImageData ( loc.x, loc.y, 1, 1 ).data;
        
        
        var r = imagedata [ 0 ];
        var g = imagedata [ 1 ];
        var b = imagedata [ 2 ];
        var a = imagedata [ 3 ];
        
        if ( r > 200 ) {
            this.tellStory ( 1 );
        }
        else {
            this.tellStory ( 0 );
        }
        
    };

    
    this._newMainTopic = function () {
        this.active = ( MAINMENU.currentTopic === "#button_" + MAINMENU.BLOGTAG );
        
        $ ( document ).off ( MOUSEHANDLER.CLICK, $.proxy ( this, "_checkPixel" ) );
        this.firstclick = true;
        
        if ( this.active ) {
            
            $ ( "#mindfuckcanvas" ).fadeIn ( 500, false );
            $ ( "#mindfuckcanvas1" ).fadeIn ( 500, false );
            $ ( document ).on ( MOUSEHANDLER.CLICK, $.proxy ( this, "_checkPixel" ) );
        }
        else {
            $ ( "#mindfuckcanvas" ).fadeOut ( 100, false );
            $ ( "#mindfuckcanvas1" ).fadeOut ( 100, false );
            
        }
        
        this.BASE_TEXTTICKER.setActive ( this.active );
        this.MF_TEXTTICKER.setActive ( this.active );
    };
    
    
    this.initialze ();
    
};

