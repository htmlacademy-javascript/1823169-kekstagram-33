import {getRandomNumber, getRandomArrayElement} from './utils.js';
import {PHOTO_DESCRIPTION_ARRAY_LENGTH,
  COMMENTS_QUANTITY,
  AVATARS_QUANTITY,
  LIKES_QUANTITY,
  NAMES_OF_COMMENTATORS,
  COMMENTS_ABOUT_PHOTO,
  DESCRIPTIONS_PHOTO} from './constants.js';

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

export {createPhotoDescriptionArray};
