import ApiServiceTmdb from "../apiService/ApiService";
import loadTrend from "../views/loadFilms.hbs";


// Сергейкомана Спооособ -------------------------------

const loadMore = document.querySelector('.load-more-button');
const galleryList = document.querySelector('.collection');
loadMore.addEventListener('click', onLoadMore);

// Рендер
function appendImgMarkup(image) {
    galleryList.insertAdjacentHTML('beforeend', loadTrend(image));
}

// Подставляем значение
function onLoadTrend() {
    ApiServiceTmdb.fetchTrendFilms().then(appendImgMarkup);
}
onLoadTrend();

//Следующая страница
function onLoadMore() {
    ApiServiceTmdb.incrementPage();
    onLoadTrend();
}



// Максимиленина Спооособ -------------------------------

const POSTER_URL = 'https://image.tmdb.org/t/p/original/'
const hbs = require('handlebars');

ApiServiceTmdb.fetchTrendFilms()
    .then(data => {
        // Get trend movies
        const results = data.results;
        const movie = results.map(movie => movie);

        // Get movies genres
        const movies_genres = movie.map(movie => movie.genre_ids);  

        let title_list = [];
        for (let i = 0; i < results.length; i++) {
            if (typeof movie[i].title === 'undefined') {
                title_list.push(movie[i].name);
            } else {
                title_list.push(movie[i].title);
            }
        }

        const source = '<div class="movie">'
            + '<div class="img_container"><img src="{{poster}}"></div>'
            + "<p>{{title}}</p>"
            + "<p>{{genres}}</p>"
            + "</div>"
        const template = hbs.compile(source);
        let result = '';
        for (let i = 0; i < movie.length; i++) {
            let movie_data = {
                "title": title_list[i],
                "poster": POSTER_URL + movie[i].poster_path,
                "genres": genre_names
            };
            result += template(movie_data);
        }
        document.getElementsByTagName('main')[0].innerHTML = result;
    });