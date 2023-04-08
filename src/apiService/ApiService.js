const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '070151ea430b4e74dbca9bca592b262c';
// let id = 1;
let page = 1;
let newQuery = '';
let pickGenre = '';
let sortBy = '';
let fetchType = [];

async function fetchTrendFilms(page) {
  try {
    const response = await fetch(
      `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}&page=${page}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    // console.log('ERROR --> ', error);
  } finally {
    fetchType.length = [];
    fetchType.push('trendFilms');
  }
}

async function fetchSearchFilms(page) {
  try {
    const response = await fetch(
      `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${newQuery}&language=en-US&page=${page}&include_adult=false`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    // console.log('ERROR -->', error);
  } finally {
    fetchType.length = [];
    fetchType.push('searchFilms');
  }
}

async function fetchFilmById(id) {
  try {
    const response = await fetch(
      `${BASE_URL}/3/movie/${id}?api_key=${API_KEY}&language=$language=en-US`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    // console.log('ERROR -->', error);
  }
}

async function fetchFilmsByGenre(pickGenre, page) {
  try {
    const response = await fetch(
      `${BASE_URL}/3/discover/movie?api_key=${API_KEY}&with_genres=${pickGenre}&language=en-US&page=${page}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    // console.log('ERROR --> ', error);
  } finally {
    fetchType.length = [];
    fetchType.push('byGenreFilms');
  }
}

async function fetchGenres() {
  try {
    const response = await fetch(
      `${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();
    return data.genres;
  } catch (error) {
    // console.log('ERROR --> ', error);
  }
}

async function fetchDiscover(sortBy, page) {
  try {
    const response = await fetch(
      `${BASE_URL}/3/discover/movie?api_key=${API_KEY}&language=en-US&page=${page}&sort_by=${sortBy}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    // console.log('ERROR --> ', error);
  } finally {
    fetchType.length = [];
    fetchType.push('discoverFilms');
  }
}

const searchQuery = query => {
  newQuery = query;
};

const takeGenre = genre => {
  pickGenre = genre;
};

const sortByMethod = sort => {
  sortBy = sort;
};

export default {
  fetchTrendFilms,
  fetchSearchFilms,
  fetchFilmById,
  fetchGenres,
  fetchFilmsByGenre,
  fetchDiscover,
  BASE_URL,
  API_KEY,
  page,
  fetchType,
  searchQuery,
  takeGenre,
  sortByMethod,
};
