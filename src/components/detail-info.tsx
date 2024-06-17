import { MdOutlineStarBorder } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { IoPlaySharp } from "react-icons/io5";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import ReviewCard from "@/components/card/review-card";
import MovieCard from "@/components/card/movie-card";

interface DetailInfoProps {
  movie?: MovieDetail;
  tv?: TvDetail;
  reviews: MovieReview[];
  similarMovies: Movie[];
  url: string;
}

export default function DetailInfo({
  movie,
  tv,
  reviews,
  similarMovies,
  url,
}: DetailInfoProps) {
  const isMovie: Boolean = url === "/movies";

  return (
    <div className="relative min-h-screen  z-10 overflow-auto">
      <div
        className={`bg-cover z-0 group`}
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${
            isMovie ? movie?.backdrop_path : tv?.backdrop_path
          }')`,
        }}
      >
        <div
          className="flex items-center justify-center gap-10 px-10  h-[30rem]   movie-details-image"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(19, 23, 32, 0.5) 0%, #131720 100%)",
          }}
        ></div>
      </div>
      <div className=" relative ">
        <div className=" flex flex-col w-full gap-5 z-10 absolute  -top-32 px-10">
          <div className="flex items-center gap-5 ">
            <div className="relative w-44 min-h-60 2xl:min-h-72 2xl:w-52">
              <Image
                src={`http://image.tmdb.org/t/p/w185/${
                  movie?.poster_path || tv?.poster_path
                }`}
                alt={movie?.title || tv?.name || "Movie Poster"}
                className="rounded-lg shadow-md shadow-gray-600 z-20"
                fill={true}
                priority={true}
              />
            </div>
            <div className="flex flex-col gap-4 justify-center">
              <div className="flex gap-2 items-center">
                <h1 className="text-white text-4xl font-extrabold">
                  {movie?.title || movie?.name}
                </h1>
              </div>
              <p className="text-white font-white text-sm">
                {movie?.tagline || tv?.tagline}
              </p>
              <div className="flex gap-2 cursor-pointer">
                {isMovie
                  ? movie?.genres.map((genre: { id: number; name: string }) => (
                      <span
                        key={genre.id}
                        className="bg-[#182336] text-white px-2 py-1 rounded-2xl text-sm font-semibold hover:bg-[#2f80ed] "
                      >
                        {genre.name}
                      </span>
                    ))
                  : tv?.genres.map((genre: { id: number; name: string }) => (
                      <span
                        key={genre.id}
                        className="bg-[#182336] text-white px-2 py-1 rounded-2xl text-sm font-semibold hover:bg-[#2f80ed] "
                      >
                        {genre.name}
                      </span>
                    ))}
              </div>
              <div className="flex gap-2 text-md text-[#2f80ed] items-center">
                <div className="flex gap-1 items-center justify-center text-[#2f80ed] ">
                  <MdOutlineStarBorder size={20} className="pb-1" />
                  <p className="text-white  font-semibold ">
                    {movie?.vote_average.toFixed(1) ||
                      tv?.vote_average.toFixed(1)}
                  </p>
                </div>
                <GoDotFill />
                <p className="text-white">
                  {isMovie
                    ? new Date(movie!.release_date).getFullYear()
                    : new Date(tv!.first_air_date).getFullYear()}
                </p>
                <GoDotFill />
                <p className="text-white">
                  {isMovie
                    ? Math.floor(movie!.runtime / 60) +
                      " h " +
                      (movie!.runtime % 60) +
                      " min"
                    : tv!.seasons.length + " seasons"}
                </p>
                <GoDotFill />
                <p className="text-white">{movie?.status || tv?.status}</p>
              </div>
              <Button
                className="flex  px-4 py-2 rounded-md items-center gap-2 w-fit hover:text-black"
                variant={"default"}
              >
                <IoPlaySharp size={20} />
                <span className=" font-bold">Watch Trailer</span>
              </Button>
            </div>
          </div>
          <div className="flex text-white gap-5 w-full">
            <div className="flex flex-col gap-2 w-3/5">
              <h2 className="text-white text-xl 2xl:text-3xl font-semibold">
                Summary
              </h2>
              <p className="text-white text-md 2xl:text-xl text-justify">
                {movie?.overview || tv?.overview}
              </p>
              <h2 className="text-white text-xl 2xl:text-3xl font-semibold">
                Reviews
              </h2>
              {reviews.slice(0, 2).map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>

            <div className="flex flex-col w-2/5">
              <h2 className="text-white text-xl 2xl:text-3xl font-semibold mb-2">
                Related
              </h2>
              <div className="flex flex-wrap gap-8 2xl:gap-x-24">
                {similarMovies.length > 0 &&
                  similarMovies
                    .slice(0, 4)
                    .map((movie) => (
                      <MovieCard key={movie.id} url={url} movie={movie} />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
