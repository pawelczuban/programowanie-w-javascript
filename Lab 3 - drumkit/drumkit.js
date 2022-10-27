// notatnik 
document.addEventListener('keypress', onKeyPress)

const KeyToSound = {
    'a': 's1',
    's': 's2',
    'd': 's3',
    'e': 's4',
    'f': 's5',
    'g': 's6',
    'h': 's7',
    'j': 's8',
    'k': 's9',
}
function onKeyPress(ev) {
    // const key = event.key
    // logika mapowania key -> sound
    const sound = KeyToSound[ev.key]
    // switch (ev.key) {
    //     case 'a':
    //         sound = SOUND.clap
    //         // clap
    //         break;
    //     case 's':
    //         sound = SOUND.hihat
    //         // hihat
    //         break;
    // }
    playSound(sound)
}

function playSound(sound) {
    if (!sound) {
        return
    }
    const audioTag = document.querySelector(`#${clap}`)
    audioTag.currentTime = 0
    audioTag.play()
}
// Date.now()