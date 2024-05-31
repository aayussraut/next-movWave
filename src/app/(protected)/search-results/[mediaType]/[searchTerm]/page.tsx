import { fetchSearchResults } from "@/actions/fetch-search-results";
import MovieCard from "@/components/card/movie-card";

export default async function SearchResult({
  params,
}: {
  params: { mediaType: any; searchTerm: any };
}) {
  const { mediaType, searchTerm } = params;

  const searchResults: Movie[] = await fetchSearchResults(
    mediaType,
    searchTerm
  );

  return (
    <div className="flex flex-col gap-5 pt-5 px-10  ">
      <div className="mt-10 flex items-center gap-1 justify-between bg-[#151F30] px-3 py-3 rounded-3xl">
        <div className="flex items-center gap-1 bg-[#131720] rounded-full p-1">
          <h1 className="text-sm text-white font-extrabold bg-[#131720] rounded-full px-2 py-1">
            Search Results
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap items-center  2xl:gap-x-[5.5rem]">
        {searchResults.map((movie) => (
          <MovieCard key={movie.id} url={`/${mediaType}`} movie={movie} />
        ))}
      </div>
    </div>
  );
}
