import ApiServiceTMDB from "../apiService/ApiService";
import loadModal from '../views/modalFilm.hbs';
import modalCard from './modal-descriptions';

const main = document.querySelector('.main');
const galleryList = document.querySelector('.collection');
const backdrop = document.querySelector('.backdrop');
const modalContent = document.querySelector('.modal__content');
const modal = document.querySelector('.film_modal');

function appendImgMarkup(image) {
    modalContent.insertAdjacentHTML('beforeend', loadModal(image));
    modalCard();
}

function onLoadModal(event) {
    event.preventDefault();
    if(event.target.classList.contains('film-card__img')){
        backdrop.classList.remove('is-hidden');
        ApiServiceTMDB.fetchFilmById(event.target.dataset.id).then(appendImgMarkup);
        console.dir(event.target.dataset.id)
    }
    else {
        console.log('lol')
        return
    }
};
function closeModal(e){
    backdrop.classList.add('is-hidden');
    modalContent.innerHTML = '';
}

function onModalClick(evt) {
    console.log(evt.target)
    if (evt.target !== modalContent) {
        console.log(evt.target)
        closeModal();
    }
}
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
    //   onMovieDescriptionDetailesClose();
      closeModal();
    }
    });

modal.addEventListener('click', onModalClick);
galleryList.addEventListener('click', onLoadModal);