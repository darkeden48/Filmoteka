import ApiServiceTMDB from '../apiService/ApiService';
import filmCard from './film-card';
import loadTrend from '../views/loadFilms.hbs';

const descendingSortButton = document.querySelector('.descending');

const sortTitleButton = document.querySelector('.sort-title');
const sortVotesButton = document.querySelector('.sort-votes');
const sortPopularityButton = document.querySelector('.sort-popularuty');
const sortVotesCountButton = document.querySelector('.sort-votes-count');
const sortReleaseButton = document.querySelector('.sort-release');
const galleryList = document.querySelector('.collection');

let sortDir = 'desc';

function sortingDirection(e) {
  e.target.classList.toggle('descending');
  console.dir(e.target);
  if (e.target.classList.value === '') {
    sortDir = 'asc';
    e.target.innerHTML = 'Ascending sort';
  } else {
    sortDir = 'desc';
    e.target.innerHTML = 'Descending sort';
  }
}

function sortByTitle() {
  ApiServiceTMDB.fetchDiscover(`original_title.${sortDir}`).then(data => {
    (galleryList.innerHTML = ''),
      galleryList.insertAdjacentHTML('beforeend', loadTrend(data)),
      ApiServiceTMDB.fetchDiscover().then(filmCard());
  });
}

function sortByVote() {
  console.log(sortDir);
  ApiServiceTMDB.fetchDiscover(`vote_average.${sortDir}`).then(data => {
    (galleryList.innerHTML = ''),
      galleryList.insertAdjacentHTML('beforeend', loadTrend(data)),
      ApiServiceTMDB.fetchDiscover().then(filmCard());
  });
}

function sortByPopularity() {
  ApiServiceTMDB.fetchDiscover(`popularity.${sortDir}`).then(data => {
    (galleryList.innerHTML = ''),
      galleryList.insertAdjacentHTML('beforeend', loadTrend(data)),
      ApiServiceTMDB.fetchDiscover().then(filmCard());
  });
}

function sortVotesCount() {
  ApiServiceTMDB.fetchDiscover(`vote_count.${sortDir}`).then(data => {
    (galleryList.innerHTML = ''),
      galleryList.insertAdjacentHTML('beforeend', loadTrend(data)),
      ApiServiceTMDB.fetchDiscover().then(filmCard());
  });
}

function sortRelease() {
  ApiServiceTMDB.fetchDiscover(`release_date.${sortDir}`).then(data => {
    (galleryList.innerHTML = ''),
      galleryList.insertAdjacentHTML('beforeend', loadTrend(data)),
      ApiServiceTMDB.fetchDiscover().then(filmCard());
  });
}

descendingSortButton.addEventListener('click', sortingDirection);
sortTitleButton.addEventListener('click', sortByTitle);
sortVotesButton.addEventListener('click', sortByVote);
sortPopularityButton.addEventListener('click', sortByPopularity);
sortVotesCountButton.addEventListener('click', sortVotesCount);
sortReleaseButton.addEventListener('click', sortRelease);
