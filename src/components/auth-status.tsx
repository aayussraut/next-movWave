// components/AuthStatus.js
"use client";

import Link from "next/link";
import { IoLogInOutline } from "react-icons/io5";
import Image from "next/image";

import { useCurrentUser } from "@/hooks/use-current-user";

const AuthStatus = () => {
  const user = useCurrentUser();

  return (
    <div>
      {user && user.id ? (
        <Image
          src="/aayush.jpeg"
          alt="profile"
          className="w-8 h-8 rounded-full object-cover me-2 border-2 border-white"
          height={32}
          width={32}
          priority={true}
        />
      ) : (
        <Link
          href="/auth/login"
          className="flex items-center gap-1 hover:text-[#2f80ed]"
        >
          <IoLogInOutline size={24} />
          <span className="text-sm font-bold hover:cursor-pointer">Login</span>
        </Link>
      )}
    </div>
  );
};

export default AuthStatus;
