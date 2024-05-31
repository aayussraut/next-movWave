import { IoNotificationsOutline, IoLogInOutline } from "react-icons/io5";

import Image from "next/image";
import Link from "next/link";
import SearchBar from "./search-bar";
import AuthStatus from "./auth-status";

const Navbar = () => {
  return (
    <nav className=" hover:bg-white/15 hover:shadow-sm text-white  flex justify-center w-full fixed top-0 z-50 text-shadow">
      <div className="flex justify-between text-white text-xs w-full px-10 py-2">
        <Link href="/">
          <div className="text-3xl">
            <span className="text-white font-bold">mov</span>
            <span className="text-[#2f80ed] italic font-extrabold">Wave</span>
          </div>
        </Link>

        <ul className="flex gap-5 items-center ">
          <li className="text-sm font-bold hover:text-[#2f80ed] hover:cursor-pointer text-shadow">
            <Link href="/"> Home</Link>
          </li>
          <li className="text-sm font-bold hover:text-[#2f80ed] hover:cursor-pointer">
            <Link href="/movies"> Movies</Link>
          </li>
          <li className="text-sm font-bold hover:text-[#2f80ed] hover:cursor-pointer">
            <Link href="/tv-shows"> TV Shows</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4 cursor-pointer">
          <SearchBar />
          <IoNotificationsOutline size={24} />
          <AuthStatus />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
