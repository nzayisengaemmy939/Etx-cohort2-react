import React from "react";
import logo from "../assets/Logo.png";
import search from "../assets/Search.png";
import cart from "../assets/Cart.png";
import icon from "../assets/Icon.png";

const Navbar = () => {
  return (
    <div className="w-full  h-[204px] text-red content-center">
      <div className="mx-[100px] flex items-center justify-between  text-[#274c5b] font-sans">
        <div className="text-[38px] w-[20%] flex gap-5 items-center">
            <img src={logo} className="w-[36px] h-[53px]"></img>
          <h1>Organick</h1>
        </div>
        <ul className="text-[20px] font-bold capitalize w-[50%] flex gap-10 items-center">
          <li className="">Home</li>
          <li>About</li>
          <li className="flex gap-2 items-center"><span>pages</span>
          <img src={icon} className="w-[9px] h-[5px]"></img><span>

         </span></li>
          <li>shop</li>
          <li>project</li>
          <li>News</li>
        </ul>
        <div className="flex gap-5 items-center w-[20%]">
            <img src={search} className="w-[56px] h-[56px]"></img>
            <div className="flex gap-5 items-center border p-2" style={{borderRadius:"40px"}}>
            <img src={cart} className="w-[56px] h-[56px]"></img>
            <p>Cart (0)</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
