"use client";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
interface MovieCardWrapperProps {
  title: string;
  sliderRef?: React.MutableRefObject<Slider | null>;
  children: React.ReactNode;
}

export default function MovieCardWrapper({
  title,
  sliderRef,
  children,
}: MovieCardWrapperProps) {
  return (
    <div className="flex flex-col gap-2 mt-10 px-10 ">
      <div className="flex items-center gap-1 justify-between bg-[#151F30] px-3 py-3 rounded-3xl">
        <div className="flex items-center gap-1 bg-[#131720] rounded-full p-1">
          <h1 className="text-sm text-white font-extrabold bg-[#131720] rounded-full px-2 py-1">
            {title}
          </h1>
          <IoIosArrowForward size={15} fill="white" />
        </div>
        {sliderRef && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => sliderRef?.current?.slickPrev()}
              className="bg-[#131720] rounded-full p-1"
            >
              <IoIosArrowBack fill="white" />
            </button>
            <button
              onClick={() => sliderRef?.current?.slickNext()}
              className="bg-[#131720] rounded-full p-1"
            >
              <IoIosArrowForward fill="white" />
            </button>
          </div>
        )}
      </div>
      <div className="">{children}</div>
    </div>
  );
}
