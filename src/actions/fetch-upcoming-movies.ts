"use server";
import axios from "axios";

export const fetchUpcoming = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming",
      {
        params: {
          api_key: `${process.env.API_KEY}`,
          language: "en-US",
          page: 1,
        },
      }
    );

    return response.data.results;
  } catch (error) {
    console.error("Error fetching now showing movies:", error);
  }
};
