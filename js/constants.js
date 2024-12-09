const BASE_URL = 'https://32.javascript.htmlacademy.pro/kekstagram';

const ROUTE = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const COMMENTS_PER_PORTION = 5;

const MAX_HASHTAGS = 5;

const HASHTAG_REGEX = /^#[a-zA-Zа-яА-ЯёЁ0-9]{1,19}$/;

const MAX_DESCRIPTION_LENGTH = 140;

const DEBOUNCE_TIME = 500;

const SHOW_ALERT_TIME = 5000;

const FILE_TYPES = ['jpg', 'jpeg', 'png', 'bmp', 'webp'];

const SIZE_SCALE = {
  MIN: 25,
  MAX: 100,
  DEFAULT: 100,
  STEP: 25
};

const EFFECTS = {
  none: {
    name: 'none',
    filter: '',
    unit: '',
    min: 0,
    max: 100,
    step: 1,
  },

  chrome: {
    name: 'chrome',
    filter: 'grayscale',
    unit: '',
    min: 0,
    max: 1,
    step: 0.1,
  },

  sepia: {
    name: 'sepia',
    filter: 'sepia',
    unit: '',
    min: 0,
    max: 1,
    step: 0.1,
  },

  marvin: {
    name: 'marvin',
    filter: 'invert',
    unit: '%',
    min: 0,
    max: 100,
    step: 1,
  },

  phobos: {
    name: 'phobos',
    filter: 'blur',
    unit: 'px',
    min: 0,
    max: 3,
    step: 0.1,
  },

  heat: {
    name: 'heat',
    filter: 'brightness',
    unit: '',
    min: 1,
    max: 3,
    step: 0.1,
  },
};

export {BASE_URL,
  ROUTE,
  MAX_HASHTAGS,
  HASHTAG_REGEX,
  MAX_DESCRIPTION_LENGTH,
  COMMENTS_PER_PORTION,
  SIZE_SCALE,
  EFFECTS,
  DEBOUNCE_TIME,
  SHOW_ALERT_TIME,
  FILE_TYPES};
