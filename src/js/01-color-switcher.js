const startRef = document.querySelector('button[data-start]');
const stopRef = document.querySelector('button[data-stop]');
const bodyRef = document.querySelector('body');

let timeId = null;
startRef.addEventListener('click', clickOnBtn);
stopRef.addEventListener('click', stopSwitch);




function clickOnBtn() {
    timeId = setInterval(() => { return bodyRef.style.backgroundColor = getRandomHexColor() }, 1000);
    startRef.setAttribute('disabled', '');

}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


function stopSwitch() {
    clearInterval(timeId);
    startRef.removeAttribute('disabled');
}

