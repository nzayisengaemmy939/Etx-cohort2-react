import React, { useState } from "react";
import logo from "../assets/Logo.png";
import search from "../assets/Search.png";
import cart from "../assets/Cart.png";
import icon from "../assets/Icon.png";
import SubmitProduct from "./add_product/Form";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useProductContext } from "./ProductContext";

const Navbar = () => {
  const { productCount } = useProductContext();
  const [nav, setNav] = useState(false);
  const [product, setProduct] = useState(false);

  const handleNavToggle = () => {
    setNav(!nav);
  };

  const toggleProduct = (event) => {
    // Stop event propagation to ensure click is handled only in this element
    
    setProduct(!product);
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
          <div
            className="flex gap-5 items-center border p-2 rounded-full cursor-pointer"
            onClick={toggleProduct}
          >
            <img src={cart} alt="Cart Icon" className="w-[46px] h-[46px]" />
            <p>Cart ({productCount})</p>
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
        className={`fixed top-0 left-0 w-[60%] h-[600px] bg-[hsla(120,100%,1%,1)] text-white text-[19px] transition-transform duration-500 ${
          nav ? "transform-none" : "-translate-x-full"
        }`}
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
          {/* Remove toggleProduct handler from this div to ensure it only affects the cart div */}
          <div className="flex flex-col gap-5 items-center cursor-pointer">
            {product && <SubmitProduct />}
            <img
              src={cart}
              alt="Cart Icon"
              className="w-[36px] h-[36px] cursor-pointer"
            />
            <p>Cart ({productCount})</p>
          </div>
        </div>
      </div>
      {product&& <SubmitProduct onClose={toggleProduct}></SubmitProduct>}

    </div>
  );
};

export default Navbar;
