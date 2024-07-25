import React, { useState } from "react";
import logo from "../assets/Logo.png";
import search from "../assets/Search.png";
import cart from "../assets/Cart.png";
import icon from "../assets/Icon.png";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNavToggle = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[180px] text-red content-center">
      <div className="mx-[20px] flex items-center justify-between text-[#274c5b] font-sans md:mx-[50px]">
        <div className="w-[20%] flex gap-2 items-center text-[20px] md:text-[38px] md:gap-5">
          <img
            src={logo}
            alt="Logo"
            className="w-[26px] h-[30px] md:w-[36px] md:h-[53px]"
          />
          <h1 className="font-bold">Organick</h1>
        </div>

        <ul className="text-[20px] font-bold capitalize w-[50%] flex gap-10 items-center hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li className="flex gap-2 items-center">
            <span>Pages</span>
            <img src={icon} alt="Dropdown Icon" className="w-[9px] h-[5px]" />
          </li>
          <li>Shop</li>
          <li>Project</li>
          <li>News</li>
        </ul>

        <div className="flex gap-5 items-center w-[20%] hidden md:flex">
          <img
            src={search}
            alt="Search Icon"
            className="w-[26px] h-[26px]  md:w-[46px] md:h-[46px]"
          />
          <div className="flex gap-5 items-center border p-2 rounded-full">
            <img src={cart} alt="Cart Icon" className="w-[46px] h-[46px]" />
            <p>Cart (0)</p>
          </div>
        </div>
        <div className="flex gap-3 items-center block md:hidden">
          <img
            src={search}
            alt="Search Icon"
            className="w-[26px] h-[26px]  md:w-[46px] md:h-[46px]"
          />
           <div
          onClick={handleNavToggle}
          className="block md:hidden cursor-pointer"
          aria-label="Toggle menu"
        >
          {nav ? <IoMdClose size={20} /> : <IoMdMenu size={20} />}
        </div>
        </div>
       
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%]  h-[600px] ease-in-out duration-500 bg-[hsla(120,100%,1%,1)] text-white text-[19px]"
            : "fixed left-[-100%]"
        }
      >
        <ul className="text-[20px] font-bold capitalize flex flex-col gap-5 items-center">
          <li className="p-4">Home</li>
          <li className="p-4">About</li>
          <li className="flex gap-2 items-center">
            <span>Pages</span>
            <img src={icon} alt="Dropdown Icon" className="w-[9px] h-[5px]" />
          </li>
          <li className="p-4">Shop</li>
          <li className="p-4">Project</li>
          <li className="p-4">News</li>
        </ul>

        <div className="mt-6">
          <div className="flex flex-col gap-5 items-center">
            <img src={cart} alt="Cart Icon" className="w-[36px] h-[36px]" />
            <p>Cart (0)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
