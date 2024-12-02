const body = document.querySelector('body');

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

function clearInputs () {
  const inputs = document.querySelectorAll('input, textarea');

  inputs.forEach((input) => {
    input.value = '';
  });
}

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
  clearInputs();
}

export {openModal, closeModal, isEnterKey, isEscapeKey, body};
