"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import Image from "next/image";
import MovieCard from "@/components/card/movie-card";
import { usePathname } from "next/navigation";

let page: number = 1;

export type MovieCard = JSX.Element;

interface LoadMoreProps {
  fetchData: (
    page: number,
    rating: string,
    genre: string,
    year: string,
    duration: string
  ) => Promise<Movie[]>;
  filterValues: {
    rating: string;
    genre: string;
    releasedYear: string;
    duration: string;
  };
}

function LoadMore({ fetchData, filterValues }: LoadMoreProps) {
  const { ref, inView } = useInView();
  const [data, setData] = useState<Movie[]>([]);

  const pathname = usePathname();

  useEffect(() => {
    // Reset data to empty array when any filter value changes
    setData([]);

    // Fetch new data based on the updated filter values
    fetchData(
      page,
      filterValues.rating,
      filterValues.genre,
      filterValues.releasedYear,
      filterValues.duration
    ).then((newData) => {
      setData((prevData) => [...prevData, ...newData]);
      page++;
    });
  }, [
    filterValues.rating,
    filterValues.genre,
    filterValues.releasedYear,
    filterValues.duration,
    fetchData,
  ]);

  useEffect(() => {
    // Reset page number when filter values change
    page = 1;
  }, [
    filterValues.rating,
    filterValues.genre,
    filterValues.releasedYear,
    filterValues.duration,
  ]);

  useEffect(() => {
    if (inView) {
      // Fetch more data when user scrolls to the bottom
      fetchData(
        page,
        filterValues.rating,
        filterValues.genre,
        filterValues.releasedYear,
        filterValues.duration
      ).then((newData) => {
        setData((prevData) => [...prevData, ...newData]);
        page++;
      });
    }
  }, [
    inView,
    data,
    filterValues.rating,
    filterValues.genre,
    filterValues.releasedYear,
    filterValues.duration,
    fetchData,
  ]);

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
