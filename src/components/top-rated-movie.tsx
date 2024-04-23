import { fetchTopRatedMovies } from "@/actions/fetch-top-rated-movies";

import TopRatedAndUpcomingMovieSlider from "./slider/top-rated-and-upcoming-slider";

const TopRatedMovie = async () => {
  const movies = await fetchTopRatedMovies();
  return (
    <div className="">
      <TopRatedAndUpcomingMovieSlider title="Top Rated" movies={movies} />
    </div>
  );
};

export default TopRatedMovie;
