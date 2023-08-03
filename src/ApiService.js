export class MovieApiService {
  static async getMovie(movie) {
    try {
      fetch(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${movie}`);
      let response = response.json();
      if (!response.ok) {
        const errorMessage = "Error";
        throw new Error (errorMessage);
      }
      return response;
    }
    catch(error) {
    return error;
    }
  }
}
