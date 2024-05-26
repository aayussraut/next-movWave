import NowShowing from "@/components/now-showing";
import TopRatedMovie from "@/components/top-rated-movie";
import UpcomingMovie from "@/components/upcoming-movie";

export default function Home() {
  return (
    <main className=" min-h-screen pt-[30rem]">
      <NowShowing />
      <TopRatedMovie />
      <UpcomingMovie />
    </main>
  );
}
