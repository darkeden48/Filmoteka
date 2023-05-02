import ApiServiceTMDB from '../apiService/ApiService';

export default function filmCard() {
  const release_dateTMP = document.getElementsByClassName('film-card__release');
  const genres_nameTMP = document.getElementsByClassName('film-card__genres');
  const movie_votesTMP = document.getElementsByClassName('film-card__vote');
  const movie_votesCount = document.getElementsByClassName(
    'film-card__vote-count'
  );
  var data = new Date();

  // Slice votes statistics
  for (let i = 0; i < movie_votesTMP.length; i++) {
    let stringVote = String(movie_votesTMP[i].innerHTML.slice(0, 3));
    let releaseData = release_dateTMP[i].innerHTML.split('-');
    var newData = new Date(
      Number(releaseData[0]),
      Number(releaseData[1] - 1),
      Number(releaseData[2])
    );
    if (stringVote % 1 != 0) {
      movie_votesTMP[i].innerHTML = Number(stringVote);
    } else {
      movie_votesTMP[i].innerHTML = Number(stringVote) + '.0';
    }
    if (newData > data) {
      movie_votesTMP[i].innerHTML = 'New!!!';
      movie_votesTMP[i].style.width = '60px';
      movie_votesTMP[i].style.backgroundColor = 'red';
      movie_votesCount[
        i
      ].innerHTML = `Release-data: ${release_dateTMP[i].innerHTML}`;
      movie_votesCount[i].style.width = '100%';
    }
  }
  // Setting release date into template
  for (let i = 0; i < release_dateTMP.length; i++) {
    let stringDate = String(release_dateTMP[i].innerHTML).slice(0, 4);
    release_dateTMP[i].innerHTML = Number(stringDate);
  }
  // Setting genres name into template
  ApiServiceTMDB.fetchGenres().then(genre_results => {
    // console.log(genres_nameTMP)
    for (let i = 0; i < genres_nameTMP.length; i++) {
      const genreIds = genres_nameTMP[i].innerHTML;
      // console.log(genreIds)
      const separatedIds = genreIds.split(',');
      const fetched_ids = genre_results.map(genre => genre.id);
      const fetched_names = genre_results.map(genre => genre.name);

      separatedIds.forEach(function (element, index) {
        for (let u = 0; u < fetched_ids.length; u++) {
          if (element == fetched_ids[u]) {
            this[index] = ' ' + fetched_names[u];
          }
          genres_nameTMP[i].innerHTML = separatedIds;
        }
      }, separatedIds);
    }
  });
}
