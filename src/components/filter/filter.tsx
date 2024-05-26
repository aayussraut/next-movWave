"use client";

import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { durationOptions } from "@/constants/durations";
import genres from "@/constants/genres";
import { ratingOptions } from "@/constants/rating";
import { yearOptions } from "@/constants/released-year";
import FilterDropdown from "./filter-dropdown";

interface FilterProps {
  onFilterChange: (filterValues: {
    rating: string;
    genre: string;
    releasedYear: string;
    duration: string;
  }) => void;
}

export default function Filter({ onFilterChange }: FilterProps) {
  const [rating, setRating] = useState("all");
  const [genre, setGenre] = useState("all");
  const [releasedYear, setReleasedYear] = useState("all");
  const [duration, setDuration] = useState("all");

  useEffect(() => {
    onFilterChange({ rating, genre, releasedYear, duration });
  }, [rating, genre, releasedYear, duration, onFilterChange]);

  return (
    <div className="flex gap-2 items-center justify-center">
      <Select onValueChange={setGenre} value={genre}>
        <SelectTrigger className="w-fit gap-2 h-8 outline-none  border-transparent bg-transparent appearance-none rounded-xl text-white">
          <SelectValue placeholder="Genre" />
        </SelectTrigger>
        <SelectContent className="border border-white bg-[#151F30] text-white">
          {Object.entries(genres).map(([genre, id]) => (
            <SelectItem key={id} value={id.toString()}>
              {genre}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <FilterDropdown
        options={ratingOptions}
        value={rating}
        onChange={setRating}
        placeholder="Select Rating"
      />
      <FilterDropdown
        options={yearOptions}
        value={releasedYear}
        onChange={setReleasedYear}
        placeholder="Select Released Year"
      />
      <FilterDropdown
        options={durationOptions}
        value={duration}
        onChange={setDuration}
        placeholder="Select Duration"
      />
    </div>
  );
}
