import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const btnEl = document.querySelector('button[data-start]');
const inputEl = document.querySelector('#datetime-picker');

const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

let endTime;
let startTime;
let days;
let seconds;
let hours;
let minutes;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    endTime = selectedDates[0].getTime();

    if (endTime > Date.now()) {
      btnEl.removeAttribute('disabled');
      inputEl.value = dateTime.selectedDates[0];
      console.log(selectedDates[0]);
    } else {
      btnEl.setAttribute('disabled', '');
      // izitoast.show({
      //   title: 'Error',
      //   color: red,
      //   message: 'Please choose a date in the future',
      // });

      alert('Please choose a date in the future'); /// треба підключити бібліотеку
    }
  },
};

btnEl.addEventListener('click', onClick);

function onClick(event) {
  startTime = Date.now();
  btnEl.setAttribute('disabled', '');

  console.log('click', dateTime.selectedDates[0]);

  let differenceOfTime = endTime - startTime;

  const intervalId = setInterval(() => {
    differenceOfTime -= 1000;
    if (differenceOfTime > 0) {
      convertMs(differenceOfTime);
      daysEl.textContent = days;
      hoursEl.textContent = hours;
      minutesEl.textContent = minutes;
      secondsEl.textContent = seconds;
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  days = String(Math.floor(ms / day)).padStart(2, '0');
  // Remaining hours
  hours = String(Math.floor((ms % day) / hour)).padStart(2, '0');
  // Remaining minutes
  minutes = String(Math.floor(((ms % day) % hour) / minute)).padStart(2, '0');
  // Remaining seconds
  seconds = String(
    Math.floor((((ms % day) % hour) % minute) / second),
  ).padStart(2, '0');

  return { days, hours, minutes, seconds };
}

const dateTime = flatpickr(inputEl, options);
