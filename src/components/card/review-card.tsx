import Image from "next/image";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { MdOutlinePersonOutline, MdOutlineStarBorder } from "react-icons/md";

interface ReviewCardProps {
  review: MovieReview;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="bg-[#151f30] border-0 text-white pt-6">
      <CardContent className="">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="flex items-center justify-center w-10 h-10 border bg-white rounded-xl relative">
              {review.author_details.avatar_path == null ? (
                <MdOutlinePersonOutline size={30} fill={"black"} />
              ) : (
                <Image
                  src={`http://image.tmdb.org/t/p/original/${review.author_details.avatar_path}`}
                  alt={"user"}
                  fill={true}
                  className="object-cover rounded-xl"
                  priority={true}
                />
              )}
            </div>
            <div className="flex flex-col gap-1">
              <CardTitle className="text-base">
                {review.author_details.username}
              </CardTitle>
              <CardDescription className="text-white text-xs">
                {review.created_at}
              </CardDescription>
            </div>
          </div>
          <div className="flex gap-1 items-center justify-center text-[#2f80ed] ">
            <MdOutlineStarBorder size={23} className="pb-1" />

            <p className="text-white text-sm font-semibold ">
              {review.author_details.rating == null
                ? "N/A"
                : review.author_details.rating.toFixed(1)}
            </p>
          </div>
        </div>

        <div className="mt-5 border-t-2  border-[#2F80ED]/10 pt-5">
          <p
            className="text-white text-base 2xl:text-md text-justify line-clamp-4"
            dangerouslySetInnerHTML={{ __html: review.content }}
          ></p>
        </div>
      </CardContent>
    </Card>
  );
}
