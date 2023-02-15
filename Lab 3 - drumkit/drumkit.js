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
}

function playSound(sound) {
    const audioTag = document.querySelector('#' + sound)
    audioTag.currentTime = 0
    audioTag.play()
}

const control = {
    KeyB: document.querySelector("#boom"),
    KeyC: document.querySelector("#clap"),
    KeyH: document.querySelector("#hihat"),
    KeyK: document.querySelector("#kick"),
    KeyO: document.querySelector("#openhat"),
    KeyR: document.querySelector("#ride"),
    KeyS: document.querySelector("#snare"),
    KeyT: document.querySelector("#tink"),
    KeyX: document.querySelector("#tom"),
  };

const records = [];
let recordingTrack = null;
let recordingTime = 7;
let recordingTimeout;
const recordingTimeSliderLabel = document.querySelector("#recordLenghtLabel");
const recordingTimeSlider = document.querySelector("#recordLenght");

recordingTimeSlider.addEventListener("input", (e) => {
recordingTime = recordingTimeSlider.value;
recordingTimeSliderLabel.innerHTML =
    "recording time: " + recordingTimeSlider.value + " seconds";
});

document.body.addEventListener("keydown", (e) => {
    playsound(control[e.code]);
    saveSound(control[e.code]);
});

const playsound = (soundNode) => {
    const sound = soundNode.cloneNode();
    sound.onended = () => { delete sound; };
    sound.play();
};
const saveSound = (soundNode) => {
    if (recordingTrack !== null) {
        const rec = records[recordingTrack].rec;
        const start = records[recordingTrack].start;
        rec.push({ offset: Date.now() - start, node: soundNode });
    }
};

const stopRecording = () => {
    recordingTrack = null;
    clearTimeout(recordingTimeout);
    document.querySelectorAll(".recordBtn").forEach((element, num) => {
        element.classList.replace("darken", "lighten");
    });
};

const startRecording = (track) => {
    stopRecording();
    document.querySelectorAll(".recordBtn")[track].classList.replace("lighten", "darken");
    records[track] = { start: Date.now(), rec: [] };
    recordingTrack = track;
    recordingTimeout = setTimeout(() => {
        stopRecording();
    }, recordingTime * 1000);
};

document.querySelectorAll(".recordBtn").forEach((element, num) => {
    element.addEventListener("click", () => {
        if (recordingTrack == num) stopRecording();
        else startRecording(num);
    });
});

document.querySelector("#playAll").addEventListener("click", () => {
    stopRecording();
    records.forEach((track) => {
        track.rec.forEach((soundObj) => {
            setTimeout(() => {
                playsound(soundObj.node);
            }, soundObj.offset);
        });
    });
});

document.querySelectorAll(".playBtn").forEach((element, num) => {
    element.addEventListener("click", () => {
        records[num].rec.forEach((soundObj) => {
            setTimeout(() => {
                playsound(soundObj.node);
            }, soundObj.offset);
        });
    });
});