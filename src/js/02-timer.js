import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';
require('flatpickr/dist/themes/material_orange.css');
// references for our input and timer value
const refs = {
  inputDate: document.querySelector('#datetime-picker '),
  setTimerBtn: document.querySelector('[data-start]'),
  daysSpan: document.querySelector('[data-days]'),
  hoursSpan: document.querySelector('[data-hours]'),
  minutesSpan: document.querySelector('[data-minutes]'),
  secondsSpan: document.querySelector('[data-seconds]'),
};
const {
  inputDate,
  setTimerBtn,
  daysSpan,
  hoursSpan,
  minutesSpan,
  secondsSpan,
} = refs;
// default value of current time which we choose
let selectedTime;
let currentTime = new Date();
let selectedDatesUTC = 0;
let intervalId = null;
setTimerBtn.disabled = true;
setTimerBtn.addEventListener('click', toStartTimer);

function toStartTimer() {
  inputDate.disabled = true;
  setTimerBtn.disabled = true;
  intervalId = setInterval(() => {
    let nowUTC = new Date().getTime();
    getTimerValue(nowUTC);
    let sumDateValue = daysData + hours + minutes + seconds;
    if (sumDateValue === 0) {
      clearInterval(intervalId);
    }
    daysSpan.textContent = padStart(daysData);
    hoursSpan.textContent = padStart(hours);
    minutesSpan.textContent = padStart(minutes);
    secondsSpan.textContent = padStart(seconds);
  }, 1000);
}

function getTimerValue(now) {
  let timerValue = convertMs(selectedDatesUTC - now);
  return ({ daysData, hoursData, minutesData, secondsData } = timerValue);
}
// disable button till we choose date in future

// options for flatpickr library
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= Date.now()) {
      Notify.failure('Please choose a date in the future');
    } else {
      selectedTime = selectedDates[0];
      refs.startBtn.disabled = false;
    }
  },
};
flatpickr(inputDate, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining daysData
  const daysData = Math.floor(ms / day);
  // Remaining hours
  const hoursData = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutesData = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const secondsData = Math.floor((((ms % day) % hour) % minute) / second);

  return { daysData, hours, minutes, seconds };
}

function padStart(numb) {
  return String(numb).padStart(2, 0);
}
