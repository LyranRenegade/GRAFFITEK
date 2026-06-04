/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var WordLinkManager = function () {
    /*
     keeps track of all internal word-links in the site.
    
     */

    
    this.wl_opacity_out = 1;
    this.wl_opacity_over = 1;
    
    this.id_link_amounts = [];
    /*
        [   
            { 
                id: 1,
                amount: 3
            }
        ]      
     */
    
    //store the last active link ere
     this.lastactivelink = null;
        
    this.getUniqueIDLink = function ( id ) {
        var il = this.id_link_amounts.length;
        var i;
        var id_link_amount = null;
        for ( i = 0; i < il; i ++ ) {
            if ( this.id_link_amounts [ i ].id === id ) {
                id_link_amount = this.id_link_amounts [ i ];
                break;
            }
        }
        if ( id_link_amount === null ) {
            id_link_amount = { id: id, amount: 0 };
            this.id_link_amounts.push ( id_link_amount );
        }
        id_link_amount.amount ++;
        return id + "_" + String ( id_link_amount.amount );
        
        
    };
    
    this.internal_links = [];
    /*
        [
            id: 1, 
            type: word // NAVIGATIONMANAGER.LINKTYPE_WORD / NAVIGATIONMANAGER.LINKTYPE_COMMENT
            spanids: [
                wl_1_1,
                wl_1_2, etc
            ]
      
        ]
     */
    
    this.addPendingWordLink = function ( spanid, id ) {
        //MAIN.log ( "pending word link added: " + spanid );
        var il = this.internal_links.length;
        var i;

        for ( i = 0; i < il; i ++ ) {
            if ( this.internal_links [ i ].id === id && this.internal_links [ i ].type === NAVIGATIONMANAGER.LINKTYPE_WORD ) {
                this.internal_links [ i ].spanids.push ( spanid );
                return false;
            }
        }
        this.internal_links.push ( {
            id: id,
            type: NAVIGATIONMANAGER.LINKTYPE_WORD,
            spanids: [ spanid ]
        });
        return true;
    };
    
    this.activateLink = function ( spanid, id ) {
        var active = NAVIGATIONMANAGER.isActiveLink ( { id: id, type: NAVIGATIONMANAGER.LINKTYPE_WORD } );
        //MAIN.log ( "WordLinkManager.activateLink for id: " + id + ", active? " + active );
        this._enableButton ( spanid, !active, active );
    };
    
    this.activateFrom = function ( linkspanid ) {
        $ ( "#" + linkspanid + " span" ).each ( 
            function ( index, value ) {
                var spanid = $ ( this ).attr ( 'id' );
                var il = WORDLINKMANAGER.internal_links.length;
                var i, j, sl;                    
                var spanids;
                var id;
                for ( i = 0; i < il; i ++ ) {
                    spanids = WORDLINKMANAGER.internal_links [ i ].spanids;
                    sl = spanids.length;
                    for ( j = 0; j < sl; j ++ ) {
                        if ( spanids [ j ] === spanid ) {
                            //MAIN.log ( "spanid: " + spanid + " found in wordlinks and removed" );
                            id = WORDLINKMANAGER.internal_links [ i ].id;
                            WORDLINKMANAGER.activateLink ( spanid, id );
                            break;
                        }
                    }
                }
            }
        );        
    }
    
    this.removeFrom = function ( linkspanid ) {
        $ ( "#" + linkspanid + " span" ).each ( 
            function ( index, value ) {
                var spanid = $ ( this ).attr ( 'id' );
                MAIN.log ( "spanid found within removed html-element: " + spanid );

                var il = WORDLINKMANAGER.internal_links.length;
                var i, j, sl;                    
                var spanids;
                for ( i = 0; i < il; i ++ ) {
                    spanids = WORDLINKMANAGER.internal_links [ i ].spanids;
                    sl = spanids.length;
                    for ( j = 0; j < sl; j ++ ) {
                        if ( spanids [ j ] === spanid ) {
                            //MAIN.log ( "spanid: " + spanid + " found in wordlinks and removed" );
                            WORDLINKMANAGER._enableButton ( spanid, false, false );
                            spanids.splice ( j, 1 );
                            WORDLINKMANAGER.internal_links [ i ].spanids = spanids;
                            break;
                        }
                    }
                }
            }
        );
        
        
    };
    
    
    
    this.considerActiveWordlinks = function ( id ) {
        //MAIN.log ( "WorldlinkManager.considerActiveWordlinks for id: " + id );
        var il = this.internal_links.length;
        var i;
        var internal_link;
        var newactivelink = null;
        for ( i = 0; i < il; i ++ ) {
            internal_link = this.internal_links [ i ];
            if ( internal_link.id === id ) {
                if ( this.lastactivelink == internal_link ) {
                    MAIN.log ( "wordlink already active?" );
                    return false;
                }
                newactivelink = internal_link;
                //MAIN.log ( "considerActiveWordlinks found link w " + internal_link.spanids.length + " span-ids" );
                break;
            }
        }
        //disable lastactivelink
        if ( this.lastactivelink !== null ) {
            this._enableSpanButtons ( this.lastactivelink.spanids, false );
        }
        //enable newactivelink
        if ( newactivelink !== null ) {
            this._enableSpanButtons ( newactivelink.spanids, true );

            //set lastactivelink to be newactivelink
            this.lastactivelink = newactivelink;
            //MAIN.log ( "considerActiveWordlinks copied link w " + this.lastactivelink.spanids.length + " span-ids" );
            
        }        
        
        
    };
    
    
    this.resetButtons = function () {
        
        MAIN.log ( "DEPRECATED FUNCTION WORDLINKMANAGER.RESETBUTTONS!?", 2 );
        var il = this.internal_links.length;
        var i, j, sl;       
        var internal_link;
        var spanids;
        var spanid;
        //var id;
        var active = false;
        for ( i = 0; i < il; i ++ ) {
            internal_link = this.internal_links [ i ];
            spanids = internal_link.spanids;
            sl = spanids.length;
            active = NAVIGATIONMANAGER.isActiveLink ( internal_link );
            
            
            for ( j = 0; j < sl; j ++ ) {
                spanid = spanids [ j ];
                this._enableButton ( spanid, !active, active );
            }
        }
    };
    
    this._enableSpanButtons = function ( spanids, selected ) {
        var sl = spanids.length;
        //MAIN.log  ( "this._enableSpanButtons for " + sl + " span items" );
        var i;
        var spanid;
        for ( i = 0; i < sl; i ++ ) {
            spanid = spanids [ i ];
            this._enableButton ( spanid, !selected, selected );
        }
    };
    
    
    this._enableButton = function ( spanid, b, selected ) {
        //MAIN.log ( "textparser enable button for " + spanid + ", " + b );
        var cursor = "default";
        $ ( "#" + spanid ).off ( MOUSEHANDLER.MOUSEOVER, $.proxy ( this, "_WLmouseOver" ) );
        $ ( "#" + spanid ).off ( MOUSEHANDLER.MOUSEOUT, $.proxy ( this, "_WLmouseOut" ) );
        $ ( "#" + spanid ).off ( MOUSEHANDLER.CLICK, $.proxy ( this, "_WLmouseClick" ) );         
        if ( b ) {
            $ ( "#" + spanid ).on ( MOUSEHANDLER.MOUSEOVER, $.proxy ( this, "_WLmouseOver" ) );
            $ ( "#" + spanid ).on ( MOUSEHANDLER.MOUSEOUT, $.proxy ( this, "_WLmouseOut" ) );
            $ ( "#" + spanid ).on ( MOUSEHANDLER.CLICK, $.proxy ( this, "_WLmouseClick" ) );                
            cursor = "pointer";
        }
        
        var opacity = selected? this.wl_opacity_over : this.wl_opacity_out;
        var textdecoration = selected? "underline" : "none";
        var fontstyle = selected? "normal" : "italic";
        
        $ ( "#" + spanid ).css ({
            opacity: opacity,
            textDecoration: textdecoration,
            fontStyle: fontstyle,
            cursor: cursor
        });
        
    };
    
    this._WLmouseOver = function ( e ) {
        //MAIN.log ( "_WLmouseOver " + e.currentTarget.id );
        $ ( "#" + e.currentTarget.id ).css ( { 
            //opacity: this.wl_opacity_over,
            textDecoration: "underline"
        });            
    };
    this._WLmouseOut = function ( e ) {
        $ ( "#" + e.currentTarget.id ).css ( { 
            //opacity: this.wl_opacity_out,
            textDecoration: "none"
        });            
    };    
    this._WLmouseClick = function ( e ) {
        var word = $ ( e.currentTarget ).text ();
        NAVIGATIONMANAGER.openWordLink ( e.currentTarget.id, word );
        
        //this._WLmouseOut ( e );
    };            
    
    
};