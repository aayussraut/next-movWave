import { fetchDiscoverTvShows } from "@/actions/fetch-discover-tv-shows";
import MovieCardWrapper from "@/components/card/movie-card-wrapper";
import LoadMore from "@/components/load-more";

export default async function MoviePage() {
  return (
    <div className="flex flex-col gap-5 pt-5">
      <MovieCardWrapper title="Discover TV Shows">
        <LoadMore fetchData={fetchDiscoverTvShows} />
      </MovieCardWrapper>
    </div>
  );
}
