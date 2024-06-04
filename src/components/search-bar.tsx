"use client";
import { useForm } from "react-hook-form";

import { Form, FormControl, FormField, FormItem } from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { IoSearchOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const form = useForm();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { searchTerm, mediaType } = form.getValues();

    const url = `/search-results/${mediaType}/${searchTerm}`;
    router.push(url);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit}>
        <div className="flex  w-fit border border-white rounded-xl items-center shadow-md">
          <FormField
            control={form.control}
            name="Media Type"
            rules={{ required: true }}
            render={({ field }) => (
              <FormItem className="outline-none">
                <FormControl className="outline-none bg-transparent !appearance-none">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value ? field.value : "movie"}
                  >
                    <SelectTrigger className="  flex w-32 gap-2 h-8 outline-none  focus:border-transparent bg-transparent appearance-none text-shadow">
                      <SelectValue placeholder="Movie/Tv" />
                    </SelectTrigger>
                    <SelectContent className="border border-white bg-[#0E1428] text-white ">
                      <SelectItem value={"tv"}>TV Shows</SelectItem>
                      <SelectItem value="movie">Movies</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="searchTerm"
            rules={{ required: true }}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="I'm looking for..."
                    value={field.value}
                    onChange={field.onChange}
                    className="w-[180px] h-8 bg-transparent text-shadow"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className=" flex">
            <Button
              type="submit"
              variant="ghost"
              className="rounded-md h-6 w-12 text-white hover:text-[#2f80ed] hover:bg-transparent"
            >
              <IoSearchOutline size={16} />
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
