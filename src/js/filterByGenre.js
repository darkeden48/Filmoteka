import ApiServiceTMDB from '../apiService/ApiService';
import loadTrend from '../views/loadFilms.hbs';
import filmCard from './film-card';

const body = document.querySelector('body');
const genreInput = document.querySelector('.input-genre');
const genreList = document.querySelector('.genres-list');
const galleryList = document.querySelector('.collection');

ApiServiceTMDB.fetchGenres().then(data =>
  data.map(el =>
    genreList.insertAdjacentHTML(
      'beforeend',
      `<li class="genres-item" id="${el.id}">${el.name}</li>`
    )
  )
);

function appendImgMarkup(image) {
  galleryList.insertAdjacentHTML('beforeend', loadTrend(image));
  ApiServiceTMDB.fetchFilmsByGenre().then(filmCard());
  genreList.style.display = 'none';
  //   if (!galleryList.hasChildNodes()) {
  //     document.querySelector('#search_error').innerHTML =
  //       'Search result not successful. Enter the correct movie!';
  //   } else {
  //     document.querySelector('#search_error').innerHTML = '';
  //   }
}

const genrePicker = e => {
  galleryList.innerHTML = '';
  genreInput.value = e.target.innerHTML;
  ApiServiceTMDB.fetchFilmsByGenre(e.target.id).then(appendImgMarkup);
};

function showGenres(e) {
  if (e.target === genreInput) {
    genreList.style.display = 'block';
  }
}

function closeGenreList(e) {
  //   if (e.target !== genreInput) {
  //     genreList.style.display = 'none';
  //   }
  if (e.target !== genreList && e.target !== genreInput)
    genreList.style.display = 'none';
}

body.addEventListener('click', closeGenreList);
genreInput.addEventListener('click', showGenres);
genreList.addEventListener('click', genrePicker);
