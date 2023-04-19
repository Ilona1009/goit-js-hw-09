
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    myInput: document.getElementById("datetime-picker"),
    startbBtn: document.querySelector('button[data-start]'),
    days : document.querySelector('[data-days]'),
    hours : document.querySelector('[data-hours]'),
    minutes : document.querySelector('[data-minutes]'),
    seconds : document.querySelector('[data-seconds]'),
}

let DATE = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        DATE = selectedDates[0];
        if (DATE < Date.now()) {
            window.alert("Please choose a date in the future");
            refs.startbBtn.setAttribute('disabled', '');
        }
        else {
            window.alert.success('Click on Start!!!');
            refs.startbBtn.removeAttribute('disabled');
        }
    },
}

flatpickr(refs.myInput, options);

class Timer {
    constructor() {
    
    }

    start() {
        const startTime = DATE;

        setInterval(() => {
            const dataNow = Date.now();
            const deltaTime = startTime - dataNow;
            console.log(convertMs(deltaTime))
            
        }, 1000);
    }

        padStart(value){
            return String(value).padStart(2, '0');
    }

        convertMs(ms) {
            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            const days = padStart(Math.floor(ms / day));
            const hours = padStart(Math.floor((ms % day) / hour));
            const minutes = padStart(Math.floor(((ms % day) % hour) / minute));
            const seconds = padStart(Math.floor((((ms % day) % hour) % minute) / second));

            return { days, hours, minutes, seconds };
    }
   
    }

 function updateClockFace({ days, hours, minutes, seconds }) {
            refs.days.textContent = days; 
            refs.hours.textContent = hours;  
            refs.minutes.textContent = minutes;  
            refs.seconds.textContent = seconds;

        }




