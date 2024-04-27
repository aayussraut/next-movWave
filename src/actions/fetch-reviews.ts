"use server";
import axios from "axios";

export const fetchReviews = async (mediaId: string, mediaType: string) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${mediaId}/reviews`,
      {
        params: {
          api_key: `${process.env.API_KEY}`,
        },
      }
    );

    // console.log("Response", response.data.results.results);

    return response.data.results;
  } catch (error) {
    console.error("Error fetching now showing movies:", error);
  }
};
