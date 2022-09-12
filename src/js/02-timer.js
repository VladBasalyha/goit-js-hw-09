import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';
require('flatpickr/dist/themes/material_orange.css');
// references for our input and timer value
const refs = {
  setTimerBtn: document.querySelector('[data-start]'),
  daysSpan: document.querySelector('[data-days]'),
  hoursSpan: document.querySelector('[data-hours]'),
  minutesSpan: document.querySelector('[data-minutes]'),
  secondsSpan: document.querySelector('[data-seconds]'),
};
const { setTimerBtn, daysSpan, hoursSpan, minutesSpan, secondsSpan } = refs;
// default value of current time which we choose
let currentTime = new Date();
let selectedDatesUTC = 0;
let intervalId = null;
setTimerBtn.addEventListener('click', toStartTimer);
// disable button till we choose date in future
setTimerBtn.disabled = true;
// options for flatpickr library
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDatesUTC = selectedDates[0].getTime();
    if (selectedDates[0].getTime() < currentTime.getTime()) {
      Notiflix.Notify.failure('Please choose a date in the future', {
        timeout: 2000,
      });
      setTimerBtn.disabled = true;
    } else setTimerBtn.disabled = false;
  },
};
flatpickr('#datetime-picker', options);
// init

function toStartTimer() {
  setTimerBtn.disabled = true;
  intervalId = setInterval(() => {
    let nowUTC = new Date().getTime();
    getTimerValue(nowUTC);
    let sumDateValue = days + hours + minutes + seconds;

    if (sumDateValue === 0) {
      clearInterval(intervalId);
    }
    daysSpan.textContent = padStart(days);
    hoursSpan.textContent = padStart(hours);
    minutesSpan.textContent = padStart(minutes);
    secondsSpan.textContent = padStart(seconds);
  }, 1000);
}
function getTimerValue(now) {
  let timerValue = convertMs(selectedDatesUTC - now);
  return ({ days, hours, minutes, seconds } = timerValue);
}

// add calendar with options from flatpickr

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function padStart(numb) {
  return String(numb).padStart(2, 0);
}
