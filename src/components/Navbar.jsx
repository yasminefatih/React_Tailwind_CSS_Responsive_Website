import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#333]"
      style={{ backgroundColor: "white" }} // Background color set to white
    >
      <h1 className="w-full text-3xl font-bold text-[#6A5ACD]">MyWebsite.</h1>
      <ul className="hidden md:flex space-x-6">
        <li className="text-gray-700 hover:text-[#6A5ACD] transition duration-300">
          Home
        </li>
        <li className="text-gray-700 hover:text-[#6A5ACD] transition duration-300">
          Company
        </li>
        <li className="text-gray-700 hover:text-[#6A5ACD] transition duration-300">
          Resources
        </li>
        <li className="text-gray-700 hover:text-[#6A5ACD] transition duration-300">
          About
        </li>
        <li className="text-gray-700 hover:text-[#6A5ACD] transition duration-300">
          Contact
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={30} className="text-[#6A5ACD]" />
        ) : (
          <AiOutlineMenu size={30} className="text-[#6A5ACD]" />
        )}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-200 bg-white ease-in-out duration-500 shadow-xl"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#6A5ACD] m-4">
          MyWebsite.
        </h1>
        <li className="p-4 border-b border-gray-200 text-gray-700 hover:text-[#6A5ACD]">
          Home
        </li>
        <li className="p-4 border-b border-gray-200 text-gray-700 hover:text-[#6A5ACD]">
          Company
        </li>
        <li className="p-4 border-b border-gray-200 text-gray-700 hover:text-[#6A5ACD]">
          Resources
        </li>
        <li className="p-4 border-b border-gray-200 text-gray-700 hover:text-[#6A5ACD]">
          About
        </li>
        <li className="p-4 text-gray-700 hover:text-[#6A5ACD]">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
