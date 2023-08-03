import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MovieApiService from './ApiService';

async function getMovie(movie) {
  const response = await MovieApiService.getMovie(movie);
  if (response.Search) {
    printMovie(response, movie);
  } else {
    printError(response, movie);
  }
}

function printMovie(response) {
  // let movieOutput= document.getElementById("movieOutput");
  let movieList = document.querySelector("#movieList");
  let movieTitle = [];
  response.Search.forEach(movie => {
    movieTitle.push(movie.Title);
  });
  movieTitle.forEach(title => {
    let li = document.createElement("li");
    li.innerText = title;
    movieList.appendChild(li);
  });
 let button =  document.createElement("button");
 button.innerText = "Clear";
 button.setAttribute("id", "clearButton");
 movieList.append(button);
 button.addEventListener("click", reloadPage);
 
}


function printError(response) {
  document.querySelector("#movieOutput").innerText = `There was an error handling your request: ${response.message}`;
}


function handleFormSubmission(e) {
  e.preventDefault();
  let movieTitle = document.querySelector("#movieTitle").value;
  getMovie(movieTitle);
}

function reloadPage() {
  location.reload();
}

window.addEventListener("load", function(){ 
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
});

