import {validateHashtags} from './hashtags.js';
import {validateDescription} from './photo-description.js';
import {MAX_DESCRIPTION_LENGTH} from './constants.js';

const photoUploadForm = document.querySelector('.img-upload__form');
const newPhotoHashtagsInput = document.querySelector('.text__hashtags');
const newPhotoDescriptionInput = document.querySelector('.text__description');

const pristine = new Pristine(photoUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

pristine.addValidator (
  newPhotoHashtagsInput,
  (value) => validateHashtags(value).isValid,
  (value) => validateHashtags(value).errorMessage
);

pristine.addValidator(
  newPhotoDescriptionInput,
  validateDescription,
  `Длина описания не должна превышать ${MAX_DESCRIPTION_LENGTH} символов`
);

export {pristine, photoUploadForm, newPhotoHashtagsInput, newPhotoDescriptionInput};
