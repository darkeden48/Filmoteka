import ApiServiceTMDB from "../apiService/ApiService";
import { db, auth } from '../../firebase.config';
import { collection, onSnapshot } from "firebase/firestore";
import { hideSpinner, showSpinner } from './spinner';

$('.watched').click(renderWatched);

async function renderWatched() {
    showSpinner();
    const uid = sessionStorage.getItem('uid');
    let watchedFilms = [];
    onSnapshot(collection(db, 'watched'), (querySnapshot) => {
        querySnapshot.forEach(doc => {
            if (doc.data().userId == uid) {
                let film = ApiServiceTMDB.fetchFilmById(doc.data().filmId);
                watchedFilms.push(flim);
            }
        });
        hideSpinner();
        console.log(watchedFilms);
    });
}

async function renderQueue() {

}

export {
    renderWatched,
    renderQueue
}