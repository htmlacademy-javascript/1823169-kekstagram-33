import {body, isEscapeKey} from './utils.js';
import {SHOW_ALERT_TIME} from './constants.js';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');

const showMessage = (template, type) => {
  const message = template.cloneNode(true);
  body.appendChild(message);

  const closeButton = message.querySelector(`.${type}__button`);

  const closeOnEscapeKeydown = (evt) => {
    if (isEscapeKey (evt)) {
      closeMessage();
    }
  };

  const closeOnnOutsideClick = (evt) => {
    const messageInner = message.querySelector(`.${type}__inner`);
    const isClickInside = messageInner.contains(evt.target);

    if (!isClickInside) {
      closeMessage();
    }
  };

  function closeMessage () {
    message.remove();
    document.removeEventListener('keydown', closeOnEscapeKeydown);
    document.removeEventListener('click', closeOnnOutsideClick);
  }

  closeButton.addEventListener('click', closeMessage);
  document.addEventListener('keydown', closeOnEscapeKeydown);
  document.addEventListener('click', closeOnnOutsideClick);

  return message;
};

const showError = () => showMessage(errorTemplate, 'error');

const showSuccess = () => showMessage(successTemplate, 'success');

const showDataError = () => {
  const message = dataErrorTemplate.cloneNode(true);
  body.appendChild(message);

  setTimeout(() => {
    body.removeChild(message);
  }, SHOW_ALERT_TIME);
};

export {showError, showDataError, showSuccess};
