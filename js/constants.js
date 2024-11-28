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

const NAMES_OF_COMMENTATORS = [
  'Неопознанный Енот',
  'Опознанный Енот',
  'РоМаШеЧкА',
  'Ирина',
  'Andrey777',
  'Пётр',
  'Геннадий Александрович',
  'l0lla',
  'Сиреневенькая Глазовыколупывательница',
  'Аня'
];

const COMMENTS_ABOUT_PHOTO = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS_PHOTO = [
  'Утренний туман над спокойным озером.',
  'Яркие цветы цветут в летнем саду.',
  'Прекрасный закат окрашивает небосвод в розовый.',
  'Дети играют на зелёном травяном лужайке.',
  'Горы покрыты белоснежным зимним покровом.',
  'Старинный мост свисает над рекой.',
  'Улыбка счастливой пары под дождём.',
  'Солнечные лучи пробиваются сквозь деревья.',
  'Уютная кофейня на улице в осенний день.',
  'Корабли на горизонте солнцем залиты.'
];

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

export {PHOTO_DESCRIPTION_ARRAY_LENGTH,
  COMMENTS_QUANTITY,
  AVATARS_QUANTITY,
  LIKES_QUANTITY,
  NAMES_OF_COMMENTATORS,
  COMMENTS_ABOUT_PHOTO,
  DESCRIPTIONS_PHOTO,
  COMMENTS_PER_PORTION,
  SIZE_SCALE,
  EFFECTS};
