import { IoNotificationsOutline } from "react-icons/io5";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" hover:bg-white/15 hover:shadow-xl text-white  flex justify-center w-full  shadow-sm fixed top-0 z-50 drop-shadow-lg">
      <div className="flex justify-between text-white text-xs w-full px-10 py-2">
        <Link href="/">
          <div className="text-3xl">
            <span className="text-white font-bold">mov</span>
            <span className="text-[#2f80ed] italic font-extrabold">Wave</span>
          </div>
        </Link>

        <ul className="flex gap-5 items-center ">
          <li className="text-sm font-bold hover:text-[#2f80ed] hover:cursor-pointer">
            <Link href="/"> Home</Link>
          </li>
          <li className="text-sm font-bold hover:text-[#2f80ed] hover:cursor-pointer">
            <Link href="/movie"> Movies</Link>
          </li>
          <li className="text-sm font-bold hover:text-[#2f80ed] hover:cursor-pointer">
            TV Shows
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <IoNotificationsOutline size={24} />
          <div>
            <Image
              src="/aayush.jpeg"
              alt="profile"
              className="w-8 h-8 rounded-full object-cover me-2 border-2 border-white"
              height={32}
              width={32}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
