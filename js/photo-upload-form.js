import {initializeScale} from './photo-size-scale.js';
import {initializeSlider, destroySlider} from './photo-effects.js';
import {openModal, closeModal, isEscapeKey} from './utils.js';
import {pristine, photoUploadForm, newPhotoHashtagsInput, newPhotoDescriptionInput} from './pristine.js';
import {showError, showSuccess} from './show-message.js';
import {sendData} from './api.js';
import {FILE_TYPES} from './constants.js';

const photoUploadWindow = document.querySelector('.img-upload__overlay');
const photoUploadOpen = document.querySelector('.img-upload__input');
const newPhotoInputs = [newPhotoHashtagsInput, newPhotoDescriptionInput];
const newPhotoSubmit = document.querySelector('.img-upload__submit');
const newPhotoClose = document.querySelector('.img-upload__cancel');

const newPhotoPreview = document.querySelector('.img-upload__preview').querySelector('img');

newPhotoInputs.forEach ((input) => {
  input.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.stopPropagation();
    }
  });
});

photoUploadOpen.addEventListener('change', () => {
  const file = photoUploadOpen.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    newPhotoPreview.src = URL.createObjectURL(file);
  }

  initializeScale(newPhotoPreview);
  initializeSlider(newPhotoPreview);
  openModal(photoUploadWindow);
});

photoUploadForm.addEventListener('input', () => {
  const isFormValid = pristine.validate();
  newPhotoSubmit.disabled = !isFormValid;
});

photoUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  newPhotoSubmit.disabled = true;
  sendData(new FormData(evt.target))
    .then(() => {
      showSuccess();
      destroySlider(newPhotoPreview);
      closeModal(photoUploadWindow);
    })
    .catch((err) => {
      showError();
    })

    .finally(() => {
      newPhotoSubmit.disabled = false;
    });
});

newPhotoClose.addEventListener('click', () => {
  destroySlider(newPhotoPreview);
  closeModal(photoUploadWindow);
});