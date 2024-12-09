import {MAX_HASHTAGS, HASHTAG_REGEX} from './constants.js';


function validateHashtagText (hashtag) {
  return HASHTAG_REGEX.test(hashtag);
}

function validateHashtags (value) {
  const errors = [];
  const hashtags = value.trim().split(' ').filter(Boolean);
  const uniqueHashtags = new Set(hashtags.map((tag) => tag.toLowerCase()));

  if (hashtags.length > MAX_HASHTAGS) {
    errors.push(`Можно использовать не более ${MAX_HASHTAGS} хэштегов.`);
  }

  if (uniqueHashtags.size !== hashtags.length) {
    errors.push('Хэштеги должны быть уникальными.');
  }

  hashtags.forEach((tag) => {
    if (!validateHashtagText(tag)) {
      errors.push(`Хэштег ${tag} не соответствует требованиям: должен начинаться с # и содержать только буквы и цифры (до 19 символов).`);
    }
  });

  return {
    isValid: errors.length === 0,
    errorMessage: errors.join(' ')
  };
}

export {validateHashtags};
