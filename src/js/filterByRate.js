const sortVotesButton = document.querySelector('.sort-votes');
const sortPopularityButton = document.querySelector('.sort-popularuty');
const showNewFilmsButton = document.querySelector('.show-new-films');
const galleryList = document.querySelector('.collection');

function sortByVote() {
  const gallery = Array.from(galleryList.children);
  const newArray = [];
  for (let index = 0; index < gallery.length; index++) {
    newArray.push(gallery[index]);
  }
  newArray.sort((a, b) => Number(b.dataset.vote) - Number(a.dataset.vote));
  console.log(newArray);
  galleryList.innerHTML = '';
  newArray.map(el => galleryList.insertAdjacentHTML('beforeend', el.outerHTML));
}

function sortByPopularity() {
  const gallery = Array.from(galleryList.children);
  const newArray = [];
  for (let index = 0; index < gallery.length; index++) {
    newArray.push(gallery[index]);
  }
  newArray.sort((a, b) => Number(b.dataset.votes) - Number(a.dataset.votes));
  galleryList.innerHTML = '';
  newArray.map(el => galleryList.insertAdjacentHTML('beforeend', el.outerHTML));
}

function showNotReleased() {
  const gallery = Array.from(galleryList.children);
  const newArray = [];
  for (let index = 0; index < gallery.length; index++) {
    newArray.push(gallery[index]);
  }
  newArray.filter(el => console.log(el.dataset.released));
  galleryList.innerHTML = '';
  newArray.map(el => galleryList.insertAdjacentHTML('beforeend', el.outerHTML));
}

sortVotesButton.addEventListener('click', sortByVote);
sortPopularityButton.addEventListener('click', sortByPopularity);
showNewFilmsButton.addEventListener('click', showNotReleased);
