import { EFFECTS } from './constants.js';

const effectsList = document.querySelector('.effects__list');
const effectLevel = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelContainer = document.querySelector('.img-upload__effect-level');

let currentEffect = EFFECTS.none;
let imageElement;

const resetEffect = () => {
  currentEffect = EFFECTS.none;
  if (imageElement) {
    imageElement.style.filter = 'none';
  }
  effectLevelContainer.style.display = 'none';
  const noneEffect = effectsList.querySelector('input[value="none"]');
  if (noneEffect) {
    noneEffect.checked = true;
  }
};

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
    imageElement.style.filter = 'none';
    effectLevelContainer.style.display = 'none';
  } else {
    imageElement.style.filter = `${currentEffect.filter}(${value}${currentEffect.unit})`;
    effectLevelContainer.style.display = 'block';
  }
};

const initializeSlider = (element) => {
  imageElement = element;
  resetEffect();

  if (effectLevelSlider.noUiSlider) {
    effectLevelSlider.noUiSlider.destroy();
  }

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
};

const destroySlider = () => {
  if (effectLevelSlider.noUiSlider) {
    effectLevelSlider.noUiSlider.destroy();
  }
  effectLevelContainer.style.display = 'none';
  resetEffect();
};

export {initializeSlider, destroySlider};
