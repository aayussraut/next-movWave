import {
  MdStarRate,
  MdOutlineRemoveRedEye,
  MdOutlineStarBorder,
  MdBookmarkBorder,
} from "react-icons/md";
import Image from "next/image";

import { Button } from "../ui/button";
import Link from "next/link";

interface MovieCardProps {
  url: string;
  movie: Movie;
}

const MovieCard = ({ url, movie }: MovieCardProps) => {
  return (
    <div className="min-h-fit w-40 ms-5  2xl:ms-2 rounded-lg shadow-lg group py-2 ">
      <div className="relative w-40 h-60 2xl:w-56 2xl:h-80 overflow-hidden rounded-2xl ">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.name || movie.title || "Movie Poster"}
          className="  rounded-2xl group-hover:scale-105 group-hover:blur-[2px] shadow-slate-600 shadow-sm object-fill  text-white"
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
        />
        <Link href={`${url}/${movie.id}`} className="flex flex-col gap-1">
          <div className="z-10 bg-yellow-200/15 px-2 rounded-xl h-fit py-1 absolute  top-[42%] start-[33%] opacity-0 group-hover:opacity-100 ">
            <MdOutlineRemoveRedEye size={45} color={"white"} />
          </div>
        </Link>
        <div className="z-10 flex bg-[#151f30bf] px-2 rounded-lg gap-1 items-center justify-center h-fit py-1 absolute top-8 text-[#2f80ed] end-3 opacity-0 group-hover:opacity-100">
          <MdOutlineStarBorder size={18} />
          <p className="text-white text-sm font-semibold ">
            {movie.vote_average.toFixed(1)}
          </p>
        </div>
        <div className="z-10 flex bg-[#151f30bf] px-2 rounded-lg gap-1 items-center justify-center h-fit py-1 absolute top-8 text-[#2f80ed] start-3 opacity-0 group-hover:opacity-100 hover:text-[#ffc312]">
          <MdBookmarkBorder size={18} />
        </div>
      </div>

      <div className="flex justify-between gap-4">
        <h1 className="text-white text-md font-bold line-clamp-1 group-hover:text-[#0056b3]">
          {movie.title}
        </h1>
      </div>

      <div className="flex gap-4 text-white">
        <p className="text-xs ">
          {movie.release_date ? movie.release_date : movie.first_air_date}
        </p>
        <p className="text-xs line-clamp-1"> Action </p>
      </div>
    </div>
  );
};

export default MovieCard;
