const BASE_URL = 'https://api.themoviedb.org';
const API_URL = '070151ea430b4e74dbca9bca592b262c';
const id = 1;

async function fetchTrendFilms() {
    const response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=070151ea430b4e74dbca9bca592b262c')
    const data = await response.json();
    return data, console.log(data);
  }

  async function fetchSearchFilms() {
    const response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=070151ea430b4e74dbca9bca592b262c&language=en-US&page=1&include_adult=false')
    const data = await response.json();
    return data, console.log(data);
  }

  async function fetchFilmbyId() {
    const response = await fetch(`${BASE_URL}/3/movie/${id}?api_key=070151ea430b4e74dbca9bca592b262c&language=$language=en-US`); 
     const data = await response.json();
     console.log(data);
     return data;
 }