'use strict';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', saveFormData);

function saveFormData(event) {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}
