import { fetchTopRatedMovies } from "@/actions/fetch-top-rated-movies";

import TopRatedAndUpcommingMovieSlider from "./slider/top-rated-and-upcomming-slider";

const TopRatedMovie = async () => {
  const movies = await fetchTopRatedMovies();
  return (
    <div className="">
      <TopRatedAndUpcommingMovieSlider title="Top Rated" movies={movies} />
    </div>
  );
};

export default TopRatedMovie;
