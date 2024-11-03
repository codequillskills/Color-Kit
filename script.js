const pickerSection = document.querySelector('.container .picker')
const btns = document.querySelector('.container .btns')
const allranges = document.querySelectorAll('.container .picker input');
const redrange = allranges[0];
const greenrange = allranges[1];
const bluerange = allranges[2];
const btn = document.querySelectorAll('.container .btns input');
const genereteBtn = btn[0];
const colorShow = btn[1];
const copyBtn = btn[2];

redrange.classList.add('red');
greenrange.classList.add('green');
bluerange.classList.add('blue');

let redColor = Number(redrange.value);
let greenColor = Number(greenrange.value);
let blueColor = Number(bluerange.value);

function generateRandomNumber() {
    return Math.floor(Math.random() * 256);
}

function displayColor() {
    document.body.style.backgroundColor = `rgb(${redColor},${greenColor},${blueColor})`;
    pickerSection.style.backgroundColor = `rgb(${redColor},${greenColor},${blueColor})`;
    btns.style.backgroundColor = `rgb(${redColor},${greenColor},${blueColor})`;
    console.log(`rgb(${redColor},${greenColor},${blueColor})`);
    colorShow.value = `rgb(${redColor},${greenColor},${blueColor})`;
}

function updateColor() {
    console.log(redColor, greenColor, blueColor);
    console.log(typeof (redColor), typeof (greenColor), typeof (blueColor));
    displayColor();
}

function updateRanges() {
    redrange.value = redColor;
    greenrange.value = greenColor;
    bluerange.value = blueColor;
}

function generateColor() {
    redColor = generateRandomNumber();
    greenColor = generateRandomNumber();
    blueColor = generateRandomNumber();
    updateColor();
    updateRanges();
}

genereteBtn.addEventListener('click', function () {
    generateColor();
});

copyBtn.addEventListener('click', function () {
    copyBtn.value = "Copied";
    setTimeout(() => {
        copyBtn.value = "Copy Color"
    }, 1000);
    navigator.clipboard.writeText(`rgb(${redColor},${greenColor},${blueColor})`);
});

redrange.addEventListener('input', function () {
    redColor = Number(redrange.value);
    updateColor();
});

greenrange.addEventListener('input', function () {
    greenColor = Number(greenrange.value);
    updateColor();
});

bluerange.addEventListener('input', function () {
    blueColor = Number(bluerange.value);
    updateColor();
});