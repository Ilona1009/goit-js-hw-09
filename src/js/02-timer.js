
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

const timer =  {
    start() {
        const startTime = DATE;

        setInterval(() => {
            const dataNow = Date.now();
            console.log(startTimed - startTime)
    
        }, 1000)
    },
}

timer.start()

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


