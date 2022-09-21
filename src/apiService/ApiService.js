const BASE_URL = 'https://api.themoviedb.org';
const API_URL = '070151ea430b4e74dbca9bca592b262c';
// const id = 1;

var fetchTrendFilms = async function() {
  const response = await fetch(`${BASE_URL}/3/trending/all/day?api_key=${API_URL}`);
  const data = await response.json();
  return data.results, console.log(data.results);
}

async function fetchSearchFilms() {
  const response = await fetch(`${BASE_URL}/3/search/movie?api_key=${API_URL}&language=en-US&page=1&include_adult=false`);
  const data = await response.json();
  return data, console.log(data);
  // error
}

async function fetchFilmById(id) {
  const response = await fetch(`${BASE_URL}/3/movie/${id}?api_key=${API_URL}&language=$language=en-US`);
  const data = await response.json();
  return data, console.log(data);
}

export {fetchTrendFilms}