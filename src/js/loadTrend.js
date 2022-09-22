// Сергейкомана Спооособ --------------------------------------------------------
import loadTrend from "../template/loadFilms.hbs";
import ApiServiceTmdb from "../apiService/ApiService";

const loadMore = document.querySelector('.load-more-button');
const galleryList = document.querySelector('.collection');
loadMore.addEventListener('click', onLoadMore);

// Рендер
function appendImgMarkup(image) {
  galleryList.insertAdjacentHTML('beforeend', loadTrend(image));}
  
// Подставляем значение
function onLoadTrend(){
  ApiServiceTmdb.fetchTrendFilms().then(appendImgMarkup);}
onLoadTrend();

//Следующая страница
function onLoadMore() {
  ApiServiceTmdb.incrementPage();
  onLoadTrend();
  }

// Сергейкомана Спооособ --------------------------------------------------------

