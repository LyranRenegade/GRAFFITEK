
//LR 2019




var TextParser = function () {
    
     /*
     * ^: CLR_1
     * $: CLR_2
     * %: CLR_3
     * `: GREY
     * <: WHITE
     * >: LINK
     * >: escape next character
     * #: underline start
     * |: CLR_DARKRED    
     * +: CLR_4
     * 
     * ~ = newline
     * _ = bunch of black space
     * 
    */
   

   
    this.keys = [ 
        { key: "`", style: "color: " + GLOBALDATA.CLR_GREY + "; " },
        { key: "#", style: "text-decoration: underline; " },
        { key: "$", style: "color: " + GLOBALDATA.HL_CLR2 + "; "},
        { key: "%", style: "color: " + GLOBALDATA.HL_CLR3 + "; "},
        { key: "^", style: "color: " + GLOBALDATA.HL_CLR1 + "; " },
        { key: "&", style: "font-family: arial_narrow_bold; font-size: 18px; color: " + GLOBALDATA.CLR_WHITE + "; " },
        { key: "*", style: "font-family: arial_narrow_bold; font-size: 26px;" },
        { key: "+", style: "color: " + GLOBALDATA.HL_CLR4 + "; "},
        { key: "|", style: "color: " + GLOBALDATA.CLR_DARKRED + "; " },
        { key: "<", style: "color: " + GLOBALDATA.CLR_WHITE + "; " },
        { key: "@", style: "font-style: 'italics'; " }
    ];
    
    
    this._getStyle = function ( char ) {
        var i;
        var kl = this.keys.length;
        var keydata;
        for ( i = 0; i < kl; i ++ ) {
            keydata = this.keys [ i ];
            if ( keydata.key === char ) {
                return keydata.style;
            }
        }
        return "";
    };

    this.addOptionalText = function ( txt, parentid, tooltip, nested, inserted, symbol, linkmatches ) {
        //linkmatches a boolean that must be both set and true for the textparser to scan for links from
        //WordPickes.letter_words.. and link them to a call to an id in NaviationManager
        var newtext = this.parseText ( txt, "", linkmatches );
        
        //create a span with the button and a span with the text
        //button is visible def state -> text invisible
        //button is invisible open state -> text visible
        
        //nested / inserted changes layour slightly
        //symbol, if given, replaces standard + / - button with the symbol of choice
        
        var button = ( symbol !== undefined )? CASCADEBUTTONMANAGER.createButton ( tooltip, symbol ) : CASCADEBUTTONMANAGER.createButton ( tooltip );

        var spanid = "optionalspan_" + String ( button.index );
        var buttonspanid = "cascade_button_" + String ( button.index );
        var textspanid = "optionaltext_" + String ( button.index );
        
        var optionalHTML = "<span id=\"" + spanid + "\">";
        optionalHTML += "<span id=\"" + buttonspanid + "\"></span>";
        optionalHTML += "<span id=\"" + textspanid + "\" style=\"display:none;\"><span>" + newtext + "</span></span>";
        optionalHTML += "</span>";
        
        $ ( parentid ).append ( optionalHTML );
        $ ( "#" + buttonspanid ).append ( button.canvas );
        
        var paddingright = nested? 0 : 2;
        
        var backclr = inserted? GLOBALDATA.DL_CLR3: GLOBALDATA.DL_CLR1;
        
        $ ( "#" + textspanid ).css ( {
            backgroundColor: backclr,
            marginLeft: "5px",
            paddingLeft: "4px",
            paddingRight: String ( paddingright ) + "px",
            color: GLOBALDATA.CLR_WHITE
            
        });
        if ( symbol !== undefined ) {
            $ ( "#" + spanid ).css ( {
                marginLeft: "3px",
                marginRight: "3px",
                //marginTop: "3px"
                lineHeight: "21px"
            });   
             
        }
        else {
            $ ( "#" + spanid ).css ( {
                marginLeft: "5px",
                marginRight: "5px"
                //lineHeight: "22px"
            });
        }
        
        
        
        
        $ ( "#" + button.canvas.id ).on ( "stateTo_" + button.STATE_CLOSED, $.proxy ( this, "_closeText" ) );
        $ ( "#" + button.canvas.id ).on ( "stateTo_" + button.STATE_OPEN, $.proxy ( this, "_openText" ) );
        
        button.install ();
        button.setAble ( true );
        
        return button;
    };
    
    
    
    this._openText = function ( e ) {
        //MAIN.log ( "openText: " + e.target.id );
        this.openText ( e.target.id );
    };
    
    this.openText = function ( id ) {
        var ui = String ( id ).lastIndexOf ( "_" );
        var index = String ( id ).substr ( ui + 1 );
        var textid = "#optionalspan_" + String ( index ) + " #optionaltext_" + String ( index );
        $ ( textid ).css ( "display", "inline" );
        $ ( document ).trigger ( "textChange" );
    };
    
    this._closeText = function ( e ) {
        //log ( "_closeText: " + e.target.id );
        this.closeText ( e.target.id );
    };
    
    this.closeText = function ( id ) {
        var ui = String ( id ).lastIndexOf ( "_" );
        var index = String ( id ).substr ( ui + 1 );
        var textid = "#optionalspan_" + String ( index ) + " #optionaltext_" + String ( index );
        $ ( textid ).css ( "display", "none" );      
        $ ( document ).trigger ( "textChange" );        
    };
    
    this.parseText = function ( txt, anchorname, linkmatches, omit_ids ) {
        var parsedtext = "";
        
        if ( anchorname !== undefined ) {
            if ( anchorname.length !== 0 ) {
                parsedtext += "<a name=\"" + anchorname + "\"/>";
            }
        }
        
        var spans_open = [];
        var tl = txt.length;
        var i;
        var char;
        var style;
        var ignorenext = false;
        
        var si;
        for ( i = 0; i < tl; i ++ ) {
            char = txt [ i ];
            
            
            if ( ignorenext) {
                parsedtext += char;
                ignorenext = false;
            }
            else {
                style = this._getStyle ( char );

                if ( style !== "" ) {
                    si = arrayIndexOf ( spans_open, char );
                    if ( si !== -1 ) {
                        parsedtext += "</span>";
                        spans_open.splice ( si, 1 );
                    }
                    else {
                        parsedtext += "<span style=\"" + style + "\">";
                        spans_open.push ( char );
                    }
                }
                else {
                    if ( char === ">" ) {
                        //log ( "ignorenext" );
                        ignorenext = true;
                    }
                    else if ( char === "~" ) {
                        //tilde
                        parsedtext += "<br/>";
                    }
                    else if ( char === "_") {
                        //underscore
                        parsedtext += "<span style=\"background-color:#000000;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>";
                    }
                    else parsedtext += char;
                }
            }
        }
    
        if ( linkmatches !== true ) return parsedtext;
        else {
            //linkmatches a boolean that must be both set and true for the textparser to scan for links from
            //WordPickes.letter_words.. and link them to a call to an id in NaviationManager       
            
            var lw = MAIN._layoutmanager.wordpicker.letter_words;
            /*OBJECT EXAMPLE
             [
                {
                    first: "A",
                    words: [
                        {
                            id: 1,
                            word: "Anarchie",
                            matches: [ anarchie, anarcho ]
                        },
                        //etc
                    ]
                },
                //etc
             ]
             */
            var lwl = lw.length;
            var i, j, k, lw2, ml, mi;
            var letter_words, letter_word;
            var matches;
            var match;
            var charcode_before_match, charcode_after_match;
            var parsedtext_lower = parsedtext.toLowerCase ();
            var id, spanid;
            var ssi;
            //if ( trace ) MAIN.log ( "looking for author in " + parsedtext_lower + ", letterwords length: " + lwl );
            var origword, ptstart, ptend;    
            var goodindex;
            var matchfound;
            var validchars;
            var addedlength;
            var skip;
            for ( i = 0; i < lwl; i ++ ) {
                letter_words = lw [ i ].words;
                

                
                lw2 = letter_words.length;
                
                for ( j = 0; j < lw2; j ++ ) {
                    letter_word = letter_words [ j ];
                    skip = false;
                    if ( omit_ids !== undefined ) {
                        //MAIN.log ( "omit_ids found, 0:" + omit_ids [ 0 ] + ".. id: " + letter_word.id );
                        if ( omit_ids.indexOf ( letter_word.id ) !== -1 ) {
                            //MAIN.log ( "skipping id: " + letter_word.id + " in textparser" );
                            skip = true;
                        }
                    }
                    if ( skip === true ) continue;                    
                    matches = letter_word.matches;
                    ml = matches.length;
                    
                    for ( k = 0; k < ml; k ++ ) {
                        match = matches [ k ];
                        //now scan the text for the match
                        
                        goodindex = true;
                        matchfound = false;
                        ssi = 0;
                        var counter = 0;
                        do {
                            if ( counter > 10 ) {
                                goodindex = false;
                                MAIN.log ( "too long searching for match: " + match + " in: " + parsedtext_lower );
                                MAIN.log ( "searching again for: " + counter + ", ssi: " + ssi + ", mi: " + mi );
                            }
                            
                            mi = parsedtext_lower.indexOf ( match, ssi );
                            
                            
                            
                            if ( mi === -1 ) goodindex = false;
                            else if ( ssi > ( parsedtext_lower.length - match.length ) ) goodindex = false;
                            else {

                                ssi = ( mi + match.length + 1 );
                                
                                //search for whole word only
                                charcode_before_match = parsedtext_lower.charCodeAt ( mi - 1 );
                                charcode_after_match = parsedtext_lower.charCodeAt ( mi + match.length );

                                
                                if ( charcode_after_match === 115 ) {
                                    //letter behind last is an s
                                    if ( parsedtext_lower.charCodeAt ( mi + match.length - 1 ) !== 155 ) {
                                        //if last letter wasn't also an 's'
                                        //check whether next character is valid / extend word with 's' [PLURAL, RIGHT?]
                                        charcode_after_match = parsedtext_lower.charCodeAt ( mi + match.length + 1 );
                                        match += "s";
                                    }
                                }
                                

                                validchars = true;                                
                                if ( isNaN ( charcode_before_match ) ) charcode_before_match = 0;
                                if ( isNaN ( charcode_after_match ) ) charcode_after_match = 0;

                                //numerals
                                if ( charcode_before_match >= 48 && charcode_before_match <= 57 ) validchars = false;
                                else if ( charcode_after_match >= 48 && charcode_after_match <= 57 ) validchars = false;
                                //alphabet lowercase
                                else if ( charcode_before_match >= 97 && charcode_before_match <= 122 ) validchars = false;
                                else if ( charcode_after_match >= 97 && charcode_after_match <= 122 ) validchars = false;
                                //-
                                else if ( charcode_before_match === 45 || charcode_after_match === 45 ) validchars = false;
                          

                          
                          
                                if ( validchars === true ) {
                                    //ok we got a match
                                    //MAIN.log ( "!Match found: " + match + " at: " + mi + " in " + parsedtext.substr ( 0, 30 ) );

                                    //ok, now to replace the text with a span that is mouse_enabled
                                    //click -> send message to navigationmanager with linked id in letter_word
                                    //over / out -> underline, no underline [so we need unique id for span]

                                    id = letter_word.id;
                                    spanid = NAVIGATIONMANAGER.LINKTYPE_WORD + "_" + WORDLINKMANAGER.getUniqueIDLink ( id );
                                    //form: 'wl'_id_counter
                                    origword = parsedtext.substring ( mi, mi + match.length );
                                    ptstart = parsedtext.substring ( 0, mi );
                                    ptend = parsedtext.substring ( mi + match.length );

                                    parsedtext = ptstart;
                                    parsedtext += "<span id='" + spanid + "'>";
                                    parsedtext += origword + "</span>";
                                    parsedtext += ptend;
                                    
                                    
                                    WORDLINKMANAGER.addPendingWordLink ( spanid, id );

                                    addedlength = parsedtext.length - parsedtext_lower.length;
                                    ssi += addedlength;//update search index to include all the crap we inserted in the paragraph
                                    
                                    parsedtext_lower = parsedtext.toLowerCase ();
                                    
                                    
                                    //NB: only one match per word!
                                    matchfound = true;
                                }
                        
                            }
                            counter ++;
                        }
                        while ( goodindex === true );
                        
                        
                        if ( matchfound ) {
                            
                            break;
                        }
                    }
                }
            }
            
            
            
        }
        return parsedtext;
    };
    
    
    
    
    
    
};