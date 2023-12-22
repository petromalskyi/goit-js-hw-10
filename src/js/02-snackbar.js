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
  const state = form.state.value;
  formEl.reset();

  //   setTimeout(() => {
  // if (state === 'fulfilled') {
  //   //   console.log(`✅ Fulfilled promise in ${delay}ms`);
  //   iziToast.success({
  //     title: 'OK',
  //     message: `✅ Fulfilled promise in ${delay}ms`,
  //     position: 'topRight',
  //     messageColor: '#ffffff',
  //     titleColor: '#ffffff',
  //     iconColor: '#ffffff',
  //     backgroundColor: '#59A10D',
  //   });
  // } else {
  //   //   console.error(`❌ Rejected promise in ${delay}ms`);
  //   iziToast.error({
  //     title: 'Error',
  //     message: `❌ Rejected promise in ${delay}ms`,
  //     position: 'topRight',
  //     messageColor: '#ffffff',
  //     titleColor: '#ffffff',
  //     iconColor: '#ffffff',
  //     backgroundColor: '#B51B1B',
  //   });
  // }
  //   }, delay);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  promise
    .then(value => {
      iziToast.success({
        title: 'OK',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        messageColor: '#ffffff',
        titleColor: '#ffffff',
        iconColor: '#ffffff',
        backgroundColor: '#59A10D',
      });
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
        messageColor: '#ffffff',
        titleColor: '#ffffff',
        iconColor: '#ffffff',
        backgroundColor: '#B51B1B',
      });
    })
    .finally(() => console.log('Promise settled')); // "Promise settled"
}
