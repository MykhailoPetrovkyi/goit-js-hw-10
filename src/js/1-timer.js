import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('#datetime-picker');
const start = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

let selectedDates = null;
let timerInterval = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(date) {
    selectedDates = date[0];
    if (selectedDates < new Date()) {
      start.disabled = true;
      iziToast.error({
        message: 'Pick a date in the future!',
        position: 'topRight',
      });
    } else {
      start.disabled = false;
    }
    console.log(date[0]);
  },
};

flatpickr(input, options);

start.addEventListener('click', () => {
  input.disabled = true;
  start.disabled = true;

  timerInterval = setInterval(() => {
    let time = selectedDates - new Date();
    console.log(convertMs(time));
    const timeComponents = convertMs(time);
    days.textContent = pad(timeComponents.days);
    hours.textContent = pad(timeComponents.hours);
    minutes.textContent = pad(timeComponents.minutes);
    seconds.textContent = pad(timeComponents.seconds);
  }, 1000);
});

function pad(value) {
  return String(value).padStart(2, '0');
}

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

// console.log(convertMs(2000));
// console.log(convertMs(140000));
// console.log(convertMs(24140000));
