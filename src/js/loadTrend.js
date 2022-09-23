import ApiServiceTMDB from '../apiService/ApiService';
import loadTrend from '../views/loadFilms.hbs';


const loadMore = document.querySelector('.load-more-button');
const galleryList = document.querySelector('.collection');
loadMore.addEventListener('click', function() {
    document.querySelector('#search_error').innerHTML = '';
    onLoadMore();
});

// Movie Render
function appendImgMarkup(image) {
    galleryList.insertAdjacentHTML('beforeend', loadTrend(image));

    ApiServiceTMDB.fetchTrendFilms().then(function() {
        const release_dateTMP = document.getElementsByClassName('film-card__release');
        const genres_nameTMP = document.getElementsByClassName('film-card__genres');
        const movie_votesTMP = document.getElementsByClassName('film-card__vote');

        // Hide votes statistics
        for (let i = 0; i < movie_votesTMP.length; i++) {
            movie_votesTMP[i].style.display = 'none';
        }
        // Setting release date into template
        for (let i = 0; i < release_dateTMP.length; i++) {
            let stringDate = String(release_dateTMP[i].innerHTML).slice(0, 4);
            release_dateTMP[i].innerHTML = Number(stringDate);
        }
        // Setting genres name into template
        ApiServiceTMDB.fetchGenres().then(genre_results => {
            for (let i = 0; i < genres_nameTMP.length; i++) {
                const genreIds = genres_nameTMP[i].innerHTML;
                const separatedIds = genreIds.split(',');
                const fetched_ids = genre_results.map(genre => genre.id);
                const fetched_names = genre_results.map(genre => genre.name);

                separatedIds.forEach(function(element, index) {
                    for (let u = 0; u < fetched_ids.length; u++) {
                        if(element == fetched_ids[u]) {
                            this[index] =  ' ' + fetched_names[u];
                        }
                        genres_nameTMP[i].innerHTML = separatedIds;
                    }
                }, separatedIds);
            }
        });
    });
}

// Setting the data
function onLoadTrend() {
    ApiServiceTMDB.fetchTrendFilms().then(appendImgMarkup);
};
onLoadTrend();

// Next page
function onLoadMore() {
    ApiServiceTMDB.incrementPage();
    onLoadTrend();
}