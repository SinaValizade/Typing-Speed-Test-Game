//$in@
let theInput, pText, timer, inputValue, pValue, pArray, inputArray, theButton, randomElement, x = 'isStart';
const simpleText = ['its better to be safe than sorry', 'easy come easy go', 'blood is thicker than water', 'kill two birds with one stone', 'charity begins at home', 'barking dogs seldom bite', 'knowledge is power'];

pText = document.getElementById('p-simple');
theInput = document.getElementById('input-text');
timer = document.querySelector('p.time');
theButton = document.querySelector("button.my-btn");
randomElement = Math.floor(Math.random() * simpleText.length);
pText.innerHTML = simpleText[randomElement];

theInput.addEventListener("keyup", color);
theInput.addEventListener("keyup", start);
theInput.addEventListener("keyup", button);

function color() {
    let x = [];
    inputValue = document.getElementById('input-text').value;
    pValue = document.getElementById('p-simple').innerHTML;
    theInput = document.getElementById('input-text');
    inputArray = inputValue.split('');
    pArray = pValue.split('');
    for (let i = 0; i < inputArray.length; i++) {
        x[i] = pArray[i]
    }
    if (inputValue === '') {
        theInput.style.border = '8px solid #c2c2c2';
    } else if (inputValue === pValue) {
        theInput.style.border = '8px solid #0CC100';
    } else if (isEqual(x, inputArray)) {
        theInput.style.border = '8px solid #FFDC00';
    } else if (!(isEqual(x, inputArray))) {
        theInput.style.border = '8px solid #FF2B2B';
    }
}

function isEqual(arr1, arr2) {
    if (arr1 === arr2) {
        return true;
    }
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

function start() {
    if (x === 'isStart') {
        stopWatch();
        x = 'isEnd';
    }
}

function stopWatch() {
    let stopWatch, m = 0, mQ = 0, s = 0, sQ = 0, ms = 0, msQ = 0;
    stopWatch = setInterval(() => {
        msQ += 1;
        ms = msQ;
        if (ms < 10) {
            ms = '0' + ms
        }
        if (msQ === 99) {
            msQ = 0;
            sQ += 1;
        }
        s = sQ;
        if (s < 10) {
            s = '0' + s
        }
        if (sQ === 59) {
            sQ = 0;
            mQ += 1;
        }
        m = mQ;
        if (m < 10) {
            m = '0' + m
        }
        timer.innerHTML = `${m}:${s}:${ms}`;
        if (inputValue === pValue) {
            clearInterval(stopWatch);
        }
    }, 10);
}

function button() {
    theButton.innerHTML = 'click to play again !';
    theButton.classList.add('end');
}