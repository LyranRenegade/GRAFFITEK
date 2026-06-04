/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var BLOG_logic = function ( parentid ) {
    
    this.parentid = parentid;
    this.quotes = [];
    this.inserts = 0;
    
    this.plaintextcolor = GLOBALDATA.CLR_WHITEBLUE;
    this.contentid = "logicsparagraph";
    
    this._installQuotes = function () {
        var quoteEinstein = [ "\"If you can't explain it ^simply^, you don't understand it well enough.\"",
                            "%-- Albert Einstein%"
                        ];
        var quoteVonnegut = [ "\"I was taught that $the human brain$ was the ^crowning glory of evolution^ so far,",
                              "but I think it's a #very poor scheme for survival#.\"" ,
                            "%-- Kurt Vonnegut%"
                        ];
        var quoteTagore = [ "\"A mind all logic is like a knife all blade. It makes the hand bleed that uses it.\"",
                             "%--Rabindranath Tagore"
                        ];
        var quoteEinstein2 = [ "\"Logic will get you from A to B. ^Imagination^ will take you everywhere.\"",
                               "%--Albert Einstein"
                            ];
                        

        this.quotes = [ quoteEinstein, quoteVonnegut, quoteTagore, quoteEinstein2 ];        
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
        
        var p = "*^COMMON SENSE^*~";
        p+= "_Let's talk logic here.. or #common sense# really, if it isn't $absolutely obvious$ it isn't called <logical< right? Point is that it requires a certain %MENTAL EFFORT% to see whether something follows logically from statements or not.. ";
        p+= "I know people generally don't like mental efforts so much, well, their bad, I'm pretty fond of them myself but I can be quite lazy at physical efforts so I suppose it's all a matter of balance.. ";
        p+= "I don't care really if you like to have your brain switched off most of the time and it's probably a good thing too, considering $YOU != YOUR BRAIN$";
        
        p = TEXTPARSER.parseText ( p, "Common Sense" );
        $ ( "#" + this.contentid ).append ( p );

        var optionaltext = "'!' means NOT in logical notation btw. just to be extra-clear on that.. ";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "Skip this one", false, false );

        
        p = "and it's nice to find out what you ARE are [are]. ";

        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );

        var optionaltext = "It's where all your questioning will end at [or start at], what AM I? You are not your NAME now are you? Your role in society? Your role in your family? Do your preferences define you perhaps? Your skills? Your achievements? How you relate to others? All of these things? And what is the aspect they all got in common? Because when saying 'I' you're denoting something singular, something that encloses all these properties of the I.. (I = 1)? But #the only thing we $logically know$ to be singular is existence either in it's entirety or in it's most specific occurence#, the ALL. All is 1 and all the 1's are all. Do you need to define yourself before you exist? Are you fine with others defining you? Look at how society defines us.. #it's a terrible disgrace#.. ";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "Question #1", false, false );

        
        p= "And also (of course) because +#the mind as a problem-solving tool is grossly overrated#+!~~";
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );
        
        p = "&\"The Mind Is a Terrible Thing to Taste\" (Jourgensen 4:0)&~"
        p+= "_For one: it doesn't really 'KNOW' things, it can only analyze (afterwards) whether a certain +idea+ [potential knowledge] is applicable to you. I am talking about ^knowing^ in the gnostic sense [so ok: '$gnosis$'], an 'absolute knowing', or a 'doubtless' one.. <{Beware that CHANGE is a fundamental principle of our universe, so include that in the definition and you're fine.}< I'm quite aware that our nihilistic culture generally spews forth really profound "
        p+= "rationalizations like 'there's no absolute truth' / 'no absolute knowing' and shit like that. #But you're kidding yourself really#, that's not a basis to <exist< upon, that's a basis to shamble along with $the living death$.. ";
        p+= "~_Because, honestly now, how often do you use the word 'know'? A lot, right? And rightly so!! [Well, in principle.] You don't have to perform elaborate mathematical rationalizations to KNOW ^whether you like somebody^ for instance.. ";
        p+= "The real 'knower' there is %your heart% of course, not the brain.. Same applies to day-to-day experience, do you prefer a state-of-being or not? Very easy to tell right? ";
        
        //I know people think 'absolute' means something wacky like 'eternally so in every situation imaginable', but it doesn't, it means '(finally) set free' basically.. [past particle of ab-solvere]
        p = TEXTPARSER.parseText ( p, "Mind over matter" );
        $ ( "#" + this.contentid ).append ( p );
        
        optionaltext = "The brain isn't the most important consituent of our body, or even of our ability to be +intelligent+, it's the heart. The brain can doubt, the heart can't. That said, an honest brain can always verify what the heart knows, exactly that process is what intelligence encompasses: understanding [or better: inspecting, analyzing, #giving MEANING to#] what your heart already knows to be true. ";
        optionaltext += "'Meanings' [signifying an 'intent', a direction stemming from #motivation#] however are more or less the opposite of 'absolute' [Ab-solute (past particle of ab-solvere) basically meaning +set free+], the 'absolute knowing' being $a not yet specified$ [not yet directed/intended/meant] ^force of nature^ if you will, an inherent motive that proceeds/enables existence. [For if you acknowledge #you exist#, ^what exactly is it that is existing, experiencing to be you?^ What energy feeds it, $what motives does existence have?$ To get to know that is GNOSIS, <absolute knowledge<, set free from the source of all that exists, by you, the knower. You should be proud of yourself really! ";
        optionaltext += "The confusion starts when we start 'thinking' about it, which isn't a problem, confusion = $fusing together$ so a lot of potential for exciting things, nothing to get all fussy about.]";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "The centerpoint.", false, false );
        
        
        p= "~_So, 'knowing' is a bit of an ambiguous term in our langugage really, we also use it for things we don't really 'know' in that sense at all.. ";
        p+= "the word got expanded somewhere along the way ";
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );        
        

        
        p= "to include ^abstract^ things that solely live on in the mind [long lost their connection to the heart, from which the original motivation for meaning came], there's a kind of <idle beauty< in those mental schemes, promises of vast #potential#";
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );
        
        //optionaltext = "'potential' only getting it's connation of +possibility+ in the 19th century! It basically means ^powerful^, how can the concept of 'power' transform into 'possibility' I wonder?";
        //TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "Possible realities..", false, false );
        
        p = " intelligence and endless knowledge, but without a living, feeling, #actually existing# conduit they are left |meaningless|. ";
        p += "[$AB$s+TRACT+ denoting: 'pulled away'.. from $a concrete place$ that is..], There is no absolute knowing within those schemes indeed, that I'll give you, these things can be argued about until hell freezes over, #they don't MATTER anyway..# [Literally: there's no 'matter' involved..]. ";
        p+= "It can be fun however, and ^constructive^ as well, sure.. but, to reiterate: these ^constructs^ should always serve your heart's intent, that is $actually #known# #before#$ you start rationalizing.. ";
        p+= "~_..Because, let's be honest again [why not?] rationalizing usually is done with a certain intent (secretely) already present. You want to drink Cola? Well, with a bit of +creativity+ you can find all the arguments why you really should! ";
        p+= "[Athough that's a hard one, I've seen people rationalize far weirder things, of course 'logic' is getting clusterfucked in the process, but nevermind that.]";

        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );
        
        var optionaltext = "Although ^LOVE^ can mean much more [lack of +original+ $conceptions$>*], in this context we can use the word to denote '#things you prefer#' as opposed to $FEAR$ being '#things you don't prefer#'. Usually your brain will be functioning out of either one of these considerations. Those out of love begetting the ^good ideas^, and those out of fear begetting the $#REALLY FUCKING BAD IDEAS#$. ";
        optionaltext += "The reason why we generally formulate really dumb ideas when listening to our fear is because +#it's a misunderstood mechanism#+, (Well, in our culture of course, that assumes everything before us [or other than us really] to be 'primitives' [Heck, we murdered them all didn't we? How can we be more stupid? Right.. please read on..].) #fear isn't real in actuality#, only $possibly so$. "
        optionaltext += "~_Basing your actions on fear will only make them more likely to occur. [A self-fulfilling prophecy also is a prophecy.. (behold the power of thought)] The exact moment the thing you feared for happens to you, you aren't even scared of it(!), because, well, it's already happening [not to say you aren't having a really bad time then but it isn't #because of the fear# for the scenario currently being played out. {Perhaps for following ones.. that's very well possible of course..}]. The fear always is imaginary and occurs prior to a certain event happening [or not].. ";
        optionaltext += "(This would imply +actually+ focussing in the NOW a 100>% you wouldn't experience fear EVER, true or false? Try it out..) Reality follows from our beliefs, if WE ALL believe there will be a war, naturally there will be. [Thanx TV!]. If we all believe we are GODLY BEINGS, we freaking are.. [and we are!] Haven't you noticed the people constantly scared of specific things always experiencing them? ";
        optionaltext += "While the fearless person right next to them is completely unaffected.. ";
        optionaltext += "There are numerous examples of this mechanism to be found everywhere, they didn't make it into mainstream-knowledge yet because ";
        
        var insertspanid =  this.contentid + "insertion" + String ( this.inserts ++ );
        optionaltext += "><span id=\"" + insertspanid + "\">>></span>>";        
        
        optionaltext += "But, now you know. ~_Don't waste time being $mindlessly scared$, look closely at what you're scared off, #this is the right time to use that BRAIN of yours#, inspect it thoroughly, enhance it, blow it up to ridiculous proportions until you see it as just BS, just something you made up and don't really like +believing+ in anymore. Or worse: what others made up and you subsequently +BOUGHT+ [Or stole, don't be a ^belief-thief^!]. ";
        optionaltext += "~_You can walk on a plank on the ground a million times and never fall off, keep all other circumstances the same and suspend it a mile in the air and people will start falling off, #because they believed they would#, not because it technically was any harder to walk the thing. ";
        optionaltext += "So yeah, you can reject this definition of fear being nothing more than #an unpleasant fantasy# and manifest respective fantasies just to prove us wrong, but you're the one suffering from that. And well, we have to listen to your whining all day.. which is no fun I'll tell you that. I'm not claiming I liberated myself from all my fears already, but I think that also has ";
        optionaltext += "to do with my [illfounded perhaps] solidarity with the ^SHEER TERRORIZED STATE OF BEING^ humanity is in: we function out of fear most of the time, especially as a society, way, way too much. And yes, we have all these different words for mental disorders like greed / egoism / racism / narcicism / sadism, etc. but they boil all down to fear, $#to have too little$#, %#to not be happy%#, +#to not be powerful#+, ^#to not be worthy^#, these are the basic fears really.. We're all (safely rounded to 100>%) suffering from those to some extent, and sadly enough most of us chronically; permanently disabling any capacity for +clear+ thought. I'm not kidding, #ditch the fear from your equations if you ever want to find some TRUTH!# ";
        optionaltext += "(And remember: you have to be afraid first to be BRAVE! If you're not feeling a thing it's not bravery but perhaps insensitivity or ignorance or $plain enlightenment$ or whatever.. )";
        var optionalspanid = TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "Love vs fear" );
        TEXTPARSER.addOptionalText ( "%it's a secret.. %", "#" + insertspanid, "???", true, true );
        
        optionaltext = "Gratuitous idea to consider: what you ESSENTIALY ARE = [not your brain, or even your body but] #your LOVE#. You love strength >& beauty? Integrity, kindness, compassion, intelligence? Humor, power, knowledge? Peace? That's what you ARE then. Now you know the reason why you love it, #otherwise you wouldn't#. [There are no others really, it's all you (no, it's me).] You hate all the things you fundamentally are not, that's why you hate them. [Because if you essentially WERE them you wouldn't.. etc. you get the picture.] Time to define +yourself+. [If you won't $society$ surely will define you, they got hundreds of %words% they say are just right for you, but that's a ^terrible lie^ and (I really feel) you (should) know it..]";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + optionalspanid, "I AM..", true, true );
        
        p= "~_Secondly, people are really %REALLY% bad at logic, they don't give a rat's ass about it frankly.. As said, I can't blame them, but then let's #STOP PRETENDING WE DO#! ";
        p+= "All these debates all the freaking time, on TV, in politics, science, philosophy, don't make half the sense we generally seem to assume they do.. "; 
        p+= "And yes, while the 'sciences' generally seem to make a better effort at keeping up the facade of rationality the unavoidable [seemingly, I rather say: #unavoided#] logical fallacies that are prevalent there bear much more weight in maintaining ";
        p+= "our level of, well, how to put it, utter idiocy. "; 
        p+= "~_So, all awake now? Got to get your attention.. ~~";
        
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );
        
        p = "&The scientific method is a method&~";
        p += "_Well, I could leave it at that really. You can compare the words, see? They're the same! Well, I know our 'civilization' ditched the word 'method' behind 'scientific' somewhere along the way but you're not fooling anyone with that! [Well, you are, but I'm here to counteract that.] It's not so hard to understand is it? Let's paint one picture and wrap it up. ";
        p += "~_All $constructs$, %systems%, +concepts+, <words*<,";

        p = TEXTPARSER.parseText ( p, "Duh" );
        $ ( "#" + this.contentid ).append ( p );        
        
        optionaltext = "The word 'word' (itself) is to be specified later, what a crap language we have with all these ambiguities [needless intricacy], it's symptomatic for the state of ignorance we are in, I know ^philosophers and writers^ #create new ones for us#, the $scientists$ #mash them together in new ways#, %politicians% suggest #new meanings for them# and reporters tirelessly #reiterate the really important ones for us# but why doesn't the <TEACHER< #explain them all to us #? (Explanare = flatten, egalize, removing the obstacles that obstruct the view) [BTW: The phrase +'Simon says'+ in other cultures sometimes translates to ^'the teacher says'^, and so it should be done: the TEACHER SAYS <(the words)<. So now you know where I got the title for these collected ramblings, My parents also conveniently called me Simon of course, which I'm satisfied with for the moment..]";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "Ze Word", false, false );
         
        p = "etc. are only possible ^representations^ of reality, $not the thing itself$, right? ";
        p += "Or do you think they are %prescriptions% for how reality ought to behave? Now then, what is the merit of the system, concept, etc. without any human interpretation? [Ok, there isn't any, glad you agreed.] ";
        p += "So, the whole of sciences can be flushed down the drain the very instant people stop interpreting their findings as to what they actually mean with regards to <HUMAN preference<. {Which includes the preference of non-humans ideally, in general.. I suspect most of us would agree on that one too.} "; 
        p += "+I'm suggesting you take an $active$ role in that part because leaving too much power-over-you lying around is bound to attract some of the more abusive entities the cosmos freely provides..+ ";
        p += "I know, people generally don't even really understand they do exist as a conscious, ^autonomous^ being, but let's say we're past that. We do exist and we are intending to make it a pleasant and eventful journey. Great!";
        p += ""
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );        
        
        optionaltext = "I have this friend who's usually freaking hilarious but also at times annoyingly thinks he's the smartest guy on the planet [which I'm quite sure he isn't, if it's somebody I should know I'd suspect it to be me, but I'm severely biased, gotta be honest here.. most probably intelligence isn't a property of a 'person' anyhow"
        var insertspanid =  this.contentid + "insertion" + String ( this.inserts ++ );
        optionaltext += "><span id=\"" + insertspanid + "\">>></span>>";       
        optionaltext += "] make a pretty dumb argument for leaving all societal decisions from now on to computerprograms because humans suck at being logical. Well that would make sense if $logic$ itself +inherently+ meant anything concrete. #Which it doesn't#, [only in a ^metaphysical^ (or 'abstract') sense] it's only a tool as well, ";
        optionaltext += "a means to an end, not an end of itself. Perhaps the computer decided it would be the most logical thing to do for humans to all go extinct asap [yeah, it probably would, never trust AI, seriously!], so better we feed it some +glorious motives+ there as well right?.. ";
        optionaltext += "Think about formulating those.. and then about if these motives eternally will be unchanging, fixed? Or are they evolving as what ought to be $the whole freaking point of us existing$? That plan would probably even be counterproductive because we wouldn't ";
        optionaltext += "be enticed to use our own brain anymore, and logic is really really simple as I'm intending on showing pretty soon now.."
        
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "Fuck us!", false, false );
        optionaltext = "Better definition of intelligence: the acknowledging of +the universal+ through #focus# and attention.. AKA (genuine/divine) ^LOVE^.. (I'll say it differently next time.. BTW: 'person' means 'mask' it's not a real thing, it's an image, an idea, you are infinite, now AIN'T THAT SWELL!!?..)";
        
        TEXTPARSER.addOptionalText ( optionaltext, "#" + insertspanid, "Verbal construct #x", true, true );
        
        
        p = "~_I know we got all this wonderful technology [very quickly!] and got our 'scientific method' to thank for it [which I don't necessarily believe but I will leave that for another time], and we still are in awe of all these things #we don't really understand#. ";
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );        


        optionaltext = "(I said it before but I know the ego can be a ferocious thing so here it goes again:) Don't be arrogant, you don't really know why most of the technology that surrounds you really works, some of our greatest physicists admitted their understanding of our reality more resembling ^religion^ than anything else. You can always ask +'WHY?'+ can't you? It seems the bulk of people who call themselves 'scientific' are perfectly satisfied asking it only once or twice a year or something.. $All ancient folk who believed lightning was caused by a God were deranged right??$ Now, #what causes lightning then#? Got some electric scheme to paint for us? And WHAT THE HECK causes that scheme to occur then? Got an answer for that? {And if you have, I'm not done.. what causes that then? ad fucking INFINITUM.. yeah, you're better of saying it's GOD, or whatever you want to call it, or just say 'I don't freaking know..' ['But it can't be God, because Zarathustra said he's dead..', (now that would be a pretty pathetic argumentation of course..)].} ";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "No you don't", false, false );
        
        p = "It's because 'physical technology' only follows +insights in the fundamental nature of the cosmos+. The collective #imagination# of possibilities will actually manifest them in reality. ";

        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );         
        optionaltext = "One of my favourite movie-scenes ever is when in +'La Guerre du Fue'+ [a movie about an alledged prehistory of our species, probably not entirely realistic (mildly put), with neanderthals grunting and overall being really primitive] our protagonist-caveman is finally, after having endured many trials, shown $how to create fire$ by another, more advanced tribe.. For about a full 5 minutes we'll see him unsure whether to cry or laugh, his mind being blown apart.. He seems changed for good, a few scenes later he'll be looking at the moon, as if it was the first time, probably thinking, 'now what the heck is that thing actually?' Now, this example to illustrate how we first need to consider something a possibility before we can manifest it. How the mind first needs to be blown open before we can create new technical 'logicies' [ok, technologies, '+concepts of craft+']. ";
        optionaltext+= "We are wrongly taught we live in a merely physical universe, it is ours to explore it's boundaries.. While perhaps true concerning the exploration-part: ^A) it has never been proven to have any boundaries^, all the boundaries we assume in our sciences are only alledgedly such, like axioms, which definition = 'unproven assumption' [and which etymology brings us to claims of %authority%]. (And haven't we time after time found that alledged boundaries turned out to be illusionary? Now why presume any in the first place? #It's not a logical thing to do at all then.#) and +B) this idea leaves consciousness out of the equation+, which is a pretty big fucking thing to leave out of any theory of reality, it's only #always everywhere#.. maybe that's why it's easily forgotten.. Like the 2 young fish swimming in the sea, meeting the elder fish who greets them with 'How's the water boys?'. After the fish parted one of the young ones asks the other $'Do you know what he was talking about? What the fuck is WATER?!'$ ";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "La guerre du fue", false, false );

        
        p = "So a purely $mental state of being$ begets the physical, as you by now will understand I KNOW to be the case."
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );         
        optionaltext = "Found that out the same way as I presume ^Descartes^ did, or anybody who actually did an effort at #undistorted contemplation#, you'll find a lot of them when going East.. (as they call it, you can go West as well considering the world is a globe, it does however appear flat most of the time, especially where I live, so I can't be too sure there... But don't worry, there's no danger in +critical thinking+ itself, those that tell you otherwise you should take out quickly(!), get close to them, bend your knees slightly and retract your stronger arm, then lunge your complete body upwards with force while simultaneously extending your arm landing your fist firmly on their chin.. score a point for the free-thinkers for us.. )";
        optionalspanid = TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "It's called 'meditation'", false, false );
        
        optionaltext = "Free meditation space:~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ...";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + optionalspanid, "Oauhmmm", true, true );
        
        p = "[Which most of us don't, I also know that, I do mingle with the people every now and then..]. ";
        p += "~_What do you do with a #LAW# in physics that states the amount of energy within %a closed system% will eternally stay the same #while there aren't actually any of these systems to be known in existence#?";
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );         
        
        optionaltext = "So it's a law we assume to be true yet can't possibly verify.. Wouldn't that hamper the law-abiding-students' ability to think freely? Mental obstructions like these are not exceptions but commonplace actually [I'll reiterate one more time: it's because #we confuse the $method$ with the ^meaning^..# (the 'intelligence' {logos} with the 'knowledge' {gnosis}], I'm not even talking about the really daft 'sciences' like psychology and economics, even the more sane-looking endeavours undertaken by physicists [and even mathematicians although people generally seem to assume it's a clean sport, it isn't, there's a whole lot to be said about that concerning $paradoxes$ but simply put, all the sciences are built upon things called ^'axioms'^, meaning #stuff we assume to be true yet cannot prove#.] are riddled with logical inconsistencies. The speed of light doesn't appear to be a universal constant for instance, you probably haven't heard that one before, yet it's true, go find out yourself if you don't believe me. [As said, it's only logical all boundaries will turn out to be illusions related to a limited perception, because so far that always turned out to be the case.] My point is: the fact you got a machine set up that's more or less predictable doesn't mean you should stop using your intelligence, perhaps if we were living in a +paradise+ you could make an argument for that, but we sure as fuck don't, and I think that's precisely because of that: of us not really understanding who we are, what we want and what this universe is about. Enough work to do and it should be FUN! {Else, I'm out..}";
        optionalspanid = TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "Third time's the charm", false, false );

        
        optionaltext = "This type of simplification is actually more or less the standard in +science+ [which etymology traces all the way back to the distinguishment between +true+ and ^false^ $[scientia >< sciens >< scire >< scindere]$ (so that doesn't mean #conjuring up quick >& dirty solutions to mundane problems#), like the adagium 'the goal justifies the means'. If your goal is to get a one-way-ride from A to B, fine, if it is to play ^scientist^ it's not. A math-teacher once showed the class an algoritm in which he used two different values for the same variable, it was the first time I attended that class and was the ONLY one objecting to that travesty of logic. (So yeah, I'm a leukocyte, if it wasn't for me they all would've mindlessly accepted that bogus-formula, just so you know I'm not making it all up.) The teacher of course wouldn't admit it at first, he learned it the same way, but after both some other guy and I independently did some private research the following week we could prove him wrong. I mean, you gotta practise what you preach right? You think of some rules to construct things with then you at least should honour those rules you friggin' voluntarily accepted.";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + optionalspanid, "Quick and Dirty", true, true );
        
        p = "As far as we can tell ^every freaking atom in the universe is moving^, +for free(!)+.. yet, we understand energy to be a rare resource. I was taught <Nikolai Tesla< was a bit of a weirdo but when doing some autonomous inspection it turned out, well, that he was, #of the triple-A-genius-type that is#, and also that his efforts are mostly locked away in safes and would probably for long have revolutionized our energy-generation wouldn't that be the case..";
        p += "I know the scientists supposedly all are very smart [smartness is a temporal state of being resulting from activity, not a static property so don't get too comfortable..] for having learned complicated formulas and memorized all these concepts, but they're still <concepts<, $meaning ideas that might (or might not) represent (a certain) reality to a certain degree$. If we fail at basic stuff like solving this eternal scarcity we're supposed to believe we're stuck with, you should start asking some questions. ";
        p += "Do we need another pill for a made-up disease? [Or +manmade+ actually in a lab somewhere and accidentaly spread amongst the population, conspiracy? nonono, by accident! (Numerous times..)] Another gadget to facilitate rudimentary conversations with the person that's sitting next to you? Some %smarter%-bombs? More crops with less nutritients? Another theory about the 'economy' that entails the |filthy few| getting richer again? ";

        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );        
        optionaltext = "Yeah, the LARGE HADRON COLLIDER.. what a glorious apparatus, with their dancing Shiva in the middle of it..  #Anybody able to say something intelligible about what they're doing there?# Let's hear it! Looking for particles that will validate the existing theories without ever wanting to touch the subject of consciousness.. not that I'm believing that's the real intention, I'm a bit suspicious if unlimited funding suddenly appears. There's a clip on youtube [if it isn't removed yet] of something that's been labelled a joke concerning that. It's not funny at all though.. Feel free to see what you make of it.. ";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "LHC", false, false );
        
        
        p = "#I say we don't#, what we need is to ^#reevaluate some dogmas and axioms, presumed 'laws'#^ that we enforce on the obedient students and when we're doing exactly that, you will find that also in the sciences a lot of logical fallacies are very commonplace. ";
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );        
        
        /*
        optionaltext = "For fuck's sake, I spoke to a lot of retards, but the most retarded 'conversations' I had were with people who are convinced they are smart. The kind that didn't really figured that out themselves but were taught that to be the case enabling them to persevere that mindnumbing process called 'higher education'. They can't possibly be wrong.. There's no way on earth! Even if it means throwing all decorum overboard, butchering every last bit of mental sanity.. It's a ferocious horde, but harmless really, just f>*ing annoying in their weakness.. And I'm saying that out of EMPATHY really! It always stirs up some bad memories, sitting there listening to some monotonous zombie-professor, while time apparantly fell in a coma out of an immaculate boredom and wasn't able to move forward properly, stating all kinds of meaningless things we're supposed to memorize and reproduce.. For a good grade! Yeah... no. Go fuck yourself, I'm done with that nightmare..";
        optionalspanid = TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "You mad bro? Explicitism", false, false );
        optionaltext = "The most annoying thing really is that the 'educated' with all their formulas and magic babble enchant people to believe them unconditionally, heck, they believe it themselves most of the time [well, you do have medicine to solve that, the good medicine that is, the one you're made to be afraid of, so that's a hint, go find it!].";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + optionalspanid, "Repetition is boring, but for the greater good, once or perhaps on rare occasions twice should be allowed.. [Or a freaking million times if I feel like it, it's my site! Don't click on the thingies then.. or go do something else, I don't care, you probably should, shouldn't you? Do something useful, you lazy bum!]", true, true );
        */
       
        $ ( "#" + this.contentid ).append ( "<br/><br/>" );   
        
        p = "&Start at A&~";
        p+= "_The gnostics use the word ^logos^ to denote #true intelligence#, $the real stuff$, <straight from the source of creation.< ";
        p+= "LOGOS (+>&Lambda;>&gamma;>&omicron;>&sigmaf;+) basically means 'word', like.. 'in the beginning was the Word' [John 1:1] A bit later in that sentence it turns out that actually ^WORD = GOD^.. .  .   .    ";
        p+= "I'm going to be honest with you, I haven't got a clue how that exactly came to be [Kether, Binah, Chokmah?].. ~_I am suspecting however that what it means is that <The Word<, +Logos / Logic+ ";
        p+= "in it's $pure sense$ is some kind of #building-block of our universe#.. Like [clean] mathematics [referring to the logic of it really, for mathematics as we understand it being an invention and not a discovery, not going to expatiate about that now, also because it's not such a clear-cut case in my view and pretty interesting to take a look at.. later..], like those ever-occuring patterns found in nature and described in <[sacred] geometry< and the primal visual language as denoted by %SYMBOLISM% [which is another fascinating topic I'll will surely be addressing another time]. ";
        p+= "~_The beauty of +TRUTH+, is that when ^truly #seen#^, it cannot be doubted, everybody knows it's fundamentally true.. [If not, then it probably isn't true.] #All truths are true#, that's TRUE and you know it.. See the beauty of logic already? No? How about this one then: #if logic exists we should also#. Considering it's us that call things to be 'logical' or not. Claiming consciousness is just a weird, arbitrary side-effect of materialism is then just as much #logical# as IT for instance is cheesecake, or purple pills, or Roy Sullivan, KMFDM, braflax, 42, amnesia, Foetus, dragged, 27b/6, Antietam, nephilim, sextant, SISU, SDFHekflmkvmvwe.xcsunwec, to name a few alternatives. "; 
        
        p = TEXTPARSER.parseText ( p, "Aleph" );
        $ ( "#" + this.contentid ).append ( p );           
        
        optionaltext = "Don't you also feel a %taboo% associated with the word ^'truth'^ in our society? How often do you hear our leading members -politicians, journalists, scientists, teachers- say: \"#Well, the TRUTH is..#\", or even: \"#HONESTLY, I'd say..#\" etc. ? Never, right? It's as if truth, honesty, integrity isn't a real thing in 'official' mainstream-understanding.. not really existing. Well, +TRUTH is the only thing that exists #by friggin' definition#+, so we'll see who laughs last.. (I'm already starting, haha..)";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "Truth! Tell me the TRUTH mofo!", false, false );
        
        p= "~_The constructs that emerge from utilizing these $fundamental$ instruments stay closer to the core of 'knowledge'. <2 >+ 2 = 4<. The numbers can represent anything and yet the statement itself will always be true, this truth however being ^lesser and lesser applicable^ to universal expressions and at the same time +more and more informative+ [as in 'forming' new things] the complexer [= more entangled] your constructions get. ";
        p += "[E.g. when you started with 2 apples and 2 sheep, you are left with a group of 4 thingies that's less easy definable [and at the same #more to be said about#] than before you started adding them up (go the other way and see that both sheep already could be very different from each other to begin with, not to mention the apples.)], this way we're learning that all concepts are just representations of #alledged# pieces of the ALL. [Doesn't all pieces seem to belong to a whole? We never found anything that existed completely unrelated to, well, most probably EVERYTHING else.] ";
        p+= "And it's up to US to interpret those, that's our divine, sacred, god-given, holy, whatever.. superior mission, or +privilege+ rather. ";
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );  
        
        optionaltext = "Although I'm going to make an argument for 'complexity' in a minute, the sword cuts on both sides as always, as %Hermetism% states $'as above, so below'$, both pathways lead to the same undertandings eventually. So when going the other way in our mathematics.. #What does 0 mean#? Can you think of anything of which there are precisely ^0^ in existence? #Isn't the thinking of such a thing already creating the (possibility of that) thing?# So, what does that mean with regards to 0? It's everything YOU don't know exists/haven't acknowledged/created yet, a temporal state of being. The dot of nothingness the universe was before the BIG-BANG! [The symbol being a perfect circle isn't just random convenience of course, there have been entire books written about that..] (Just guessing here of course, don't take my word for it.. Never actually, you all should be really capable of making up your own mind regardless of what I or anyone else rambles about.) $Next cipher$ [it's code really!]: $1$. ";
        optionaltext += "What would you count as exactly 1?.. #Everything!# The whole, and the individual, it's 1 +both in it's most general and in it's most specific meaning+! [Like boundaries of %perception itself%, all will eventually boil down to 1, whichever way you go. But that's because you exist! If you wouldn't it would add up to 0, see: mathematical proof you exist!] I'm talking about how the mere existence of numbers already give birth to (an almost inherent) meaning the second you start inspecting them. [>& how meaning grows the further you inspect it, and how it stays devoid of meaning if you don't.] Now, we'll be getting to 2.. when is it a good time to count to ^2^? When perceiving ^opposition^ perhaps, when we are looking at something that isn't ALL and also too differentiated to be denoted by one. [And nothing more is around.] A perfect number for $polarity$, #dualism#.. [This brings you to Yin/Yang type of ideas, how polarities are their equal and #only existing by virtue of each other#.";
        var insertspanid =  this.contentid + "insertion" + String ( this.inserts ++ );
        optionaltext += "><span id=\"" + insertspanid + "\">>></span>>";             
        optionaltext += "You can go on a long time, well infinitely actually [the fun starts to end soon though, that has to be said..]. 3.. +dynamic+ balance?.. 4.. $static$ balance?.. etc. Numerology [Gematria for insiders] isn't that wacky at all by the way, the occult societies that almost completely robbed the people of their resources, free-will and consciousness certainly don't think so at least. Those rats I'm not going to waste much words about though, we are the free people of earth, they will be ejected like vomit from a child that recklessly ate something it found squirming in the gutter..";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "Less is more", false, false );
        optionaltext = "There's some simple wisdom there I feel mainstream-brainwashing purposely is obscuring, in which people are screaming ^'LEFT'^ or $'NO, RIGHT!'$. Speaking politics now. It's retarded really, those words denote DIRECTIONS for snotsake!, only existing because of each other, RIGHT only exists because of LEFT being an item, and vice fucking versa. It's a simple division-tactic, with both words being completely meaningless as far as ideology is concerned. At least the words democrats and republicans bear some meaning, although no-one knows what exactly anymore and it's a big freaking lie anyway. It's not about going left or right, or up or down, or inside or outside, being an extravagant or an introvert, male or female, liking the Beatles or The Rolling Stones (now, that's a joke of course), this-ism or that-ism, red or blue / black or white, Yin OR Yang, it's a matter of finding new grounds that the perceived differences have in common, effectively disarming them as sources for strife.. [The Yin both encloses and balances the Yang, and vice versa.]";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + insertspanid, "Illusion of polarity", true, true );
        
        
        p = "~~&Make com-plex = Weave together&";
        p+= "~_You can build really beautiful, elaborate constructs using these building blocks, perhaps the real [core] merit of these lies only therein: of them encompassing more and more <parameters<, incorporating more of the universe, enabling +larger, more elaborate expressions of it+ to be 'understood' [in the metaphysical sense]. Disolving more and more contradictions by discovering they were based on faulty assumptions of inequality, that way enabling a kind of +algebraic+ simplification again. [Like breathing in and out enabling growth, that's a nice metaphor hopefully not entirely wasted..] We can design a scheme that allows people to transport themselves from A to B, and another one that prevents the atmosphere from being poisoned, now.. this might seem a bit simple but let's say ";
        p+= "both schemes contradict each other, wouldn't 'intelligence' mean in this situation that a new scheme is designed that fulfills both goals? $Instead of let's say trying to murder everybody that cares more about the goal you care less about?..$ More goals and subgoals will emerge during our intelligent scheme-building all along with how we discover ourselves to be, how we disover reality to be preferable to us. And we're having #freaking infinite intelligence# to tap into, all available to us at the right time, at the right circumstance. But only #simultaneously# with inner inspection as to what we actually want to experience, so when we finally stopped being %scared-out-of-our-minds..% and understood we are the ones creating..";
        
        
        p+= "~_Now then, if you look at a lot of ^basic day-to-day knowledge^ with $common intelligence$ being the vessel to deliver it, it generally could be represented by really primitive logical constructions. Let's say: +A (might) imply B, we assume A to be the case so I'm all for B being a real thing to focus upon+. Although fundamentally viable [including the uncertainty] it's only the simplest of constructs imagineable based on the core building-blocks logic provides us with. Yet ";
        p+= "if you pay attention you will see simple half-truths like these encompass almost everything that passes as common intelligence.. [They are now closing the philosophy-schools as well because of 'economical' considerations.] Seldomly you will witness a more elaborate construct being applied succesfully, like the merging of various points of views into a completer set of logical operations. Is it because we ARE stupid or is it because we just choose to be? (Well, we certainly aren't taught to think properly..) ";

        p = TEXTPARSER.parseText ( p, "Weaving" );
        $ ( "#" + this.contentid ).append ( p );            
        
        optionaltext = "There's an argument in philosophy for #eliminating# [yeah, it's mean, they called it eliminativism, so not the most 'creative' bunch I'd say] what is known as +folk-psychology+, the simple pieces of wisdom carried on through our culture that your grandmother will state tirelessly.. [and isn't state-approved really] It compromises sayings and ^myths^ [from #mouth#, so oral delivery really] to more simple stuff like 'after the rain, sunshine will come'. The reasons for this effort at annihilation is folk-wisdom not being $scientifically$ viable at times [which utilizes one incomplete system of knowledge to discredit the other, so a logical fallacy which could be called 'Argument from ignorance'] and oftentimes seemingly contradictory like 'opposites attract' and 'birds of a feather, stick together', which isn't a real contradiction but only suggests multiple constituents #could be applied in a seemingly# contradictionary way. So, again a logical fallacy, a bunch of them really, not going to look up all the terms for them now. Folk-psychology does not deal with absolute truths, the 'folk' are needed to apply the 'psychology' according to their own 'intelligence', which is logical as fuck of course. I know the scientific-cult considers their religion to be absolute truth of itself so no matter how it's applied it's always right, but by now you should know that's a load of crap. It's a big circular argument, surrounded by axioms, laws and things feverishly ignored, boasting about it's explanatory merits concerning the mechanical, and utterly failing at producing anything that will help us +spiritually+.. [First time I wrote that word, there's a taboo on that word as well, makes you sound like a bit of an idiot in some ^circles^, yeah, those ^vicious^ ones]. That said, I'm not a big fan of assigning too much weight to severe simplifications in general, but folk-wisdom also provides a bunch of really good ones, like 'fear is a bad advisor' and %'Fuck me, I'm sick!'%.. ";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "Folk psychology", false, false );
        
        
        p = "~_Ok, so I'm going back and forth here, saying logic is an awesome tool, and it can really help us get ahead at this time of day, saying it has much more potential than currently is witnessed in the endless stream of opinions you'll be hearing on an average day, still warning that the logic itself is a tool, making the hand bleeds that uses it, and being nothing much without #imagination# [for which your consciousness is the interface.], ";
        p+= "that said, I say: let's say we're saying said saying to be said, not unsaid or sad. Just making up my mind here.. can I finally start showing how our general troubleshooting, our average intelligence, the accepted level of reasoning isn't really supportive in making plausible we actually evolve into smarter beings? Yes! Let's go..";
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );            
        
        p = "~~&When actually wanting to get to B..&";
        p+= "~_Probably heard the most is the so-called: ";
        p+= "+#Red Herring#+: ";
        p+= "The term comes from the really pungent smell the salted-red herring alledgedly spreads, gathering an awful lot of attention. Well that's a good name for what it signifies: people not wanting to follow up on a argument will throw something else into the discussion, perhaps seemingly related, don't let that fool you (the smellier the harder it is to think clearly), if it isn't <an answer to the question< #the question will stand unanswered#. You can go sit at a political debate and yell BINGO for every 50 red herrings thrown about.. take something to drink with you.. ";
        
        p = TEXTPARSER.parseText ( p, "A2B2" );
        $ ( "#" + this.contentid ).append ( p );   
        optionaltext = "'Politics' which etymology leads us all the way back to the era where central governments where installed in $cities$ [Polis], denoting +its citizens' rule+. I like the alternative reading better [POLI = many, and tics being short for TICKS]. Its most succesful members in its current sad state of affairs will generally be too cunning to blatantly express anything that can easily be proven false. The solution is simply: they just won't express anything of any meaning while keeping up the appearance that they do. Saying nothing with a lot of words, or boring the plebs to oblivion as I like to call it... ";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "Muchas garrapatas", false, false );        
        
        p = "[Reporters instructed to attack somebody will also get you a sore throat pretty quickly.]";
        p+= "~Mainstream-news consists generally of a bunch of stinking herrings to get distracted with while your country somehow decided it was best to obliterate another one or pass another 'law' that makes you need to ask permission to grow a garden or teach your children or wipe your ass or something.. ";
        p+= "~_+#Ad Hominem#+ (attack): ";
        p+= "Another very frequent one, which takes advantage of the fact that we are ^holistic^ beings, in that we will judge the entire picture and not it's constituents. That's why good actors like Bush and Obama [and all the rest of those jokers] will get away with murder [haha, literally!], they're quite charming right? Like hell they are! ";
        p+= "So, it literally means ^'at the (wo)man'^, directing an argument against perceived flaws of the person stating something, rather than at the statement itself. You won't be hearing this one in politics so much because they have to pretend to be civilized, yet on TV you will hear, and especially <see< not much else (it's very easily done as well when you can just cut and paste all the fragments together whichever way you like of course.) Heard/seen anything about Gadaffi? I'm sure you did! I seldomly met anyone who didn't have an opinion about him [or anybody else of name they only saw on tv for that matter]. Not anything bearing much content of course.. There are people calling themselves journalists looking for the least attractive photos of people that should lose some popularity to put in the paper, (and they went to school for 20 years to do that..)";
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );      
        optionaltext = "Russell Brand is one of those heroically speaking the truth, he's got the vocubalary, the social intelligence AND the good looks, when he appears in mainstream-news they frantically will have searched for a picture where he looks the worst, which is funny because even then he still will be looking pretty good albeit a bit weird [but hey]. (For me it's quite the opposite sadly, in 1 out of 10 photo's I'll be looking really handsome, in 3 of them like a complete baffoon, I do seem to get photographed the most often when tripping my balls off so that's an excuse as good as any I suppose.)";
        TEXTPARSER.addOptionalText ( optionaltext, "#" + this.contentid, "Trews", false, false );        
        
        
        p= "~_+#Appeal to probability#+: ";
        p+= "Everybody knows it's not logical to claim with #certainty# that something is going to happen even if it might appear probable. Yet, the argument still bears some weight if you can convince the public of the level of probability being high. Because said public is well trained into suspending their own empiricism it's quite a succesful fallacy to play with. It's what half of our 'sciences' is based on really.. (being positive here) $'Well, we've blocked some neurotransmitters and on average the test-group responded less negative to questions regarding their happiness.'$ Great, so we found out how to become happy then? Sadly you will see a lot of people falling for this lunacy, my guess is that #the more neurotransmitters blocked the easier that will get as well..# ";
        p+= "~_Well, perhaps they didn't respond at all really because they were in a coma, so claiming the drug having a desirable effect based on that result is called: ";
        p+= "~_+#Assuming brainfreeze#+, or I wouldn't know really how to call it, utter retardedness? Well, it's all not witchcraft really and I find it less interesting than I thought I would when deciding to write about logical fallacies, it's a bunch of names for really simple mistakes people only make when not paying attention, not using their brain and/or not interested in the truth. ";
        p+= "It's nice however to plainly be able to show/name them anyway, not that it will help much, people uninterested in truth you better avoid alltogether, let them deal with their own obsession, that's why you really need to start to reclaim your autonomy, there are a lot of people who are delusional, and they compromise the same lot that want to make others think the same. That's related to the: "
        p+= "~_+#Argumentum ad Populum#+, ^(just about) everybody thinks so, so it's right, right?^ Nope.. but you're not alone in your fake world, so that might be comforting to you.. It's actually heard an awful lot, I suppose it's because a lot of us don't view themselves as ^respons^+able+ for their own opinions, if your family, govenment, %BOSS%, teacher, friend, herd generally believes a certain thing you can safely call that true without attracting attention. Yes, no strength there, find it somewhere else, it's bound to be somewhere.. ";
        p+= "~_To wrap this up, a more tricky one are those related to the +#complex question#+, a question that already has a supposition hidden in it, like 'have you stopped being an idiot yet?', well, it presumes you were an idiot before, or as lawyers will do 'where did you hide the loot?', when it's not yet proven you actually were an idiot once, or stole the loot in the first place. +#Begging the question#+, a kind of +#circular argument#+, where you just conjure up a whole story that proves itself. Don't feel motivated to explain anymore, I think I made my point, when listening closely to a lot of argumentation is seldomly really logical. People will throw red-herrings about, burn fake straw-mans to the ground, attack the person instead of the argument";
        p+= ", make fantasies appear real, mistake general concencus for actual proof or just flat-out lie straigth to your face. Now, Aristotle vailantly tried to sabotage all lies but his efforts have stranded, it hasn't become a cornerstone of argumentation, so you'll need to be using your own brain every once in a while. ";
        p+= "~_To wrap this up, what's logic worth when you can dance? NOTHING! But, dear people, we are lied to constantly, don't believe anything else but your heart, then aply simple logic and see that is was right all along. Fear clouds the mind, and bluff is based on fear: you not being smart. But you are if you want to. Let's brainwash 'mental' and 'effort' together. ";
        
        
        //argumentum ad populum / bandwagon approach
        
        
        
        p = TEXTPARSER.parseText ( p );
        $ ( "#" + this.contentid ).append ( p );              
   
    };    
    
    
    
    
    this._installQuotes ();
    this._addParagraph ();
    
    
    
    
    
    
    
};