export default class MovieApiService {
  static async getMovie(movie) {
    try {
      const response =  await fetch(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${movie}`);
      const jsonResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText} ${jsonResponse.message}`;
        throw new Error (errorMessage);
      }
      return jsonResponse;
    }
    catch(error) {
      return error;
    }
  }
}
