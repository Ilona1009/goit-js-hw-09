
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';



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
        if (DATE < Date.now() ) {
            Notiflix.Notify.warning("Please choose a date in the future");
            refs.startbBtn.setAttribute('disabled', '');
        }
        else {
            Notiflix.Notify.success('Click on Start!!!');
            refs.startbBtn.removeAttribute('disabled');
        }
    },
}

flatpickr(refs.myInput, options);

class Timer {
    constructor({onTick}) {
        this.isActive = false;
        this.intervalId = null;
        this.onTick = onTick;
    }

    start() {
        if (this.isActive) {
            return
        }

        const finishTime = DATE;

        this.isActive = true;
        this.intervalId = setInterval(() => {
            if (finishTime <= Date.now()) {
                clearInterval(this.intervalId);
                Notiflix.Notify.info('Game over');
                return
            }

            const dataNow = Date.now();
            const deltaTime = finishTime - dataNow;    
            const time = this.convertMs(deltaTime);
            this.onTick(time);

        }, 1000);
    }

        addLeadingZero(value){
            return String(value).padStart(2, '0');
    }

        convertMs(ms) {
            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            const days = this.addLeadingZero(Math.floor(ms / day));
            const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
            const minutes = this.addLeadingZero(Math.floor(((ms % day) % hour) / minute));
            const seconds = this.addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

            return { days, hours, minutes, seconds };
    }
   
    }

 function updateClockFace({ days, hours, minutes, seconds }) {
            refs.days.textContent = days; 
            refs.hours.textContent = hours;  
            refs.minutes.textContent = minutes;  
            refs.seconds.textContent = seconds;

}
        
const time = new Timer({
    onTick: updateClockFace
})

refs.startbBtn.addEventListener('click', time.start.bind(time))





