/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var NavigationManager = function () {
    
    MAIN.log ( "navigation manager online" );
    this.LINKTYPE_WORD = "wl";
    this.LINKTYPE_COMMENT = "cm";
    
    
    this.navigation_list = [];
    /*
        [
            {
                id: xx,
                type:
            }
        ]
     */
    
    this.openWordLink = function ( spanid, fromword ) {
        //store the link in the list
        
        //spanid of form 'type'_'id'_'counter'
        //type is either wl -> this.LINKTYPE_WORD, cm -> this.LINKTYPE_COMMENT
        //id = databse id
        //counter = irrelevant? but distinguishes between different links to same id & type
        var first_ = spanid.indexOf ( "_" );
        var next_ = spanid.indexOf ( "_", first_ + 1 );
        var id = spanid.substring ( first_ + 1, next_ );
        var spantype = spanid.substring ( 0, 2 );
        
        MAIN.log ( "NAVMAN.openWordLink " + spanid + ", indices: " + first_ + ", " + next_ + "; id: " + id );
        
        if ( spantype !== this.LINKTYPE_COMMENT && spantype !== this.LINKTYPE_WORD ) {
            MAIN.log ( "unfound spantype in NavigationManager.openWordLink() " + spanid, 2 );
            
        }
        var link = { id: id, type: spantype };
        this.openWordLinkDirect ( link, fromword );
    };
    
    this.openWordLinkDirect = function ( link, fromword ) {
        
        //remove it from list if present
        this._removeLink ( link );
        //and move it to front in all cases
        this.navigation_list.unshift ( link );
        
        //test
        var i;
        var nl = this.navigation_list.length;
        var idlist = "";
        for ( i = 0; i < nl; i ++ ) {
            idlist += this.navigation_list [ i ].id;
            if ( i < ( nl - 1 ) ) idlist += ", ";
        }
        //MAIN.log ( "> current order of ids: " + idlist );
        
        this.update ( link, fromword );
        
        MAIN._layoutmanager.setMaxScroll ();
    };
    
    this.update = function ( link, fromword ) {
        WORDLINKMANAGER.considerActiveWordlinks ( link.id );
        MAIN._layoutmanager.topwordnavigation.synchronize ( this.navigation_list );
        MAIN._layoutmanager.wordcontentview.synchronize ( this.navigation_list, fromword );
        
    };
    
    this._removeLink = function ( link ) {
        var nl = this.navigation_list.length;
        var i;
        var navigation_link;
        for ( i = 0; i < nl; i ++ ) {
            navigation_link = this.navigation_list [ i ];
            if ( navigation_link.id === link.id && navigation_link.type === link.type ) {
                
                this.navigation_list.splice ( i, 1 );
                //MAIN.log ( "previous link removed: " + link.id + ", " + link.type + " old/new length: " + nl + ", " + this.navigation_list.length );
                return true;
                //i --;
                //nl --;
            }
        }
        return false;
    };
    
    this.removeWordLink = function ( id ) {
        var link = {
            id: id,
            type: this.LINKTYPE_WORD
        };
        this._removeLink ( link );
        
        var newid = ( this.navigation_list.length === 0 )? "-1" : this.navigation_list [ 0 ].id;
        this.update ( { id: newid } );
    };
    
    this.isActiveLink = function ( internal_link ) {
        //called from wordlinkmanager to check whether it's the first one in our list [which means it's active, otherwise it isn't]
        if ( this.navigation_list.length === 0 ) return false;
        if ( this.navigation_list [ 0 ].id !== internal_link.id ) return false;
        if ( this.navigation_list [ 0 ].type !== internal_link.type ) return false;
        return true;

    };
    
    
    
};