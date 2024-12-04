import {getNewPhotoPreview} from './photo-upload-form.js';
import {EFFECTS} from './constants.js';

const effectsList = document.querySelector('.effects__list');
const effectLevel = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelContainer = document.querySelector('.img-upload__effect-level');

let currentEffect = EFFECTS.none;

const updateSliderOptions = () => {
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max
    },
    start: currentEffect.max,
    step: currentEffect.step
  });
};

const applyEffect = (value) => {
  effectLevel.value = value;

  if (currentEffect.name === 'none') {
    getNewPhotoPreview().style.filter = 'none';
    effectLevelContainer.style.display = 'none';
  } else {
    getNewPhotoPreview().style.filter = `${currentEffect.filter}(${value}${currentEffect.unit})`;
    effectLevelContainer.style.display = 'block';
  }
};

noUiSlider.create(effectLevelSlider, {
  range: {
    min: currentEffect.min,
    max: currentEffect.max
  },
  start: currentEffect.max,
  step: currentEffect.step,
  connect: 'lower',
});

effectLevelSlider.noUiSlider.on('update', () => {
  const sliderValue = effectLevelSlider.noUiSlider.get();
  applyEffect(sliderValue);
});

effectsList.addEventListener('change', (evt) => {
  if (!evt.target.matches('input[type="radio"]')) {
    return;
  }

  currentEffect = EFFECTS[evt.target.value];
  updateSliderOptions();
  applyEffect(currentEffect.max);
});

const initializeSlider = () => {
  currentEffect = EFFECTS.none;
  updateSliderOptions();
  applyEffect(currentEffect.max);
};

export {initializeSlider};
