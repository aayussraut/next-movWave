"use client";

import Slider from "react-slick";

import MovieCard from "../card/movie-card";
import { useRef } from "react";
import MovieCardWrapper from "../card/movie-card-wrapper";

interface TopRatedMovieSliderProps {
  title: string;
  movies: Movie[];
}

const TopRatedAndUpcomingMovieSlider = ({
  title,
  movies,
}: TopRatedMovieSliderProps) => {
  const slider = useRef(null);

  const movie = {
    adult: false,
    backdrop_path: "/FUnAVgaTs5xZWXcVzPJNxd9qGA.jpg",
    genre_ids: [878, 28, 18, 10770],
    id: 934632,
    original_language: "en",
    original_title: "Rebel Moon - Part Two: The Scargiver",
    overview:
      "The rebels gear up for battle against the Motherworld as unbreakable bonds are forged, heroes emerge — and legends are made.",
    popularity: 574.325,
    poster_path: "/cxevDYdeFkiixRShbObdwAHBZry.jpg",
    release_date: "2024-04-19",
    title: "Rebel Moon - Part Two: The Scargiver",
    video: false,
    vote_average: 6.1,
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 6,
    centerPadding: "60px",
    arrows: false,
  };

  return (
    <MovieCardWrapper title={title} sliderRef={slider}>
      <Slider ref={slider} {...settings}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} url="/movies" movie={movie} />
        ))}
      </Slider>
    </MovieCardWrapper>
  );
};

export default TopRatedAndUpcomingMovieSlider;
