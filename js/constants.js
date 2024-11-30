const BASE_URL = 'https://32.javascript.htmlacademy.pro/kekstagram';

const ROUTE = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const PHOTO_DESCRIPTION_ARRAY_LENGTH = 25;

const COMMENTS_QUANTITY = {
  min: 0,
  max: 30
};

const AVATARS_QUANTITY = {
  min: 1,
  max: 6
};

const LIKES_QUANTITY = {
  min: 15,
  max: 200
};

const COMMENTS_PER_PORTION = 5;

const MAX_HASHTAGS = 5;

const MAX_DESCRIPTION_LENGTH = 140;

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
  PHOTO_DESCRIPTION_ARRAY_LENGTH,
  COMMENTS_QUANTITY,
  AVATARS_QUANTITY,
  LIKES_QUANTITY,
  MAX_HASHTAGS,
  MAX_DESCRIPTION_LENGTH,
  COMMENTS_PER_PORTION,
  SIZE_SCALE,
  EFFECTS};
