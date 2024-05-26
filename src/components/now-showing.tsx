import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { fetchNowShowing } from "@/actions/fetch-now-showing";
import NowShowingSlider from "./slider/now-showing-slider";

const NowShowing = async () => {
  const settings = {
    // className: "center",
    // centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // arrows: false,
    // dots: true,
  };

  const movies = await fetchNowShowing();

  return (
    <div className="absolute top-0 h-[30rem] w-full z-0 ">
      <NowShowingSlider settings={settings} movies={movies} />
    </div>
  );
};

export default NowShowing;
