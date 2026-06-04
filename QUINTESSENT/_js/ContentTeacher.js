




ContentTeacher = function ( parentid ) {
    
    this.enabled = false;
    this.font = "quattrocento_regular";
    this.fontsize = 16;
    this.plaintextcolor = GLOBALDATA.CLR_BLACK;
    this.scrollbar = null;
    
    
    this.initialize = function ( parentid ) {
        
        var container = "<div id=\"contentteacher\" style='z-index:1;'></div>";
        $ ( parentid ).append ( container );
        
        this.scrollbar = new CustomScrollbar ( "contentteacher" );
        
        $ ( "#contentteacher" ).css ( {
            position: "fixed",
            top: String ( HEIGHT ) + "px",
            backgroundColor: GLOBALDATA.CLR_WHITE,
            overflow: "hidden"

        });

        
        $ ( document ).on ( "resizeUpdate", $.proxy ( this, "_resizeScreen" ) );
        
        this._addParagraph ();
        
        this._resizeScreen ();
    };
    
    this.setAble = function ( b, animate ) {
        $ ( document ).off ( "textChange", $.proxy ( this, "_updateScrollbar" ) );
        $ ( document ).off ( "anchor_scrollchange", $.proxy ( this, "_anchorScrollChange" ) );
        $ ( document ).off ( "topic_change", $.proxy ( this, "_topicChange" ) );
        
        
        this.enabled = b;        
        log ( "ContentTeacher.setAble " + b + ", animate: " + animate );
        
        if ( !b ) this.scrollbar.setActive ( false );
        
        if ( animate ) {
            
            if ( b ) {
                $ ( "#contentteacher" ).css ( {
                    opacity: 1,
                    top: String ( HEIGHT ) + "px"
                });
                $ ( "#contentteacher" ).animate ( {
                    top: "0px"
                }, 1111, $.proxy ( this, "_startScrollbar" ) );
            }
            else {
                $ ( "#contentteacher" ).animate ( {
                    opacity: 0
                }, 1111, function () { 
                    $ ( "#container" ).css ( { 
                        top: String ( HEIGHT ) + "px" 
                    })
                } );
            }
        }
        else {
            if ( b ) {
                this.scrollbar.setActive ( true );
            }
            this._resizeScreen ();
        }
        

        

    };
    
    
    
    /////////////
    // PRIVATE //
    /////////////
    
    this._startScrollbar = function () {
        if ( !this.enabled ) return;
        this._updateScrollbar ();
        $ ( document ).on ( "textChange", $.proxy ( this, "_updateScrollbar" ) );
        
        //$ ( document ).on ( "anchor_scrollchange", $.proxy ( this, "_anchorScrollChange" ) );
        //$ ( document ).on ( "topic_change", $.proxy ( this, "_topicChange" ) );
        
        this.scrollbar.setActive ( this.enabled );
        //this._updateAnchors ();
        
    };  
    
    this._updateScrollbarDragger = function () {
        this.scrollbar.redrawDragger ();
    };
    
    /*this._updateAnchors = function () {
        var topic = this._getCurrentTopic ();
        var top;
        var scrolltop = $ ( "#newscontent" ).scrollTop ();
        $ ( "#" + topic.blogitem.contentid + " a" ).each ( function ( index ) {
            top = $ ( this ).position ().top;
            topic.buttonset.buttonlist [ index ].sv = Math.round ( top + scrolltop ) - 25;
        });            
    };*/
    
    /*
    this._getCurrentTopic = function () {
        var i;
        var tl = this.topics.length;
        for ( i = 0; i < tl; i ++ ) {
            if ( this.topics [ i ].id === this.currentTopicID ) {
                return this.topics [ i ];
            }
        }
        return null;
    };*/
    
    /*
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
        
        
    };*/
    
    
    this._updateScrollbar = function () {
        //var topic = this._getCurrentTopic ();
        //if ( topic === null ) return;
        
        
        var th = Math.max ( $ ( "#teachingparagraph" ).height (), $ ( "#teachingparagraph" ).prop ( "scrollHeight" ) );
        //log ( "updateScrollbar: " + th );
        this.scrollbar.updateTotalHeight ( th );
        //this._updateAnchors ();
    };
    
    
    
    
    
    this._addParagraph = function () {
        
        var newsparagrah = "<p id=\"teachingparagraph\" style=\"" + FONT ( this.font, this.fontsize, this.plaintextcolor ) + "\"></p>";
        
        $ ( "#contentteacher" ).append ( newsparagrah );
        $ ( "#teachingparagraph" ).css ({
            lineHeight: "140%",
            marginTop: "50px",
            marginBottom: "20px",
            marginLeft: "50px",
            marginRight: "50px"
        });
        
        var p = "*^COMMON SENSE^*~";
        p+= "_Let's talk logic here.. or #common sense# really, if it isn't $absolutely obvious$ it isn't called <logical< right? Point is that it requires a certain %MENTAL EFFORT% to see whether something follows logically from statements or not.. ";
        p+= "I know people generally don't like mental efforts so much, well, their bad, I'm pretty fond of them myself but I can be quite lazy at physical efforts so I suppose it's all a matter of balance.. ";
        p+= "I don't care really if you like to have your brain switched off most of the time and it's probably a good thing too, considering $YOU != YOUR BRAIN$";
        p+= "~~";
        
        p = TEXTPARSER.parseText ( p, "Common Sense" );
        $ ( "#teachingparagraph" ).append ( p );        
        $ ( "#teachingparagraph" ).append ( p );        
        $ ( "#teachingparagraph" ).append ( p );        
        $ ( "#teachingparagraph" ).append ( p );        
        $ ( "#teachingparagraph" ).append ( p );        
        $ ( "#teachingparagraph" ).append ( p );        
        $ ( "#teachingparagraph" ).append ( p );        
        $ ( "#teachingparagraph" ).append ( p );        
        $ ( "#teachingparagraph" ).append ( p );        
        $ ( "#teachingparagraph" ).append ( p );        
        
        
    };
            
    
    this._resizeScreen = function () {
        var top = this.enabled? 0 : HEIGHT;
        var opacity = this.enabled? 1 : 0;
        
        $ ( "#contentteacher" ).css ( {
            top: String ( top ) + "px",
            opacity: opacity,
            width: String ( WIDTH ) + "px",
            height: String ( HEIGHT ) + "px"
        });
            
        
        
        
    };
    
    
    
    
    
    
    
    
    this.initialize ( parentid );
    
    
    
    
    
};