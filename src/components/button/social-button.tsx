"use client";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

export const SocialButton = () => {
  const onClick = (provider: "google") => {
    signIn(provider, {
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex justify-center gap-5">
      <Button className="bg-[#3b5998] text-white">Facebook</Button>
      <Button className="bg-[#1da1f2] text-white">Twitter</Button>
      <Button
        className="bg-[#fbbc05] text-white"
        onClick={() => onClick("google")}
      >
        Google
      </Button>
    </div>
  );
};
