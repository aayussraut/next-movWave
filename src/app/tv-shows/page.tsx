"use client";
import { fetchDiscoverTvShows } from "@/actions/fetch-discover-tv-shows";
import MovieCardWrapper from "@/components/card/movie-card-wrapper";
import Filter from "@/components/filter/filter";
import LoadMore from "@/components/load-more";
import { useCallback, useState } from "react";

export default function MoviePage() {
  const [filterValues, setFilterValues] = useState({
    rating: "all",
    genre: "all",
    releasedYear: "all",
    duration: "all",
  });

  const handleFilterChange = useCallback(
    (newFilterValues: {
      rating: string;
      genre: string;
      releasedYear: string;
      duration: string;
    }) => {
      setFilterValues(newFilterValues);
    },
    []
  );

  return (
    <div className="flex flex-col gap-5 pt-5 px-10  ">
      <div className="mt-10 flex items-center gap-1 justify-between bg-[#151F30] px-3 py-3 rounded-3xl">
        <div className="flex items-center gap-1 bg-[#131720] rounded-full p-1">
          <h1 className="text-sm text-white font-extrabold bg-[#131720] rounded-full px-2 py-1">
            Discover TV Shows
          </h1>
        </div>
        <Filter onFilterChange={handleFilterChange} />
      </div>
      <LoadMore fetchData={fetchDiscoverTvShows} filterValues={filterValues} />
    </div>
  );
}
