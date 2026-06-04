
/////////////
/// AUDIO ///
/////////////



function tryPlayAudio ( name, loop, force, volumemodifier ) {
        
	if ( ! volumemodifier ) volumemodifier = 1;
	var ad = getAudioData ( name );
        
	try {
		if ( ad.audio.ended || ad.audio.paused || force ) ad.audio.currentTime = 0;
	}
	catch ( e ) {
		//solved itself
		log ( "Catched error: " + e );
	}
	//log ( "tryPlayAudio: " + name + " loop? " + loop + "ad.audio.currentTime: " + ad.audio.currentTime );
	var volume;
	//if ( ad.audio.currentTime == 0 ) {
		volume = ad.defvolume;
		log ( "trying to play: " + name + " duration: " + ad.audio.duration );
		ad.audio.volume = volume * volumemodifier;
                /*
                if ( loop === true ) {
                    ad.audio.addEventListener( "ended", function() {
                        this.currentTime = 0;
                        this.pause ();
                        this.play ();
                        }, false);
                }*/
		ad.audio.loop = loop;
		//ad.audio.addEventListener ( "ended", audioEnded, false );
		ad.audio.play ();
		try {
			if ( ad.audio.ended || ad.audio.paused || force ) ad.audio.currentTime = 0;
		}
		catch ( e ) {
		}
		//log ( "playing audio: " + name );
	//}
}



function stopAudioFiles ( a ) {
	var i;
	var al = a.length;
	for ( i = 0; i < al; i ++ ) {
		ad = getAudioData ( a [ i ] );
		ad.audio.pause ();
		//ad.audio.currentTime = 0;
	}
}



function getAudioData ( name ) {
	var i;
	var al = AUDIO_FILES.length;
	for ( i = 0; i < al; i ++ ) {
		if ( AUDIO_FILES [ i ].name === name ) {
			return AUDIO_FILES [ i ];//.audio;
		}
	}
	return null;
}

function getAudioObject ( audio ) {
	var i;
	var al = AUDIO_FILES.length;
	for ( i = 0; i < al; i ++ ) {
		if ( AUDIO_FILES [ i ].audio === audio ) {
			return AUDIO_FILES [ i ];
		}
	}
	return null;
}