import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast/dist/js/iziToast.min.js';

// const inputEl = document.querySelector('.form-delay-input');
// console.log(inputEl);

const formEl = document.querySelector('form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target.elements;
  const delay = form.delay.value;
  console.log(delay);
  const state = form.state.value;
  console.log(state);
}
