import { fetchDiscoverMovies } from "@/actions/fetch-discover-movies";
import MovieCard from "@/components/card/movie-card";
import MovieCardWrapper from "@/components/card/movie-card-wrapper";
import LoadMore from "@/components/load-more";
import { Select } from "@/components/ui/select";

export default async function MoviePage() {
  return (
    <div className="flex flex-col gap-5 pt-5">
      <MovieCardWrapper title="Discover Movies">
        <LoadMore fetchData={fetchDiscoverMovies} />
      </MovieCardWrapper>
    </div>
  );
}
