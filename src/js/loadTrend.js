import loadTrend from "../template/loadTrends.hbs";
import ApiServiceTmdb from "../apiService/ApiService";

const galleryList = document.querySelector('.main');
// рендер
function appendImgMarkup(image) {
    galleryList.insertAdjacentHTML('beforeend', loadTrend(image));}
// подставляем значение
function onLoadTrend(){
    ApiServiceTmdb.fetchTrendFilms().then(appendImgMarkup);}
  onLoadTrend();

  ApiServiceTmdb.fetchTrendFilms();
  const genresArrayStr = [];
  ApiServiceTmdb.fetchGenres()
  .then(genres => {
    genres.forEach(el => {
      genresArrayStr.push(el);
    })
  })
  console.log(genresArrayStr);



