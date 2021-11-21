'use strict';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', saveFormData);
form.addEventListener('submit', onFormSubmit);

checkFormData();

function saveFormData(event) {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(localStorage.getItem(LOCALSTORAGE_KEY));
}

function checkFormData() {
  const savedFormData = localStorage.getItem(LOCALSTORAGE_KEY);
  const parsedFormData = JSON.parse(savedFormData);
  if (parsedFormData) {
    form.elements.email.value = parsedFormData.email;
    form.elements.message.value = parsedFormData.message;
  }
}
