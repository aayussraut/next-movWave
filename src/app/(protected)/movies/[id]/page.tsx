import { MdOutlineStarBorder } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { IoPlaySharp } from "react-icons/io5";
import Image from "next/image";

import { fetchDetails } from "@/actions/fetch-details";
import { fetchReviews } from "@/actions/fetch-reviews";
import { fetchRelated } from "@/actions/fetch-related";

import { Button } from "@/components/ui/button";
import ReviewCard from "@/components/card/review-card";
import MovieCard from "@/components/card/movie-card";
import DetailInfo from "@/components/detail-info";

export default async function MovieDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const movie = await fetchDetails(id, "movie");
  const reviews: MovieReview[] = await fetchReviews(id, "movie");
  const similarMovies: Movie[] = await fetchRelated(id, "movie");

  return movie ? (
    <DetailInfo
      movie={movie}
      reviews={reviews}
      similarMovies={similarMovies}
      url="/movies"
    />
  ) : (
    <Image
      src="./spinner.svg"
      alt="spinner"
      width={56}
      height={56}
      className="object-contain"
      priority={true}
    />
  );
}
