import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const inputEmailEL = document.querySelector('[name="email"]');
const messageEl = document.querySelector('[name="message"]');
const buttonEl = document.querySelector('button');
const formEl = document.querySelector('.feedback-form');

const data = {
  email: '',
  message: '',
};

if (localStorage.getItem(STORAGE_KEY) !== null) {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedData);
  inputEmailEL.value = parsedData.email;
  messageEl.textContent = parsedData.message;

  data.email = `${parsedData.email}`;
  data.message = `${parsedData.message}`;
}

formEl.addEventListener('input', throttle(handleInput, 500));
formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  if (inputEmailEL.value.trim() === '' || messageEl.value.trim() === '') {
    alert('Будь ласка, заповніть всі поля форми!!!');
    return;
  }
  if (localStorage.getItem(STORAGE_KEY) !== null) {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  }

  formEl.reset();
  messageEl.textContent = '';
  localStorage.clear();
  data.email = '';
  data.message = '';
}

function handleInput(event) {
  if (event.target.tagName === 'INPUT') {
    data.email = event.target.value;
  }
  if (event.target.tagName === 'TEXTAREA') {
    data.message = event.target.value;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
