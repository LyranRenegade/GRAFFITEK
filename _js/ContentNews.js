

var ContentNews = function () {
    
    
    this.wordcount_adjectives = [ "awesome", "needless", "meaningful", "wasted", "awe-ful", "exhilarating", "magnanimous", "gratuitous" ];
    
    /*IDS*/
    this.ID_MSM = "msm";
    this.ID_LOGIC = "logic";
    this.ID_SIMONSAYS = "simonsays";
    
    
    this.currentTopicID = null;
    
    this.inserts = 0;
    
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
    
    
    this.CONTENT_BOUNDS = { x: 0, y: 0, w: 0, h: 0 };
    
    this.quoteshown = 0;
    this.WAIT_TIME = 1500;//in frameticks after fully shown
    this.currentQuotes = [];
    


    this.scrollbar = null;
    
    
    
    this.topics = [];
    /*
     * paragraphid: id of div paragraph
     * anchorid: id of div anchors
     * quotes
     * 
     * 
     */
    this.topicoverview_buttonset = null;
    

    this.initialize = function () {
        this.inserts = 0;
        this.scrollbar = new CustomScrollbar ( "newscontent" );
        this.TEXTTICKER = new TextTicker ( [], [], "quotecanvas" );
        this.TEXTTICKER.offsetX = 0;
        //this.TEXTTICKER.font = "14pt roboto_mono_regular";
        //this.TEXTTICKER.charwidth = 11;
        //this.TEXTTICKER.lineheight = 20;
    
    
        $ ( document ).on ( "newMainTopic", $.proxy ( this, "_hideOrShow" ));
        $ ( document ).on ( "newPositions", $.proxy ( this, "_resizeScreen" ));

        $ ( "#newscontent" ).css ( {
            color: GLOBALDATA.CLR_BLACK
        });
        
        
        //this._resizeScreen ();
        
        //creates a div newsparagraph and attaches it to newscontent, returns the quotes, id = "newsparagraph"
        
              
        
        var BLOG_NEWNEWS = new BLOG_newnews ( "newscontent" );
        var newsanchors = this._installAnchors ( BLOG_NEWNEWS.contentid, "newsanchors" );
        this._addTopic ( this.ID_MSM, "Mainstream Brainwashing", BLOG_NEWNEWS, newsanchors );
        
        
        //newsanchors.setAble ( true );
        //var quotes = BLOG_NEWNEWS.quotes;
        //this.currentQuotes = quotes;
        
       
        var BLOG_LOGICS = new BLOG_logic ( "newscontent" );
        newsanchors = this._installAnchors ( BLOG_LOGICS.contentid, "logicanchors" );
        this._addTopic ( this.ID_LOGIC, "Elemental Logic", BLOG_LOGICS, newsanchors );
       
        var BLOG_SIMONSAYS = new BLOG_simonsays ( "newscontent" );
        newsanchors = this._installAnchors ( BLOG_SIMONSAYS.contentid, "simonsaysanchors" );
        this._addTopic ( this.ID_SIMONSAYS, "Simon Says [/Suggests]", BLOG_SIMONSAYS, newsanchors );  
       
       
        this.topicoverview_buttonset =  this._installTopicAnchors ();
        
        this.setTopic ( this.ID_MSM );
        //this._setNewQuote ();
        this.TEXTTICKER.initialize ();
        
        this._hideOrShow ();
    };
    
    this._addTopic = function ( id, title, blogitem, buttonset ) {
        var text = $ ( "#" + blogitem.contentid ).text ();
        var words = text.split ( " " );
        var wl = words.length;
        var i;
        var wordcount = 0;
        for ( i = 0; i < wl; i ++ ) {
            if ( words [ i ].length > 1 ) wordcount ++;
        }
        
        
        log ( "addtopic: " + id + ", anchors; " + buttonset.buttonlist.length + ", wordcount: " + wordcount );
        this.topics.push ( { id: id, title: title, blogitem: blogitem, buttonset: buttonset, wordcount: wordcount } );
        

        
        //blogitem hols .contentid and .quotes
        //buttonset holds .div and .buttonset and .currentSV [scrollvalue]
    };
    
    
    this.setTopic = function ( id ) {
        if ( this.currentTopicID === id ) return;
        var i;
        var tl = this.topics.length;
        var topic;
        var display;
        for ( i = 0; i < tl; i ++ ) {
            display = "none";
            topic = this.topics [ i ];
            if ( topic.id === id ) {
                this.currentQuotes = topic.blogitem.quotes;
                display = "block";
            }
            topic.buttonset.setAble ( topic.id === id );
            $ ( "#" + topic.blogitem.contentid ).css ( {
                display: display
            });
        }
        
        this._setNewQuote ();
        this.currentTopicID = id;
        $ ( "#newscontent" ).scrollTop ( 0 );
        this._updateScrollbar ();
        this.topicoverview_buttonset.setSelected ( this.topicoverview_buttonset.currentSV );
    };
    
    
    this._topicChange = function () {
        var sv = this.topicoverview_buttonset.currentSV;
        var topic = this.topics [ sv ];
        this.setTopic ( topic.id );
        
    };
    
    this._installTopicAnchors = function () {
        var i, index;
        var adjective;
        var buttonlist = [];
        var tl = this.topics.length;
        var topic;
        for ( i = 0; i < tl; i ++ ) {
            index = Math.floor ( this.wordcount_adjectives.length * Math.random () );
            adjective = this.wordcount_adjectives [ index ];
            topic = this.topics [ i ];
            buttonlist.push ( { label: topic.title, value: "topic_" + String ( i ), sv: i, tooltip:  String ( topic.wordcount ) + " " + adjective + " words" } );
        }
        var buttonsetdiv = new ButtonSetDIV ( "overview", buttonlist, "topic_change" );
        
        $ ( "#left_newspanel" ).append ( buttonsetdiv.div );
        $ ( "#overview" ).css ( {
            position: "absolute"
        });        
        return buttonsetdiv;
    };
    
    
    this._installAnchors = function ( divid, anchordivid ) {
        var buttonlist = [];
        $ ( "#" + divid + " a" ).each ( function ( index ) {
            //log ( "anchor " + index + ": " + this + ", name: " + this.name + " ypos: " + $ ( this ).position ().top );
            buttonlist.push ( { label: this.name, value: divid + "_" + String ( index ), sv: 0, tooltip: "" } );
        });
    
        var buttonsetdiv = new ButtonSetDIV ( anchordivid, buttonlist, "anchor_scrollchange" );
        $ ( "#right_newspanel" ).append ( buttonsetdiv.div );
        $ ( "#" + anchordivid ).css ( {
            position: "absolute",
            bottom: 0,
            right: 0
        });
        
        return buttonsetdiv;
        
    };
    

    
    
    /////////////
    // PRIVATE //
    /////////////

    
    this._setNewQuote = function () {
        if ( this.TEXTTICKER === null ) return;
        var index = Math.floor ( this.currentQuotes.length * Math.random () );
        
        this.TEXTTICKER.setNewText ( this.currentQuotes [ index ] );
        this.quoteshown = 0;
        this.TEXTTICKER.setActive ( this.active );
    };

    
    this._resizeScreen = function () {
        //if ( this.TEXTTICKER === null ) return;
        
        log ( "resize contentNews" );
        this._redrawShades ();
        this.TEXTTICKER._resizeScreen ();
        this._updateScrollbar ();
    };
    
    
    this._redrawShades = function () {
        //log ( 'redrawshades' );

        var canvi = [ "shadecanvas_top", "shadecanvas_left", "shadecanvas_right", "shadecanvas_bottom" ];
        var ctx;
        
        
        if ( this.active ) {
            
            var h = this.CONTENT_BOUNDS.h;
            var w = this.CONTENT_BOUNDS.w;
            var x = this.CONTENT_BOUNDS.x;
            var y = this.CONTENT_BOUNDS.y;
           
            var defmargin = 20;
            
            ctx = getContext ( canvi [ 0 ] );  
            var grad = ctx.createLinearGradient ( 0, 0, defmargin, 0 );
            grad.addColorStop ( 0, "rgba(0,0,0,0)" );
            grad.addColorStop ( 1, "rgba(0,0,0," + String ( GLOBALDATA.NEWS_BACKGROUND_ALPHA ) + ")" );
                     
            ctx.clearRect ( 0, 0, ctx.canvas.width, ctx.canvas.height );
            ctx.canvas.width = defmargin;
            ctx.canvas.height = h;
            ctx.canvas.style.left = String ( x - defmargin ) + "px";
            ctx.canvas.style.top = String ( y ) + "px";
            ctx.fillStyle = grad;
            ctx.fillRect ( 0, 0, defmargin, h );
            
            
            ctx = getContext ( canvi [ 1 ] );
            grad = ctx.createLinearGradient ( 0, 0, defmargin, 0 );
            grad.addColorStop ( 0, "rgba(0,0,0," + String ( GLOBALDATA.NEWS_BACKGROUND_ALPHA ) + ")" );
            grad.addColorStop ( 1, "rgba(0,0,0,0)" );
            ctx.clearRect ( 0, 0, ctx.canvas.width, ctx.canvas.height );
            ctx.canvas.width = defmargin;
            ctx.canvas.height = h;            
            ctx.canvas.style.left = String ( x + w ) + "px";
            ctx.canvas.style.top = String ( y ) + "px";            
            ctx.fillStyle = grad;
            ctx.fillRect ( 0, 0, defmargin, h );

            ctx = getContext ( canvi [ 2 ] );
            grad = ctx.createLinearGradient ( 0, 0, 0, defmargin * 2 );
            grad.addColorStop ( 0, "rgba(0,0,0,0)" );
            grad.addColorStop ( 0.5, "rgba(0,0,0," + String ( GLOBALDATA.NEWS_BACKGROUND_ALPHA ) + ")" );
            grad.addColorStop ( 1, "rgba(0,0,0,0)" );
            ctx.clearRect ( 0, 0, ctx.canvas.width, ctx.canvas.height );
            ctx.canvas.width = w;
            ctx.canvas.height = defmargin * 2;            
            ctx.canvas.style.left = String ( x ) + "px";
            ctx.canvas.style.top = String ( y - defmargin ) + "px";            
            ctx.fillStyle = grad;
            ctx.fillRect ( 0, 0, w, defmargin * 2 );
            
            ctx = getContext ( canvi [ 3 ] );
            grad = ctx.createLinearGradient ( 0, 0, 0, defmargin * 2 );
            grad.addColorStop ( 0, "rgba(0,0,0,0)" );
            grad.addColorStop ( 0.5, "rgba(0,0,0," + String ( GLOBALDATA.NEWS_BACKGROUND_ALPHA ) + ")" );
            grad.addColorStop ( 1, "rgba(0,0,0,0)" );
            ctx.clearRect ( 0, 0, ctx.canvas.width, ctx.canvas.height );
            ctx.canvas.width = w;
            ctx.canvas.height = defmargin * 2;                
            ctx.canvas.style.left = String ( x ) + "px";
            ctx.canvas.style.top = String ( h + y - defmargin ) + "px";            
            ctx.fillStyle = grad;
            ctx.fillRect ( 0, 0, w, defmargin * 2 );
            
        }        
        
        var i;
        for ( i = 0; i < 4; i ++ ) {
            if ( this.active ) {
                //log ( "canvi fadein 500" );
                $ ( "#" + canvi [ i ] ).fadeIn ( 1000 );
            }
            else {
                $ ( "#" + canvi [ i ] ).fadeOut ( 100, function () {
                    ctx = getContext ( this.id );
                    ctx.clearRect ( 0, 0, ctx.canvas.width, ctx.canvas.height );
                    ctx.canvas.width = 0;
                    ctx.canvas.height = 0;
                    ctx.canvas.style.left = "0px";
                    ctx.canvas.style.top = "0px";
                });                
            }
        }
    };
    
    this._enableMouse = function ( b ) {
        
    };
    
    
    
    this.frameTick = function () {
        if ( this.TEXTTICKER.allshown ) {
            this.quoteshown ++;
            if ( this.quoteshown * Math.random () > this.WAIT_TIME ) {
                log ( "Setting new quote" );
                this._setNewQuote ();
                
            }
        }
    };
    
    
    
    this._startScrollbar = function () {
        if ( !this.active ) return;
        this._updateScrollbar ();
        $ ( document ).on ( "textChange", $.proxy ( this, "_updateScrollbar" ) );
        $ ( document ).on ( "anchor_scrollchange", $.proxy ( this, "_anchorScrollChange" ) );
        $ ( document ).on ( "topic_change", $.proxy ( this, "_topicChange" ) );
        if ( this.active ) {
            this.scrollbar.setActive ( this.active );
            this._updateAnchors ();
        }
    };
    
    this._updateScrollbarDragger = function () {
        this.scrollbar.redrawDragger ();
    };
    
    this._updateAnchors = function () {
        var topic = this._getCurrentTopic ();
        var top;
        var scrolltop = $ ( "#newscontent" ).scrollTop ();
        $ ( "#" + topic.blogitem.contentid + " a" ).each ( function ( index ) {
            top = $ ( this ).position ().top;
            topic.buttonset.buttonlist [ index ].sv = Math.round ( top + scrolltop ) - 25;
        });            
    };
    
    this._getCurrentTopic = function () {
        var i;
        var tl = this.topics.length;
        for ( i = 0; i < tl; i ++ ) {
            if ( this.topics [ i ].id === this.currentTopicID ) {
                return this.topics [ i ];
            }
        }
        return null;
    };
    
    
    this._anchorScrollChange = function () {
        if ( this.scrollbar.maxScroll <= 0 ) return;
        var topic = this._getCurrentTopic ();
        var sv = topic.buttonset.currentSV;
        var duration = Math.round ( Math.abs ( $ ( "#newscontent" ).scrollTop () - sv ) / 2 );
        //log ( "scrolling to " + sv + " in: " + duration );
        
        $( "#newscontent" ).animate ( 
            { 
                scrollTop: sv 
            },
            { 
                easing: "swing", 
                duration: duration, 
                step: $.proxy ( this, "_updateScrollbarDragger" )
            }
        );
        
        
    };
    
    
    this._updateScrollbar = function () {
        var topic = this._getCurrentTopic ();
        if ( topic === null ) return;
        
        
        var th = Math.max ( $ ( "#" + topic.blogitem.contentid ).height (), $ ( "#" + topic.blogitem.contentid ).prop ( "scrollHeight" ) );
        //log ( "updateScrollbar: " + th );
        this.scrollbar.updateTotalHeight ( th );
        this._updateAnchors ();
    };
    
    
    this._hideOrShow = function () {
        this.active = ( MAINMENU.currentTopic === "#button_" + MAINMENU.NEWSTAG );
        this.quoteshown = 0;
        
        $ ( document ).off ( "textChange", $.proxy ( this, "_updateScrollbar" ) );
        $ ( document ).off ( "anchor_scrollchange", $.proxy ( this, "_anchorScrollChange" ) );
        $ ( document ).off ( "topic_change", $.proxy ( this, "_topicChange" ) );
        this.topicoverview_buttonset.setAble ( false );
        //this.TEXTTICKER.setActive ( false );
        //
        if ( this.active ) {
            this.TEXTTICKER.setHidden ( false );
            if ( !this.TEXTTICKER.allshown ) {
                this.TEXTTICKER.setActive ( true );
            }
            
            //log ( "div fadein 500" );
            $ ( "#newsdiv" ).fadeIn ( 200, $.proxy ( this, "_startScrollbar" ) );
            $ ( "#quotecanvas" ).fadeIn ( 500, false );
            $ ( "#right_newspanel" ).fadeIn ( 500, false );
            $ ( "#left_newspanel" ).fadeIn ( 500, false );
            
            
            if ( this.TEXTTICKER.allshown ) {
                this._setNewQuote ();
            }
            
            this._redrawShades ();
            this.topicoverview_buttonset.setAble ( true );
        }
        else {
            var duration = 100;
            if ( MAINMENU.currentTopic === "#button_" + MAINMENU.BLOGTAG ) {
                $ ( "#newsdiv" ).css ( "display", "none" );
                $ ( "#quotecanvas" ).css ( "display", "none" );
                $ ( "#right_newspanel" ).css ( "display", "none" );
                $ ( "#left_newspanel" ).css ( "display", "none" );
            }
            else {
                $ ( "#newsdiv" ).fadeOut ( duration, false );
                $ ( "#quotecanvas" ).fadeOut ( duration, false );
                $ ( "#right_newspanel" ).fadeOut ( duration, false );
                $ ( "#left_newspanel" ).fadeOut ( duration, false );                
            }
            this.TEXTTICKER.setActive ( false );
            this._redrawShades ();
            this.scrollbar.setActive ( false );
            this.TEXTTICKER.setHidden ( true );
        }
        this._enableMouse ( this.active );
        //log ( "ContentNews._hideOrShow (): " + this.active + " ct: " + MAINMENU.currentTopic + ", allshown? " + this.TEXTTICKER.allshown  );
      
    };
    
    //this.initialize ();
    
    //this.build ();
    
};

