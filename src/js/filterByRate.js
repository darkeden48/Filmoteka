import ApiServiceTMDB from '../apiService/ApiService';
import filmCard from './film-card';
import loadTrend from '../views/loadFilms.hbs';

const descendingSortButton = document.querySelector('.descending');
const ascendingSortButton = document.querySelector('.ascending');
const sortTitleButton = document.querySelector('.sort-title');
const sortVotesButton = document.querySelector('.sort-votes');
const sortPopularityButton = document.querySelector('.sort-popularuty');
const sortVotesCountButton = document.querySelector('.sort-votes-count');
const sortReleaseButton = document.querySelector('.sort-release');
const sortInput = document.querySelector('.sort-input');
const sortList = document.querySelector('.sort-list');
const galleryList = document.querySelector('.collection');
const body = document.querySelector('body');
let sortDir = 'desc';

function showSortList(e) {
  if (e.target === sortInput) {
    sortList.style.display = 'block';
  }
}

function closeSortList(e) {
  if (e.target !== sortList && e.target !== sortInput)
    sortList.style.display = 'none';
}

function sortingDirection(e) {
  // e.target.classList.toggle('active');
  console.dir(e.target);
  if (e.target.classList.value === 'ascending') {
    sortDir = 'asc';
    ascendingSortButton.style.backgroundColor = 'orangered';
    descendingSortButton.style.backgroundColor = '';
    console.log(ascendingSortButton);
  }
  if (e.target.classList.value === 'descending') {
    sortDir = 'desc';
    descendingSortButton.style.backgroundColor = 'orangered';
    ascendingSortButton.style.backgroundColor = '';
    console.log(descendingSortButton);
    // e.target.classList.toggle('active');
    // e.target.id = 'descending';
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

sortInput.addEventListener('click', showSortList);
body.addEventListener('click', closeSortList);
ascendingSortButton.addEventListener('click', sortingDirection);
descendingSortButton.addEventListener('click', sortingDirection);
sortTitleButton.addEventListener('click', sortByTitle);
sortVotesButton.addEventListener('click', sortByVote);
sortPopularityButton.addEventListener('click', sortByPopularity);
sortVotesCountButton.addEventListener('click', sortVotesCount);
sortReleaseButton.addEventListener('click', sortRelease);
