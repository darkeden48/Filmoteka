import ApiServiceTMDB from '../apiService/ApiService';
import loadModal from '../views/modalFilm.hbs';
import modalCard from './modal-descriptions';
import { collection, setDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from '../../firebase.config';
import { sendNotification } from './notification';

const main = document.querySelector('.main');
const galleryList = document.querySelector('.collection');
const backdrop = document.querySelector('.backdrop');
const modalContent = document.querySelector('.modal__content');
const modal = document.querySelector('.film_modal');
const btnClose = document.querySelector('.close-svg');
const blackscreen = document.querySelector('#blackscreen');

function appendImgMarkup(image) {
  modalContent.insertAdjacentHTML('beforeend', loadModal(image));
  modalCard();
}

async function onLoadModal(event) {
    event.preventDefault();
    if (event.target.classList.contains('film-card__img')) {
        backdrop.classList.remove('is-hidden');
        $('#blackscreen').fadeIn('slow');
        const filmId = event.target.dataset.id;
        await ApiServiceTMDB.fetchFilmById(filmId).then(appendImgMarkup);

        const queue = document.querySelector('.button-queue');
        const watched = document.querySelector('.button-watched');

        queue.addEventListener('click', async (e) => {
            e.preventDefault();
            addToFirestore('queue');
        });
        watched.addEventListener('click', async (e) => {
            e.preventDefault();
            addToFirestore('watched');
        });
        async function addToFirestore(collection) {
            const uid = sessionStorage.getItem('uid');
            if (uid == null || uid == undefined) {
                await sendNotification('error', 'You must be logged in!');
                return;
            }
            const docId = (uid).substring(0, 8) + '.' + filmId;
            const docRef = doc(db, `${collection}`, docId);
            setDoc(docRef, {
                filmId: filmId,
                userId: uid
            }).then(() => {
                sendNotification('success', `Film was successfully added to ${collection}!`);
            }).catch(err => {
                sendNotification('error', err.message);
            });
        };
    }
    else {
        return
    }
};
function closeModal(e) {
    backdrop.classList.add('is-hidden');
    $('#blackscreen').fadeOut(200);
    modalContent.innerHTML = '';
}
function onCrossClick(evt) {
    if (evt.target.contains(btnClose) || evt.target.contains(btnClose.children[0])) {
        closeModal();
    }
}

function onModalClick(evt) {
    if (backdrop !== evt.target) {
        closeModal();
    }
}
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

modal.addEventListener('click', onCrossClick);
blackscreen.addEventListener('click', onModalClick);
galleryList.addEventListener('click', onLoadModal);
