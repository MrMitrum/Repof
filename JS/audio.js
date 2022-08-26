function Audio() {
    const trackClass = 'track';
    const audioAttr = 'audio';

    let activeAudio = null;

    const tracks = document.querySelectorAll(`.${trackClass}`);
    
    for (let i = 0; i < tracks.length; i++) {
        const t = tracks[i];
        AddAudioEvent(t)
    }


    function AddAudioEvent(t) {
        if (!t.hasAttribute(audioAttr)) return;
        const path = t.getAttribute(audioAttr);
        const audio = new Audio(path);
        t.addEventListener('click', () => PlayAudio(audio));
    }

    function PlayAudio(audio) {
        //if (activeAudio) activeAudio.Pause();
        activeAudio = audio;
        //activeAudio.Play();
    }
}

Audio();
