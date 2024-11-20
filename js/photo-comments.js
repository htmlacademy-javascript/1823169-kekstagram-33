import {COMMENTS_PER_PORTION} from './constants.js';

const containerComments = document.querySelector('.social__comments');
const bigPhotoComment = document.querySelector('.social__comment');
const bigPhotoShownComments = document.querySelector('.social__comment-shown-count');
const bigPhotoCommentLoader = document.querySelector('.comments-loader');

const createBigPhotoComment = (commentData) => {
  const bigPhotoCommentClone = bigPhotoComment.cloneNode(true);

  bigPhotoCommentClone.querySelector('.social__picture').src = commentData.avatar;
  bigPhotoCommentClone.querySelector('.social__picture').alt = commentData.name;
  bigPhotoCommentClone.querySelector('.social__text').textContent = commentData.message;

  return bigPhotoCommentClone;
};

let shownCommentsCount = 0;

// функция для возможности изменять переменную в другом модуле
const changeShownCommentsCount = (value) => {
  shownCommentsCount = value;
};

const renderComments = (commentsList) => {
  const fragment = document.createDocumentFragment();
  const startIndex = shownCommentsCount;
  const endIndex = startIndex + COMMENTS_PER_PORTION;
  const commentsToShow = commentsList.slice(startIndex, endIndex);

  commentsToShow.forEach((commentData) => {
    const commentElement = createBigPhotoComment(commentData);
    fragment.appendChild(commentElement);
  });

  changeShownCommentsCount(shownCommentsCount + commentsToShow.length);

  if (shownCommentsCount >= commentsList.length) {
    bigPhotoCommentLoader.classList.add('hidden');
  } else {
    bigPhotoCommentLoader.classList.remove('hidden');
  }

  containerComments.appendChild(fragment);
};

export {containerComments, renderComments, bigPhotoCommentLoader, changeShownCommentsCount};
