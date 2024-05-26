import { fetchUpcoming } from "@/actions/fetch-upcoming-movies";

import TopRatedAndUpcomingMovieSlider from "./slider/top-rated-and-upcoming-slider";

const UpcomingMovie = async () => {
  const movies = await fetchUpcoming();
  return (
    <div className="">
      <TopRatedAndUpcomingMovieSlider title="Upcoming" movies={movies} />
    </div>
  );
};

export default UpcomingMovie;
