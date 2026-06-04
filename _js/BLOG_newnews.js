/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var BLOG_newnews = function ( parentid ) {
    
    this.parentid = parentid;
    this.quotes = [];
    
    this.plaintextcolor = GLOBALDATA.CLR_WHITEYELLOW;//;
    this.contentid = "newsparagraph";
    
    this.inserts = 0;
    
    this._installQuotes = function () {
        var quoteOrwell = [ "\"^#Journalism^# is printing what someone else does not want published;", 
                            "everything else is $public relations$.\"",
                            "%-- George Orwell%"
                        ];
        var quoteMorisson = [ "\"Whoever controls the media, controls the ^mind^.\"", "%-- Jim Morrison%" ];
        var quoteSamaan = [ "\"Computer hackers are the #true journalists# in the ^21st Century^.",
            "The old journalism is $worse than dead$. It is unreliable to the point that it is",
            "nothing more than a nuisance, an obstacle in the pursuit of truth.\"",
            "%-- A.E. Samaan%" ];
        var quoteVoltaire = [ "\"I do not agree with what you have to say, but I'll defend to the death your right to say it.\"",
                                "%-- Voltaire%" ];
        var quoteJefferson = [ "\"The man who reads nothing at all is better educated than the man who reads nothing but newspapers.\"",
                                "%-- Thomas Jefferson%" ];
                            
        this.quotes = [ quoteOrwell, quoteMorisson, quoteSamaan, quoteVoltaire, quoteJefferson ];        
    };
    
    
    this._addParagraph = function () {
        
        var newsparagrah = "<p id=\"" + this.contentid + "\" style=\"" + FONT ( "Tahoma", 14, this.plaintextcolor ) + "\"></p>";
        
        $ ( "#" + this.parentid ).append ( newsparagrah );
        $ ( "#" + this.contentid ).css ({
            lineHeight: "140%",
            //marginRight: "40px",
            //marginLeft: "40px",
            marginTop: "20px",
            marginBottom: "20px"
        });
        
        var p = "*^NEW-NEWs^*~_Yes, the 21st century! ^#THE INTERNET^#!!, a true world-wonder! Never has information been so easily accessible..  [Well... not that I know of..]~";
        p += "Want to know the meaning of a word? In another language? How to >*spell>* it properly? Where it actually came from and how the original meaning got altered during the ages?? Some clicks later and you're up to speed..!~";
        p += "_No more trips to the library actually.. or to your bookshelf.. Even if you want to delve deeper there are places on the net you will probably find what you're after.. [You know what I'm talking about, right? Or not.]~";
        p += "Be it cooking an exotic recipe or inspecting ancient Sumerian texts, what Hermetism is about (what?) or how to repair a transistor radio, do magic tricks, etc...~"; 
        
        p = TEXTPARSER.parseText ( p, "NEW NEWS" );
        $ ( "#" + this.contentid ).append ( p );
        
        TEXTPARSER.addOptionalText ( "<How to build a house from tires and bottles, See what DEMOCRACY actually looks like in [at] Iceland, Watch Gogol Bordello make Germans dance, read the Nag Hammadi scrolls and the missing testaments(!), listen to Foetus and Popol Vuh, find out about Atlantis, Le MU of RA, Meditate upon the #LAW of 1#, Memorize the game-mechanics of ADOM [in an eternal %dance of death%], Understand why Mr. Mathis says $PI = 4$, Watch GM's play bulletchess, Experience the clear spirits like Krishnamurti >& Mooji, Wrestle through the Bibliotheca-Pl>&>#233;yades, Solve Notpron, then the Cicada puzzle, [and then translate the Voynich scrolls while you're at it] , see your vague acquintances their new shoes on facebook, awesome.. The Crystal Palace, Pyramids >& Geometry, forgotten technologies, learn star-constellations, The different alien(!)-races.. learn about #tele(m)pathy#, astral travelling and remote-viewing, what Scaruffi thinks of the Beatles, see people do stuff while on acid, look at cats.. <", "#" + this.contentid, "things to research" );

        p = TEXTPARSER.parseText ( "It's there for the $#curious#$ and %#inventive#% lot to feast upon...~~" );
        $ ( "#" + this.contentid ).append ( p );
        
        p = "&Well WTF did I just read! That's interesting.. let's do some more cross-triple-reference-background-checking..&~";
        
        p = TEXTPARSER.parseText ( p, "Well, WTF" );
        $ ( "#" + this.contentid ).append ( p );
        
        p = "_A downside however [well, if you're looking at it from above, not lying there crushed beneath it..] is that some troubling things about our society have become glaringly obvious. I'll try not discussing any of them>";

        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );

        TEXTPARSER.addOptionalText ( "I'll fail at that however..", "#" + this.contentid, "vaticinium ex eventu", true );
        
         
         
        p = "here bar the fact concerning ";
        p += "+institutionalized Journalism probably being the most corrupted facet of modern society+. Education, politics, religion (,law) well.. it's all related and in some way part of (the fundamental meaning of the phrase) ^Mainstream-Media [MSM]^ AKA: <the sources for general/common knowledge<. You have probably read 'alternative news' and found out it contradicted everything ever shown on the regular $news$. ";
        p += "(To be more precise, it suggested a %BIG BLACK VOID%, [or: some elaborate evasion-tactics] in mainstream-journalism). So, #first possible solution#: 'alternative' = all hogwash then? Some certainly would ";
        p += "like to tell you that. But personally I'd say anybody who is gifted with an occasional <clear< moment [and is accepting of those gifts] can see that the +credibility+ of mainstream-news approaches zero when comparing it to a lot of competing sources of information. ";
        p += "Where in your average newspaper you won't get any more proof than vague claims on ^truth-authority^ such as 'according to our correspondent..', or even better 'according to ^experts^..', or $'research shows..'$ (..fill in whatever you like, they won't notice).. you will find a lot of sites that are meticulously sourced, ";
        p += "that don't tell you the [their] conclusion but invite you to do your own thinking.. ";
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );
        
        var optionaltext = "Yes, I know Mainstream-Media claims not to spell it out for you, they won't say ^\"ISIS did it\"^, but: $\"we don't know who did it but we did find an ISIS-flag\"$, so the gullible amongst us might think they figured it out themselves.. +'Hey, I bet ya ISIS did it!'+ [Tragically you can expect wide support for that stroke of geniality in the midst of the cosy herd..]";
        var optionalspanid = TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "claims without proof?" );
        
        TEXTPARSER.addOptionalText ( "Watch the [established] news again with this in mind then, #never-ever# they will genuinely admit a lack of proof without leaving an obvious suggestion lying around as to what you ought to believe. That, and simple $hypnosis$ really, repeat certain phrases over and over again and they will get stuck in the brain.. 'MUSLIM' and 'TERRORISM' is a good combo, people can't hear the first word without thinking of the latter eventually.. [How about hearing 'MENTAL' followed by 'EFFORT' a few times a day? ..curious as to what that might instigate.] Are you spoken to as an adult human being capable of critical thought? Do you want to?", "#" + optionalspanid, "not convinced?", true, true );
        
        $ ( "#" + this.contentid ).append ( "<br/><br/>" );        
        
        p = "*%OLD-NEWs%*~~"
        p += "&NEGATIVE energy segregates, POSITIVE energy integrates. [simple metaphysics.]&~";
        p += "_For those who're not quite awake to this state of affairs yet, consider this: isn't all experience basically ^perception^? Everybody might like it at a certain party except that one person who decided it must've been a horrible event because of some wine getting spilled on his/her pants or whatever, it does matter whose perspective you get during the summary afterwards right? Are you raising children? If yes, do you ";
        p += "tell them about the worst-case-scenario #every chance you get#? Or rather quite the opposite; tell them about all the good and positive things and only mention the bad things as something to avoid, instead of hammering it into their +consciousness+ 24-7..";
        
        p = TEXTPARSER.parseText ( p, "OLD NEWS" );
        $ ( "#" + this.contentid ).append ( p );
        
        optionaltext = "More metaphysics: #consciousness precedes physicality#, +Sherlock Holmes+ would've looked at quantum mechanics freaking 70 years ago and simply deduced that in half a minute. Currently the scientific world is finally getting to terms with perhaps having to re-evaluate some of their dogmas concerning this ^matter^. Remember that famous Bohr-quote? Something like, $\"If you aren't severely shocked by quantum-mechanics you haven't understood it (at all!)\"$. But let's be fair there; the Aboriginals wouldn't be shocked, neither would the ancient Finnish Shamans be, or the Navajo, The Mayan.. or just about every ancient spiritualy awake crowd, they all said the exact same thing I started this insertion with #for ages#..";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "only consciousness exists [bluntly put]" );
        
        p = "~_I know they say why the regular news is all |doom and gloom| because that is supposed to 'sell' better [sell? who's buying then? You?], basically saying it's ";
        p += "humanity's own fault really for being masochists that like to be scared and depressed because that somehow excites or comforts us or whatever, but really, #you shouldn't believe everything you're told# (now should you??) Let's assume we're able to critically assess that notion.. Would that really be true? If there are really multiple sides to a story would you prefer the bad one consistently? I'd rather talk to the guy who's had an awesome time ";
        p += "at that party than to listen to that whiny whino. Imagine the 'news' talking about all the ^amazing positive things^ happening around the globe all the time [they actually do happen even if you've probably started to doubt that if you %consume% the news regularly], and only mention the negative stuff as something we should really get over with aSaP.";
        p += " $DON'T YOU THINK THAT WOULD FREAKING CHANGE SOCIETY FOR THE BETTER??!$~~";
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );

        p = "&Objectivity, right!&~";
        p += "_There's no such thing really, is there? Put a camera somewhere and don't say a word, that's objectivity, well if you put cameras +everywhere, all the time+ actually. Cutting out 5 minutes of a Putin-interview and only show him getting the question and subsequently buggering of sure as fuck isn't. [Dutch state-television apologized for this |unfortunate| editing, after word got out of course.]~";
        p += "I'm also strongly suspecting they evade the sane-looking people when conducting street-interviews, and afterwards cut out all the reasonable stuff that accidentally got said anyway, that way everyone thinks they're living among frustrated simpletons. I spoke to a lot of slowminded people but they generally all seemed capable of saying things that make sense, it's all a matter of how they're approached isn't it?~"
        p += "_You are always getting a perspective and you can't blank out your own opinions.. ";
        p = TEXTPARSER.parseText ( p, "'Objectivity'" );
        $ ( "#" + this.contentid ).append ( p );        

        optionaltext = "The only thing that knows the ^object^ exists is the ^subject^, well #you# [being the subject] can't possibly proof otherwise now can you?";
        var optionalspanid = TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "object / subject" );

        optionaltext =  "You can opt to believe you don't exist of course, which modern culture, education, western mainstream science basically suggests (!) [it's all random molecules and stuff in some meaningless cosmic dance governed by 'laws of nature' occuring out of an utter lack of anything [%ex nihilo%, it's latin so it's true, no, try again, logic ain't hard], which only really appear as being 'laws' in the strict sense if you interpret them as some kind of $mental blockades$ rather than +wombs of new concept(ion)s+]. Don't need read what 100's of famous philospophers had to say about that, trust your own mind, #it's the only thing really working for YOU#. So, question >#1: do you exist? Say yes? Question >#2: what does that mean with regards to ^knowing^ [or epistemology if you want to make it sound really fancy].. take a bit longer for that one";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + optionalspanid, "I exist.", true, true );
        
        
        p = "In journalism and Politics the diction is <robotized< to support the illusion of objectivity but the recent +popularity+ of what they call ^'populists'^ {Got a dictionary kicking around?} is thanks to the $populus$ getting fed up with that, [it's very funny but there's a lively battle between the #gut#- and the #brain#-people in politics, those that balanced both and operate from the #heart# generally aren't getting excited by politics at all] ";
        p += "Some big tip for you if you want to influence people: #sound like an actual human being#, don't try to be objective because we all know [^well, one glorious day^] you really aren't [even trying to].";
        
        
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );        
        
        optionaltext = "there are some exceptions, I think George Orwell did a good attempt at times, Primo Levi also heroically tried to eliminate his suffering [to some extent] from his war-experiences but ended his life with throwing that all overboard in his final book [and alledgedly his own tired body a bit later].";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "you can try, or shouldn't you Bukowski?" );
        
        $ ( "#" + this.contentid ).append ( "<br/><br/>" );    
        
        p = "&Coincidence [Conspiracy] Theory [Facts]&~";
        p += "_I know the MSM brainwashed the concepts +'conspiracy'+ and +'theory'+ together so that folks generally experience a ^Pavlov-reaction^ assuming incredibility everytime there's a suggestion of things being manipulated without your consent, without you $knowing$ [because well, that's what a 'conspiracy' entails really, a bunch of people doing stuff affecting others who aren't supposed to find out about it.]. ";
        p += "Well, perhaps we should erase the word 'conspiracy' from the dictionary then, considering they're non-existent?";
        
        p = TEXTPARSER.parseText ( p, "Coincidence-Theorism" );
        $ ( "#" + this.contentid ).append ( p );

        optionaltext = "You know that David Cameron once literally said that CONSPIRACY THEORISTS are even more dangerous than TERRORISTS? So, yeah, David would be all for that idea I guess. ";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "a double negation is a confirmation" );
        
        
        p = "~_But you have heard about all the |black-budgets| right? That's money you're not supposed to know about what it's spent on, it's %admitted% to be well over #>$50.000.000.000# a year in the VS alone, ^WTF do you think they spent that money on?!^ #YOU DON'T KNOW#. Period. You can fantasize about it and I'm sure some suggestions are being presented as to where your fantasy should take you, matter of fact still is you're not going to be told, ever. ";
     
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );
        optionaltext = "Maybe they wrote WIKIPEDIA with it?! [Well, somebody surely has been fidgeting with these pages, all the interesting stuff is either unreadable or made stupidly complicated, it's only what everybody will read looking for virtually anything on the web nowadays.. Think that would be a handy thing to control if you could?] Built an underground country to hide should the shit hit the fan? Perhaps some secret-space-program? Trying to develop mind-control technology? Who knows? [Well, some do..] We're talking about #50.000 of millions of >$# on top of the yearly regular budgetting here of >$71.000.000.000 for the US 'intelligence' programs. Well, maybe they secretely like to wear really expensive underwear, you could have a ^100.000^ of them doing that with $100-dollar knickers$, changing them +every single day of the year, every single hour of the day+ and have enough money left to assassinate $a few million$ people nobody needs to know about.. [The cash that's left after salt-money has been paid can be utilized to have some actors run around pretending they're doing something important so the taxpayer stays ok with this weird way of behaving..] That is also a possibility of course, wouldn't rule that one out.. ";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "Fantasize" );           
        
        p = "And you heard about all those missing trillions? MSM didn't think too much of it right? 2.3 Trillions anounced missing on +9-10-2001+ is the equivalent of the yearly Gross Domestic Product of a country like France but we're supposed to believe it's due to some imprecision and laziness. ";
        p += "Last year [2016] 6.5 trillion was announced unaccounted for in the V.S. that's 6.5 $million of millions$ of dollars.. well the economy sucks because of us not working hard enough I suppose? [In missing money we're now at ^30k^ per resident of the US, twice that amount if you'll be counting taxpayers only, note it's only what is #admitted# to be 'lost', only a complete fool would not expect the culprits to downplay the robbery as much as possible.. right? (No? Ah, come'on.. grow some brains for us.. +thanx in advance!+)] It's not a matter of lack of proof, there's more circumstantial evidence [which you just got presented, the actual evidence is there as well but you won't be seeing that on TV of course] of the people getting <fucked over like no tomorrow<, than there's for let's say the fact Napoleon really existed [which I don't necessarily doubt either, let's be clear on that]. ";
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );
        optionaltext = "The word 'fact' stems from 'factum' = 'as is done'.. well, what IS done? You can't ban out the factor 'belief' if you weren't the one witnessing the action now can you? In other words: you will have to +believe+ 'facts' to be actually true if you haven't experienced them yourself.. Think about that and tell me what do you really ^#know#^?";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "\"get your facts straight..\"" );

        
        p = "It's a matter of people being indoctrinated since the day they were born to not question authority, keep them scared and they won't ever experience a clear moment in their lives. It's fucking pathetic really, sorry to say, honestly. ";
        p += "And I suspect they don't call it #secret#-service for nothing.. [Well, 'service' to whom? To the ordinary people of course! Let's help them secretely against secret threats they're too daft to know about.]";
        
        
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );

        
        optionaltext = "Right, it's for our $safety$, we need protection against ourselves [the communists right? Or who are it this time, Muslims, Russians again, Chinese, the Danish, or +'the ALIENS'+ (or: ^the exotic^) perhaps? {according to that fake-genius Hawkings, he's physically disabled so must be really smart right? No, not really, he's been made to be well-known because he is %fearmongering% every chance he gets, not because of any scientific merits #whatsoever# (Sorry Stephen, had to vent that you corrupted mongloid.).} Right, all people are evil, fundamentally selfish, just waiting to use one another for their own good, they need to be kept in check], funnily enough, all people I spoke who claim humans are a bad crowd, untrustworthy, evil, etc. NEVER MEAN THEMSELVES! Or people they know really well. Everybody seems to acknowledge [eventually] that bad behaviour of your close peers stems from the misconceptions they might've gathered during the days.. There's not a person I've met in my life I can honestly judge to be truly bad.. Frustrated, angry, scared, SURE! But when relaxed and happy all of them seem to prefer being loving >& caring. Now that's what ^empirical evidence^ means in the purest sense, things YOU experienced, as opposed to what you're told. #GNOSTICISM# will teach you the fundamentals in 5 minutes. ";
        var optionalspanid = TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "safety" );
        
        optionaltext = "I'm not saying all beings are good, perhaps they all ^could^ be though, like darkness not being the opposite of light but merely the absence of it, same could be said of weakness just being the absence of strength, and evilness the absence of goodness, stupidity the absence of intelligence. ..These concepts only specifying #a lack of# understanding of the fundamental nature of the universe [and consquently ourselves]. Pragmatically however I'd say the good people outnumber the bad ones easily, they found that out in Iceland and threw that corrupted few in jail, physically. [I'll talk about that weak survival-of-the-fittest-religion later, be prepared already for more indoctrination being questioned..]";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + optionalspanid, "humanity: gullible, severly hampered in their growth,.. but not BAD! ", true, true );
        
        p = "~_The whole +history of power+";
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );     
        
        optionaltext = "[Gratuitous thought: There's only knowledge of self which empowers YOU as a co-creator of existence, and the $illusion of power$ you can provide others by refraining to acknowledge your own.]";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "power over others?" );
        
   
        
        p = "consists of one big string of conspiracies, each war and just about every major 'event' that had any influence on the balance of 'powers' ";
        p += "^transpired to be conspired^. Well some of us still believe a $lone nutter$ killed <J.F.Kennedy< but I suspect at least most of us already understood <Franz Ferdinand< wasn't just randomly shot.. of course we had 100>+ years to think about that one.. ";
        p += "If we scrap the concept +conspiracy+ from our framework of thought that would mean that because Germany WAS actually attacked by 'Polish' soldiers prior to WW2, [they wore Polish uniforms didn't they?] you shouldn't further investigate whose orders they were following; these things are too complicated to reliably analyse, you'd be closer to the truth saying it was just an elaborate ^coincidence^, or God's will if you like to put it that way.. [Or him ^playing dice^ if you're into the academically accepted way of looking at the universe.] ";
        p += "Because the Germans lost that war however we +MAY freely accept+ that as a conspiracy.. [or #must# really, ever tried to question it? no, I don't think that would be wise either..] It's an %abso-fucking-lutely ridiculous discussion% of course, Mainstream-Brainwashing constantly throws all kinds of conspiracy-theories around, like that the Russians downed the MH17 without presenting #any# proof for that wild theory whatsoever, it's a conspiracy theory in the cleanest sense of the notion, and a really weak one as well.. [Or what about OSAMA BIN LADEN's conspiracy, anybody ever heard of that guy before the media said his name fucking 10.000 times a day? No, they had proof, {so it's no theory but fact! Let's keep our definitions clean here stupids, hahaha, here, go watch some athletes say stuff about their contemplations during the game...'} #only nothing you'll ever be needing to see of course#, you'll need to be faithful on that one..] So what Cameron really meant to say was: $'#Bad# conspiracy theorists are even more dangerous than terrorists. #Good# conspiracy theorists aren't, they are cool, you should believe them blindly, can I get a Hallelujah?!'$ ";
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );

        
        optionaltext = "When you haven't got any arguments you start to $ridicule$ people right? Keep that in mind the next time you'll be reading some government-funded debunking article. Ignore all the ridicule and see what proof you got left. And then dismiss any proof that supposes you to be a ^layman^, that rambles on about concepts you're supposed to have never heard about before [because you must be an idiot really]. You can make everything sound immensely complicated but that generally only impresses the people who already [secretely] assume they must be mentally inept because of the treatment society gave them their whole lives [most probably the reason]. Jet-fuel melting steel-bars? Yeah, let's say it's possible in theory";
        var insertspanid = "insertion" + String ( this.inserts ++ );
        optionaltext += "><span id=\"" + insertspanid + "\">>></span>>";
        optionaltext += "#Ever watched something melt?# How, for fucksake did that look to you? Like a sudden collapse? [You also have to be willing to assume the rest of the building was made out of cardboard or something..]~_I'll reiterate it because it's a good method to distinguish true from false, or honest from dishonest: remove the ridicule, the ad hominem-attacks [negative judgements relating to the form rather than the actual content";
        var insertspanid2 = "insertion" + String ( this.inserts ++ );
        optionaltext += "><span id=\"" + insertspanid2 + "\">>></span>>";
        optionaltext += "and also dismiss scientific-sounding-babble that's supposed to be way over your head. 'If you can't explain it simply you aren't understanding it really', Einstein said, '..either that or you're playing us for a bunch of fools.' I'll add to that. Use your own +common sense+. See what YOU really believe.";
        
        optionalspanid = TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "Haahaha, Tin-foil hats, hahah.." );
        
        optionaltext = "Well, what about #WTC3#, the building that is mentioned as little as possible and was declared downed by the BBC when it was actually still seen standing on live-tv? (Some British guy won a courtcase over that [which took about 10 yrs.], not newsworthy of course.), that building more or less ^spontaneously combusted^ so technically, considering our physical-theorists hold the idea of linear time not really existing and everything happening simultaneously to be a serious possibility, the reporter wasn't lying, also the airplane that didn't make it quite to that building, through quantum-entanglement manifested it's intentions within the building.. attracting extremely hot debris to the building, setting some drapes on fire and consequently demolishing the entire structure at free-fall-speed. [Now of course, if you %GOOGLE% 'WTC-3' you'll be presented with wordpress-ramblings and a %WIKEPEDIA%-page about another building somewhere in Belgium with that same name, but that's because of that we actually switched reality during that event [see: Mandela-effect] so that the building actually never existed. So don't worry and shut up.]";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + insertspanid, "As easy as counting to three they say..", false, true );

        optionaltext = "I'll talk some more about ^#logical fallacies#^ later on most probably but you can also look at what for instance Aristotle had to say about those, sadly his efforts didn't make it into our collective consciousness. [It's very funny but that's because schools aren't set up to facilitate clear thinking!! >*sardonic laughter Bill Hicks-style>*.]"; 
        TEXTPARSER.addOptionalText ( optionaltext, "#" + insertspanid2, "LOGOS", false, true );
        
        
        optionaltext = "Well you should say #LMFBO# actually. I could literally provide 100s [and 100s] of examples of ^absolute-ludicrous-freaking-nonsense-arguments^ used in the numerous false-flag events [no it's all lone-nutter-terrorism >& organizations you never heard about before] of the recent years, I'm not going to however [go watch $a real Journalist$ like #Ole Dammegard# if you think you're capable of making up your own mind], because it would be fucking pointless while it's not a matter of +logical thinking+ at all. I mean we're talking about a mental ability comparable to that of counting to four or differentiating between two colors on opposing sides of the spectrum, everybody is capable of that when not severely braindamaged, heavily drugged or in a freaking coma [probably even then you are]. It's a matter of people not wanting [^daring^ actually] to #question (what pretends to be) AUTHORITY#, $[Well, 'authority' means the one allowed to write [the author], to freaking make up the rules as it sees fit, don't you think you should be doing that yourself?$ if they would it would instantly shatter the cosy world-view of those in power [not existing really, but as far as they do] having your best interest at heart. So, not the most fun thing to do perhaps but pretty fucking stupid if you won't. I had some honest friend actually confess that as the reason why he chooses to believe conspiracies to be non-existent. [Well, I can respect that perhaps.. (Well, no, I fail at that actually, but at least he's +honest+, which of course is pretty essential if you ever want to find anything resembling truth..)]";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + optionalspanid, "Conspiracy!! LOL! LMFAO!", true, true );
        
        $ ( "#" + this.contentid ).append ( "<br/><br/>" );
        
        
        p = "&Divide et impera.&~";
        p += "_The matter of fact is that the current economical 'powers' are the owners of the large corporations [who are even fewer], they own the big media-corporations as well, no theory there, you can look it up, it's not a secret, only not on the 'news'. [But hey..] ";
        p += "There's a lot of things going on, that the general public has no f>*ing clue about, that's on purpose and JOURNALISM isn't working to bring that to light. On the contrary I'd say. By providing a thin illusion that they are actually doing that the lot of us will be lulled into passivity and well, a chronic brainfreeze.. There's really one prevalent motto for those in '^power^' and it's #divide and conquer#. All you'll see on the news is about $other people$ to be afraid of [Oh, and some inane stuff to get distracted with, sports and famous bodyparts and such], so you'll be screaming for more governing and accept your economic slavery. [Hell, some of you are actually believing they like to do uninspiring work 40>+ hours a week for someone they call 'boss', to those people I say: that's because you're suffering from the ";
        p += "%stockholm-syndrome% and are in a constant state of angst-neurosis, take some $magic mushrooms$ and heal yourself.] ";
        
        p = TEXTPARSER.parseText ( p, "Divide & Impera" );
        $ ( "#" + this.contentid ).append ( p );

        optionaltext = "[And those that are screaming DRUGS! now should really take a double portion, do you actually know what 'drugs' means? It means +#fucking medicine#+ and it has been decided for you that there are ^good drugs^; like amfetamines to feed your children [that don't like to sit still for hours on end listening to stuff that doesn't interest them the least bit, in a system that actually defies their free will], downers to combat free-thinking [Brave New World, anyone?] and %chemo-therapy% to destroy your immune-system and then there are $bad drugs$: those that open that fluorided mind of yours. {Fluoride, of course has been put into the drinking water because the government dearly cares for your teeth..(!!) Seriously? People seem to believe everything if you say it with a straight face and an air of authority, that's how we've been raised [/trained] right? ..to be docile and submissive. JUST FUCKING GET OF YOUR KNEES ALREADY! Sorry, I sincerely tried not to rant but I have to vent my ego every once in a while to keep it in check, think I'm mad? Screw you! I Am. So unscrew you again.}]";
        optionalspanid = TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "DRUGS!?" );
        
        optionaltext = "Another gratuitous little fact: you probably know TED: 'ideas worth spreading'? They actually censored, I believe 2, [very popular] speeches during the years. Curious right? They seem so openminded and progressive.. Well, one of them was titled #'War on Consciousness'# by Graham Hancock, about the concept of 'drugs' yeah, go watch it on youtube!";
        optionalspanid = TEXTPARSER.addOptionalText ( optionaltext, "#" + optionalspanid, "War on consciousness..", true, true );
        
        optionaltext = "One more thing about drugs, I'm not for any kind of prohibition in general but currently I do think it might be a pretty good idea if we laid of the $alcohol$ for a bit, it only makes people more stupid. If 'the working class' wouldn't have their weekly/monthly artificially induced relief it might actually start to ^reclaim some self-respect^. And then there's +COCAINE+, know anything about it? It's very expensive (so you'll have to be a 'succesful' member of our society to 'afford' it regularly) ..it activates various parts of your BRAIN up till the point it feels completely in control [that ego of yours will feel really secure with that], all ^emotions^ will appear like dumb little impulses, you can see them in other people too and the brain just laughs about that in superiority. Ever wondered how severely corrupted people like (let's say 'some' although I mean 'most') bankers, lawyers, politicians >& other 'criminals' can sleep at night after they robbed other people, lied straight to their faces? [And I am keeping it very polite now, there's #a really fucking lot# of evidence of far worse things happening below the surface, perhaps later..] It's #cocaine#.. You will snort your consciousness / morality away in a sec.. You know where the most cocaine is used right? You can get high snorting the River Thames probably, the financial center of the world as it's called.. Take cocaine out of the running for a few months and I promise you the world will start to clear up pretty freaking quickly.. ";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + optionalspanid, "Alcohol & Cocaine", true, false );
        
        
        
        //newstext += this._emphasize ( "", GLOBALDATA.DL_CLR2, false );
        
        p = "~_Thattawayz peoples also won't unite in order to do some constructive things themselves that would actually be very easy to organize in theory, let's say create an own social-security network that doesn't prey on the weak, an insurance-collective that doesn't make 'profit' perhaps (?), should be really cheap then.. set up a non-poisonous-food-supply, or some money-lending system that isn't designed with a <starsized tick< in mind. [Or kick the police their buts, heck 50 of them can handle thousands of 'protesters' [who had to get a fucking $permit$ first!] because of latter lack of any ^coherent^ thinking. Am I propagating we should go commit violence against 'noble' %law-enforcers%? Well, #if it aren't your laws to begin with, wouldn't that just be self-defense then?# ";

        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );

        optionaltext = "Another real #Journalist# is Jan Helfeld, he is rightly asking where that logical delusion came from that states that ^the people can't use violence yet the state can^, because it alledgedly was #authorized to do so by the people#. So, he asks various government officials: 'How can the people authorize any body to do something they weren't allowed to do to begin with?'. Of course none of them can answer that [they will get mad of course, watch it on youtube!] because if they were honest they would've had to admit that ^statists^ don't really think of themselves as being compromised of $'the people'$ at all! It's only a +democracy+ [demos-cracy = the people's-rule] in THEORY, and while we're at it: such an enormously crap theory that it doesn't even survive the simplest of tests. {I suggest severe scrutiny when presented with 'statistics' but the research Princeton university conducted which plainly concluded that the form of government in the VS mostly resembles an #oligarchy# was pretty sound.. (they only had 20 yrs. of data). Go find it on the net, some other nice things were found, that it doesn't matter a fucking fuck whether democrats or republicans were in charge for instance.. All senseless bickering over absolutely nothing, like Noam Chomsky says: 'the allowed discussion is very narrow, but that discussion is made very intense' [to distract everybody from real issues, now JOURNALISTS reading this: #go do your fucking job and INFORM us!# ]}";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "Simple logic", false, false );
        
        
        p = "[Yeah, we 'agreed' on them the politicians say, I sure as fuck didn't.. got my autograph anywhere? It's not a 'law' if you can break it and it also isn't +an agreement+ if you weren't involved during that matter, now is it?.. #all such 'legality' is just a violation of free will#,"
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );

        optionaltext = "Of course I know the propaganda against 'free will' actually existing.. It is presented as being an honest philosophical search into truth but it really isn't. It's too daft an argument to even seriously comment upon, it's for people who don't acknowledge they actually exist, who are lured into thinking $something #external# and vastly superior like SCIENCE replaces their consciousness$, their capacity of inner-feedback. Heck, you can only take so much before you're stomped into submission right? Well, no.. Hasta la revolucion siempre!.. [That said: free will is not a given, it is to be CLAIMED, note the word 'will' in there, if you're not willing to choose, you don't, pretty simple right?]";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "Free will is not a given", false, false );

        
        p = "if you give up on that you won't get hurt, so scared people are ok with that generally, because they think 'the others' shown on tv are even scarier than their real oppressors.";
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );
        
        optionaltext = "Metaphysics freely interpreted and puzzled together from Buddhism, Hinduism, Taoism, etc. and otherworldly sources [and well, all ancient teachings (not yet rewritten by those that wanted to manipulate people with it.)]";
        insertspanid = "insertion" + String ( this.inserts ++ );
        optionaltext += "><span id=\"" + insertspanid + "\">>></span>>";        
        optionaltext += "from all over the world say the same thing basically]: the force we call $negative$ fragments #the 1#, again and again and those fragments again.. [The Brahma breathing out.] The one thing is all, and all the things are the one simultaneously. ^Enlightenment^ entails understanding you're part of a bigger consciousness, step by step [which should be a fun thing to do, ^GOD^ [although that word has been corrupted to denote what Plato would call the %Demiurge%, it will do] experiencing itself in an everlasting myriad of different expressions, expanding in knowledge. Buddha for instance didn't really feel a lot like talking [let alone writing] in his later days [what's there to say? Everyone needs his/her own path, their own re-+member+ing.] but when he did he started using '#we#' to denote himself]. ";
        optionaltext += "To understand these things you will have to see through all the illusionary polarities that are keeping the segregation intact, without those all aspects of the 'great self' would instantly realise they are 1 and the whole experience would end there.. [And start anew with another breath..] ^The discovery of the self is the whole point^, the path, not the goal. The goal is already there, it's already happened and always happening.. [Like all x extra dimensions we deduced from our physics [and mathematics] existing regardless if you experience them or not, we might perceive 2d only, thinking it's a big plane we're at, still the 3d world exists, we only wouldn't understand why the whole freaking plane changes at times, well, I believe at least 12 dimensions are assumed to exist, again, whether you understand/perceive them or not, they're there and we're travelling through them constantly.] ";
        optionaltext += "..that said, we as a species aren't progressing very well and that's because the inate positive energy that eventually resolves all polarities [Brahma breathing in] is countered by #artifically# invoked negative energy. The word artificial is to be taken quite literal in this context probably but I will elaborate another time.. (What's the Latin word for enlightenment? Now, let's say you liked a certain status quo.. )";

        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "Monism, Holism, Pantheism.. -ism = for schism" );     
        
        optionaltext = "Yeah, the bible has been rewritten at least 10 times.. just saying, to make it palpable for the new generations right? right! They only made some slight translation-errors by accident, nevermind that turned some key-concepts upside-down.. Like the original word +'ELOHIM'+ (translated to $GOD$) occuring about 3000 times, being a #PLURAL# [although that will be denied of course, everything ending om -IM is plural in Hebrew except of course Elohim, well they will forget to explain you why the singular ^'ELOAH'^ wasn't used then, considering it's only a single entity.. hoping you will never ask it probably. (BTW: it's a pretty big deal because those ELOHIM they're talking about aren't the real deal at all, beings a bit more evolved who like to get us to worship them probably, but don't take my word for it, there's enough to be found about that if you're willing to take a peak outside the box.)] ^'Shalayim'^ translated as $heavens$ was more commonly used to denote #cosmos# or #universe# and +'Malat'+ translated as angel literally means #messenger#, %'Baal-zebub'%, named satan, means #flying lord, or 'lord of the fliers'#, although they will fool you into believing it literally means 'lord that kills flies' or something wacky like that even though the Hebrew don't call that flying insect we call flie a flie [which has to be said is one of the most infantile inventions in our language], but have different words to denote the insect and the activity. ";
        optionaltext += "But, I don't really feel the need [or could really without more study] to reliably prove the entire book has been corrupted, especially concerning our relationship with 'God', which more and more became one of #total submission as far as our role is concerned#, the fact that the 'divine messages' have been rewritten at all should raise an eyebrow or two. If not, then you go be submissive all you want, or discard the whole thing as arbitrary lunacy, whatever suits you.. [BTW, they did find a lot of missing testaments but you aren't going to be notified of that voluntarily of course, +Nag Hammadi+ is where they found some, now if interested you could start looking there..] ";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + insertspanid, "The WORD of GOD", true, true );     
        
        $ ( "#" + this.contentid ).append ( "<br/><br/>" );
        
        p = "&You're perfectly capable of deciding what's best for you.&";
        p += "~_So they make all our differences seem unsolvable without "
        p += "%total destruction% and as a bonus you will be lured into feeling dumb and unworthy. ";
        p += "They use ^words^ you generally don't so they must be unto something, right? [NO!] They had their training in schools, got a few titles and medals along the way and now they know better than you. [I'll summarize 'higher' education for you: ^#jargon#^ and +#protocol#+, that's it, now look up those words and break the spell.]";
        
        p = TEXTPARSER.parseText ( p, "Empower Yoself" );
        $ ( "#" + this.contentid ).append ( p );            
        
        optionaltext = "#Gratuitous actual life experience#: I went to university yeah, a few of them, I was assessing the bulk of it as completely uninteresting but managed to pass the tests by discovering a) what the professor wanted to hear and b) how he wanted it be presented; which words to use, which references to insert, that's it. I started adding some sporadic crazy ramblings in between to see if the theses got read actually and it turned out as expected: they weren't, they were scanned for keywords. Whenever I did an honest effort of expressing some autonimical thinking I never seemed to pass ^the test^, the entire feedback generally encompassed a bunch of $red question-marks$.. [Well, as if it's my fault they didn't get it?] I passed the exams by formulating utter bullshit in really longwinded sentences [I trust you'll believe me I'm quite capable of that], as abstract and meaningless as possible, while absolutely having no clue what the exam was about because I wasn't reading the f>*ing books wherein words magically got a much narrower meaning all according to the point the author wanted to convey. I didn't score A's with that, but it was enough to bluff my way through it. [Which is what most 'educated' people will be doing all day anyhow, just bluffing ferociously, secretely hiding the fact they see the emperor naked as well.] Proud of that? By far not enough to counterbalance the big fucking disappointment of discovering it all being a stupid excercise in elaborate submission of your free-will >& thought..";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "schooling for people who are told they are really smart" );        
        
        p = "~_Feeling bad about your position of [assumed] powerlessness? That's because of refugees [from countries we destroyed because we just had no choice but to play along] going to rape your children, or the Russians, the Chinese, the Muslims, the TERRORISTS!! {where's that dictionary!?}, those people without a home, the jobless, everyone but the ones really fucking us over. (God, why am I still explaining this shit?), from experience I know people have their minds switched off, by education, pop-culture, and mainly yes, by that farce called ^mainstream journalism^.";
        p += "There's so much more truth that's buried beneath the shallow surface of our society as exhibited by the media, some of the more crucial findings I will share on this site. But it all boils down to the ability to truly do your own thinking, I know people 'think' they do, but really, citing other sources isn't it, having endured a big education neither,"
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );        
        
        optionaltext = "I spoke to a lot of really proud 'educated' people, those that keep adding prefixed to their names, and generally [there are some hopeful exceptions] I say: the more $education$ they have endured the more predictable their ^'opinions'^ [which means +(freely?!) '#chosen# judgements'+] are, namely those that #they learned were right#. You will hear the same fucking argument time after time speaking to these people. For instance 'Why do you think aren't there any bones found of the species we are supposed to be in between chimp and human?' Well, you'll get the same answers as you can find on ^wIkIPeDiA^ [who writes all those articles, you? know anyone that does?], a bunch of lame excuses but nothing that actually makes sense. I just read on the livescience site that it's because the intermediate species went extinct.. wait, what? I don't think Aristotle even gave that logical fallacy a name, let's call it a brainfart. Of course they will start about 'creationism' pretty soon but that logical fallacy is called 'argument from the negative', or even a 'red herring' because we weren't fucking talking about creationism in the first place, all I asked was a simple question which an honest person probably would answer with, 'I don't know'. ";
        optionalspanid = TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "opinions schminions" );        
        
        optionaltext = "Yeah, I know it's a touchy subject and a sure way to get labelled mentally insane if your dare to question some of the fundamentals of our enlightening sciences {didn't they replace the oppression of indoctrination by religion? ";
        optionaltext+= "Not really, it's more like ^indoctrination 2.0^, a bit more rational and you might argue a bit more constructive [in the mechanical sense].. Of course in it's pure form the +scientific method+ makes perfect sense, but also #all openly known religions# [and some $occult$ as well] known to man #started off with the purpose of collective enlightenment#, ";
        optionaltext+= "with ideas like [and they all have this one]: ^'don't do to others what you wouldn't like to have done to yourself'^. [Which is #a really powerful# idea would people actually honor it.] Power [over others] corrupts they say, I say the whole notion of power over others already is a $corruption of universal law$. [And the good thing about #universal# law is that every-fucking-body knows it when the mental jittering finally is under control.]} Still wanting to defend your unfounded dogmas and explain to me why I'm an idiot? Protip: don't wast too much time trying to intimidate me with pseudo-intelligent-complexity or rudeness, I will be reading right through that as well as your 'ad hominem'-attacks and other logical fallacies, +straight to the actual arguments+! ..if any.. (Looking forward to that! Butchering big egos, it's a dirty job but someone's gotta do it.) Hey, and might you actually say something sane I'm only learning! Point is that 'educated' more or less translates to 'brainwashed' in my book.. that crowd really proved very disappointing to converse with generally; seldomly an original thought, always the same old rethoric.. and after that: an evolutionary leap back to primal angst and anger usually.. I can understand it's quite a task to question the basis of +your ego+, but you'll be having to do that one day anyway, because #it doesn't really exist# [it needs to be fed consistently, go live alone in the woods for a few years, see what's left of that ego]. Read the Tibetan book of the Death to know what awaits you if you're holding on to illusions. [Which is the definition of %HELL% really: not allowing truth. or: ^Clinging onto what can't be clung to anymore^. #Very Fucking Painful#, Eternally! [because time doesn't really exist either, talking from experience here but will elaborate on that another time perhaps..] Well, untill you stop doing that.. so, 'hell' is only a transitional state.. don't worry, you'll be fine eventually!]";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + optionalspanid, "How dare you?!!!", true, true );        
        
        
        
        
        p = "it's not about all the things you mimicked, it's about those things +you found out by yourself+, ^fearlessly loving^, from <#THE INFINITE#< yes(!), call it $God or Allah$ if you like, I don't care.. #Your own core-being#. But not from people who are only repeating shit |[disempowering>~, negative>~, degrading>~, uninspiring>~, restricting>~, etc. so yeah: 'shit' is a good metaphor]| they got spoonfed themselves... ";
        p += "~%[Step 1: re-evaluate the meaning of #FEAR# as something to confront and inspect closely instead of something to avoid, that darn Roosevelt fooled a whole bunch of us into repeating something utterly retarded.]%~~";
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );        
        
        
        p = "&MSM: a transparent society (?) ! or: what do you really #know#?&";
        p += "~_Ok, you still are of the opinion that our current systems provide you with all the info you'll be needing? ";

        p = TEXTPARSER.parseText ( p, "Opacity 10" );
        $ ( "#" + this.contentid ).append ( p );          
        
        optionaltext = "What I hear a lot is people saying cynical stuff like: well, maybe it's better to live in a cosy lie than a horrendous truth.. Like: 'My aunt watches TV all day while drinking coke and eating  stuff they scraped from the butcher's floor but she seems happier than me..' To those I say: 1) head up, happiness ^#really#^ is a choice, it will require some work if YOU think that's necessary and I can certainly confirm that from my life-experience, I also like to %play dead% [or get wasted] now and then but it doesn't really help now does it?  And 2) do you want to be your aunt then? No, you sure as shit don't else you would be her, choosing to be +ignorant+ is an insult to ^existence^ [in some way even it's opposite] and you know it deep down in your heart. And lastly: the #truth WILL set you free#, and +only the truth+ will, being unhappy about true things is a transitional phase only. [You'll be needing to investigate what 'fear' really is.] The universe is a wonderful place where everything is possible, $you are limitless and eternal..$ start opening up and you will #know# [Become a GNOSTIC with LOGOS and the PNEUMA]. You can't think of any lie that's better than the truth! I know this will sound lofty to some people and it needs further explanation, but you'll be needing to do the work for yourself. Just planting some seeds already.. [Listen to ^the Buddha^, he is very right you know.. #suffering = the resistance to truth#.. Do it all you want, it's up to you, He does't really mind at all anymore..] ";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "Play dead.." );  
        
        
        
        p = "I've got some questions for you: - how does our global economy work, #how does the banking-system exactly work?# [You know the FED? 'Federal Reserve' which isn't FEDERAL [but in private hands] and also hasn't got anything you would suspect to be called 'reserves' [like gold or whatever.. just papers with magic words..].. It's what makes economies rise and fall at a whim, well not a whim, carefully planned of course to suck the most out of it.. If you allow the concept of 'conspiracy' to exist that is, else I wouldn't know how to call it..] Who is corrupted [the bulk of us] and to what extent [mostly salvageable I'd say]? $What is really in our food?$ What are all those additives really, and what nutritional value do they have? ";
        p += "[Look at those mandatory labels on soda for instance, it says sth. ridiculous like 0>% fat, 0>% salt and 0>% fucking plutonium, and a lot of %codes% for stuff you don't need to know about, just that it has been approved by some 'commision' [AKA a friggin' CHATGROUP] that you probably somehow elected into existence due to some complex chain of events that is made to appear too boring to even begin to ponder. ";
        p += "(Which is my definition of politics by the way: +#boring the plebs to death#+.)] ";
        p += "~_<How does the pharmaceutical industry become the richest on the planet when it would actually heal people?< [It seems we're stuck with these ^diseases^ for ever and ever right?] So, what are in those medicines, what does all the research #really# show? (Found one that suggested it's a good idea to inject children with mercury yet?) And what are all those ";
        p += "^'DIAGNOSES'^ of mental $disorders$ based on really? ";
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );   
        
        optionaltext = "Latest addition to the 'Diagnostic and Statistical Manual of Mental Disorders' [that elusive work of creative mathematics and horror-science-fiction, AKA: DSM, a (brain-)#Dead-Society-Methodology#], is another glorious acronym: ^ODD^, signifying the words 'Oppositional Defiant Disorder', meaning, well: #that you still got some +friggin' free will+ left# really. ";
        optionaltext += "I know people seem to be really fond of the newfound coolsounding labels they can put on their heads and on those of their children ['Yay! A reason why things are not working out! Finally they gave me one that didn't require +actually changing my belief-system+! (..that I got from TV)'] but they all are really just $conjured up by a group of fake-scientists using words you weren't taught at school$. And that's the complete and utter truth! Not a shred of a doubt about that. Find me a #definition# of +Dyslexia+ please, or of ADHD, ^Autism^, Borderline, what else..?  Just a simple proof-of-concept with which you can ";
        optionaltext += "#decisively determine whether someone suffers from it or not#. THERE AREN'T ANY, ARE YOU ALL BRAINDEAD? You lazy bunch, look up those words then if you don't understand them, see what it actually all means, here I'll summarize it for you: it means: \"you dumb, you go eat pills.\" Sorry, I'm just kidding here.. [No I'm not... but I AM SCHIZOPHRENIC if that comforts you.. (and not taking any pills for it.)]";
        optionalspanid = TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "let me guess, you got ADHD?" );        
        
        optionaltext = "'But Simon, you haven't got any pills for Dyslexia!' Heck, think a second more will you?! The point is you are without any possibility to overcome what hampers you because you ^ARE^ 'diagnosed'.. #YOU = Dyslectic / Autist / ADHD-retard, etc.# The point is that you are deemed a bunch of molecules, you are reduced to genes [they mapped them(!), yeah a bunch of black stripes on a paper, guess we know them now.. for fuck's sake..], to neurotransmitters, etc. You are made into matter without #consciousness# or #free will#, exactly the opposite of what the Pentagram-symbol denotes (:the spirit rules the elements [instincts/matter]) and [logically] #+exactly+ that what an INVERTED pentagram means#, you know, the symbol people are scared of and associate with satanism? It's for crazy folk who like halloween too much right? But, nevermind, I know people are trained to think all symbolism is for loonies, well check out what the ^filthy few^ are doing in their spare time, find the so-called $supreme-court$ [let it be known I VETO that btw] the Rothschilds built in Israel, they %sure as hell% don't seem to think it's all ridiculous stuff.. WTF are all those obelisks doing in Western civilization, weren't they Egyptian? What are the 'fasces' [where fascism got it name from yeah] doing in american courthouses you recon? What is 'royalty' more than a bunch of symbolism? Look at all those ceremonies, a bit closer this time.. But I'll be talking more about this on another occasion [If interested, check ^Michael Tsarion^, nuff said, you'll need some free time though, but if you are doing it right: +ALL YOUR TIME IS FREE!+ Awesome.], I was talking about people being DIAGNOSED [=literally to 'separate'/judge/tell apart with knowledge].. They will eventually find some pills or a training-camp or whatever for Dyslexia if you let them.. [Dyslexia means 'bad (with) words' and was invented in 1964, so now you know why it all doesn't make sense to you, you're just bad with words..] ";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + optionalspanid, "But, I can't read!", true, true );        
        
        p = "~_Who rubs who in politics? #What do all these thousands of %lobbyists% accomplish really?# ";
        p += "Who decides what movies are made [or does everybody really love to see the extremities of dysfunctionality splattered into their consciousness all the time?].";
        p += "Who decides what gets played on the radio all day? ";
        p += "It isn't the most enlightening stuff, that's for sure right? It didn't get any better lately either.. What do you make of the theory of evolution when TV $[Tell-a-vision]$ shows greater imbecility every day.. ? It doesn't add up now does it? ";

        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );          
        
        optionaltext = "The >*pornification>* of little girls in cute Walt Disney-movies, every noticed that? [Or the latest +Miley Cyrus+ video clip for that matter, with a baby-suit and her ass in the air, Heck, remember $Britney Spears$? First clip dressed like a schoolgirl singing only slightly disturbing stuff, a year later moaning %'I'm a slave'% dressed in SM-outfit.. What's that other chick called.. ^Lady Gaga^, another nice example would you be wanting a nihilistic, desensitized >& braindead youth. (O Yeah, we're supposed to believe those are just some random talents that got to do their own thing with a blank check or something, no of course it isn't, every fucking second of it is calculated for maximum effect, the 'masterminds' behind it are a bit smarter and a ^hell of a lot meaner^ than the lot of us)]. How about all these cartoons parents let their children watch because they can't muster up the strength to give them any more attention [because they let society determine their priorities, half of them doesn't even raise their own children but think it's normal to let a few teenage girls, armed with I-pads and potato-chips, watch over their children for the better part of the week], an endless stream of noises and new imagery at turbo-speed, without any rest.. ever looked at those kiddies? Looked hypnotized? Because they fucking are, that's why they're quiet and that's why they won't be sitting still anymore, that's why they aren't able to focus on anything, nono, let's call it ADHD and all's fine again.. Seriously people #ARE LITERALLY brainwashed and the reason why you might think brainwashing is fiction is because it works tremendously well#!";
        optionalspanid = TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "SEEING = BELIEVING" );        
        optionaltext = "Yeah, it's only that it's the same fucking lot that owns everything, so both the pharmaceutical industry AND the movie-industry, both MONSANTO and the major news-networks, they got their employees everywhere, and especially in your GOVERNMENT, thanks to some actual journalists doing their work you can even trace what they're getting paid for their services. But no, people firmly believe that just can't possibly be true because we have proven time and again we aren't capable of any organised action. Well, speak for yourself friend, sad but true, some people got organized a long, long time ago and as George Carlin says: 'it's a big club, but you and I ain't in it!'. +'There is no us and them, but them, they do not think the same'+, and that's from $Illumination$ by ^Gogol Bordello^, at least somebody's awake there. ALL YOU AWAKE SOULS, I WILL LOVE YOU UNTIL I'M COMPLETELY DISSOLVED.. [But let me have my vengeance first, I want to see some great big fucking apologies, and then we'll see about forgiveness..] ";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + optionalspanid, "Oh No", true, true );        
        
        p = "In computergaming still about every month another braindead FPS is released, that's a game in which you just go shoot everybody with a variety of weaponry and special effects, while 'Indie-games' [from 'independent'] became a term within the industry for actually creating ";
        p += "creative games that are finding a broader public every day, well because they are actually inspiring, not dumbing down. Think the big studios can't think of a game like Minecraft themselves? [#one# guy made that!] Something's seriously flawed in that system then..";
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );  

        optionaltext =  "Yes, I know the argument it's inherent to a capitalistic system, but I'm ^not buying^ that. They say mainstream culture just produces what sells best, ";
        optionaltext += "but my gut tells me the people who actually listen to the radio and watch commercials voluntarily will consume $#absolutely everything#$ that's presented as being representative for the average succesful member of the herd. How else do you explain hordes of them paying a substantial part of their income for a device they have to rebuy every few months [well, because it's produced with obsolescence in mind] which makes websites unreadable, supports only the dumbest of games and on which you'll be typing with 2 fingers again? I am sure if music on the radio actually was good it would sell even better, slight problem however is that it will expand people's horizon, make them think toughts and feel feelings they were previously unaware of, the power of creativity IS unstoppable, but a big effort to disprove that is being undertaken anyway, #MUSIC nearly caused a +revolution+ in the 60s# which was I think was probably dismantled by creating the Beatles [amongst other stuff, the Rolling Stones for one..], but that theory I will elaborate upon when their fundamentalist fans finally all died out, pretty soon now.. [The term 'Hippie' now translates more or less to 'dork' right? Wonder how that came to be..] ";
        optionaltext += "Still persevering in being a ^coincidence-theorist^? Go and do the work journalism should do and figure out who creates those playlists then.. Start with a disc-jockey, go to his employer, their employers, theirs, all the way up to the same fucking crowd that gathers in occult ceremonies a few times a year worshipping an owl or \"eating pizza's\" as they call it.. But, I'm not going there now, you read +wikileaks+ yourself and make up your own mind about that one. ";
        optionalspanid = TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "it's capitalism" );        
        optionaltext = "Ok, one more example, you voluntarily clicked a few times so here it comes: I read a pretty convincing confession [I'm sure you'll be able to find it yourself if you know how to search the web], of a guy who prefers to stay anonymous and says he owned a pretty succesful record company a good while ago [forgot how long, let's say somewhere in the 80's] in the VS. He describes an occasion at which he was invited for a bit of a secretive meeting with all his colleagues from the music-industry. At arrival [at some innocuous location] they all had to sign a contract beforehand that clearly stated no word said inside should ever get out, with the threat of severe repercussions wouldn't you honor it. Some of the guests refused to sign it and they were politely thanked, then shown the door, he signed and stayed out of curiousity. To cut a long story short [you'll be having to read it yourself, he describes it way more precisely of course], they were congratulated with their succes and motivated #to introduce more crime-inducing music# because of $investments in the national [PRIVATELY OWNED!] prison-system of the VS promising good dividents$ if they would. He describes how he was flabbergasted hearing that, not believing his ears and how one of the other attendees got mad and stood up saying they were an evil bunch, which made our protagonist and 2 other guys rise as well, the four of them were removed [leaving a lot of the other attendees behind] from the complex at gun-point and firmly reminded of the contract they signed. The narrator tells how he drove home, stopped the car alongside the road to reiterate what had happened, not really believing that such a thing could've been real. He went home and never told anybody.. From then on he closely watched what his colleagues were doing and indeed, one gangster-rapper after the other got promoted. He kept the secret but got sick with the industry and after some years immigrated [I believe to Europa], only a few years ago he told this story. True or false? I think it's probably true, and I tell you what: If this story went on the 'news' on primetime, most people would too..";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + optionalspanid, "Crime pays, and imprisonment even more", true, true );        
        
        p = "~_#What are the actual reasons for all those wars?# Even the dumbest of our species are not buying the narrative anymore.. [Or are they still? I wouldn't know actually.. They shouldn't though..]";
        p += "~_More questions, +how the fuck does our technology work?+ How do you repair a toaster? What are all those 'security-threats' windows is bugging you with? [Don't think they are talking about the freaking holes they left for the NSA, now do you?]. We're surrounded by stuff we have no idea about how it works yet no-one really seems to give a hoot about that. You sure all that air-pollution is worth it? How can you be so sure WIFI-radiation is harmless, enough to enable it in every fucking alley [free of charge! unlike water, electricity, housing, food, well the important stuff.. ]";

        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );  
        
        optionaltext = "Gadaffi actually did provide those for [just about] free, but he was killed by 'rebels' from his country, Al-Qaeda prisoners actually [or what are they called this time, Al-Nusra?], liberated, armed and trained  by the CIA actually [well documented, not making this up], now Libya can enjoy the wonders of a Rothschild central bank.. Thank God [Lucifer?] also that that devious plan +to embrace a gold-standard in the Middle-east+ was torched. Nobody watching mainstream-news knowing a fuck about that of course, you've probably heard some wild stories backed with so much proof you can completely fill something that's already full with it [yeah.. it's your head, with crap. (Don't worry, I'm a leukocyte, just doing my job..)]. Fact: some demonstrations from the libyans shown on the major western news-networks were obviously somewhere else entirely. [Like Iraq or sth. do you think people see the difference?] The actual Libyans however seemed to love the guy, and rightly so if you know the facts, want proof? On youtube you can find a continuous shot of about 10 minutes with him driving through Tripoli fully exposed, without bodyguards, cheering at the people. The passers-by generally greet him cheerfully, they don't seem pressured at all while they at times also freely ignore the spectacle. Now, I ask you this: #can you think of any of our glorious leaders doing the same thing?# Also, perhaps you should go find a Libyan and ask what he/she thinks... wouldn't that be an idea before incorporating an %opinion% in that system you call 'general knowledge'? ";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "Gadaffi" );        
        
        
        
        
        p = ", when you're not even knowing what causes gravity? "; 
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );  
        optionaltext = "No, you don't know what causes gravity, you know a few +formulas+ [it's magic really], perhaps even that there are several to be applied at different occasions but what you don't know is what freaking causes it. A graviton-particle perhaps? Well, what makes that thing work then assuming it is found? And so forth.. How can you be so arrogant in thinking you understand things while all you have learned is some kind of gigantic circular-argument with things called axioms guarding all the exit-points and 'laws' that prohibit any closer inspection. There's a lot more to say about that.. I will later, please stick with me. Just remember ^complex^ means 'woven-together', so pick it apart to make it really simple again.";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "huh?" );        
        
        p = "I mean, you also read all these #extensive studies, based upon elaborate and carefully conducted experimentations# regarding the effects of WIFI? (or holding a |SMART|-phone next to your brain for that matter?)";
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );  
        optionaltext = "Yeah. let's call it smart, that will convince them.. On a side note: ever noticed that in modern commercials always the weakest aspect of the product is advertised as being the opposite? Like cars being enviromental-friendly, chemical-waste-food being healthy and insurance-policies for those 'daring to live'.. [actual slogan on dutch TV.] They don't really expect people to think about it I suppose, just conditioning-tactics..";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "..." );        
        
        p = "Me neither. I did see some girls grow cress in rooms either with or without WIFI.. The one with WIFI looked better! No, just kidding, it looked very unpleasant. Now, don't go attacking me for this example, if you are left completely in the dark your world will look like what gets illuminated, even if it's the tiniest bit. Yeah Plato's cave.. a long shot.";

        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );       
        optionaltext = "A bunch of morons replicated that experiment which now of course will turn up on the first few pages in GOOGLE where they put one bowl of cress ON TOP OF the modem and one about half a meter away from it.. So yeah, the first looked a bit worse but that could be because of the heat. Now, you will have to believe people are really really stupid before suspecting any devious intention.. it helps if the word 'conspiracy' is banned from your vocabulary of course..";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "Look where you're NOT guided to.." );        

        
        p = "~_Who thought it was a great idea stuff should break down right after the guarantee expired and why TF do people accept that? ";
        p += "We're made to believe all economical problems are due to the ordinary person not slaving hard enough right? I'll tell you this: $go and ask #any random TODDLER# how the global economy should be organized and I bet you it's a #fucking better idea# than the one currently in place$. Change the valuta into candy? why not, ";
        p += "everything better than this idiotic ^global ponzi-scheme^ requiring constant warfare and %eternal scarcity%, while all the means for abundance for every living being are easily present, you'll only be missing #the will >& belief# to implement it. I'm only guessing actually studying 'economics' #doesn't really help with that#. It's probably the dumbest thing that gets called a 'science', where all concepts are only based upon others within the same framework and only bear some kind of statistical +correlation+ to reality. ";
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );       
        
        optionaltext = "Statistics means you'll be taking a few parameters you assume you can reliably measure out of the endless construct that is called reality [$Chaos-Theory$, which should be redubbed #+Order-Axiom+# because it's no theory and it ain't chaos either.] and plot them against each other according to various mathematical algoritms which are all just made-up really [Let's multiply both parameters, then divide them by the sum of their roots and take the cosine out of that, etc. sure, you'll be getting a number that is somehow based in/on both parameters, but ^what on EARTH does it still mean^?!] ";
        optionaltext += "You can use it to gather insights or for fun or whatever, but you can never %prove% anything with shit like that.";
        
        var insertspanid = "insertion" + String ( this.inserts ++ );
        optionaltext += "><span id=\"" + insertspanid + "\">>></span>>";        
        
        
        optionaltext += "Don't forget you'll be ignoring the rest of the freaking cosmos having any effect on any of those parameters you're inspecting. ";
        optionaltext += "One can understand it's %very% $very$ ^very^ #very# easy to paint a completely different picture of reality, that is, if you'll be finding people stupid enough to believe you. You can for instance calculate the correlation between the amount of horses people have and weigh that to their hair-color, and then go tell people they should dye their hair to improve the chances of getting a horse. Sounds ridiculous? ";
        optionaltext += "Look at the connection of 'scientific' economics with the real world and tell me it's fundamentally any different.";
        
        
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "Statistics = fake mathematics" );        
        optionaltext = "[It's really symptomatic of our sciences, we seem to have forgotten they are only methodologies that require a ^human interpretation^ to make it applicable to +human life+, the constructs they spew forth themselves are completely meaningless without that..  [CONSCIOUSNESS being the thing that gives MEANING] (of course, 'scientific knowledge' isn't supposed to be possessed but to be ^worshipped^, honestly what the heck do YOU know about science? Endured a big education and still nobody gives a fuck about what you think concerning 'creating society' / 'interpreting creation' / '+doing the actual math+' itself, you can add some %futile footnotes% here and there to the established 'body of knowledge' if you've proven to be a really obedient drone.. you'll get a NOBEL PRIZE for that so people will admire you! Hooray! ^True geniuses^ [in the original sense, from the notion of 'being (severely) #spirited#' (genie)] are ignored and ridiculed by the establishment (pretty much by definition because establishment denotes something that wants to keep it's borders intact and genius denotes something that transcends those) [like all these artists the general public learns about 30 yrs after they influenced what then is the mainstream], try speaking your own mind for a change, see if you'll be getting any nobel-prizes soon. [Fuck, they even gave Obama one for PEACE, right before he became the $commander-in-chief$ of a war-apparatus bombing (at least, officialy) 7 different countries, killing children with drones... being at war constantly during the whole 8 years of his 'term'.. the VS in the meantime still being one of the few countries (if not, the only) #we reliably know about where mass-torture of (unconvicted) people takes place#, [He is a good actor though, a very good one.. should've given him a few oscars then..] so yeah, it's a bit of a joke really, and a FREAKING SICK ONE as well if you ask me.] I said it before: I spoke to a lot of 'scientists' and they generally can only produce abstract mumbo-jumbo without having a clue what they are actually saying [hard to have them admit that I say! They are told for ages they are more intelligent [=better than others really] for reproducing abstract complexities without them knowing they should extract #meaning# from those constructs +themselves+ [because they inherently lack any], listen to a guy like ^Richard Feynman^ to see how somebody who understands some physics sounds like {And follow up with $Nassim Haramein$}.)]] And some more to be sure: )]]})] try { >_>_all; catch ( error ) { return \"no, you deal with it:\" >+ error; }";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + insertspanid, "Co-creating? Not on our watch..", true, true );        
        
        
        
        p = "~_Why are we still polluting the globe when all the good technology is being locked away in safes? #What are the healing properties of plants/herbs?# Don't you think the few history-books you read miss out on a bit of +thousands of years+ [hundreds of thousands if you ask me, but that requires some explanation.. later..] +of history of thousands of billions of people+? Who's qualified to determine the specks of relevance from the oceans of irrelevance? #Don't you think if the AXIS won WWII we'd all be taught that the ALLIES were the bad guys?# Etc. etc. ";
        p += "Fact is: ^We know jack shit about the inner workings of our society^, ";
        p += "and I'm not even talking about <the real important spiritual questions<, like eh.. well, I don't know: '#what the fuck are we doing here?#' and '$what does it mean to be a human being really$'.. 'How do we want to relate to others?', and vice versa, 'What is happiness, fullfillment?', How about inspecting what emotions are? <Consciousness?< Love, what is it really? Is one word enough? Intelligence, something you can measure? Wouldn't that make the definition really narrow? Doesn't 'intelligence' require any ^action^, or you just ARE it and that's that..? [See how quickly you'll become stupid with that attitude..] More words needed, #more <CONCEPTIONS< are needed#. Fear? Aaah, run away! SEX?! It aint %porno% right? [Which basically means ^'sold'^]. Something sacred, empowering, spiritually liberating rather.. unlocking creation itself.. it's a $fucking divine$ thing made to appear as shallow and meaningless as possible. [seems we got stuck when $nihilism$ was invented or sth. (The #weak# version of it according to Nietzsche's terminology)], education is brainwashing but professional 'Journalism' really is a +big >#@>$>% disgrace+! [Doctors, scientists, judges.. you'll be having some explaining to do.. Politicians.. well.. perhaps if I can hold my vomit long enough..] ";
        p += "Go and read what Hunter S. Thompson had to say about Journalism for further insights with regards to my standpoint here. ";
        p += "~_O yeah, did I tell you I actually went to study Journalism? They made me re-write what ANP [Yeah, it's %Reuters%] feeded into our terminals without any discernment. When I tried to think for myself I got accused of being subjective [which I sure as fuck am], I really became the unruly guy there arguing with the teachers all day. ";
        p += "Only 19 yrs. old I couldn't formulate my objections that well but I already felt something was off and still left somewhat victorious [but not satisfied] after every 'discussion' they honored me with. It ended with them suggesting I better go and do sth. else, somewhere far away.. 20 Years later I found out I was right all along.. ";
        p += "So yeah, I got annoyed a lot here on this planet, #forgive me for me my rough language#, +thanx!+";
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );              
        //$ ( "#" + this.contentid ).append ( newstext );
        
        p = "~~&All's well that ends well&~~";
        p += "It's all a <mirror<, I trust my bloodlust will ease eventually.. If you read it all, thank you so much.. Humanity depends on you, acknowledge your ability to respond. ";
        p += "Yeah, +responsability+, spell-ing it out.. I probably incarnated on this planet to feel smart because fuck what a bunch of utter fools are witnessed each day.. ~Is it my own foolishness biting me in the face? ";
        p += ".. perhaps it is.. Next article I'll start positive again.. I promise [only about the starting-bit]. ~Fare well, S.";
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );      
        
        //return quotes;
    };    
    
    
    
    
    this._installQuotes ();
    this._addParagraph ();
    
    
    
    
    
    
    
};