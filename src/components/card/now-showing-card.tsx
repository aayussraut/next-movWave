import { MdStarRate } from "react-icons/md";
import { IoPlaySharp, IoTicketSharp } from "react-icons/io5";

import { Button } from "../ui/button";

import Image from "next/image";
import Link from "next/link";

interface NowShowingCardProps {
  movie: Movie;
}

const NowShowingCard = ({ movie }: NowShowingCardProps) => {
  return (
    <div
      className={`bg-cover z-0 group`}
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
      }}
    >
      <div className="flex items-center justify-center gap-10 px-10  h-[30rem]  bg-gradient-to-b from-transparent  to-black ">
        <div className="flex flex-1 flex-col gap-3 w-full my-auto z-10 items-center">
          <div>
            <Image
              src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              alt="avatar"
              className=" object-cover rounded-md transition-transform duration-300 transform scale-100 hover:scale-105"
              height={150}
              width={154}
            />
          </div>
          <div className="flex  gap-2">
            <h1 className="text-white text-4xl font-extrabold overflow-hidden line-clamp-1">
              {movie.original_title}
            </h1>
            <div className="flex items-center gap-1 ">
              <MdStarRate fill={"yellow"} size={25} />
              <p className="text-yellow-200 text-sm font-semibold pt-1">
                {movie.vote_average.toFixed(1)}
              </p>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <p className=" text-xs font-semibold">{movie.release_date}</p>
            <span className="text-sm">|</span>
            <p className=" text-xs font-semibold">Ongoing</p>
          </div>

          <div className="flex gap-2 ">
            {/* {movie.genre_ids.map((id) => ( */}
            <span
              // key={id}
              className="bg-[#2f80ed]  text-white px-2 py-1 rounded-2xl text-sm font-semibold mr-2"
            >
              Test
            </span>
            {/* ))} */}
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center gap-4">
          <div className="flex flex-col gap-2 lg:px-10 xl:px-16 text-white">
            <h3 className=" text-2xl font-extrabold ">Summary</h3>
            <p className="overflow-hidden line-clamp-2 text-justify">
              {movie.overview}
            </p>
            <Link href={`/movie/${movie.id}`}>
              <p className="text-sky-500 opacity-0 group-hover:opacity-100">
                Read More --&gt;
              </p>
            </Link>
          </div>

          <div className="flex gap-2">
            <Button
              className="flex   px-4 py-2 rounded-md items-center gap-2"
              variant={"default"}
            >
              <IoPlaySharp size={20} fill="white" />
              <span className="text-white font-semibold">Watch Trailer</span>
            </Button>
            <Button
              variant={"ghost"}
              className="flex px-4 py-2 rounded-md items-center gap-2 bg-[#131720]  text-white hover:bg-gray-800 "
            >
              <IoTicketSharp
                size={20}
                fill="white"
                className="group-hover:text-[#0056b3]"
              />
              <span className="font-semibold">Get Ticket</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowShowingCard;
