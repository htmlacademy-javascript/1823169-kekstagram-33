import {validateHashtags} from './hashtags.js';

const photoUploadForm = document.querySelector('.img-upload__form');
const newPhotoHashtagsInput = document.querySelector('.text__hashtags');

const pristine = new Pristine(photoUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

pristine.addValidator (
  newPhotoHashtagsInput,
  (value) => validateHashtags(value).isValid,
  (value) => validateHashtags(value).errorMessage
);

export {pristine, photoUploadForm, newPhotoHashtagsInput};
