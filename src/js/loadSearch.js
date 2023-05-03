import loadTrend from '../views/loadFilms.hbs';
import ApiServiceTMDB from '../apiService/ApiService';
import filmCard from './film-card';
import getTotalPages from './pagination';
import filterByGenre from './filterByGenre';
import themeChange from './theme';
import { hideSpinner, showSpinner } from './spinner';

const input = document.querySelector('.search-input');
const galleryList = document.querySelector('.collection');
const searchButton = document.querySelector('.search_icon');

function searchFilm() {
  if (input.value.trim() === '') {
    input.value = '';
    return;
  }
  showSpinner();
  ApiServiceTMDB.searchQuery(input.value.trim());
  ApiServiceTMDB.page = 1;
  onLoadSearch(1);
  input.value = '';
  hideSpinner();
  filterByGenre.deleteGenres();
}

function appendImgMarkup(image) {
  galleryList.insertAdjacentHTML('beforeend', loadTrend(image));
  filmCard();
  themeChange(localStorage.getItem('theme'));
  if (!galleryList.hasChildNodes()) {
    document.querySelector('#search_error').innerHTML =
      'Search result not successful. Enter the correct movie!';
  } else {
    document.querySelector('#search_error').innerHTML = '';
  }
}

// Подставляем значение
function onLoadSearch(page) {
  galleryList.innerHTML = '';
  ApiServiceTMDB.fetchSearchFilms(page).then(data => {
    appendImgMarkup(data), getTotalPages(data.total_pages);
  });
}

input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    searchFilm();
  }
});
searchButton.addEventListener('click', searchFilm);
console.log(onLoadSearch);
export default onLoadSearch;
