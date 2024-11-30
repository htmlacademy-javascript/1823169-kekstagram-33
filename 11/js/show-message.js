import {body, isEscapeKey} from './utils.js';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');

const showMessage = (template, type) => {
  const message = template.cloneNode(true);
  body.appendChild(message);

  const closeButton = message.querySelector(`.${type}__button`);

  const onEscKeydown = (evt) => {
    if (isEscapeKey (evt)) {
      closeMessage();
    }
  };

  const onOutsideClick = (evt) => {
    const messageInner = message.querySelector(`.${type}__inner`);
    const isClickInside = messageInner.contains(evt.target);

    if (!isClickInside) {
      closeMessage();
    }
  };

  function closeMessage () {
    message.remove();
    document.removeEventListener('keydown', onEscKeydown);
    document.removeEventListener('click', onOutsideClick);
  }

  closeButton.addEventListener('click', closeMessage);
  document.addEventListener('keydown', onEscKeydown);
  document.addEventListener('click', onOutsideClick);

  return message;
};

const showError = () => showMessage(errorTemplate, 'error');

const showSuccess = () => showMessage(successTemplate, 'success');

const showDataError = () => {
  const message = dataErrorTemplate.cloneNode(true);
  body.appendChild(message);

  setTimeout(() => {
    body.removeChild(message);
  }, 5000);
};

export {showError, showDataError, showSuccess};
