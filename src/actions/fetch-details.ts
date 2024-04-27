"use server";
import axios from "axios";

export const fetchDetails = async (mediaId: string, mediaType: string) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${mediaId}`,
      {
        params: {
          api_key: `${process.env.API_KEY}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching now showing movies:", error);
  }
};
