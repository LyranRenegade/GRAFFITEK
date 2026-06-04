/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var WordPicker = function ( parentid ) {
    
    this.parentid = parentid;
    this.id = "v_wp";
    this.letter_words = [];
    this.allclosed = true;
    this.letterbuttons = [];

    this.install = function ( data ) {
        //data = words
        
        this.letters = [];
        
        
        /*
         loop words, 
         
         
         */
        
        
        var i;
        var wl = data.length;
        
        //var letter_words = [];
        /*
         [
            {
                first: "A",
                words: [
                    {
                        id: 1,
                        word: "Anarchie",
                        matches: [ anarchie, anarcho ],
                        hascontent: true / false
                    },
                    //etc
                ]
            },
            //etc
         ]
          
         */
        var worddata;
        var firstletter;
        var index;
        var letter_object;
        var word_id;
        var wrd;
        var matches, extramatches_s;
        var j, ml;
        var hascontent;
        for ( i = 0; i < wl; i ++ ) {
            worddata = data [ i ];
            //firstletter
            firstletter = worddata [ "title" ].substring ( 0, 1 );
            firstletter = firstletter.toUpperCase ();
           
            index = arrayIndexOfFieldValue ( this.letter_words, "first", firstletter );
            //console.log ( "index found for: " + firstletter + ": " + index );
            if ( index === -1 ) {
                letter_object = { first: firstletter, words: [] };
            }
            else {
                letter_object = this.letter_words [ index ];
            }
            //data to install in list
            wrd = worddata.title.toLowerCase ();
            wrd = firstletter + wrd.substring ( 1 );
            
            
            matches = String ( worddata.matches ).split ( ";" );

            
            
            matches.push ( wrd );         
            matches = this._checkMatches ( matches );

            //add an s to each word that didn't already end on one for plurals.. like a lot
            /*
            extramatches_s = [];
            ml = matches.length;
            for ( j = 0; j < ml; j ++ ) {
                extramatches_s.push ( matches [ j ] + "s" );
            }
            matches = matches.concat ( extramatches_s );
            */
            
            
            /*
            var wrd2 = wrd.toLowerCase ();
            if ( wrd2 == "alphabet" || wrd2 == "three" ) {
                MAIN.log ( ">> wrd: " + wrd );
                logObject ( matches );
            }*/
            
            hascontent = false;
            if ( worddata.tldr !== "" ) hascontent = true;
            else if ( worddata.text !== "" ) hascontent = true;
            
            
            word_id = { word: wrd, id: worddata.id, matches: matches, hascontent: hascontent };
            
            letter_object [ "words" ].push ( word_id );
            if ( index === -1 ) this.letter_words.push ( letter_object );
            
        }
        
        //CHECK
        wl = this.letter_words.length;
        
        this.letter_words.sort ( function ( a, b ) {
            if ( a.first < b.first ) return -1;
            if ( a.first > b.first ) return 1;
            return 0;
        });
        
        var words;
        var j, k;
        var wl2;
        for ( i = 0; i < wl; i ++ ) {
            letter_object = this.letter_words [ i ];
            
            this.letter_words [ i ].words = letter_object.words.sort ( function ( a, b ) {
                if ( a.word < b.word ) return -1;
                if ( a.word > b.word ) return 1;
                return 0;
            });
            words = letter_object.words;
            wl2 = words.length;
            //MAIN.log ( "Firstletter: " + letter_object.first + " words: " + words.length );
            for ( j = 0; j < wl2; j ++ ) {
                //MAIN.log ( " > " + words [ j ].id + "; " + words [ j ].word );
                if ( j > ( wl2 - 2 ) ) continue;
                for ( k = j + 1; k < wl2; k ++ ) {
                    if ( words [ j ] [ "word" ] == words [ k ] [ "word" ] ) {
                        MAIN.log ( "*** duplicate found with!", 1 );
                        MAIN.log ( " > " + words [ k ].id + "; " + words [ k ].word, 1 );
                    }
                }
            }
        }
        
        //this._buildHTML ();
    };
    
    this._checkMatches = function ( matches ) {
        var ml = matches.length;
        var checked_matches = [];
        var i;
        var match;
        for ( i = 0; i < ml; i ++ ) {
            match = matches [ i ];
            if ( match.length <= 2 ) continue;
            //skip numbers for now, cause they'll fuck up html id's and such.. need a search function
            //that skips html eventually anyhow..
            if ( !isNaN ( match ) ) continue;
            checked_matches.push ( match.toLowerCase () );
            //MAIN.log ( "MATCH ADDED: " + match.toLowerCase () );
        }
        return checked_matches;
    };
    
    this._buildHTML = function () {
        
        
        var html = "<p id=\"" + this.id + "\" style=\"" + MAIN._styledata.getFontStyle ( "wordpicker" ) + "\"></p>";
        
        
        $ ( "#" + this.parentid ).append ( html );
        var p = "%the alphabet%";
        p = TEXTPARSER.parseText ( p, "", true );
        $ ( "#" + this.id ).append ( p );
        
        p = "&nbsp;<span style='font-style: italic; cursor: pointer;' id='wp_ec'>[expand all]</span>";
        //p = TEXTPARSER.parseText ( p, "", false );
        $ ( "#" + this.id ).append ( p );
        $ ( "#" + this.id ).append ( "&nbsp;" );
        
        $ ( "#" + this.id ).css ({
            //lineHeight: "100x",
            marginRight: GLOBALDATA.PAGE_HOR_MARGINS + "px",
            marginLeft: GLOBALDATA.PAGE_HOR_MARGINS + "px"
            //marginTop: "2px",
            //marginBottom: "2px"
        });        
        

 
        
        var wl = this.letter_words.length;
        var i, j, wl2;
        var letter_object;
        //letterobject: { .first; .words; }
        //.words: [ .word; .id; ]
        var wordlist, tt_wordlist;
        var cascadebutton;
        for ( i = 0; i < wl; i ++ ) {
            letter_object = this.letter_words [ i ];
            //logObject ( letter_object );
            wl2 = letter_object.words.length;
            wordlist = "";
            tt_wordlist = "";
            for ( j = 0; j < wl2; j ++ ) {
                if ( letter_object.words [ j ].hascontent === false ) {
                    wordlist += "|" + letter_object.words [ j ].word + "|";
                }
                else wordlist += letter_object.words [ j ].word;
                tt_wordlist += "\'" + letter_object.words [ j ].word + "\'";
                if ( j < ( wl2 - 1 ) ) {
                    wordlist += ", ";
                    tt_wordlist += ", ";
                }
            }
            cascadebutton = TEXTPARSER.addOptionalText ( wordlist, "#" + this.id, tt_wordlist, false, false, letter_object.first, true );
            $ ( "#" + cascadebutton.canvas.id ).on ( "stateTo_" + cascadebutton.STATE_CLOSED, $.proxy ( this, "_buttonClose" ) );
            $ ( "#" + cascadebutton.canvas.id ).on ( "stateTo_" + cascadebutton.STATE_OPEN, $.proxy ( this, "_buttonOpen" ) );            
            this.letterbuttons.push ( cascadebutton );
        }

        $ ( "#wp_ec" ).on ( MOUSEHANDLER.MOUSEOVER, $.proxy ( this, "_EC_over" ) );
        $ ( "#wp_ec" ).on ( MOUSEHANDLER.MOUSEOUT, $.proxy ( this, "_EC_out" ) );
        $ ( "#wp_ec" ).on ( MOUSEHANDLER.CLICK, $.proxy ( this, "_EC_click" ) ); 
        
        $ ( "#" + this.id ).addClass ( "unselectable" );
        WORDLINKMANAGER.resetButtons ();
    };
    
    
    this._EC_over = function () {
        $ ( "#wp_ec" ).css ( {
            textDecoration: "underline"
        });
    };
    this._EC_out = function () {
        $ ( "#wp_ec" ).css ( {
            textDecoration: "none"
        });        
    };
    this._EC_click = function () {
        var target_state = ( this.allclosed )? "o" : "c";
        var i;
        var bl = this.letterbuttons.length;
        var cascadebutton;
        for ( i = 0; i < bl; i ++ ) {
            cascadebutton = this.letterbuttons [ i ];
            if ( cascadebutton.state !== target_state ) cascadebutton._changeState ();
            
        }
        //this.allclosed = !this.allclosed;
        //this._checkExpandCollapse ();
    };    
    
    this._buttonOpen = function () {
        this.allclosed = false;
        this._checkExpandCollapse ();
    };
    
    this._buttonClose = function () {
        this.allclosed = true;
        var i;
        var bl = this.letterbuttons.length;
        var cascadebutton;
        for ( i = 0; i < bl; i ++ ) {
            cascadebutton = this.letterbuttons [ i ];
            if ( cascadebutton.state === cascadebutton.STATE_OPEN ) {
                this.allclosed = false;
                this._checkExpandCollapse ();
                return;
            }
        }
        this._checkExpandCollapse ();
    };    
    
    this._checkExpandCollapse = function () {
        var text = this.allclosed? "[expand all]" : "[collapse all]";
        $ ( "#wp_ec" ).html ( text );
    };
    
    
    
};