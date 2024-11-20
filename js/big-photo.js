import {containerComments, renderComments, bigPhotoCommentLoader, shownCommentsCount, changeShownCommentsCount} from './photo-comments.js';
import {openModal, closeModal, isEnterKey} from './utils.js';
import {photosThumbnailsList, containerPhotosThumbnails} from './photo-thumbnails.js';

const bigPhoto = document.querySelector('.big-picture');
const bigPhotoImg = bigPhoto.querySelector('.big-picture__img').querySelector('img');
const bigPhotoLikes = bigPhoto.querySelector('.likes-count');
const bigPhotoTotalComments = bigPhoto.querySelector('.social__comment-total-count');
const bigPhotoDescription = bigPhoto.querySelector('.social__caption');
const bigPhotoClose = bigPhoto.querySelector('.big-picture__cancel');

let currentComments = [];

function createBigPhoto (photoData) {
  bigPhotoImg.src = photoData.url;
  bigPhotoImg.alt = photoData.description;
  bigPhotoLikes.textContent = photoData.likes;
  bigPhotoTotalComments.textContent = photoData.comments.length;
  bigPhotoDescription.textContent = photoData.description;

  containerComments.innerHTML = '';
  changeShownCommentsCount(0);
  currentComments = photoData.comments;

  renderComments(currentComments);
}

function onThumbNailClick (evt) {
  const thumbnail = evt.target.closest('.picture');

  if (thumbnail) {
    const index = parseInt(thumbnail.dataset.index);
    const photoData = photosThumbnailsList[index];
    createBigPhoto(photoData);
    openModal(bigPhoto);
  }
}

containerPhotosThumbnails.addEventListener('click', onThumbNailClick);

containerPhotosThumbnails.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    onThumbNailClick(evt);
  }
});

bigPhotoCommentLoader.addEventListener('click', () => {
  renderComments(currentComments);
});

bigPhotoClose.addEventListener('click', () => {
  closeModal(bigPhoto);
  changeShownCommentsCount(0);
  currentComments = [];
  containerComments.innerHTML = '';
});
