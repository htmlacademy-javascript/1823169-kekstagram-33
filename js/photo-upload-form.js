import {initializeScale} from './photo-size-scale.js';
import {openModal, closeModal, isEscapeKey} from './utils.js';
import {pristine, photoUploadForm, newPhotoHashtagsInput} from './pristine.js';

const photoUploadWindow = document.querySelector('.img-upload__overlay');
const photoUploadOpen = document.querySelector('.img-upload__input');
const newPhotoDescriptionInput = document.querySelector('.text__description');
const newPhotoInputs = [newPhotoHashtagsInput, newPhotoDescriptionInput];
const newPhotoSubmit = document.querySelector('.img-upload__submit');
const newPhotoClose = document.querySelector('.img-upload__cancel');

newPhotoInputs.forEach (input => {
  input.addEventListener('keydown', function (evt) {
    if (isEscapeKey (evt)) {
      evt.stopPropagation();
    }
  });
});

photoUploadOpen.addEventListener('change', () => {
  openModal(photoUploadWindow);
  initializeScale();
});

photoUploadForm.addEventListener('input', () => {
  const isFormValid = pristine.validate();
  newPhotoSubmit.disabled = !isFormValid;
});

newPhotoClose.addEventListener('click', () => {
  closeModal(photoUploadWindow);
});

export {newPhotoHashtagsInput};
