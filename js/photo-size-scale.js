import {SIZE_SCALE} from './constants.js';
import {getNewPhotoPreview} from './photo-upload-form.js';

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');

let currentScale = SIZE_SCALE.DEFAULT;

const updateScaleValue = () => {
  scaleControlValue.value = `${currentScale}%`;
};

const updatePhotoScale = () => {
  getNewPhotoPreview().style.transform = `scale(${currentScale / 100})`;
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

const initializeScale = (changeNewPhotoPreview) => {
  currentScale = SIZE_SCALE.DEFAULT;
  updateScaleValue();
  updatePhotoScale();
};

scaleControlSmaller.addEventListener('click', clickOnScaleControlSmaller);

scaleControlBigger.addEventListener('click', clickOnScaleControlBigger);

export {initializeScale};
