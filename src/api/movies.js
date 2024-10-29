import axios from "axios";

const moviesInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  //   key: "9968066702368a447a47a3a026b8cfb1",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTY4MDY2NzAyMzY4YTQ0N2E0N2EzYTAyNmI4Y2ZiMSIsIm5iZiI6MTcyOTk3NTk5MC41NDcyODEsInN1YiI6IjY3MWQ1NDhhNzY5MTA3ZDc3YjQ3ZWY0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-0E57N07sU3n-BUZZ3Gd8Kn18ZU3jfkmhakp3uKoX_w",
  },
});

export const popularMoviesForHomePage = async () => {
  const { data } = await moviesInstance.get("/trending/movie/week");
  return data;
};

export const findMoviesWithQuery = async (query) => {
  const { data } = await moviesInstance.get(
    `search/movie?query=${query}&include_adult=false&language=en-US&page=1`
  );
  return data;
};

// export const geImage = async (movieId) => {
//     const { poster_path } =
// }

export const oneMovieDetails = async (movieId) => {
  const { data } = await moviesInstance.get(`/movie/${movieId}`);
  return data;
};

export const creditsOfTheMovie = async (movieId) => {
  const { data } = await moviesInstance.get(`/movie/${movieId}/credits`);
  return data;
};

export const reviewsOfTheMovie = async (movieId) => {
  const { data } = await moviesInstance.get(`/movie/${movieId}/reviews`);
  return data;
};
