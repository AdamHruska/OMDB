import axios from "axios";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjBkMzUxNTAwYjNlZWRkYTNkNGI1NDM0OTdkMGIzMCIsInN1YiI6IjY1YWViNDRlNTQ0YzQxMDBlZGMzM2Y0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3rPgg_UV--cwT3jnMv-jaEKcVVzAihp765mnfmG3PD8'
      }
});

  /*/movie/top_rated?language=en-US&page=1 */