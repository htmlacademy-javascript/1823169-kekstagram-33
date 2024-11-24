import {containerComments, renderComments, bigPhotoCommentLoader, changeShownCommentsCount} from './photo-comments.js';
import {closeModal} from './utils.js';

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

bigPhotoCommentLoader.addEventListener('click', () => {
  renderComments(currentComments);
});

bigPhotoClose.addEventListener('click', () => {
  closeModal(bigPhoto);
  changeShownCommentsCount(0);
  currentComments = [];
  containerComments.innerHTML = '';
});

export {createBigPhoto, bigPhoto};
