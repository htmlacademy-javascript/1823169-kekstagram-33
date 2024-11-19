const body = document.querySelector('body');

const getRandomNumber = (minNumber, maxNumber) => {
  const lower = Math.ceil(Math.min(minNumber, maxNumber));
  const upper = Math.floor(Math.max(minNumber, maxNumber));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

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

export {getRandomNumber, getRandomArrayElement, openModal, closeModal, isEnterKey};
