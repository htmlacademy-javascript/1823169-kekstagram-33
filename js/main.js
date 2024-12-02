import {renderPhotosThumbnails} from './photo-thumbnails.js';
import {getData} from './api.js';
import {showDataError} from './show-message.js';
import './photo-upload-form.js';

getData()
  .then((data) => {
    renderPhotosThumbnails(data);
  })
  .catch(() => {
    showDataError();
  });

