import loadTrend from "../template/loadFilms.hbs";
import ApiServiceTmdb from "../apiService/ApiService";

const input = document.querySelector('.search-input');
const galleryList = document.querySelector('.collection');
const searchButton = document.querySelector('.search_icon')

function searchFilm() {
    ApiServiceTmdb.searchQuery(input.value)
    ApiServiceTmdb.fetchSearchFilms();
    onLoadSearch();
}

function appendImgMarkup(image) {
    galleryList.insertAdjacentHTML('beforeend', loadTrend(image));}

    // Подставляем значение
function onLoadSearch() {
    galleryList.innerHTML = '';
    ApiServiceTmdb.fetchSearchFilms().then(appendImgMarkup);}
  
searchButton.addEventListener('click', searchFilm);