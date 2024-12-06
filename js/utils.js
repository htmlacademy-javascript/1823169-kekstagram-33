import {DEBOUNCE_TIME} from './constants.js';

const body = document.querySelector('body');

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

function openModal (modalName) {
  modalName.classList.remove('hidden');
  body.classList.add('modal-open');

  const onEscapePress = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeModal(modalName);
      document.removeEventListener('keydown', onEscapePress);
    }
  };

  document.addEventListener('keydown', onEscapePress);
}

function closeModal (modalName) {
  modalName.classList.add('hidden');
  body.classList.remove('modal-open');
}

function debounce (callback, timeoutDelay = DEBOUNCE_TIME) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

export {openModal, closeModal, isEnterKey, isEscapeKey, body, shuffleArray, debounce};
