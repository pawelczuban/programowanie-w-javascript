// notatnik 
document.addEventListener('keypress', onKeyPress)

function onKeyPress(event) {
    const key = event.key
    // logika mapowania key -> sound
    //const sound = KeyToSound[event.key]
    // switch (event.key) {
    //     case 'a':
    //         sound = SOUND.clap
    //         // clap
    //         break;
    //     case 's':
    //         sound = SOUND.hihat
    //         // hihat
    //         break;
    // }
    //playSound(sound)

    document.getElementById("message").innerHTML = "The pressed key was: " + key;

    switch(key) {
        case 'b':
            playSound('boom')
            break;
        case 'c':
            playSound('clap')
            break;
        case 'h':
            playSound('hihat')
            break;
        case 'k':
            playSound('kick')
            break;
        case 'o':
            playSound('openhat')
            break;
        case 'r':
            playSound('ride')
            break;
        case 's':
            playSound('snare')
            break;
        case 't':
            playSound('tink')
            break;
        case 'x':
            playSound('tom')
            break;
    }
}

function playSound(sound) {
    // if (!sound) {
    //     return
    // }
    const audioTag = document.querySelector(`#` + sound)
    audioTag.currentTime = 0
    audioTag.play()
}
// Date.now()