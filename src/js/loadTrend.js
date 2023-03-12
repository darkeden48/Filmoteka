import ApiServiceTMDB from '../apiService/ApiService';
import loadTrend from '../views/loadFilms.hbs';
import filmCard from './film-card';
import getTotalPages from './pagination';

const galleryList = document.querySelector('.collection');

// Movie Render
function appendImgMarkup(image) {
  // console.log(loadTrend(image));
  galleryList.insertAdjacentHTML('beforeend', loadTrend(image));
  ApiServiceTMDB.fetchTrendFilms().then(filmCard());
}

// Setting the data
function onLoadTrend(page) {
  galleryList.innerHTML = '';
  ApiServiceTMDB.fetchTrendFilms(page).then(appendImgMarkup);
  getTotalPages();
}

onLoadTrend(ApiServiceTMDB.page);

export default onLoadTrend;
