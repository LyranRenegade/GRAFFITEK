/* 
 * LR MAIN
 * 
 * 
 */

var MAIN = null;


var Main = {
    
    
    /*REFERENCES*/
    _styledata: null, 
    _resizemanager : null, 
    _layoutmanager : null, 
    _serverdata : null, 
    _htmlshortcuts: null, 
    
    initialize : function () {
        this.log ( "Main.initialize()" );
    
        var a = "--";
        this.log ( "charcode -: " + a.charCodeAt ( 0 ) );
    
        //install helpers
        this._htmlshortcuts = new HTMLshortcuts ();
    
        //install data
        this._styledata = new StyleData ();
        this._serverdata = new ServerData ( true );
        
        
        
        GLOBALDATA = new GlobalData ();
        MOUSEHANDLER = new MouseHandler ();
        MOUSEHANDLER.initialize ();
        WORDLINKMANAGER = new WordLinkManager ();
        NAVIGATIONMANAGER = new NavigationManager ();
        TEXTPARSER = new TextParser ();
        CASCADEBUTTONMANAGER = new CascadeButtonManager ();
        TOOLTIPMANAGER = new TooltipManager ();
        SITEMESSAGES = new SiteMessages ();
        SITEMESSAGES.install ();
        FRAMETHREAD = new FrameThread ();
       
        //install managers
        this._resizemanager = new ResizeManager ();
        this._resizemanager.initialize ();
        
        this._layoutmanager = new LayoutManager ();
        this._layoutmanager.build ();
        
        
        this._loadData ();
    },
    
    
    log : function ( s, level ) {
        if ( window.console ) {
            if ( level === 1 ) s = "!WARNING: " + s;
            if ( level === 2 ) s = "!ERROR: " + s;
            window.console.log ( s );
        }
    },
    
    
    
    _loadData : function () {
                
        var commands = [
            { command: "riptable", data: "words_root", rf: this._serverdata._parseWords_root },
            { command: "riptable", data: "authors", rf: this._serverdata._parseAuthors },
            { command: "riptable", data: "words_comments", rf: this._serverdata._parseWords_comments }
        ];

        this._serverdata.addBatchCommands ( commands );
        this._serverdata.callServer ( this.initialDataLoaded );
        
    },
    
    initialDataLoaded : function () {
        this.log ( "initaldataLoaded" );
        
        
        
        
        MAIN._layoutmanager.install ();
        
        FRAMETHREAD.startLooping ( true );
        /*
        var wl = MAIN._serverdata.WORDS_ROOT.length;
        for ( var i = 0; i < wl; i ++ ) {
            logObject ( MAIN._serverdata.WORDS_ROOT [ i ] );
        }*/
        //logObject ( MAIN._serverdata.WORDS_ROOT [ 0 ] );
    }
    

    
};


function start () {
    
    MAIN = Main;
    MAIN.initialize ();
    
}


window.addEventListener ( "load", function () {	
    start ();
}, false );



