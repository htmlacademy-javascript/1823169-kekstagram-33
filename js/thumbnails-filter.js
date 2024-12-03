import {renderPhotosThumbnails, containerPhotosThumbnails} from './photo-thumbnails.js';
import {shuffleArray, debounce} from './utils.js';
import {originalPhotosList} from './main.js';

const thumbnailsFilters = document.querySelector('.img-filters');
const filterButtons = document.querySelectorAll('.img-filters__button');
const filterRandomButton = document.querySelector('#filter-random');
const filterDiscussedButton = document.querySelector('#filter-discussed');
const filterDefaultButton = document.querySelector('#filter-default');

const numberOfPhotosToShow = 10;

function updateActiveButton(clickedButton) {
  filterButtons.forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });
  clickedButton.classList.add('img-filters__button--active');
}

function clearGallery () {
  const thumbnails = containerPhotosThumbnails.querySelectorAll('.picture');
  thumbnails.forEach((thumbnail) => thumbnail.remove());
}

function sortPhotosByComments(photos, order = 'desc') {
  return [...photos].sort((a, b) => {
    const commentsA = a.comments.length;
    const commentsB = b.comments.length;
    return order === 'desc' ? commentsB - commentsA : commentsA - commentsB;
  });
}

const debouncedRenderRandom = debounce(() => {
  const shuffledPhotos = shuffleArray(originalPhotosList).slice(0, numberOfPhotosToShow);

  clearGallery();
  renderPhotosThumbnails(shuffledPhotos);
  updateActiveButton(filterRandomButton);
});

const debouncedRenderDiscussed = debounce(() => {
  const sortedPhotos = sortPhotosByComments(originalPhotosList);

  clearGallery();
  renderPhotosThumbnails(sortedPhotos);
  updateActiveButton(filterDiscussedButton);
});

const debouncedRenderDefault = debounce(() => {
  clearGallery();
  renderPhotosThumbnails(originalPhotosList);
  updateActiveButton(filterDefaultButton);
});

function initializeThumbnailsFilters () {
  thumbnailsFilters.classList.remove('img-filters--inactive');
}

window.addEventListener('load', initializeThumbnailsFilters);
filterRandomButton.addEventListener('click', debouncedRenderRandom);
filterDiscussedButton.addEventListener('click', debouncedRenderDiscussed);
filterDefaultButton.addEventListener('click', debouncedRenderDefault);
