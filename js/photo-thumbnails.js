import {createPhotoDescriptionArray} from './photo-data.js';

const containerPhotosThumbnails = document.querySelector('.pictures');
const photoThumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photosThumbnailsList = createPhotoDescriptionArray();

const createPhotoThumbnail = (photoData, index) => {
  const photoThumbnail = photoThumbnailTemplate.cloneNode(true);

  photoThumbnail.querySelector('.picture__img').src = photoData.url;
  photoThumbnail.querySelector('.picture__img').alt = photoData.description;
  photoThumbnail.querySelector('.picture__comments').textContent = photoData.comments.length;
  photoThumbnail.querySelector('.picture__likes').textContent = photoData.likes;
  photoThumbnail.dataset.index = index;

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

export {renderPhotosThumbnails, photosThumbnailsList, containerPhotosThumbnails};


