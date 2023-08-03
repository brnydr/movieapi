import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MovieApiService from './ApiService';

async function getMovie(movie) {
  const response = await MovieApiService.getMovie(movie);
  if (response.search) {
    printMovie(response, movie);
  } else {
    printError(response, movie);
  }
}

function printMovie(response) {
  let movieOutput = document.querySelector("#movieOutput");
  let movieList = response.Search;
  movieOutput.innerText = movieList;
}

function printError(response) {
  document.querySelector("#movieOutput").innerText = `There was an error handling your request: ${response.message}`;
}


function handleFormSubmission(e) {
  e.preventDefault();
  let movieTitle = document.querySelector("#movieTitle").value;
  getMovie(movieTitle);
}

window.addEventListener("load", () => { 
  document.querySelector("#movieForm").addEventListener("submit", handleFormSubmission);
});