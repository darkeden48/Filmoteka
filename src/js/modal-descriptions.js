import ApiServiceTMDB from '../apiService/ApiService';

export default function modalCard() {
  const movie_votesTMP = document.getElementsByClassName('vote-average');
  const popularity = document.querySelector('.popularity');
  const modalGenres = document.querySelector('.modal-genre');
  const voteCount = document.querySelector('.vote');

  // Genres statistics - delete last comma
  modalGenres.innerHTML = modalGenres.innerHTML.replace(/,\s*$/, '');

  // Popularity statistics - rounding
  popularity.innerHTML = Math.trunc(popularity.innerHTML * 10) / 10;

  // Slice votes statistics
  for (let i = 0; i < movie_votesTMP.length; i++) {
    let stringVote = String(movie_votesTMP[i].innerHTML.slice(0, 3));

    if (stringVote === '0') {
      voteCount.style.color = 'red';
      voteCount.innerHTML = 'Sorry, this movie has no ratings yet';
    } else if (stringVote % 1 != 0) {
      movie_votesTMP[i].innerHTML = Number(stringVote);
    } else {
      movie_votesTMP[i].innerHTML = Number(stringVote) + '.0';
    }
  }
}
