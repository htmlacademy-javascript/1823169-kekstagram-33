import {createPhotoDescriptionArray} from './create-photo-description.js';

const containerPhotosThumbnails = document.querySelector('.pictures');
const photoThumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photosThumbnailsList = createPhotoDescriptionArray();
const photosThumbnailFragment = document.createDocumentFragment();

photosThumbnailsList.forEach(({url, description, comments, likes}) => {
  const photoThumbnail = photoThumbnailTemplate.cloneNode(true);
  photoThumbnail.querySelector('.picture__img').src = url;
  photoThumbnail.querySelector('.picture__img').alt = description;
  photoThumbnail.querySelector('.picture__comments').textContent = comments.length;
  photoThumbnail.querySelector('.picture__likes').textContent = likes;
  photosThumbnailFragment.appendChild(photoThumbnail);
});

containerPhotosThumbnails.appendChild(photosThumbnailFragment);

