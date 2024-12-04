import {renderPhotosThumbnails} from './photo-thumbnails.js';
import {getData} from './api.js';
import {showDataError} from './show-message.js';
import './thumbnails-filter.js';
import './photo-upload-form.js';

let originalPhotosList = [];

getData()
  .then((data) => {
    originalPhotosList = data;
    renderPhotosThumbnails(originalPhotosList);
  })
  .catch(() => {
    showDataError();
  });

export {originalPhotosList};
