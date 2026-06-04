/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var BLOG_simonsays = function ( parentid ) {
    
    this.parentid = parentid;
    this.quotes = [];
    this.inserts = 0;
    this.plaintextcolor = GLOBALDATA.CLR_WHITEPURPLE;
    this.contentid = "simonsaysparagraph";
    
    this._installQuotes = function () {
        var quoteHaynes = [ "\"There's a time to $shit$ and a time for ^God^,",
                            "The last shit that I took was pretty fuckin' odd!\"",
                            "%-- Gibby Haynes%"
                        ];
                        
        var quoteThirlwell = [ "\"Run the gauntlet North #and# South, March on up to the cannon's mouth,",
                            "And say $'I can do any goddamn thing I want'$.\"",
                            "%-- James George Thirlwell%"
                        ];       
        var quotePatton = [ "\"One man's $bowels$ is another man's ^soul^\"",
                            "%-- Mike Patton% "
                          ];

        this.quotes = [ quoteHaynes, quoteThirlwell, quotePatton ];        
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
        
        var p = "*^FUCK YEAH^*";
        p += "~_Ok, some stuff about me then, the <AUTHOR< of these writings, #author# $originally$ meaning ^the creator^. So now you can understand what 'authority' means, 'authorizing', the whole rambam. [And +'originally'+ of course meaning: stemming from the ORIGIN.. Yes! there seems to be one!]";
        
        p = TEXTPARSER.parseText ( p, "fuck" );
        $ ( "#" + this.contentid ).append ( p );
        
        
        var optionaltext = "(We certainly don't have words for every friggin' thing +imaginable+ so the fact we do have some should say something about their relevance concerning our $secret quest$..)";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "WORDS" );
        
        p = "~As you will notice I'm a #teacher / learner# [it's the same energy eventually], (Like both ^the master^ and ^the slave^ playing #the same stupid game#, I prefer other ones..), +I AM+.. a <LEUKOCYTE< as well. In the body of humanity, I like to think of myself that way anyway. ";
        p += "And that should be reason enough!! Isn't +I+ the creator to begin with? I thought so.. I also like to think of myself as a LYRAN RENEGADE but I'll stop now, won't bore you more with all these fantasies I got. #I exist# [=what writes the code, not the code itself] and that should suffice..";
        p += "~_I actually made quite an effort at saying some intelligble stuff on this site. I warn you though.. I like strong language, and also I'm not a native English speaker |[please correct me on my grammar if you can do so politely!]| so basically that means I'll be saying either %FUCKING% or $FREAKING$ as an expletive.. (Well, I know some more, but those are hidden in there, think of them as little presents, from <the >*fucking>* DIVINE<, channeled through me.. a guy just like anyone else while at the same time fairly fucking different in a myriad of ways.. #Isn't existence mysterious#..? )";
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );
        
        $ ( "#" + this.contentid ).append ( "<br/><br/>" );
        
        p = "&Apocalypse&";
        p += "~_Some more things that I need to say? Well, that I like to write as I think, it's more honest right? I'm not going to enhance it a lot [well a few words here and there just for the sake of %entertainment% and readability {although I care less about the latter, make an effort if you like, I'm no fast-food restaurant, it's fucking +sophisticated+ shit, damn right it is..}].";
        p = TEXTPARSER.parseText ( p, "revelation" );
        $ ( "#" + this.contentid ).append ( p );
        var optionaltext = "I utilized a lot of other formats as well during the years, from +immaculate absurdity+ to #strictly logical constructions# (..that eventually more resembled freaking mathematics, but no-one, that isn't forcefully convinced to, will read that of course).. I started anew time after time attempting to collect only ^the really #profound# things^ I assumed I managed to formulate (which [naturally] invariably turned out not to be so eternally profound, all according with the progression of +insight+.) Throwing it all overboard at times, simply jotting down that ^loud, constant stream-of-consciousness^ that keeps asking this body to be it's deliverer, without any discernment, mostly resulting in readers starting to worry about my mental stability. [I am perfectly $normal$ however, considering I found $the norm$ to be freely adjustable according to sources residing equally much within as outside, at the right track of solving that inside/outside polarity.";
        var insertspanid =  this.contentid + "insertion" + String ( this.inserts ++ );
        optionaltext += "><span id=\"" + insertspanid + "\">>></span>>";      
        
        optionaltext += "~_Well then, I've come of age now, my late father once told me no-one writes a good book before his/her 40th birthday, [which I exceeded by about a year now, just to be sure], I always remembered that seemingly arbitrary piece of nonsense [and/or wisdom], perhaps I'll be finding some balance between the extremes now.. So now you know how this is written, #making up my own mind as I go along# {Or as I heard a famous writer once say, (forgot which one though, Coelho perhaps?), I write to find out what I already know}, having been a male human earthling - born about right in the middle of what's called Western 'civilization' [That swell idea according to Gandhi]- for 41 years, and most probably an awful lot of other entities as well [of which I consciously re+member+ very, very little, that has to be said, I suppose.]. ";
        optionaltext += "~_I believe that tragic character $Hemmingway$ [Could've been +Bukowski+ as well..] once said something that seemed just about right: ^'when writing, you gotta sound like yourself'^. Well, of course! [The merits of geniality mostly translate to showing proper #obviousness# [$Ob-Vious$ literally meaning  $'(right) in front of, #the way#'$, with the discovery of the #new way# being by virtue of the 'spirit' (genie) and all the things that now apparently are just ahead as it's immediate merits.. Not profound? Well, fuck it then, you do the work yourself, I'm sure there's bound to be some kind of useful meaning in there..] I write like I speak, longwinded with a lot of sidetracking. Combining profound and moronic things in the same sentence, so only suited for readers who feel some ^motivation to be able to distinguish^ between the two. I am pretty sure that excludes a lot of us. So.. who cares they think I'm illiterate? See, I even spelled that right I think! ";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "Scratching the fabric" );
        
        optionaltext = "(Well, now that I think of it, the antonym of ^'within'^ really IS +'without'+ in a way; the way that sees no difference between the all and the one, let's say by merging solipsism and pantheism.. I'm sure there must be a word for that which I haven't heard yet..]";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + insertspanid, "Polarities exist by virtue of each other", true, true );
        
        
        p = "It's all about telling the TRUTH isn't it? #What else would you ever want to read, see or hear#? Untrue things only cause a lot of time to be wasted; wondering whether <'to be or not to be?'<, well, make up your mind and be, no real choice there actually, only %the privilege to be in a state of confusion%. [Understood that from #'the law of one'#.] If you're afraid of truth you're screwed anyhow, you'll be having to face it at some point eventually. When having ^reflected^ about that a lot you might share my understanding that approximately 86>% of the mainstream-messages out there is completely redundant as far as your +well#being#+ is concerned. To $lift the curtain$ ";
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );
        var optionaltext = "Which is EXACTLY what APOCALYPSE means, 'the lifting of the cover' [ok, almost exactly]. So where did that whole #horror-story# come from? It's about +enlightenment+, about seeing the bullshit for what it is.. Can't wait.";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "APOCALYPSE" );
        
        p = "a little already: <Simon Says<: that what passes as general knowledge is, #ONE BIG FREAKING LIE#, (basically, hah). Entire lives are built on these.. Heck, cities, societies, laws >& sciences, religions, philosophies, language >& symbolism, corrupted by the downright ^inversion of truth^.. (yet billions of us believing lies still don't make them true [elemental logic].. give it up and transcend this folly I say..) ";
        p += "~_Don't be disheartened by that though [or by anything, ever really], the <TRUTH< has some +wonderful+ properties. One of them is it will #always stay true#. [Another one is that it requires 0 effort, as soon as the lying stops the truth is what's left.)";
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );        
        
        optionaltext = "[And the lying DOES require effort, considering it's not a given, active fabrication is needed, to see truth all you need to do is stop that mental jittering, that drunken, stung, sick, scared, crazy monkey as I heard some Buddhist explain our [uncontrolled] brain to be. Imagine all TV's breaking down simultaneously.. no more $OFFICIAL$ news from the papers {official: from opus [work] and facere [doing], so denoting those that are assumed to #do the real work#, meaning: #explaining YOU what YOUR reality is like#}, just humans interacting out of their own motivation and understanding.. Well, I imagine it to be a marvelous sight, with a good portion of the population being really happy and the bulk of it finally facing its surpressed angst-neurosis.. only to find it artifically induced. Now I wouldn't be surprised if some will get hurt, but it will be #nothing# compared by what is gained! {And aren't we in a %constant state of suffering% already? It's just ^bearable^ for the lot of us but how many people do you know that are genuinely +thrilled to be alive+? I know what those people look and act like and it's a rare sight. (Find excuses all you want, lie to yourself and see an utter fool in the mirror..) Most people will agree with that however but state it's pretty bearable after all and can hardly imagine a better situation to be realistic. I'm here to tell you that's because IMAGINATION has been thoroughly beaten out of you since the day you were born. And you sure as fuck haven't been explained how reality follows from the merging of our love >& imagination [heart >& mind]. +IMAGINE+ [Yeah, I think the Beatles made a load of shitty music like any other boyband but #that WORD# more or less got John Lennon killed, he had his clear moments], imagine all people deciding from this day on they'll be doing whatever they love the most exclusively. I'll tell you what, something deep inside of me reMEMBERs this state of being, I instinctly know what it's feels like, that the harmony and peace is the truth, not the eternal struggling for ^'survival'^, ";
        //var insertspanid =  this.contentid + "insertion" + String ( this.inserts ++ );
        //optionaltext += "><span id=\"" + insertspanid + "\">>></span>>";                   
        optionaltext += "surrendering everything you believe in in the process..I'll be expanding on these ideas later, slowly and inefficiently, attempting different angels.. learning and teaching at the same time. Because really, I'm only writing this for myself and how I perceive to be of service to +#OTHERS#+. ";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "Stop feeding the machine" );
        
        //optionaltext = "The word 'survival' being a pretty recent invention with the connotation "
        //TEXTPARSER.addOptionalText ( optionaltext, "#" + insertspanid, "but, what does it mean?" );
        
        p = "So all in all a #temporal state of being# which instigates in me the noble motivation to go swallow some harmful ideas.. like a leukocyte does. ";
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );        
        $ ( "#" + this.contentid ).append ( "<br/><br/>" );
        
        p = "&Smart-Donkey&";
        p += "~_Anything more to illustrate who's talking here? Well, I'm fascinated by a lot of things, the concept of +'intelligence'+ being one of them. During my first life-stages I frequently got labelled as inherently possessing loads of that, it generally felt as an excuse to shut me up actually, you might get the idea, taming the leukocyte or something..  I wondered a long time if that really might be true, because FRANKLY: #I didn't have a clue what I was doing here and found I progressed pathetically slow at finding that out as well..# ";
        p += "Playing [somewhat] by the societal rules that notion seemingly got confirmed, passed all the stupid tests easily, "
        
        p = TEXTPARSER.parseText ( p, "smartass" );
        $ ( "#" + this.contentid ).append ( p );           
        var optionaltext = "Something funny once happened when I was tested at a job-application I thank God didn't get, I was asked to put a whole bunch of labelled cards in correspondingly label(l)ed trays, a daft task of course which I wasn't really enthousiastic about, I noticed however that the cards weren't shuffled and I could just smack them into there in about 6.5 seconds.. I called the test-taker who had barely closed the door behind her and she just ticked the box that said I did it within 5 minutes without raising an eyebrow.. So, why am I telling this? To illustrate the origins of zombie-movies? ";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "In the land of the blind.." );
        
        
        p = "I even got some ^'certificates'^ [some group of people just made those up of course] that 'prove' I can satisfy the #21st-century definition# of a completely extra-ordinary <friggin' #genius#!< (Ain't that swell, if only people would pay me for it, it seems however it's economically more desirable to not be using intelligence at all, now, that seems cynical, #it's true#..) Still: +awesome!+ at first glances only.. because it's only nice for %THE EGO% really, which can be defined as +ETERNAL FRICKIN' SUFFERING+ as far as I am currently concerned (and a whole lot of others who really thought it through), bluntly put of course, it's still more or less true as well. ";
        //p += "Of course it strengtened my belief I was surrounded by idiots at first, well, I still do actually "
        p += "~_I don't believe intelligence is the 'property' of any person anymore, it's an activity stemming from #motivation# [$passion$, +love+], it literally means <'the process of distinguishing'< and thus it should [or can] NOT be judged whether someone's $focus and attention$ which provides the topics for distinguishment, are any more or less important than those of others. Everybody will be needing to utilize intelligence to find out what is true for hem/hir, they could be male or fe>~ I mean. ^Intelligence is the horse/sheep/turle/orca/eagle/chicken/mole on [beneath] the road to truth, which #will# set you free!^";
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );           
        var optionaltext = "[Wasn't it Krishnamurti that said proper intelligence is the ability +to perceive without succumbing to judgement+ [judgement being the point where you finalize your construction with a falsehood, because well, all meaning you give it is subjective, which is the whole point I'd say, you go find your truth, I'll be finding mine and then we'll be discovering there's no difference and merge into one big infinite being that knows everything which will explode again at will.. [Summary of Baghavad Gita there for you, saved about 6000 pages there..]], and that #the real merit of intelligence is ^freedom^#? That last bit seems very attractive to me, it might be said by somebody else though, it doesn't really frickin' matter who said it of course, now I am saying it for instance, but you shouldn't think it isn't true because I'm not famous.. that's why I put all these well-known names on the site, to show that all true things were said all along, by really famous people as well. [Of course you can find all moronic ideas said by really famous people as well.]";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "Everybody knows.." );        
         
        p = "What gives you a bigger IQ-SCORE however is the ability to focus your attention upon ^arbitrary abstract stuff^. Some people like that, they got a high IQ, others don't, if you aren't <passionate< about that at all ";
        p += "or proving yourself in that way, you can forget scoring points there.. Which doesn't matter anyway because it's not very important at all.  ";
        p += "The #concept of intelligence isn't explained properly at all#, I believe 'measuring' somebody's IQ and saying that's what intelligence is, is very detrimental for actually getting to know what holds true for #the human individual#, yet very benificial would you want to stimulate people to feel proud for being able to analyze random $meaningless$ stuff [easily fooling them into thinking truth is whatever rolls out of #the machine#], still pretty cool, yet not all you should use this +'noble art of distinguishment'+ for, not by a long shot.. ";
        p += "~_There's a bit of a %'taboo'%";
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );           
        var optionaltext = "Polynesian: TA [marked] BU [especially], not entirely agreed upon, proto-oceanic: tabu = sacred, forbidden, it's one of the words you can trace directly to +MU+ I'd say: $'prohibited for the commoners, under ritual protection'$, something you don't want everyone to understand, which applies to the existence of MU as well of course, heck, most of the people never heard of that although almost all of the tiny islands that are scattered in the pacific ocean bear the remains of an ancient civilization, there's one where you can alledgedly find a stone gate [without anything else] that is compromised of gigantic stone blocks probably weighing tons each, without any natural rocks present on the island at all. Now.. I suggest YOU make up #your own mind# before trusting those that can't tell the difference between ^an original thought^ and %a mental breakdown%. ";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "The need to know" );
        
        p = "going on here as well, it's something everybody admires but very few people dare to exhibit regularly. Especially not when doing 'their job' or when 'following the rules', it's something you can do as a hobby really, and then preferably be really quiet about, we certainly are not having you on an average tv-show, you'll be getting quizzes instead which tests your knowledge on random, extremely inane facts to provide in something that kinda looks like mental activity. ";
        p += "We don't quickly dare to label ourselves 'intelligent', even though it's widely suggested ^'intelligent' people are better than others^, openly stating such is considered extremly impudent, claiming you're a bit daft will gather a lot more sympathy. Secretely however, most people seem to feel they are more intelligent than the rest, well, perhaps they're right [even if it's impossible, because nothing really is, you gotta screw logic sometimes as well], but #why don't you fucking follow up on that idea for us then#? Please, enlighten us! Say something you figured out yourselves! I can take the false pride, just not any more political correct opinions or 'facts' you just got from TV.. or you read in a book somebody else picked for you to digest.. All these academic theses loaded with references, entire books cowardly trying to justify one measily half-original thought.. ";
        p += "~_Intelligence isn't a property, it's an activity, you don't say I'm swimmer, even though you swim at times. You can be intelligent if you're motivated to choose, what happens then is that you will start to get to know the thing you focussed upon, but it's [what is perceived as] the rest of the universe responding you [in a way it's you retrieving more of yourself], providing the information your consciousness can register, you merely tuned to the right frequency to perceive it. $#Geniality#$ = +#Spirituality#+, there, I said it. [Like any fool could've, it's in the friggin' dictionary.] ";
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );              
        
        $ ( "#" + this.contentid ).append ( "<br/><br/>" );
        
        p = "&The Naked Idiots!&";
        p += "~_I brought up this topic mainly to make you understand where my loud voice found [or rather why it retained] its confidence, as opposed to the majority of people: $#I never assumed I was an idiot#$."
        
        p = TEXTPARSER.parseText ( p, "they who are authorized" );
        $ ( "#" + this.contentid ).append ( p );        
        var optionaltext = "Not saying I never felt very foolish, I just never assumed +#I must BE one then#+. Mostly thanks to my father I knew to call that process $learning$. He was a bit of an ^anarchist^, and a fairly literate one as well, he collected about 12k [as in thousands, not kilograms] books during the 42 years he was alive, (I'm sure he also read a few about parenting, what a lovely guy) he encouraged me to think for myself and #never suggested to me I wasn't good enough in any way#, which I think is a pit most parent fall into, don't judge your children! Don't label them, they are perfect exactly the way they are, they are here to manifest their spirits and rely upon you to show you what the playing-field looks like and for a bit of support, that's it, don't limit them with your deliriums. (I raised my 12 yrs. old daughter with that in mind, she however currently concludes I am not to be taken that seriously so that's also good I suppose, we live and we learn, you just can't repeat stuff mindlessly it seems [even if it was really good], it just doesn't work that way..) ";
        optionaltext += "Considering nothing I say is of anybody's ^business^ anyway, here it goes: I thoroughly love you dad, I know you like me writing that so I did.. {Sofia teach me.}";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "My father Will & my daughter Wisdom" );
        
        p = "If I didn't get it, I figured it was explained badly, or that it probably didn't make sense at all. Now, on closer inspection, #that INVARIABLY turned out to be the case!# (As far as I can recall, pretty sure of it though.. ";
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );
        
        optionaltext = "You can wear a fancy suit saying fancy words but I can smell you ^bluffshitting^.. You know when you're on %LSD% and talking to somebody you can read their energies? You can sometimes almost visually [but with that 3th eye probably, the pineal gland which IS connected to the visual cortex in case you thought it's just +fairytales+, which are probably true by the way as well anyway, heck I can't prove they're false in contrast to [just about] all those %officialy-approved-tales%..] see the distortions when they're lying or purposely evading something.. We #all# can #anyway#, #all the time#, it's just that we're not that consciously aware of it anymore, our sciences reduced us to the 5 senses and discarded morality as a hobby you can practice after you built another $pyramid$ for king $Maslow$, like in thinking plants and trees and even animals are just objects, 'resources' for us to utilize,";
        insertspanid =  this.contentid + "insertion" + String ( this.inserts ++ );
        optionaltext += "><span id=\"" + insertspanid + "\">>></span>>";           
        optionaltext += "#no they fucking aren't#, they are ^sacred living beings like you are^, they sense you, they know you, heck, they know stuff about you, you yourself are unaware of. Have another force-fed, tortured prisoner cow-kid for dinner.. (Karma's a funny thing by the way.. Still solving this mess I found/put myself in..)";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "Pull that intuition into view.." );
        optionaltext = "[you even have something called +'human resource management'+ as a study I heard, #think about that# and then tell me your theory of ^evolution^ again]"
        TEXTPARSER.addOptionalText ( optionaltext, "#" + insertspanid, "wait, what?", true, true );

        p = " ) >Awesome> on the one hand and $fucking horrible$ on that other one, finally realising: +I've been born on a planet where the populace is brainwashed into believing they're at the historical peak of their understanding of existence [ONTOLOGY] when acknowledging #they don't really freaking exist in the first place!#..+ With all the #utterly atrocious# consequences therefrom.. [literally translated a Dutch phrase there so if it sounds goofy you know why, I don't mind goofy however, do you? You know what <Goofy< is <concerned< about right?..] ";
        p += "~_The only logical conclusion I can honestly make [and I did a lot of research >& fieldwork already): We're living in %a complete BLUFF-society%, $the EMPEROR IS UNCLOTHED$ and all those +officially+ labelled 'intelligent' are not daring to state that, because that label is dependant on him being <handsomely dressed< and they secretely are not so sure they really are otherwise.. (and rightly so! It's a continuous job and if you're not getting to know the crucial things you're doing the wrong one.)";
        p += "~_Well, then I'm that kid yelling he's naked! [Along with loads of others of course, but ^dear God^ {not to be misunderstood with the %various demiurges%, let's call it <Brahma< then..}, they are sparse I tell you, I befriended them all by the way, or love them at a distance..]. ";
        p += "~_I'll be explaining things you might already know and/or you might disagree with completely.. Well, stop reading then, or not. #I know I'm as honest as I understand myself to be# As said, I don't care for any approval of anything official, I feel if all these people who prefixed their names did the same they actually might say something interesting a heck of a lot more often. I like to imagine others might collect some debating-$ammunition$ from my ramblings, some great insights?!, enable positive changes, fucking great! If not, I don't care, you were warned, I am not responsable for your perception.. (and $free-will$ is available to you, if you're +willing+ to be ^free^.. )";
        p += "~~+In lak'ech+ ala k'in";
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );
        
        

    };    
    
    
    
    
    this._installQuotes ();
    this._addParagraph ();
    
    
    
    
    
    
    
};