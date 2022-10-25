import ApiServiceTMDB from "../apiService/ApiService";
import loadModal from '../views/modalFilm.hbs';
import modalCard from './modal-descriptions';

const main = document.querySelector('.main');
const galleryList = document.querySelector('.collection');
const backdrop = document.querySelector('.backdrop');
const modalContent = document.querySelector('.modal__content');
const modal = document.querySelector('.film_modal');
const btnClose = document.querySelector('.close-svg');
console.log(btnClose)
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
function onCrossClick(evt) {
    console.dir(evt.target)
    if (evt.target.contains(btnClose)||evt.target.contains(btnClose.children[0])) {
        console.log(btnClose)
        closeModal();
    }
}

function onModalClick(evt) {
    console.log(evt.target)
    if (backdrop === evt.target ) {
        console.log(evt.target)
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