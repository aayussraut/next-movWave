// components/AuthStatus.js
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  IoLogInOutline,
  IoLogOutOutline,
  IoPersonOutline,
} from "react-icons/io5";
import Image from "next/image";

import { useCurrentUser } from "@/hooks/use-current-user";
import { logout } from "@/actions/logout";

const AuthStatus = () => {
  const user = useCurrentUser();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onClick = () => {
    logout();
  };

  return (
    <div>
      {user && user.id ? (
        <div className="relative" onClick={toggleModal}>
          <Image
            src="/aayush.jpeg"
            alt="profile"
            className="w-8 h-8 rounded-full object-cover me-2 border-2 border-white"
            height={32}
            width={32}
            priority={true}
          />
          {isModalOpen && (
            <div className="absolute right-0 mt-2 w-48 border border-white bg-[#0E1428] rounded-md shadow-lg py-2 text-white cursor-pointer">
              <a
                href="/profile"
                className="flex px-4 py-2  hover:bg-gray-200 hover:text-black  gap-2 items-center"
              >
                <IoPersonOutline size={18} />
                <span> View Profile</span>
              </a>
              <button
                className="flex gap-2 w-full text-left px-4 py-2  hover:bg-gray-200 hover:text-black items-center"
                onClick={onClick}
              >
                <IoLogOutOutline size={18} />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
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
