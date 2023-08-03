import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MovieApiService from './ApiService';

async function getMovie(movie) {
  const response = MovieApiService.getMovie(movie);
  if (response.search) {
    printMovie(response, movie);
  } else {
    printError(response, movie);
  }
}
//this is where UI logic lives. 

