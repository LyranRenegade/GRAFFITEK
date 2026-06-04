/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var LayoutManager = function () {
    
    this.siteloader = null;
    this.wordpicker = null;
    this.topwordnavigation = null;
    this.wordcontentview = null;
    
    this.content_id = "cnt_v";
    
    this.messagepause = 0;
    
    
    
    this.build = function () {
        this.siteloader = new ViewSiteLoader ( "parentdiv" );
        this.siteloader.build ();
        
        
        this.wordpicker = new WordPicker ( this.content_id  );
        
        this.topwordnavigation = new TopWordNavigationView ();
        this.wordcontentview = new WordContentView ();
        
    };
    
    this.install = function () {
        
        
        this.siteloader.setMessage ( MAIN._serverdata.WORDS_ROOT.length + " / " + MAIN._serverdata.WORDS_COMMENTS.length + " entries loaded." );

        this.wordpicker.install ( MAIN._serverdata.WORDS_ROOT );

        var testdiv = "<div id='" + this.content_id  + "'></div>";  
        $ ( "#parentdiv" ).append ( testdiv );
        $ ( "#" + this.content_id ).css ( {
            //position: "relative",
            //top: String ( 20 ) + "px"//,
            marginTop: "50px",
            marginBottom: "20px"
            //overflow: "hidden"
        });          
        
         // TEST CODE START
             
        
        
        var testp_id = "testP_id";
        var testp = "<p id=\"" + testp_id + "\" style=\"" + MAIN._styledata.getFontStyle ( "test" ) + "\"></p>";
        
        $ ( "#" + this.content_id ).append ( testp );
        $ ( "#" + testp_id ).css ({
            lineHeight: "140%",
            marginRight: GLOBALDATA.PAGE_HOR_MARGINS + "px",
            marginLeft: GLOBALDATA.PAGE_HOR_MARGINS + "px",
            marginTop: "20px",
            marginBottom: "20px"
        });
        
        var p = "%LYRAN RENEGADES //% ^exploring human mentality..^~ 2019 onwards.. some testing:~";
        p = TEXTPARSER.parseText ( p, "", true );
        $ ( "#" + testp_id ).append ( p );
        
        p = "0. `entry >`` ";
        p += "3. #entry >## ";
        p += "4. $entry >$$ ";
        p += "5. %entry >%% ";
        p += "6. ^entry >^^ ";
        p += "7. &entry >&& ";
        p += "8. *entry >** ";
        p += "-. +entry >++ ";
        p += "-. |entry >|| ";
        p += "-. <entry ><< ";
        
        p = TEXTPARSER.parseText ( p, "test_anchor" );
        $ ( "#" + testp_id ).append ( p );
        
        TEXTPARSER.addOptionalText ( "Well.. this is the standard open/close button..", "#" + testp_id, "things to research" );

        p = TEXTPARSER.parseText ( "Some more info.." );
        $ ( "#" + testp_id ).append ( p );
        
        TEXTPARSER.addOptionalText ( "And another", "#" + testp_id, "what's next?" );
        p = TEXTPARSER.parseText ( "to b continued..~~ Contact the author", "", true );
        $ ( "#" + testp_id ).append ( p );
        
        p = "<br/><span style='" + MAIN._styledata.getStyle ( "welcome_message" ) + "'>";
        p += "<span id='welcome_message'>";
        p += TEXTPARSER.parseText ( "WE HAVE A MESSAGE", "", true );
        p += "</span>";
        p += "</span>";
        $ ( "#" + testp_id ).append ( p );
        
        $ ( "#" + testp_id ).addClass ( "unselectable" );
        //TEST CODE END
        
        this.wordpicker._buildHTML ();
        this.topwordnavigation._buildHTML ( "parentdiv" );
        this.wordcontentview._buildHTML ( "parentdiv" );
        
        $ ( document ).on ( "frameTick", $.proxy ( this, "_frameTick" ) );
        $ ( window ).scroll( $.proxy ( this, "_windowScrolled" ) );
    };
    
    this.setMaxScroll = function () {
        var st = $ ( document ).scrollTop ();
        var wrds_offset = $ ( "#wcnt_v" ).offset ();
        var maxst = wrds_offset.top - 62;
        //MAIN.log ( "setMaxScroll, st: " + st + ", wrds_offset: " + wrds_offset.top + ", maxst: " + maxst );
        if ( st > maxst ) {
            $ ( document ).scrollTop ( maxst );
        }
    };
    
    /////////////
    // PRIVATE //
    /////////////
    
    this._windowScrolled = function () {
        
        var offset = $ ( "#twn_v" ).offset ();
        var h = $ ( "#twn_v" ).height ();
        var st = $ ( document ).scrollTop ();
        //MAIN.log ( "scrolling, wordnavbar top: " + offset.top + ", height: " + h + ", doc, scrolltop: " + st );
        var wrds_offset = $ ( "#wcnt_v" ).offset ();
        //MAIN.log ( "wrds position: " + ( wrds_offset.top - st ) );
        //MAIN.log ( "scrolltop: " + st );
        if ( this.topwordnavigation.loose ) {
            if ( ( wrds_offset.top - st ) >= 62 ) {
                this.topwordnavigation.setLoose ( false );
            }
        }
        else {
            if ( offset.top - st <= 0 ) {
                this.topwordnavigation.setLoose ( true );
            }
        
        }
    };
    
    
    
    
    this._frameTick = function () {
        if ( this.messagepause === 333 ) {
            $ ( "#welcome_message" ).fadeTo ( 7777, 0 );
        }        
        if ( this.messagepause <= 0 ) {
            this._setNewMessage ();
        }
        else {
            this.messagepause --;
        }
        //MAIN.log ( "layoutmanager.frametick: " + this.messagepause );
    };
    
    this._setNewMessage = function () {
        //$ ( "#welcome_message" ).css ( "display", "none" );
        this.messagepause = ( 750 ) + Math.round ( 1500 * Math.random () );

        //remove previous links
        WORDLINKMANAGER.removeFrom ( "welcome_message" );
        
        var message = SITEMESSAGES.getWeightedRandomMessage ();
        MAIN.log ( "setNewMessage: " + message );
        var p = TEXTPARSER.parseText ( message, "", true );
        //set the new message
        $ ( "#welcome_message" ).html ( p );
        $ ( "#welcome_message" ).fadeTo ( 7777, 1 );

        WORDLINKMANAGER.activateFrom ( "welcome_message" );
    };
    
    
    
    
    
    
    
    
    
    
    
    
};


