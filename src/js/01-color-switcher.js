const startRef = document.querySelector('button[data-start]');
const stopRef = document.querySelector('button[data-stop="stop"]');
const bodyRef = document.querySelector('body');

startRef.addEventListener('click', clickbtn);

let timeId;
function clickbtn() {
    timeId = setInterval(switchColor, 1000);


    if (timeId) {
        return;
    }
}


function switchColor() {
    bodyRef.style.backgroundColor = getRandomHexColor();
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

