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

const getRandomNumber = (minNumber, maxNumber) => {
  const lower = Math.ceil(Math.min(minNumber, maxNumber));
  const upper = Math.floor(Math.max(minNumber, maxNumber));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

let currentCommentId = 1;
let currentPhotoId = 1;
let currentPhotoLink = 1;

const createPhotoComment = () => ({
  id: currentCommentId++,
  avatar: `../img/avatar-${getRandomNumber(AVATARS_QUANTITY.min, AVATARS_QUANTITY.max)}.svg`,
  message: getRandomArrayElement(COMMENTS_ABOUT_PHOTO),
  name: getRandomArrayElement(NAMES_OF_COMMENTATORS)
});

const createPhotoDescription = () => ({
  id: currentPhotoId++,
  url: `../photos/${currentPhotoLink++}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS_PHOTO),
  likes: getRandomNumber(LIKES_QUANTITY.min, LIKES_QUANTITY.max),
  comments: Array.from({length: getRandomNumber(COMMENTS_QUANTITY.min, COMMENTS_QUANTITY.max)}, createPhotoComment)
});

const createPhotoDescriptionArray = () => {
  const photoDescriptionArray = Array.from({length: PHOTO_DESCRIPTION_ARRAY_LENGTH}, createPhotoDescription);
  return photoDescriptionArray;
};

createPhotoDescriptionArray();
