
var WordView = function ( id ) {
    
    this.id = id;
    this.spanid = "wrd_" + String ( id );
    this.canvasid1 = "wrdcnv1_" + String ( id );
    //this.canvasid2 = "wrdcnv2_" + String ( id );
    this.maindivid = "mdA" + this.spanid;
    this.maindivid2 = "mdB" + this.spanid;
    this.titlespanid = "title_" + this.spanid;
    this.title_addendum_spanid = "title_addendum_" + this.spanid;
    this.tldrspanid = "tldr_" + this.spanid;
    this.exspanid = "expl_" + this.spanid;
    this.enabled = false;
    this.closebannerid = "clb_" + this.spanid;
    
    this.comment_ids = [];
    /*
     {
        buttonspanid: xx,
        textspanid: xx
    
     }
     */
    
    this.getHTML = function () {
        
        
        //MAIN.log ( comments.length + " comments found for: " + this.id );
        
        var html = "<span id='" + this.spanid + "'>";
        
        var w = 80;
        var h = 20;
        //html += "<hr>";
        html += "<canvas id='" + this.canvasid1 + "' width='" + w + "' height='" + h + "' style='" + MAIN._styledata.getStyle ( "wrd_cnv" ) + "'></canvas>";
        html += "<div id='" + this.maindivid + "' style='" + MAIN._styledata.getStyle ( "wrd_div" ) + "'>";
        
        
        var worddata = MAIN._serverdata.getDataByID ( MAIN._serverdata.WORDS_ROOT, id );
        //TITLE [from...] [16 pts / bold]
        //TLDR = Etymology [white]
        //Mo' text
        
        //TITLE
        html += "<span id='" + this.titlespanid + "' style='" + MAIN._styledata.getStyle ( "wrd_title" ) + "'>"
        html += "\"" + String ( worddata.title ).toLowerCase () + "\"";
        html += "</span>";
        html += "<span id='" + this.title_addendum_spanid + "' style='" + MAIN._styledata.getStyle ( "wrd_title_addendum" ) + "'>"
        html += "</span>";
        html += "<span id='" + this.closebannerid + "' style ='" + MAIN._styledata.getStyle ( "wrd_closebanner" ) + "'>"
        html += "//DISENGAGE";
        html += "</span>";
        
        html += "</div>";
        html += "<div id='" + this.maindivid2 + "' style='" + MAIN._styledata.getStyle ( "wrd_div2" ) + "'>";
        
        //TLDR
        html += "<span id='" + this.tldrspanid + "' style='" + MAIN._styledata.getStyle ( "wrd_tldr" ) + "'>"
        var pt = "#" + String ( worddata.trans ) + "# // " + String ( worddata.tldr );        
        pt = TEXTPARSER.parseText ( pt, "", true, [ this.id ] );
        html += pt;
        html += "</span>";

        //EXPLANATION
        html += "<span id='" + this.exspanid + "' style='" + MAIN._styledata.getStyle ( "wrd_expl" ) + "'>"
        var pt = String ( worddata.text );        
        pt = TEXTPARSER.parseText ( pt, "", true, [ this.id ] );
        html += pt;
        
        html += "</span>";
        html += "<br>";
        this.comment_ids = [];
        /*
         {
            //author: name
            buttonspanid: xx,
            textspanid: xx

         }
         */        
        var comments = MAIN._serverdata.getDataByFieldValue ( MAIN._serverdata.WORDS_COMMENTS, "word_id", String ( this.id ) );
        var cl = comments.length;
        var i;
        var buttonspanid, textspanid;
        var cid;
        var aid;
        var authordata, colordata;
        var h;
        for ( i = 0; i < cl; i ++ ) {
            cid = String ( comments [ i ].id )
            aid = String ( comments [ i ].author_id );
            authordata = MAIN._serverdata.getDataByID ( MAIN._serverdata.AUTHORS, aid );
            colordata = MAIN._styledata.author_colors [ Number ( aid ) - 1 ];
        
            buttonspanid = this.spanid + "_cmnt_but_" + cid;
            textspanid = this.spanid + "_cmnt_txt_" + cid;
            
            html += "<div style='" + MAIN._styledata.getStyle ( "wrd_cmnt_div" ) + "'>";
            html += "<span id='" + buttonspanid + "' style='" + MAIN._styledata.getWordCommentStyle ( "button", colordata ) + "'>";
            html += "<span id='na' style='pointer-events:none'>" + authordata.name + "</span>";
            html += "<span id='pm' style='pointer-events:none'>(+)</span>";
            html += "</span>";
            html += "<hr style='border-style:solid;border-color:" + colordata.bgr + ";'>";
            html += "<div style='" + MAIN._styledata.getWordCommentStyle ( "text", colordata ) + "'>";
            pt = TEXTPARSER.parseText ( comments [ i ].text, "", true, [ this.id ] );
            html += "<span id='" + textspanid + "' class='enableme' style='display:none;'>" + pt + "</span>";
            html += "</div>";
            html += "</div>";
            this.comment_ids.push ( 
                {
                    //author: authordata.name,
                    buttonspanid: buttonspanid,
                    textspanid: textspanid
                }
            );
        }
        
        
        html += "<br><hr style='" + MAIN._styledata.getStyle ( "wrd_hr" ) + "'><br>";
        
        html += "</div>";
        html += "</span>";
        
        
        return html;
    };
    
    
    
    
};