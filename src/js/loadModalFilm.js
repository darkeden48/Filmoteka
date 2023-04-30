import ApiServiceTMDB from '../apiService/ApiService';
import loadModal from '../views/modalFilm.hbs';
import modalCard from './modal-descriptions';
import theme from './theme';

const main = document.querySelector('.main');
const galleryList = document.querySelector('.collection');
const backdrop = document.querySelector('.backdrop');
const modalContent = document.querySelector('.modal__content');
const modal = document.querySelector('.film_modal');
const btnClose = document.querySelector('.close-svg');

function appendImgMarkup(image) {
  modalContent.insertAdjacentHTML('beforeend', loadModal(image));
  modalCard();
}

function onLoadModal(event) {
  event.preventDefault();
  if (event.target.classList.contains('film-card__img')) {
    backdrop.classList.remove('is-hidden');
    ApiServiceTMDB.fetchFilmById(event.target.dataset.id).then(appendImgMarkup);
  } else {
    return;
  }
}
function closeModal(e) {
  backdrop.classList.add('is-hidden');
  modalContent.innerHTML = '';
}
function onCrossClick(evt) {
  if (
    evt.target.contains(btnClose) ||
    evt.target.contains(btnClose.children[0])
  ) {
    closeModal();
  }
}

function onModalClick(evt) {
  if (backdrop === evt.target) {
    closeModal();
  }
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

modal.addEventListener('click', onCrossClick);
backdrop.addEventListener('click', onModalClick);
galleryList.addEventListener('click', onLoadModal);
