/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var TopWordNavigationView = function () {
    
    this.parentid = null;
    this.id = "twn_v";
    
    //keeps references to all wordbuttons
    //initially empty, will get build on a need to show only,
    //after being built and deactivated it gets hidden, 
    //so at max each button corresponding to a word [=wordbutton] is built once
    
    this.wordbuttons = [];
    /*
     [
        WordNavButton
     ]
     
     */
    this.loose = false;
    this.setLoose = function ( b ) {
        if ( this.loose === b ) return;
        
        var position = b? "fixed" : "static";
        var mb = b? "75" : "20";
        $ ( "#" + this.id ).css ( {
           position: position
        });
        $ ( "#cnt_v" ).css ( {
           marginBottom: mb + "px"
        });            
        this.loose = b;
    };
    
    this._buildHTML = function ( parentid ) {
        this.parentid = parentid;
        
        var div = "<div id='" + this.id + "' class='unselectable'></div>";
        $ ( "#" + this.parentid ).append ( div );
        
        $ ( "#" + this.id ).css ( {
            marginRight: "31px",
            //marginLeft: "40px",
            //marginTop: "20px",
            marginBottom: "0px",
            zIndex: 11,
            paddingLeft: "40px",
            paddingRight: "2px",
            paddingBottom: "7px",
            paddingTop: "2px",
            position: "static",
            backgroundColor: "rgb(0,0,0)",
            //left: "0px",
            top: "0px",
            display: "inline-block"
        });
        
        
    };
    
    this.synchronize = function ( navigationlist ) {
        //navigationlist
            /*
            [
                {
                    id: xx,
                    type:
                }
            ]
         */
        
        if ( this.parentid === null ) {
            MAIN.log ( "TopWordNavigationView.synchronize prematurely", 1 );
            return;
        }
        
        var html = "";
        
        $ ( "#" + this.id ).html ( "" );//empty ();
        
        var i;
        var navitem;
        var nl = navigationlist.length;
        var wordbuttondata;
        for ( i = 0; i < nl; i ++ ) {
            navitem = navigationlist [ i ];
            //MAIN.log ( "wb synchronize, id: " + navitem.id + ", type: " + navitem.type );
            
            //select corresponding wordbutton
            wordbuttondata = this._getWordButton ( navitem.id, navitem.type );
            html = wordbuttondata.wordbutton.html;
            $ ( "#" + this.id ).append ( html );
            //if ( !wordbuttondata.alreadypresent ) {
                wordbuttondata.wordbutton.setActive ( i === 0 );
                wordbuttondata.wordbutton.install ();
            //}
            
        }
        
        
        
        
    };
    
    this.getWordButton = function ( id, type ) {
        var i;
        var wl = this.wordbuttons.length;
        var wordbutton;
        for ( i = 0; i < wl; i ++ ) {
            wordbutton = this.wordbuttons [ i ];
            if ( wordbutton.id === id && wordbutton.type === type ) {
                return wordbutton;
            }
        }
        return null;
    };
    
    /////////////
    // PRIVATE //
    /////////////
    
    this._getWordButton = function ( id, type ) {
        
        var wordbutton = this.getWordButton ( id, type );
        if ( wordbutton !== null ) {
            return {
                wordbutton: wordbutton,
                alreadypresent: true
            };            
        }
        //else
        wordbutton = new WordNavButton ( id, type );
        wordbutton.buildHTML ();
        this.wordbuttons.push ( wordbutton );
        return {
            wordbutton: wordbutton,
            alreadypresent: false
        };
    };
    
    
    
    
    
    
};


