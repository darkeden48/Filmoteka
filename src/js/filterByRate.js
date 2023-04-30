import ApiServiceTMDB from '../apiService/ApiService';
import filmCard from './film-card';
import loadTrend from '../views/loadFilms.hbs';
import getTotalPages from './pagination';

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
  if (e.target.classList.value === 'ascending') {
    console.log(e.target.classList);
    sortDir = 'asc';
    ascendingSortButton.style.backgroundColor = 'orangered';
    descendingSortButton.style.backgroundColor = '';
  } else if (e.target.classList.value === 'descending') {
    console.log(e.target.classList);
    sortDir = 'desc';
    descendingSortButton.style.backgroundColor = 'orangered';
    ascendingSortButton.style.backgroundColor = '';
  }
  switch (sortInput.value) {
    case 'Title':
      sortByTitle();
      break;
    case 'Popularity':
      sortByPopularity();
      break;
    case 'Votes':
      sortByVote();
      break;
    case 'Votes-count':
      sortVotesCount();
      break;
    case 'Release-data':
      sortRelease();
      break;
    default:
      return;
  }
}

function sortByTitle(e) {
  sortInput.value = 'Title';
  ApiServiceTMDB.fetchDiscover(
    `original_title.${sortDir}`,
    ApiServiceTMDB.page
  ).then(data => {
    galleryList.innerHTML = '';
    galleryList.insertAdjacentHTML('beforeend', loadTrend(data));
    filmCard();
    getTotalPages(data.total_pages);
  });
}

function sortByVote(e) {
  sortInput.value = 'Votes';
  ApiServiceTMDB.fetchDiscover(`vote_average.${sortDir}`).then(data => {
    galleryList.innerHTML = '';
    galleryList.insertAdjacentHTML('beforeend', loadTrend(data));
    filmCard();
    getTotalPages(data.total_pages);
  });
}

function sortByPopularity(e) {
  sortInput.value = 'Popularity';
  ApiServiceTMDB.fetchDiscover(`popularity.${sortDir}`).then(data => {
    galleryList.innerHTML = '';
    galleryList.insertAdjacentHTML('beforeend', loadTrend(data));
    filmCard();
    getTotalPages(data.total_pages);
  });
}

function sortVotesCount(e) {
  sortInput.value = 'Votes-count';
  ApiServiceTMDB.fetchDiscover(`vote_count.${sortDir}`).then(data => {
    galleryList.innerHTML = '';
    galleryList.insertAdjacentHTML('beforeend', loadTrend(data));
    filmCard();
    getTotalPages(data.total_pages);
  });
}

function sortRelease(e) {
  sortInput.value = 'Release-data';
  ApiServiceTMDB.fetchDiscover(`release_date.${sortDir}`).then(data => {
    galleryList.innerHTML = '';
    galleryList.insertAdjacentHTML('beforeend', loadTrend(data));
    filmCard();
    getTotalPages(data.total_pages);
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
