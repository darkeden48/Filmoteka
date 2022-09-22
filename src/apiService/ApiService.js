const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '070151ea430b4e74dbca9bca592b262c';
let id = 1;
let page = 1;
let newQuery = '';

async function fetchTrendFilms() {
  try {
    const response = await fetch(`${BASE_URL}/3/trending/all/day?api_key=${API_KEY}&page=${page}`)
    const data = await response.json();
    // console.log(data);
    return data;
  }
  catch (error) { console.log('ERROR --> ', error) }
};

async function fetchSearchFilms() {
  try {
    const response = await fetch(`${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${newQuery}&language=en-US&page=${page}&include_adult=false`)
    const data = await response.json();
    console.log(data);
    return data;
  }
  catch (error) { console.log('ERROR -->', error) }
};

async function fetchFilmById() {
  try {
    const response = await fetch(`${BASE_URL}/3/movie/${id}?api_key=${API_KEY}&language=$language=en-US`);
    const data = await response.json();
    console.log(data);
    return data;
  }
  catch (error) { console.log('ERROR -->', error) }
};

async function fetchFilmsByGenre() {
  try {
    const response = await fetch(`${BASE_URL}/3/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US`);
    const data = await response.json();
    // console.log(data);
    return data;
  }
  catch (error) { console.log('ERROR --> ', error) }
}

async function fetchGenres() {
  try {
    const response = await fetch(`${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();
    // console.log(data);
    return data.genres;
  }
  catch (error) { console.log('ERROR --> ', error) }
}

const incrementPage = () => {
  page += 1;
}

const searchQuery = (query) => {
  newQuery = query
  console.log(newQuery)
}

export default { fetchTrendFilms, fetchSearchFilms, fetchFilmById, fetchGenres, BASE_URL, API_KEY, id, incrementPage, searchQuery }
