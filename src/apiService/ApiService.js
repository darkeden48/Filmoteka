const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '070151ea430b4e74dbca9bca592b262c';
const id = 1;
const page = 1;

  async function fetchTrendFilms() {
      try {
        const response = await fetch(`${BASE_URL}/3/trending/all/day?api_key=${API_KEY}&page=${page}`)
        const data = await response.json();
        console.log(data);
        return data;
      }
      catch(error){console.log('ERROR -->', error)}
    };

  async function fetchSearchFilms() {
    try {
      const response = await fetch(`${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false`)
      const data = await response.json();
      console.log(data);
      return data;
    }
    catch(error){console.log('ERROR -->', error)}
  };
  
  async function fetchFilmbyId() {
    try{
      const response = await fetch(`${BASE_URL}/3/movie/${id}?api_key=${API_KEY}&language=$language=en-US`); 
      const data = await response.json();
      console.log(data);
      return data;
    }
    catch(error){console.log('ERROR -->', error)}
  };

  export default {fetchTrendFilms,fetchSearchFilms,fetchFilmbyId, BASE_URL, API_KEY, id}