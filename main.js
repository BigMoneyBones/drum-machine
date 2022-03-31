// Sound Variables
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const hiHat = new Audio('sounds/hi-hat.mp3');
const kickDrum = new Audio('sounds/kick-drum.mp3');
const snareDrum = new Audio('sounds/snare-drum.mp3');

// Additional Variables
let metroCount = 0;


// Query Selectors
const displayCounter = document.querySelector('.displayCounter');
const metronomeCheckbox = document.querySelector('#metronome');
const hiHatCheckbox = document.querySelector('#hi-hat');
const kickDrumCheckbox = document.querySelector('#kick-drum');
const snareDrumCheckbox = document.querySelector('#snare-drum');
const kickDrumTiming = document.querySelector('#kick-drum-timing');
const snareDrumTiming = document.querySelector('#snare-drum-timing');
const hiHatTiming = document.querySelector('#hi-hat-timing');
const metronomeTiming = document.querySelector('#metronome-timing');

// This function is called every 600ms
function update() {


    if (metroCount > 4) {
        metroCount = 1;
    }

    if (metronomeCheckbox.checked) {

        displayCounter.innerText = metroCount;

        if (metroCount % 4 === 0) {
            tock.play();
        } else {
            tick.play();
        }

    }

    if (hiHatCheckbox.checked) {

        displayCounter.innerText = metroCount;

        if (Number(hiHatTiming.value) === metroCount) {

            hiHat.play();

        }
    }

    if (kickDrumCheckbox.checked) {

        displayCounter.innerText = metroCount;

        if (Number(kickDrumTiming.value) === metroCount) {

            kickDrum.play();
        }

    }

    if (snareDrumCheckbox.checked) {

        displayCounter.innerText = metroCount;

        if (Number(snareDrumTiming.value) === metroCount) {

            snareDrum.play();
        }
        
    }

    metroCount ++;

}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
