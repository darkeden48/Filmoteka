import ApiServiceTMDB from '../apiService/ApiService';
import loadTrend from '../views/loadFilms.hbs';
import filmCard from './film-card';

const body = document.querySelector('body');
const genreInput = document.querySelector('.input-genre');
const genreList = document.querySelector('.genres-list');
const galleryList = document.querySelector('.collection');
const applyFilter = document.querySelector('.apply-filter');

let pickGenred = [];

ApiServiceTMDB.fetchGenres().then(data =>
  data.map(el =>
    genreList.insertAdjacentHTML(
      'beforeend',
      `<li class="genres-item" id="${el.id}">${el.name}</li>`
    )
  )
);

function applyFilterSubmit(page) {
  galleryList.innerHTML = '';
  let commasArray = pickGenred.join(',');
  ApiServiceTMDB.fetchFilmsByGenre(commasArray, page).then(appendImgMarkup);
}

function appendImgMarkup(image) {
  galleryList.insertAdjacentHTML('beforeend', loadTrend(image));
  ApiServiceTMDB.fetchFilmsByGenre().then(filmCard());
  genreList.style.display = 'none';
  pickGenred = [];
}

const genrePicker = e => {
  e.target.classList.add('genres-item_active');
  pickGenred.push(e.target.id);
  genreInput.value = e.target.innerHTML;
  return pickGenred;
};

function showGenres(e) {
  if (e.target === genreInput) {
    genreList.style.display = 'block';
  }
}

function closeGenreList(e) {
  if (e.target !== genreList && e.target !== genreInput)
    genreList.style.display = 'none';
}

body.addEventListener('click', closeGenreList);
genreInput.addEventListener('click', showGenres);
genreList.addEventListener('click', genrePicker);
applyFilter.addEventListener('click', applyFilterSubmit);

export default applyFilterSubmit;
