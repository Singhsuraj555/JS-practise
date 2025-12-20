const pianoKeys = document.querySelectorAll(".piano-keys .key");

let allkeys = [],
audio = new Audio("tunes/a.wav");

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`
    audio.play();   //playing audio
}

pianoKeys.forEach(key => {
    allkeys.push(key.dataset.key);
    // calling playTune function with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key));
    
});

const pressedKey = (elem) => {
   if(allkeys.includes(elem.key)) playTune(elem.key);
}

document.addEventListener("keydown", pressedKey);