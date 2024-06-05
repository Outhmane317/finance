import { FiAlignJustify } from "react-icons/fi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenuChange = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className=" flex items-center h-24 px-5 justify-between max-w-[1240px] mx-auto text-white">
      <h1 className=" font-bold text-4xl text-[#148412]">Finance.</h1>

      <div className="hidden md:flex  md:gap-6">
        <nav className="text-white ">
          <ul className="flex space-x-8">
            <li className="p-4 hover:text-[#148412] cursor-pointer ">Home</li>
            <li className="p-4 hover:text-[#148412] cursor-pointer ">
              Company
            </li>
            <li className="p-4 hover:text-[#148412] cursor-pointer ">
              Resources
            </li>
            <li className="p-4 hover:text-[#148412] cursor-pointer ">About</li>
            <li className="p-4 hover:text-[#148412] cursor-pointer ">
              Contact
            </li>
          </ul>
        </nav>
        <div className="bg-[#148412] text-white px-6 py-1 rounded-md flex justify-center items-center">
          Get Started
        </div>
        <div className="bg-transparent border-2 border-grenny text-white px-6 py-1 rounded-md flex justify-center items-center">
          Login
        </div>
      </div>

      <div className="block md:hidden">
        {openMenu === false ? (
          <AiOutlineMenu
            onClick={handleOpenMenuChange}
            color="white"
            size={30}
            className="cursor-pointer"
          />
        ) : (
          <AiOutlineClose
            onClick={handleOpenMenuChange}
            color="white"
            size={30}
            className="cursor-pointer"
          />
        )}
      </div>

      <nav
        className={`fixed top-0 left-0 h-full w-[60%] border-r border-r-gray-900 bg-black transition-transform transform ${
          openMenu ? `translate-x-0` : `-translate-x-full`
        } duration-700 ease-in-out`}
      >
        <h1 className=" font-bold text-4xl text-[#148412] py-6 px-5">
          Finance.
        </h1>
        <ul className="uppercase mr-">
          <li className="px-4 py-2 border-b border-gray-600 hover:text-[#148412] cursor-pointer ">
            Home
          </li>
          <li className="px-4 py-2 border-b border-gray-600 hover:text-[#148412] cursor-pointer ">
            Company
          </li>
          <li className="px-4 py-2 border-b border-gray-600 hover:text-[#148412] cursor-pointer ">
            Resources
          </li>
          <li className="px-4 py-2 border-b border-gray-600 hover:text-[#148412] cursor-pointer ">
            About
          </li>
          <li className="px-4 py-2 border-b border-gray-600 hover:text-[#148412] cursor-pointer ">
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
