

var Mfft = function () {
    
    
    this.words = [
        "to", "I", "you", "we", "they", "us", "your", "our", "soul", "spirit", "sex", "life", "death",
        "communication", "talk", "converse", "speak", "telepathic", "telempathic", "abnormal", "normal",
        "travel", "voyage", "go", "tell", "say", "said", "told", "think", "feel", "emotion", "fear",
        "knowledge", "gnosis", "logos", "logic", "temperament", "instinct", "intuition", "axiom",
        "elohim", "shalayim", "malat", "science", "tech", "technology", "break", "go", "leave", "transcend",
        "conscious", "consciousness", "aware", "awareness", "being", "entity", "live", "liveform", "form",
        "body", "physics", "physicality", "at", "to", "in", "on", "over", "beneath", "under", "from", "acknowledge",
        "sentient", "feel", "feeling", "heart", "mind", "cosmos", "universe", "traverse", "have", "will", "want",
        "pain", "suffering", "forgiveness", "forgive", "love", "sorry", "excuse", "me", "thank", "thanks", "grateful",
        "grace", "divine", "angel", "God", "gods", "Gaia", "Sofia", "wisdom", "belief", "know", "when", "then",
        "this", "that", "than", "those", "who", "whose", "what", "how", "why", "ask", "question", "evil", "good",
        "light", "darkness", "eternal", "infinity", "change", "flux", "definition", "definite", "allow",
        "allowance", "potential", "power", "true", "self", "selves", "one", "others", "no", "yes", "nature",
        "tree", "animal", "plant", "flora", "fauna", "star", "system", "hard", "soft", "amazing", "amaze",
        "wonder", "ponder", "wondering", "none", "all", "is", "were", "was", "will", "be", "true", "false",
        "truth", "hidden", "kaballah", "geometry", "pattern", "sacred", "consecrate", "like", "illusion",
        "maya", "off", "too", "two", "zero", "blank", "many", "alien", "earth", "terra", "terrestrial",
        "the", "the", "the", "the", "the", "the", "the", "the", "the", "the", "the", "the", "the", "the", 
        "be", "be", "be", "be", "be", "be", "be", "be", "be", "be", "be", "be", "be", "and", "and", "and",
        "a", "a", "a", "a", "with", "she", "he", "as", "their", "can", "get", "if", "would", "about", "people",
        "human", "humans", "just", "see", "vision", "clear", "crystal", "him", "could", "now", "soon", "future",
        "past", "its", "because", "day", "night", "use", "man", "woman", "men", "women", "find", "give", "gift",
        "praise", "honor", "well", "good", "excellent", "positive", "negative", "only", "very", "work", "down",
        "may", "after", "call", "world", "planet", "still", "last", "need", "leave", "family", "put", "old",
        "ancient", "young", "children", "child", "pure", "innocent", "innocence", "perfect", "splendid", "fantasy",
        "fantastic", "magic", "magically", "wonderful", "awesome", "aweful", "group", "start", "end", "begin",
        "final", "apocalypse", "enlighten", "help", "assist", "keep", "adept", "learn", "teach", "student",
        "teacher", "talk", "problem", "against", "such", "few", "case", "most", "cycle", "date", "lunar", "solar",
        "construct", "concept", "fraud", "corrupt", "corrupted", "cleanse", "clearing", "purification", "purify",
        "emerge", "new", "fresh", "born", "reborn", "phoenix", "each", "every", "everyone", "small", "big", "large",
        "total", "move", "point", "believe", "next", "without", "within", "young", "fact", "story", "tale", "lot",
        "right", "study", "book", "eye", "job", "word", "words", "sentence", "stories", "side", "kind", "friend",
        "friendly", "companion", "helping", "service", "often", "yet", "until", "game", "test", "line", "among",
        "meet", "community", "social", "set", "happy", "relief", "relieved", "laughter", "laugh", "laughing", "humor",
        "hilarious", "fun", "funny", "sexual", "sexuality", "spirituality", "immortal", "dead", "great", "Ra",
        "law", "law of one", "message", "messenger", "heaven", "heavens", "rain", "winter", "summer", "autumn", "spring",
        "godly", "heavenly", "bless", "blessing", "blessings", "graceful", "grateful", "peace", "peaceful", "integrity",
        "intelligence", "intellect", "smart", "pretty", "handsome", "beautiful", "cute", "appealing", "charm", "charmed",
        "charming", "dazzling", "delicate", "delight", "elegant", "exquisite", "fascinate", "please", "pleasing", "angelic",
        "splendid", "lovely", "gorgeous", "fine", "marvelous", "sublime", "ravishing", "foxy", "ideal", "admire", "admirable",
        "magnificient", "brilliant", "grand", "gradiose", "impose", "imposing", "impress", "impressive", "lavish", "super",
        "string", "event", "superb", "outstanding", "noble", "radiant", "radiation", "radiating", "aura", "majestic", "royal",
        "royalty", "magnanimous", "transcendent", "fair", "honest", "integrity", "honesty", "truthful", "unreal", "real",
        "value", "valuable", "keen", "solid", "rare", "wicked", "worthy", "reliable", "satisfying", "satisfy", "satisfied",
        "rely", "relied", "model", "laudable", "decent", "choice", "free", "freedom", "option", "options", "exemplary",
        "example", "precious", "righteous", "priceless", "price", "helpful", "treasure", "treasured", "relevant", "important",
        "useful", "dear", "hot", "precious", "seviceable", "beneficial", "profitable", "trauma", "hurt", "heal", "healing",
        "Skippy", "LSD", "DMT", "marihuana", "hallucinogenic", "hallucination", "hallucinate", "opium", "mushroom",
        "mushrooms", "mescal", "peyote", "san pedro", "saint", "holy", "bonzai", "banzai", "breast",
        "ass", "breasts", "foetus", "fetish", "passion", "obsession", "obsess", "crucial", "essential", "erotic",
        "erotica", "exotic", "orgasm", "cooperative", "convenient", "constructive", "construc", "construction", "taste",
        "tasteful", "smile", "smiley", "joy", "joyful", "lively", "glad", "elated", "ecstatic", "cheerful", "erection",
        "content", "upbeat", "blest", "blissful", "gay", "tantra", "pleasant", "elated", "wasted", "stoned", "high",
        "huge", "immense", "long", "soaring", "tremendous", "colossal", "gigantic", "giant", "hover", "lift", "sky",
        "nephilim", "lyran", "arcturan", "arcturus", "lyra", "essassani", "pleiadan", "pleiades", "grey", "tall", "white",
        "orion", "anunnaki", "zeta reticuli", "alpha centauri", "leo", "draco", "Giza", "Angkor", "coincidence",
        "Navajos", "Aboriginals", "Maya", "Inca", "Hopi", "Dogon", "Atlantis", "Mu", "Lemuria", "Dropa", "Dogu",
        "koyaanisqatsi", "buddha", "Shiva", "Kali", "Visnu", "jezus", "Genghis Khan", "Rasputin", "Wingmakers",
        "wingmaker","wing","wings","fly","flies","flying","flight","auspex","bird","fish","mammal","species",
        "reptilian", "archon", "archons", "Cassandra", "circe", "Hermes", "gnosticism", "pneuma", "medusa", "mercurius",
        "mars", "venus", "jupiter", "saturnus", "uranus", "pluto", "Sheliak", "Vega", "Alcyone", "Merope", "Io", "Electra",
        "Taygeta", "understand", "comprehend", "Atlas", "Maia", "Polaris", "Taurus", "Auriga", "Perseus", "Gemini", "Capricorn",
        "Cetus", "Eridanus", "Aries", "liberation", "free will", "cosmic", "transmission", "reception", "sign", "symbol",
        "symbolism", "occult", "esoteric", "esotericism", "shinboru", "tarot", "spiral", "dance", "magical", "formula",
        "divination", "zodiac", "zenith", "jericho", "Babylon", "Tanakh", "bible", "Torah", "Koran", "Chaldea",
        "Capricornus", "Libra", "Cancer", "equinox", "Scorpio", "Aquarius", "aqua", "water", "soil", "Virgo", "Scorpius",
        "Pisces", "Ophiuchus", "Celus", "Pollux", "Athena", "Castor", "Propus", "Wasat", "Mekbuda", "Lynx", "mother",
        "father", "tibetan", "bedlam", "inferno", "limbo", "hell", "devil", "demon", "djinn", "purgatory", "knock", "happily",
        "hope", "hopeful", "hopefully", "though", "through", "tough", "whether", "weather", "cold", "warm", "hot", "freezing", "froze",
        "rose", "heart", "heartly", "brainy", "brain", "happiness", "cadaver", "content", "delight", "delighted", "ascenscion",
        "ascend", "enlighten", "enlightenment", "euphoria", "eureka", "cheer", "glee", "genial", "geniality", "sanctity", "play",
        "playing", "playful", "playfulness", "paradise", "mirth", "merry", "merriment", "hilarity", "seventh", "ecstasy",
        "exhilaration", "exhhilarating", "nihil", "nihilism", "elated", "exuberance", "to", "to", "too", "at", "in",
        "Asgard", "Tuoni", "tuonela", "sisu", "shaman", "guru", "ritual", "rite", "abra", "cadabra", "hocus", "pocus",
        "transport", "Yeshua", "Yoshua", "Aleph", "atom", "but", "what", "why", "how", "who", "whom", "whose", "they", "them",
        "other", "others", "i", "iam", "self", "alone", "allone", "one", "not", "two", "law", "of", "change", "confusion", "con", 
        "fusion", "in", "on", "for", "by", "at", "with", "together", "also", "as", "well", "yes", "no", "not", "yeah", "ok", "fuck",
        "stellar", "astromonocol", "feciltretoire", "a", "an", "and", "or", "perhaps", "often", "never", "some", "times", "sometimes",
        "many", "few", "a lot", "always", "all", "ways", "como", "que", "quando", "quanto", "alli", "aqui", "aqua", "water", "air", "wind",
        "fire", "flower", "tree", "earth", "planet", "water", "river", "sea", "ocean", "waves", "wave", "frequency", "motion", "physica",
        "cold", "hot", "warm", "ice", "gas", "solid", "fix", "fixed", "ever", "presence", "to", "also", "cannot", "fine", "sad", "angry",
        "honny", "rancid", "health", "whenever", "then", "there", "amen", "and", "or", "up", "on", "down", "aside", "between", "against",
        "before", "after", "within", "without", "whenever", "however", "indeed", "unknown", "known", "un", "now", "future", "past", "time",
        "chronos", "titan", "god", "GOD", "great self", "under", "above", "meta", "sub", "cult", "culture", "tbh", "tf", "af", "wtf", "tu",
        "sb", "yd", "sure", "ofc", "oh", "eh", "ehm", "uhm", "hmm", "uch", "ay", "yo", "aye", "na", "nada", "de", "da", "ALERT", "WakeTFUp",
        "so", "such", "do", "re", "mi", "fa", "sol", "la", "si", "sin", "sans", "rim", "anal", "astral", "nude", "naked", "empty", "void",
        "isness", "out", "over", "it", "is", "act",
        "James", "Maynard", "Keenan", "Trent", "Reznor", "Gibby" ,"Haines", "Paul", "Leary", "Jimmy", "Jim", "Alejandro", "Jodorowski", 
        "Jim", "Carrey", "Bill", "Murray", "Trump", "David", "Eugene", "Edwards", "Robinson", "Mahu", "Marley", "LF Celine", "Cortazar", "Julio", "Borges", 
        "Marquez", "Brecht", "Samuel", "Beckett", "Tolstoj", "Gogol", "Mooji", "Osho", "Papaji", "Ramana", "Maharsi", "Nassim", "Haramein", "Hutz", "Aurora", 
        "Nina", "Hagen", "Kate", "Bush", "Kurt" , "Vonnegut", "Roots", "Manuva", "Prince", "Tricky", "Andrew", "Eldritch", "Carlos", "Castaneda", "Taras",
        "Bulba", "Anna", "Breytenbach", "Thirlwell", "Jaroslav", "Hlasek", "Bela", "Tarr", "Emir", "Kusturica", "Aki", "Kaurismaki", 
        "Brian", "Eno", "Laffoley", "Al", "Jourgensen", "Max", "Keiser", "Udo", "Ulfkotte", "Ole", "Olle", "Dammegard", "David", "Icke", 
        "Bradley", "Chelsea", "Manning", "Julian", "Assange", "Edward", "Snowden", "Russell", "Brand", "Wim", "Hof", "Miles",
        "Mathis", "Eckhart", "Tolle", "Nikolai", "Tesla", "Arcturus", "Ra", "Mike", "Patton", "Bruce", "Lee", "Greg", "Braden", "Abby" ,"Normal", 
        "Renegade", "Lyran",
        "(!)", "(?)", "(?!)", "(!!)", "!!", "??", "!?", "?!", "? ? ?", "S.", "Mr. B.", "Flux Wildly", "flux", "wild", "Cobain", "Morrison",
        "Van", "Morisson", "whatever", "fake", "false", "nope", "anything", "really", "real", "reality", "3d", "4d", "5d", "6d", "7d", "8d", "9d",
        "10d", "11d", "12d", "1d", "2d", "13d", "zvuki mu", "ITS ALL YOU", "alien", "extra", "terrestial", "terra", "petra",
        "Carl", "Einar", "Hackner", "Mrs. C", "Hellman", "J", "Seaman", "quasi", "semi",
        "unreal", "null", "nil", "nihil", "nada", "nullpointer", "undefined", "undefinedundefined",
        "jason","bickford","simon","parkes","darryll","anka","lee","carrol","lisa","renee",
        "the","hereby","fore","twist","shape","form","space","spatial","sexy","similar","sim","simulation","matrix","womb",
        "movie","film","your","mine","our","their","ours","yours","u","imposter","satan","satanic","saturn","mercury","venus","earth",
        "mars","jupiter","uranus","pluto","roman","romani","angel","soul","spirit","alternate","parallel","insane","unsane","insanity",
        "illusory","illusion","in","play","out","of","to","do","does","make","makes","goes","go","move","moves","talk","talks","speak",
        "speaks","look","looks","think","thinks","mind","mental","feel","feels","listen","listens","perceive","perceives","experience",
        "experiences","burn","burns","flow","flows","stand","stands","hold","holds","keep","keeps","maintain","maintains","assist",
        "assists","blow","blows","transform","transforms","manipulate","manipulates","modify","modifies","transmute","transmutes",
        "discern","discerns","adapt","adapts","harmony","balance","balances","beauty","beautiful","art","artificial","intelligent",
        "intelligence","modality","part","mode","modus","operate","operation","ontology","semantic","etymological","formal","author",
        "authority","hierarchy","anti","vs","dominion","dominate","territorial","own","owns","posses","possesses","ssssss","mississippi",
        "iron","steel","metal","wood","forge","forges","forget","remember","re","member","collective","union","religare","combine",
        "confuse","confuses","charm","charms","charming","spell","spells","witch","craft","ritual","taboo","hidden","visible","light",
        "dark","darkness","love","unconditional","only","alone","abyss","stare","stares","distort","distorts","distortion","crack","cracks",
        "code","language","protocol","script","program","programs","codes","de","decodes","decode","translate","trans","pro","per","via",
        "until","today","day","second","seconds","decipher","unravel","uncode","nullcode","unscript","tear","tears","field","fields",
        "scope","scopes","analyze","analyzes","analysis","summary","sum","sums","total","totals","totality","absolute","ab","per","se",
        "ai","AI?","27//b","snow","noise","disturbance","disturb","disturbs","dis","relate","relation","em","mother","father","brother",
        "bro","sis","sister","child","children","daughter","son","sun","moon","man","wo","woman","wow","men","women","sexuality",
        "polarity","pole","poles","north","south","east","west","underground","under","ground","into","raven","lion","bat","dog","cat",
        "dragon","dragons","draconic","reptilian","reptile","snake","lizard","snakes","spider","spiders","parasite","parasites","para",
        "parasitic","quasi","normal","ab","abnormal","regular","regulate","command","order","orders","decide","decides","power",
        "powers","zero","respect","tolerant","tolerance","ego","?","??","? ?","unfound","redacted","edited","edit","redact","remove",
        "removes","ob","obfuscate","con","conceal","shift","shifts","wrong","fault","ERROR","SIGNALLSOT","VOID","div","static","laugh",
        "laughs","last","best","fuck","fucks","fucking","fucked","fuckton","godawful","trmendous","typo","misread","mis","understood",
        "cunt","dick","cock","sicker","sucker","suck","sucks","sick","awesome","dope","dang","bang","mam","wam","wham","charles","bukowski",
        "john","fante","spring","peking","autumn","boris","vian","leonardo","da","vinci","michelangelo","antonioni","fellini","viconte",
        "bergmann","anderssen","anders","other","moment","momento","fuckass","bitch","slut","asshole","asswipe","shitfaced","cokehead",
        "crust","crusty","speedfreak","stoner","downer","upper","higher","acid","lsd","dmt","dimethyltriptamine","aya","huasca","ayahuasca",
        "ayur","veda","vedic","scripture","tao","dao","taoism","buddha","buddhism","christ","christianity","orthodox","hebrew","pali",
        "sanskrit","sumeria","babylonia","persia","china","tibet","cuneiform","attention","pay","watch","closely","prison","scramble",
        "scrambled","filter","extract","abstract","contract","expand","inherit","inherent","because","to","to","to","in","in","in","on","on",
        "the","the","a","a"


        
    ];
    this.commonlettercombo = [ 
        " ", "  ", "   ", "    ",
        "am","an","as","at","be","by","do","go","he","if","in","is","it","me","my","no","of","oh","on","or","ox","so","to","up","us",
        "we","ad","ah","ai","al","aw","ax","ay","ba","bi","bo","da","de","ed","ef","eh","el","em","en","er","es","et","ex","fa","fe",
        "gi","ha","hi","hm","ho","id","io","ja","jo","ka","ki","ko","la","li","lo","ma","mi","mm","mo","mu","na","ne","nu","od","oe",
        "oi","om","op","os","ow","oy","pa","pe","pi","qi","re","sh","si","ta","te","ti","uh","um","un","ut","wo","xi","ya","ye","yo",
        "za", "ace","act","add","ado","aft","age","ago","aid","ail","aim","air","ale","all","amp","and","ant","any","ape","apt","arc",
        "are","ark","arm","art","ash","ask","asp","ass","ate","awe","awl","axe","aye","bad","bag","ban","bar","bat","bay","bed","bee",
        "beg","bet","bid","big","bin","bio","bit","biz","boa","bob","bod","bog","boo","bop","bot","bow","box","boy","bra","bro","bud",
        "bug","bum","bun","bus","but","buy","bye","cab","cad","can","cap","car","cat","cay","cob","cod","cog","con","coo","cop","cot",
        "cow","cox","cry","cub","cud","cue","cup","cut","dad","dam","day","den","dew","did","die","dig","dim","din","dip","dog","don",
        "dot","dry","dub","due","dug","duh","dye","ear","eat","ebb","eco","egg","ego","elf","elk","elm","emu","end","era","err","eve",
        "ewe","eye","fab","fad","fan","far","fat","fax","fed","fee","few","fib","fie","fig","fin","fir","fit","fix","flu","fly","foe",
        "fog","for","fox","fry","fun","fur","gab","gag","gal","gap","gas","gay","gee","gel","gem","get","gig","gin","god","goo","got",
        "gum","gun","gut","guy","gym","had","hag","ham","has","hat","hay","hem","hen","her","hey","hid","him","hip","his","hit","hob",
        "hod","hoe","hog","hop","hot","how","hub","hue","hug","huh","hum","hut","ice","icy","ilk","ill","imp","ink","inn","ion","ire",
        "irk","ism","its","ivy","jab","jag","jam","jar","jaw","jay","jet","jew","jig","job","joe","jog","jot","joy","jug","jus","jut",
        "keg","ken","key","kid","kin","kit","koi","lab","lad","lag","lap","law","lax","lay","lea","led","leg","lei","let","lid","lie",
        "lip","lit","lob","log","loo","lop","lot","low","lug","mad","man","map","mar","mat","max","may","men","met","mid","mix","mob",
        "mod","mom","moo","mop","mud","mug","mum","nab","nag","nap","nay","net","new","nib","nil","nip","nit","nod","nor","not","now",
        "nub","nun","nut","oak","oar","oat","odd","ode","off","oft","ohm","oil","old","one","opt","orb","ore","our","out","ova","owe",
        "own","oxo","pad","pal","pan","par","pat","paw","pay","pea","peg","pen","pep","per","pet","pew","pie","pig","pin","pip","pit",
        "ply","pod","poi","pop","pot","pow","pro","pry","pub","pug","pun","pup","put","rag","ram","ran","rap","rat","raw","ray","red",
        "ref","rep","rev","rib","rid","rig","rim","rip","rob","roc","rod","roe","rot","row","rub","rue","rug","rum","run","rut","rye",
        "sac","sad","sag","sap","sat","saw","say","sea","sec","see","set","sew","sex","she","shy","sic","sin","sip","sir","sis","sit",
        "six","ski","sky","sly","sob","sod","sol","son","sop","sow","soy","spa","spy","sub","sue","sum","sun","sup","tab","tag","tan",
        "tap","tar","tat","tax","tea","tee","ten","the","thy","tic","tie","tin","tip","toe","ton","too","top","tor","tot","tow","toy",
        "try","tub","tug","two","urn","use","van","vat","vet","vex","via","vie","vim","vow","wad","wag","wan","war","was","wax","way",
        "web","wed","wee","wet","who","why","wig","win","wit","woe","wok","won","woo","wow","wry","yak","yam","yap","yaw","yea","yen",
        "yes","yet","yin","you","zap","zen","zip","zoo",
        "able","acid","acne","acre","acts","adds","afar","aged","aide","aids","aims","airy","also","area","army","arms","away","axle",
        "baby","back","bake","ball","band","bank","bare","bark","barn","base","bath","bear","beat","been","beer","bell","belt","bend",
        "bent","best","beta","bias","bike","bill","bind","bird","bite","bits","blue","blur","boat","body","boil","bold","bolt","bomb",
        "bond","bone","book","boom","boot","born","boss","both","bowl","bulk","bull","bump","burn","bush","busy","byte","cafe","cage",
        "cake","calm","came","camp","card","care","cart","case","cash","cast","cave","cell","chap","chat","chef","chin","chip","chop",
        "city","clan","clap","claw","clay","clip","club","clue","coal","coat","code","cold","colt","come","cone","cook","cool","coop",
        "copy","core","corn","cost","cozy","crab","crap","crew","crop","crow","cube","cult","curb","cure","curl","cute","daft","damn",
        "dare","dark","dart","data","date","dawn","days","dead","deaf","deal","dear","debt","deck","deed","deep","deer","demo","deny",
        "desk","dial","dice","diet","dime","dine","dirt","dish","disk","dive","dock","does","doll","done","doom","door","dose","down",
        "drag","draw","drew","drop","drum","dual","duck","dull","dumb","dump","duty","each","earn","ears","ease","east","easy","echo",
        "edge","edit","eggs","else","emit","envy","epic","even","ever","evil","exam","exit","eyes","fact","fade","fail","fair","fake",
        "fall","fame","farm","fast","fate","fear","feed","feel","feet","fell","felt","file","fill","film","find","fine","fire","firm",
        "fish","fist","five","flag","flat","flaw","flea","flee","flew","flow","foam","fold","folk","font","food","fool","foot","fork",
        "form","fort","four","free","from","fuel","full","fund","gain","game","gang","gate","gave","gaze","gear","geek","gene","gift",
        "girl","give","glad","glow","glue","goat","goes","gold","golf","gone","good","gown","grab","gram","gray","grey","grew","grid",
        "grim","grip","grow","gulf","guru","guts","hack","hail","half","hall","halt","hand","hang","hard","harm","harp","hate","have",
        "head","heal","heap","hear","heat","held","hell","help","herd","here","hero","hide","high","hike","hill","hint","hire","hold",
        "hole","holy","home","hope","horn","host","hour","huge","hung","hunt","hurt","icon","idea","idle","iffy","inch","info","into",
        "iron","item","jazz","join","joke","jolt","jump","just","keen","keep","kept","kick","kids","kill","kind","king","kiss","kite",
        "knee","knew","knit","know","lack","lady","laid","lake","lame","lamp","land","lane","last","late","lazy","lead","leaf","leak",
        "lean","leap","left","legs","lens","less","lest","lets","levy","life","lift","like","limb","lime","line","link","lion","list",
        "live","load","loaf","loan","lock","loft","logo","lone","long","look","loop","lord","lose","loss","lost","love","luck","lump",
        "lung","lush","made","mail","main","make","male","many","mark","mask","mass","mate","math","maze","meal","mean","meat","meet",
        "melt","meme","menu","mere","mess","mile","milk","mill","mind","mine","mint","miss","mode","mood","moon","more","most","moth",
        "move","much","muck","must","myth","name","navy","near","neat","neck","need","news","next","nice","nine","node","none","noon",
        "norm","nose","note","obey","odds","once","only","onto","open","oral","over","pace","pack","page","paid","pain","pair","pale",
        "palm","park","part","pass","past","path","peak","pear","peek","peer","pest","pick","pink","pipe","plan","play","plea","plot",
        "plug","plus","poem","poet","pole","poll","pony","pool","poor","pope","port","pose","post","pour","pray","prey","prim","prop",
        "pull","pure","push","quit","race","rack","rain","rank","rare","rate","read","real","rear","reed","reef","rein","rent","rest",
        "rice","rich","ride","ring","rise","risk","road","rock","role","roll","roof","room","root","rope","rose","rule","rush","safe",
        "said","sail","sake","sale","salt","same","sand","sane","sang","save","scar","seat","seed","seek","seem","seen","self","sell",
        "send","sent","ship","shit","shoe","shop","shot","show","shut","sick","side","sigh","sign","silk","sing","sink","site","size",
        "skin","skip","slam","slap","slay","slip","slow","slug","smug","snap","snow","soft","soil","sold","sole","some","song","soon",
        "sore","sort","soul","soup","sour","spam","span","spar","spin","spit","spot","star","stay","stem","step","stew","stick","stir",
        "stop","such","suit","sure","swan","swim","take","tale","talk","tall","tame","tank","tape","task","team","tear","tech","tell",
        "tend","term","test","text","than","that","them","then","they","thin","this","tick","tide","tidy","tied","tier","tile","time",
        "tiny","tire","told","toll","tone","took","tool","torn","tour","town","trap","tree","trek","trip","true","tube","tuck","tune",
        "turn","twin","type","ugly","undo","unit","upon","used","user","vary","vast","veil","vein","verb","very","vest","vice","view",
        "vine","visa","void","vote","wage","wait","wake","walk","wall","want","warm","warn","wash","wave","weak","wear","week","well",
        "went","were","west","what","when","whom","wide","wife","wild","will","wind","wine","wing","wink","wire","wise","wish","with",
        "woke","wolf","wood","wool","word","wore","work","worm","worn","wrap","write","wrong","yawn","year","yell","yoga","your","zero",
        "zone","zoom",
        "lol","wtf","omg","brb","irl","idk","imo","imho","tbh","afaik","fyi","lmao","rofl","gg","gl","wp","ez","rip","sus","based",
        "cringe","vibe","mood","yeet","simp","stan","flex","goat","rekt","cope","seethe","nah","yep","nope","yeah","yup","uhuh"
    ];
        
    this.words = this.words.concat ( this.commonlettercombo );

    this.CONTINUES_FUNCTION = false;

    this.TextTickerSaysImDone = function () {
        log ( "TextTickerSaysImDone" );
        if ( this.CONTINUES_FUNCTION ) {
            this.tellStory ( 0 );
        };
        
    };

    this.WORDAMOUNT;
    
    this.letterfrequencies = [
        /*a*/ 8.167,
        /*b*/ 1.492,
        /*c*/ 2.782,
        /*d*/ 4.253,
        /*e*/ 12.702,
        /*f*/ 2.228,
        /*g*/ 2.015,
        /*h*/ 6.094,
        /*i*/ 6.966,
        /*j*/ 0.153,
        /*k*/ 0.772,
        /*l*/ 4.025,
        /*m*/ 2.406,
        /*n*/ 6.749,
        /*o*/ 7.507,
        /*p*/ 1.929,
        /*q*/ 0.095,
        /*r*/ 5.987,
        /*s*/ 6.327,
        /*t*/ 9.056,
        /*u*/ 2.758,
        /*v*/ 0.978,
        /*w*/ 2.360,
        /*x*/ 0.150,
        /*y*/ 1.974,
        /*z*/ 0.076
    ];
    
    this.basetextlines = [ "`..rancom]..<<`", "|*****<<****<<****<<<**<<<<<**<<<<<<|" ];// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< " ];
    this.footertextlines = [ "%nothing is happening..%" ];// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< " ];
     /*
     * RESERVED SIGNS
     * ^: CLR_1
     * $: CLR_2
     * %: CLR_3
     * <: BACK
     * >: LINK
     * *: 10-caret pause
     */
    
    this.BASE_TEXTTICKER = null;
    this.MF_TEXTTICKER = null;
    this.LF_TEXTTICKER = null;
    this.active = false;
    this.firstclick = true;
    
    this.initialze = function () {
        this.WORDAMOUNT = this.words.length;
        this.BASE_TEXTTICKER = new TextTicker ( [], this.basetextlines, "mindfuckcanvas" );
        this.BASE_TEXTTICKER.font = "9pt roboto_mono_regular";
        this.BASE_TEXTTICKER.charwidth = 6;
        this.BASE_TEXTTICKER.lineheight = 12;
        this.BASE_TEXTTICKER.initialize ();

        this.MF_TEXTTICKER = new TextTicker ( [], [], "mindfuckcanvas1" );
        this.MF_TEXTTICKER.autoScrollDown = true;
        this.MF_TEXTTICKER.offsetY = 50;
        
        this.MF_TEXTTICKER.font = "10pt roboto_mono_regular";
        this.MF_TEXTTICKER.charwidth = 7;
        this.MF_TEXTTICKER.lineheight = 14;
        this.MF_TEXTTICKER.bottomroom = 110;
        this.MF_TEXTTICKER.initialize ();
        this.MF_TEXTTICKER.allshown = true;

        this.GENERATED_RANDOMLINES = this._generateRandomLines ();
        this.STORY_LINES_PAUSE = 7;



        this.LF_TEXTTICKER = new TextTicker ( [], this.footertextlines, "mindfuckcanvas2" );
        this.LF_TEXTTICKER.autoScrollDown = false;

        this.LF_TEXTTICKER.font = "9pt roboto_mono_regular";
        this.LF_TEXTTICKER.charwidth = 6;
        this.LF_TEXTTICKER.lineheight = 12;
         
        this.LF_TEXTTICKER.initialize ();
        this.LF_TextTickerScreenResizePre ();       

        $ ( document ).on ( "newMainTopic", $.proxy ( this, "_newMainTopic" ));
        
        $ ( "#mindfuckcanvas" ).css ( "display", "none" );
        $ ( "#mindfuckcanvas1" ).css ( "display", "none" );
        

        this.MF_TEXTTICKER.tellReady = this.TextTickerSaysImDone.bind(this);
        this.LF_TEXTTICKER.screenResizePre = this.LF_TextTickerScreenResizePre.bind(this);


        //this.TEXTTICKER.setActive ( true );
        
    };

    this.LF_TextTickerScreenResizePre = function () {
        var top = HEIGHT - 90;//$('#mainmenu').offset().top;
        var left = $('#headerbar').offset().left;
        var width = $('#headerbar').outerWidth();
        log ( "HEADERBAR AT: " + top + ", " + left + ", w: " + width );

        this.LF_TEXTTICKER.offsetY = top - 23;
        this.LF_TEXTTICKER.offsetX = width - 133;
        log ( "         this.LF_TextTickerScreenResize () x,y: " + this.LF_TEXTTICKER.offsetX + ", " +  this.LF_TEXTTICKER.offsetY );
    };
    
    this._getWeightedLetter = function () {
        var r = 100 * Math.random ();
        var lf = this.letterfrequencies.length;
        var i;
        var tf = 0;
        for ( i = 0; i < lf; i ++ ) {
            tf += this.letterfrequencies [ i ];
            if ( r < tf ) break;
        }
        
        var char = String.fromCharCode ( i + 97 );
        return char;
    };
    

    this._getGarbleChar = function () {
        // + = 
        var r = Math.random ();
        var signs = [ "-", "-", "-", "-", ".", ".", "_", "'" ];
        var i;
        var sl = signs.length;
        var v = 0;
        var inc = 1 / sl;
        for ( i = 0; i < sl; i ++ ) {
            v += inc;
            if ( r < v ) return signs [ i ];
        }
        return "???";
    };
    
    this._createRandomText = function () {
        var garblechance = ( Math.random () * Math.random () );
        var aos = 1 + Math.floor ( 2 * Math.random () );
        var i, j, k, l, wl;
        var char, word, sentence;
        var charcode;
        var text = [];
        var aow, aol;
        var colorchar = "";
        var wi;
        var ended;

        var TMP_WORD_RAN_AMOUNT = this.CONTINUES_FUNCTION? 22 : 8;
        var TMP_LETTER_RAN_AMOUNT = this.CONTINUES_FUNCTION? 22 : 8;       

        for ( i = 0; i < aos; i ++ ) {
            sentence = "";
            aow = 1 + Math.floor ( TMP_WORD_RAN_AMOUNT * Math.random () );
            for ( j = 0; j < aow; j ++ ) {
                word = "";
                aol = 2 + Math.floor ( 8 * Math.random () );
                if ( Math.random () < .3 ) aol = Math.ceil ( aol / 2 );
                

                if ( colorchar == "" && ( Math.random () < .2 ) )  {
                    if      ( Math.random () < .12 ) colorchar = "^";
                    else if ( Math.random () < .12 ) colorchar = "$";
                    else if ( Math.random () < .09 ) colorchar = "%";
                    else if ( Math.random () < .09 ) colorchar = "#";
                    else if ( Math.random () < .06 ) colorchar = "|";
                    else if ( Math.random () < .06 ) colorchar = "'";
                    else if ( Math.random () < .05 ) colorchar = "\"";
                    else if ( Math.random () < .05 ) colorchar = "`";
                    else if ( Math.random () < .05 ) colorchar = " ";
                    else if ( Math.random () < .05 ) colorchar = "  ";
                    
                }
                else if ( Math.random () < .15 ) colorchar = "";

                word += colorchar;
                
                
                if ( Math.random () < .6 ) {
                    //print an actual word from the list ^^
                    wi = Math.floor ( this.WORDAMOUNT * Math.random () );
                    char = this.words [ wi ];
                    var capitalizeAll = ( Math.random () < .1 )? true : false;
                    if ( j === 0 ) {
                        //capitalize first letter of sentence?
                        char = char.substring ( 0, 1 ).toUpperCase () + char.substring ( 1 );
                    }
                    wl = char.length;
                    for ( l = 0; l < wl; l ++ ) {
                        if ( Math.random () < ( garblechance / 1.5 ) ) {
                            char = char.substring ( 0, l ) + this._getGarbleChar () + char.substring ( l + 1 );
                            //break;
                        }
                    }
                    if ( capitalizeAll ) {
                        char = char.toUpperCase ();
                    }
                    word += char;
                }
                else if ( Math.random () < .05 ) {
                    //create a number
                    aol = 1 + Math.floor ( 6 * Math.random () );
                    for ( k = 0; k < aol; k ++ ) {
                        charcode = 48 + Math.floor ( ( 9 ) * Math.random () ); 
                        word += String.fromCharCode ( charcode );
                    }
                }
                else {
                    //ramdom mishmash of letters

                    var capitalizeAll = ( Math.random () < .6 )? true : false;
                    if ( capitalizeAll ) {
                        aol = Math.ceil ( aol / 2 );
                    }
                    for ( k = 0; k < aol; k ++ ) {
                        char = this._getWeightedLetter ();
                        if ( ( j === 0 && k === 0 ) || ( k === 0 && Math.random () < 0.05 ) ) {
                            //capital
                            //charcode = 65 + Math.floor ( ( 26 ) * Math.random () );
                            //char = String.fromCharCode ( charcode );
                            //log ( "capital? " + char );
                            char = char.toUpperCase ();
                        }
                        if ( Math.random () < ( garblechance ) ) {
                            char = this._getGarbleChar ();
                        }
                        /*
                        else if ( ( j > 0 ) && ( Math.random () < .2 ) ) {
                            //backward
                            //charcode = 60;
                            //k --;
                        }
                        else {
                            charcode = 97 + Math.floor ( ( 26 ) * Math.random () );
                        }*/
                        if ( capitalizeAll ) {
                            char = char.toUpperCase ();
                        }                        
                        word += char;
                    }
                }
                if ( Math.random () < .03 ) word = word.toUpperCase ();
                word += colorchar;
                
                
                if ( ( Math.random () < 0.25 ) && colorchar === "" ) {
                    wl = word.length;
                    for ( l = 0; l < wl; l ++ ) {
                        word += "<";
                    }
                    //word += "<";
                    j --;
                    sentence += word;
                    continue;
                }
                sentence += word;
                //end of sentence
                if ( j < ( aow - 1 ) ) sentence += " ";
                else {
                    ended = false
                    while ( Math.random () < 0.15 ) {
                        if ( Math.random () < .4 ) sentence += "!";
                        else sentence += "?";
                        ended = true;
                    }
                    //else if ( Math.random () < 0.2 ) sentence += "?";
                    if ( !ended ) sentence += ".";
                }
                while ( Math.random () < .05 ) sentence += "*";
            }
            text.push ( sentence );
        }
        return text;
    };

    this._getRandomWeightedObject = function ( objectarray ) {
        var i;
        var ol = objectarray.length;
        var o;
        var totalweight = 0;
        for( i = 0; i < ol; i ++ ) {
            o = objectarray [ i ];
            totalweight += o.weight;
        }
        var winnerweight = Math.round ( totalweight * Math.random () );
        var current_totalweight = 0;
        for( i = 0; i < ol; i ++ ) {
            //first one that adds enough weight for total to be > winnderweight
            o = objectarray [ i ];
            current_totalweight += o.weight;
            if ( current_totalweight >= winnerweight ) {
                //log ( "we got a winner, it's: " + o.char );
                return o;
            }
        }
        log ( "somehow no winner was found in MFFT _getRandomWeightedObject totalw: " + totalweight + " current: " + current_totalweight + " winner: " + winnerweight );
        return null;
    };

    this._generateRandomLines = function () {
        
        var randomlines = [
            


        ];


        //add some more randomlines randomly
        var rl_amount = 24;
        var rl_subset_extra_amount_max = 12;
        var rl_subset_Letter_amount_max = 12;
        var c, d, e;
        var char;
        var charlist = [ 
            { char: ".", weight: 27 },
            { char: "-", weight: 9 },
            { char: "_", weight: 1 }
        ];
        var ranline = "";
       // var slice_ranline;
        var subset_amount;
        var letter_amount;
        //var tmp_ranline_length;
        //var index;
        //var minindex = 1;

        for ( c = 0; c < rl_amount; c++ ) {
            char = this._getRandomWeightedObject ( charlist ).char;
            subset_amount = Math.ceil ( rl_subset_extra_amount_max * Math.random () );
            ranline = "^ ";
            for ( e = 0; e < subset_amount; e++ ) {
                letter_amount = Math.ceil ( rl_subset_Letter_amount_max * Math.random () );
                for ( d = 0; d < letter_amount; d++ ) ranline += char;
            }
            let result = "";
            let pos = 0;
            let forwards = ranline.length - 1;
            let backwards = forwards;
            let sourceIndex = 0;

            while (sourceIndex < ranline.length || backwards > 0) {

                if (pos === 0) {
                    // At zero, we MUST use a forward character
                    result += ranline[sourceIndex];
                    sourceIndex++;
                    pos++;
                }
                else if (sourceIndex === ranline.length) {
                    // No forward characters left, so use backwards
                    result += "<";
                    backwards--;
                    pos--;
                }
                else {
                    // Both are possible
                    if (Math.random() < 0.5) {
                        result += ranline[sourceIndex];
                        sourceIndex++;
                        pos++;
                    }
                    else {
                        result += "<";
                        backwards--;
                        pos--;
                    }
                }
            }

            ranline = result + "^";

            /*
            tmp_ranline_length = ranline.length;

            //slice_ranline = ranline;
            for ( d = 0; d < tmp_ranline_length-2; d++ ) {
                slice_ranline = ranline;
                index = Math.ceil ( ( ranline.length - minindex ) * Math.random () ) + minindex;
                ranline = slice_ranline.slice (0,index) + "<" + slice_ranline.slice (index );
                minindex ++;
            }

            ranline += "<^";*/
            randomlines.push ( ranline );
        }

        var randomlines = [
          "","","" ,"","",""


        ];



        return randomlines;     

    }; 


    
    this.tellStory = function ( nr ) {
        //log ( "telling the " + String ( nr ) + "th story.." );
        //log ( "we got " + this.GENERATED_RANDOMLINES.length + ' randomlines ');
        var newlines = [];

 
        var randomlines = this.GENERATED_RANDOMLINES;
        var add = false;
        var i;
        var tmp_slp;

        if ( nr === 0 ) {
            add = true;
            


            if ( ( Math.random () * Math.random () * this.STORY_LINES_PAUSE ) < 1 ) {
                newlines = this._createRandomText ();
                
                if ( Math.random () < .2 ) {
                    
                    tmp_slp = 250;
                    for ( i = 0; i < 5; i ++ ) {
                        tmp_slp *= Math.random ();

                    };
                    this.STORY_LINES_PAUSE += tmp_slp;
                    log ( "Adding story lines pause: " + this.STORY_LINES_PAUSE );
                    this.STORY_LINES_PAUSE = Math.min ( this.STORY_LINES_PAUSE, 250 );
                }
            }
            else {
                var index = Math.floor ( Math.random () * randomlines.length );
                newlines = [ randomlines [ index ] ];
                this.STORY_LINES_PAUSE = Math.max ( 0, this.STORY_LINES_PAUSE - 1 );
                log (">>>>> adding randomline "+index+": " + randomlines [ index ] + " new slp: " + this.STORY_LINES_PAUSE ) ;
            }
            
            
            
        }
        else if ( nr === 1 ) {
            newlines = [ 
                "Like wtf<h..<<eck<<ll<<<<<<?<**",



            ];
            /*
            newlines = [ 
                "I've got some questions for you...........<<<<<?<**",
                "Ever won<<<w<pondered the real <<<<<nature of #knowing#?**",
                "You could <<<<<<should always ask ^what^?<.. WHAT is THAT..?<?<?<?<?*",
                "and $that$ thing, that thing which is what.... What is what<<<<w<that? *etc...*",
                "...until you come *at the point where your brain rose<<<<froze and your heart rose..**",
                "And* then*....<<<< shut up <<<<<<<<wait......<<<< be still<<<<<<<<<",
                "..............................<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<#You already know.#",
                "****",
                "What is the 'I'?..",
                "What is the 'I' that knows?**",
                "Do you exist?****...<<< ",
                "Who is the one KNOWING things?*",
                "Who is the one pondering.. who is asking itself if it exists?*",
                "**You<<<I know, YOU know<<<<<<<<<<..<**",
                "**%..calculating infinity.. .   .    .%<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*",
                "What constitutes matter?* Is it the atom-core?**",
                "Which leaves 99.99999998<9999999<../% of NOTHING<<<<<<<Unidentied<<<<<<<<<Frigging<<<<<<<Ordering-principles<<<<<<<<<<<<<<<<<<'s*<<<<<$what$?*",
                "You<<<I think you<<<I know physics, %they% instructed<<<<<<<<<<told<<<<taught me* [a whole bunch of neat formulas explaining what? <<<<<<some<<<<any<<<nothing<<<<<<<..]",
                "They, who are not the YOU<<<#I# that knows, but YOU<<<I decided THEY know.. [#not anymore#]<<<<<<<<<<<<not anymore]*",
                "It is the I that [might've] decided that..* and it changed..<<<<<<<<<<<<<<<<<*",
                "What makes matter fall down..** GRAVITY, right..** but #what# is that?**",
                "$mass$<<<<mass attracting $mass$<<<<mass..** what causes it?** A graviton-particle perhaps(?) %they% say.. (another ^unknown^ force????<?) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<",
                "One day again science writes down another ^formula^.. I p<wonder..*** what would make $that$ #concept# work then..?**",
                "And what (again) causes what<<<<%that%.*< mechanism??< %ad infinitum.. .  .   . %<<<<<<<<<<<<<<<<<<<<<<<<*etc..",
                "What is ^under <standing^* #really#?*",
                "*$Spell-ing it out$<<<<<<<<<<<<<<<<*",
                "To stand under <<<<<<beneath something..*",
                "And then to look down saying I KNOW THIS...**",
                "Or <<<And to look up and see your <<<<<my horizon's expanded..** There's so much <<<<<<<<more to come..",
                "***",
                "You <<<<I know what <<<ere an axiom is?<* [something deemed unprovable]*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*:",
                "It's at the end of the 'scientific method'.*",
                "And at the start of I<i^#-MAGIC-#^*<<<<<<<<$imagic<nation$...*<<<",
                "The whole UNIVERSE is full of fucking<<<<<<reaking <<<<<<<<<energy, no atom stands still.",
                "yet... we wage wars <<<<<<<<<<%burn% wood<<<<oil<<<people<<<<<<stuff to get it...",
                "***",
                "You want to know a secret?***",
                "*Magic <<<<<<Formula <<<<<<<<< SPELLing it out <<<<<<<<<! <<<<<<<<<**",
                "I<You already know <<<<<<<<<<<<<<<<<I'll tell you<<<<<<<<<<<<<..<<(The %star <<<<pirit% <<<<<<<#quintessence# rules <<<<<<< points upwards)<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<!<later<<<<<now<<<soon now.. <<<<<<<<<<<< "
                
                
            ];
            */
            
            
        }
        
        if ( add ) {
            this.MF_TEXTTICKER.addNewText ( newlines.concat ( [ " " ] ) );
        }
        else {
            this.MF_TEXTTICKER.setNewText ( newlines );
        }
        this.MF_TEXTTICKER.setActive ( true );
        
    };
    
    
    /////////////
    // PRIVATE //
    /////////////

    this._checkPixel = function ( event ) {
        if ( this.firstclick === true ) {
            this.firstclick = false;
            return;
        }
        var loc = MOUSEHANDLER.pointerEventToXY ( event );
        
        
        
        var ctx = getContext ( "starmap" );
        var imagedata = ctx.getImageData ( loc.x, loc.y, 1, 1 ).data;
        
        
        var r = imagedata [ 0 ];
        var g = imagedata [ 1 ];
        var b = imagedata [ 2 ];
        var a = imagedata [ 3 ];
        
        if ( r > 200 ) {
            this.tellStory ( 1 );
        }
        else {
            this.tellStory ( 0 );
        }
        
    };

    
    this._newMainTopic = function () {
        this.active = ( MAINMENU.currentTopic === "#button_" + MAINMENU.BLOGTAG );
        
        $ ( document ).off ( MOUSEHANDLER.CLICK, $.proxy ( this, "_checkPixel" ) );
        this.firstclick = true;
        
        if ( this.active ) {
            
            $ ( "#mindfuckcanvas" ).fadeIn ( 500, false );
            $ ( "#mindfuckcanvas1" ).fadeIn ( 500, false );
            $ ( "#mindfuckcanvas2" ).fadeIn ( 500, false );
            $ ( document ).on ( MOUSEHANDLER.CLICK, $.proxy ( this, "_checkPixel" ) );
        }
        else {
            $ ( "#mindfuckcanvas" ).fadeOut ( 100, false );
            $ ( "#mindfuckcanvas1" ).fadeOut ( 100, false );
            $ ( "#mindfuckcanvas2" ).fadeOut ( 100, false );

            
        }
        this.CONTINUES_FUNCTION = false;
        this.BASE_TEXTTICKER.setActive ( this.active );
        this.MF_TEXTTICKER.setActive ( this.active );
        this.LF_TEXTTICKER.setActive ( this.active );


        this.BASE_TEXTTICKER.setHidden ( !this.active );
        this.MF_TEXTTICKER.setHidden ( !this.active );
        this.LF_TEXTTICKER.setHidden ( !this.active );

    };
    
    
    this.initialze ();
    
};

