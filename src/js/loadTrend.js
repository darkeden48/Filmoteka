import ApiServiceTMDB from '../apiService/ApiService';
import loadTrend from '../views/loadFilms.hbs';
import filmCard from './film-card';
import getTotalPages from './pagination';

const galleryList = document.querySelector('.collection');

// Movie Render
function appendImgMarkup(image) {
  galleryList.insertAdjacentHTML('beforeend', loadTrend(image));
  filmCard();
}

// Setting the data
function onLoadTrend(page) {
  galleryList.innerHTML = '';
  ApiServiceTMDB.fetchTrendFilms(page).then(data => {
    appendImgMarkup(data), getTotalPages(data.total_pages);
  });
}

onLoadTrend(ApiServiceTMDB.page);
console.log('niv');
export default onLoadTrend;
