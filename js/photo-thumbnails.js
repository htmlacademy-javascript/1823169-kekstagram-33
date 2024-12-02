import {isEnterKey} from './utils.js';
import {openBigPhoto} from './big-photo.js';

const containerPhotosThumbnails = document.querySelector('.pictures');
const photoThumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPhotoThumbnail = (photoData) => {
  const photoThumbnail = photoThumbnailTemplate.cloneNode(true);

  photoThumbnail.querySelector('.picture__img').src = photoData.url;
  photoThumbnail.querySelector('.picture__img').alt = photoData.description;
  photoThumbnail.querySelector('.picture__comments').textContent = photoData.comments.length;
  photoThumbnail.querySelector('.picture__likes').textContent = photoData.likes;

  photoThumbnail.addEventListener('click', () => {
    openBigPhoto(photoData);
  });

  photoThumbnail.addEventListener('keydown', (evt) => {
    if (isEnterKey (evt)) {
      openBigPhoto(photoData);
    }
  });

  return photoThumbnail;
};

const renderPhotosThumbnails = (photosList) => {
  const fragment = document.createDocumentFragment();

  photosList.forEach((photo, index) => {
    const thumbnail = createPhotoThumbnail(photo, index);
    fragment.appendChild(thumbnail);
  });

  containerPhotosThumbnails.appendChild(fragment);
};

export {renderPhotosThumbnails, containerPhotosThumbnails};


