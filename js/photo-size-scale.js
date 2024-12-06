import {SIZE_SCALE} from './constants.js';

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');

let currentScale = SIZE_SCALE.DEFAULT;
let photoPreviewElement = null;

const updateScaleValue = () => {
  scaleControlValue.value = `${currentScale}%`;
};

const updatePhotoScale = () => {
  if (photoPreviewElement) {
    photoPreviewElement.style.transform = `scale(${currentScale / 100})`;
  }
};

const clickOnScaleControlSmaller = () => {
  if (currentScale > SIZE_SCALE.MIN) {
    currentScale -= SIZE_SCALE.STEP;
    updateScaleValue();
    updatePhotoScale();
  }
};

const clickOnScaleControlBigger = () => {
  if (currentScale < SIZE_SCALE.MAX) {
    currentScale += SIZE_SCALE.STEP;
    updateScaleValue();
    updatePhotoScale();
  }
};

const initializeScale = (previewElement) => {
  photoPreviewElement = previewElement;
  currentScale = SIZE_SCALE.DEFAULT;
  updateScaleValue();
  updatePhotoScale();
};

scaleControlSmaller.addEventListener('click', clickOnScaleControlSmaller);
scaleControlBigger.addEventListener('click', clickOnScaleControlBigger);

export {initializeScale};
