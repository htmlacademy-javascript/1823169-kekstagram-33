import {DEBOUNCE_TIME} from './constants.js';

const body = document.querySelector('body');

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

function clearInputs () {
  const inputs = document.querySelectorAll('input:not([type="radio"])');
  const textareas = document.querySelectorAll('textarea');

  inputs.forEach((input) => {
    input.value = '';
  });

  textareas.forEach((textarea) => {
    textarea.value = '';
  });
}

function openModal(modalName) {
  modalName.classList.remove('hidden');
  body.classList.add('modal-open');

  const closeOnEscapeKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      const errorElement = document.querySelector('.error');
      evt.preventDefault();

      if (errorElement) {
        return;
      }

      closeModal(modalName);
      document.removeEventListener('keydown', closeOnEscapeKeydown);
    }
  };

  document.addEventListener('keydown', closeOnEscapeKeydown);
}

function closeModal (modalName) {
  modalName.classList.add('hidden');
  body.classList.remove('modal-open');
  clearInputs();
}

function debounce (callback, timeoutDelay = DEBOUNCE_TIME) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

function shuffleArray(elements) {
  const shuffledElements = [...elements];

  for (let i = shuffledElements.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledElements[i], shuffledElements[j]] = [shuffledElements[j], shuffledElements[i]];
  }

  return shuffledElements;
}

export {openModal, closeModal, isEnterKey, isEscapeKey, body, shuffleArray, debounce};
