"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={() => {}}>
        <div className="space-y-4">
          <>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Name"
                      className="bg-[#151f30] text-gray rounded-xl "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Email"
                      type="email"
                      className="bg-[#151f30] text-gray rounded-xl "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Password"
                      className="bg-[#151f30] text-gray rounded-xl "
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        </div>
      </form>
    </Form>
  );
}
