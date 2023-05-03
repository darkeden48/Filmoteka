import ApiServiceTMDB from '../apiService/ApiService';
import loadTrend from '../views/loadFilms.hbs';
import filmCard from './film-card';
import getTotalPages from './pagination';
import themeChange from './theme';
import { hideSpinner, showSpinner } from './spinner';

const body = document.querySelector('body');
const genreInput = document.querySelector('.input-genre');
const genreList = document.querySelector('.genres-list');
const galleryList = document.querySelector('.collection');
const applyFilter = document.querySelector('.apply-filter');
const resetFilter = document.querySelector('.reset-filter');
let pickGenred = [];
let submitedGenred = [];

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
  showSpinner();
  ApiServiceTMDB.fetchFilmsByGenre(commasArray, page).then(data => {
    appendImgMarkup(data), getTotalPages(data.total_pages);
  });
  hideSpinner();
}

function appendImgMarkup(image) {
  galleryList.insertAdjacentHTML('beforeend', loadTrend(image));
  filmCard();
  themeChange(localStorage.getItem('theme'));
  genreList.style.display = 'none';
}

const genrePicker = e => {
  if (e.target.classList.contains('genres-item_active')) {
    e.target.classList.remove('genres-item_active');
    let idx = submitedGenred.indexOf(e.target.innerHTML);
    submitedGenred.splice(idx, 1);
    genreInput.value = submitedGenred;
  } else {
    e.target.classList.add('genres-item_active');
    pickGenred.push(e.target.id);
    submitedGenred.push(e.target.innerHTML);
    genreInput.value = submitedGenred;
  }
  return pickGenred;
};

function showGenres(e) {
  if (e.target === genreInput) {
    genreList.style.display = 'block';
  }
}

function deleteGenres(e) {
  for (let i = 0; i < genreList.children.length; i++) {
    if (genreList.children[i].classList.contains('genres-item_active')) {
      genreList.children[i].classList.remove('genres-item_active');
    }
  }
  // onLoadTrend(1);
  genreInput.value = '';
  pickGenred = [];
  submitedGenred = [];
}

function closeGenreList(e) {
  if (e.target !== genreList && e.target !== genreInput)
    genreList.style.display = 'none';
}

function firstRender() {
  ApiServiceTMDB.page = 1;
  applyFilterSubmit(ApiServiceTMDB.page);
}

body.addEventListener('click', closeGenreList);
genreInput.addEventListener('click', showGenres);
genreList.addEventListener('click', genrePicker);
applyFilter.addEventListener('click', firstRender);
resetFilter.addEventListener('click', deleteGenres);

export default { applyFilterSubmit, deleteGenres };
