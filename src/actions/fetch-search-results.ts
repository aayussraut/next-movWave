import axios from "axios";

export const fetchSearchResults = async (
  mediaType: string,
  searchTerm: string
) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/${mediaType}`,
      {
        params: {
          api_key: `${process.env.API_KEY}`,
          query: searchTerm,
        },
      }
    );

    return response.data.results;
  } catch (error) {
    console.error("Error fetching now showing movies:", error);
  }
};
