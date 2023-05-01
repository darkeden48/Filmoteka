import ApiServiceTMDB from "../apiService/ApiService";
import { db, auth } from '../../firebase.config';
import { collection, onSnapshot } from "firebase/firestore";
import { hideSpinner, showSpinner } from './spinner';

$('.watched').click(async () => {
    showSpinner();
    const uid = sessionStorage.getItem('uid');
    let watchedFilms = [];
    onSnapshot(collection(db, 'watched'), (querySnapshot) => {
        querySnapshot.forEach(doc => {
            if (doc.data().userId == uid) {
                ApiServiceTMDB.fetchFilmById(doc.data().filmId)
                    .then(film => {
                        watchedFilms.push(film);
                    });
            }
        });
        hideSpinner();
        // WATCHED FILMS HERE
        console.log(watchedFilms);
    });
});

$('.queue').click(async () => {
    showSpinner();
    const uid = sessionStorage.getItem('uid');
    let queueFilms = [];
    onSnapshot(collection(db, 'queue'), (querySnapshot) => {
        querySnapshot.forEach(doc => {
            if (doc.data().userId == uid) {
                ApiServiceTMDB.fetchFilmById(doc.data().filmId)
                    .then(film => {
                        queueFilms.push(film);
                    });
            }
        });
        hideSpinner();
        // QUEUE FILMS HERE
        console.log(queueFilms);
    });
});