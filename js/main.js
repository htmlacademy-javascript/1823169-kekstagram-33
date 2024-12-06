import {renderPhotosThumbnails} from './photo-thumbnails.js';
import {getData} from './api.js';
import {showDataError} from './show-message.js';
import {initializeThumbnailsFilters} from './thumbnails-filter.js';
import './photo-upload-form.js';

getData()
  .then((data) => {
    renderPhotosThumbnails(data);
    initializeThumbnailsFilters(data);
  })
  .catch(() => {
    showDataError();
  });
