"use client";
import Slider from "react-slick";

import NowShowingCard from "../card/now-showing-card";

import { Settings } from "react-slick";

type SliderProps = {
  settings: Settings;
  movies: Movie[];
};

export default function NowShowingSlider({ settings, movies }: SliderProps) {
  return (
    <Slider {...settings} className="now-showing-movie-slider">
      {movies.map((movie) => (
        <NowShowingCard key={movie.id} movie={movie} />
      ))}
    </Slider>
  );
}
