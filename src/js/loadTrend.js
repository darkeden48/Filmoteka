import ApiServiceTmdb from "../apiService/ApiService";

const POSTER_URL = 'https://image.tmdb.org/t/p/original/'
const hbs = require('handlebars');

ApiServiceTmdb.fetchTrendFilms()
.then(data => {
    // Get trend movies
    const results = data.results;
    const movie = results.map(movie => movie);

    // Get movies genres
    const movies_genres = movie.map(movie => movie.genre_ids);
    
    let genre_names = [];
    ApiServiceTmdb.fetchGenres()
    .then(genre => {
        // for (let i = 0; i < movies_genres.length; i++) {
        //     const movie_arrays = movies_genres.filter(genre => genre);
        //     let ids_array = movie_arrays[i];
        //     for (let i = 0; i < ids_array.length; i++) {
        //         let names = genre.filter(genre => genre.id === ids_array[i]); 
        //         let toPush = names.map(genre => genre.name);
        //         genre_names.push(toPush);
        //     }
        // }

        //     try {
        //         let a = '';
        //         for (let i = 0; i < movies_genres.length; i++) {
        //             a += movies_genres[i];
        //         }
        //         if(genre[i].id === movies_genres[i]) {
        //             console.log('yes');
        //         }
        //     } catch (error) {}
        // }
        // for (let i = 0; i < genre.length; i++) {
        // }
    });

    // console.log(genre_names);

    let title_list = [];
    for (let i = 0; i < results.length; i++) {
        if(typeof movie[i].title === 'undefined') {
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
