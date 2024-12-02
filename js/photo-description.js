import {MAX_DESCRIPTION_LENGTH} from './constants.js';

function validateDescription (value) {
  if (value.length > MAX_DESCRIPTION_LENGTH) {
    return false;
  }
  return true;
}

export {validateDescription};
