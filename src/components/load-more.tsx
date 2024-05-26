"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import Image from "next/image";
import MovieCard from "@/components/card/movie-card";
import { usePathname } from "next/navigation";

let page: number = 1;

export type MovieCard = JSX.Element;

interface LoadMoreProps {
  fetchData: (page: number) => Promise<Movie[]>;
}

function LoadMore({ fetchData }: LoadMoreProps) {
  const { ref, inView } = useInView();
  const [data, setData] = useState<Movie[]>([]);

  const pathname = usePathname();

  useEffect(() => {
    if (inView) {
      fetchData(page).then((data) => {
        setData((prevValue) => [...prevValue, ...data]);
        page++;
      });
    }
  }, [inView, data]);

  return (
    <>
      <div className="flex flex-wrap items-center  2xl:gap-x-[5.5rem]">
        {data.map((movie) => (
          <MovieCard key={movie.id} url={pathname} movie={movie} />
        ))}
      </div>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
            priority={true}
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
