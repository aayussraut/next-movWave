"use server";
import axios from "axios";

export const fetchDiscoverTvShows = async (
  page: number,
  rating: string,
  genre: string,
  year: string,
  duration: string
) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/discover/tv",
      {
        params: {
          api_key: `${process.env.API_KEY}`,
          language: "en-US",
          sort_by: "popularity.desc",
          include_adult: false,
          include_video: false,
          page: page,
          "vote_average.gte": rating,
          with_genres: genre !== "all" ? genre : undefined,
          primary_release_year: year !== "all" ? year : undefined,
          "with_runtime.gte": duration !== "all" ? duration : undefined,
        },
      }
    );

    return response.data.results;
  } catch (error) {
    console.error("Error fetching now showing movies:", error);
  }
};
