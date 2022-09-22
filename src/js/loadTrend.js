import ApiServiceTmdb from '../apiService/ApiService';
import loadTrend from '../views/loadFilms.hbs';


const loadMore = document.querySelector('.load-more-button');
const galleryList = document.querySelector('.collection');
loadMore.addEventListener('click', onLoadMore);

// Render
function appendImgMarkup(image) {
    galleryList.insertAdjacentHTML('beforeend', loadTrend(image));
}

// Setting the data
function onLoadTrend() {
    ApiServiceTmdb.fetchTrendFilms().then(appendImgMarkup);
}
onLoadTrend();

// Next page
function onLoadMore() {
    ApiServiceTmdb.incrementPage();
    onLoadTrend();
}