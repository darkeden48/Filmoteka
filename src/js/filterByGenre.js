import ApiServiceTMDB from '../apiService/ApiService';
import loadTrend from '../views/loadFilms.hbs';
import filmCard from './film-card';

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
  console.log(loadTrend(image));
  galleryList.insertAdjacentHTML('beforeend', loadTrend(image));
  ApiServiceTMDB.fetchFilmsByGenre().then(filmCard());
  //   if (!galleryList.hasChildNodes()) {
  //     document.querySelector('#search_error').innerHTML =
  //       'Search result not successful. Enter the correct movie!';
  //   } else {
  //     document.querySelector('#search_error').innerHTML = '';
  //   }
}

const genrePicker = e => {
  galleryList.innerHTML = '';
  console.log(e.target.id);
  ApiServiceTMDB.fetchFilmsByGenre(e.target.id).then(appendImgMarkup);
};

genreList.addEventListener('click', genrePicker);
