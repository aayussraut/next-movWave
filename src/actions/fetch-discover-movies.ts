"use server";
import axios from "axios";

export const fetchDiscoverMovies = async (page: number) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/discover/movie",
      {
        params: {
          api_key: `${process.env.API_KEY}`,
          language: "en-US",
          sort_by: "popularity.desc",
          include_adult: false,
          include_video: false,
          page: page,
          // "vote_average.gte": 2,
        },
      }
    );

    return response.data.results;
  } catch (error) {
    console.error("Error fetching now showing movies:", error);
  }
};
