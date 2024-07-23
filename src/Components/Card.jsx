import React from "react";
import Vegetable from "../assets/vegetable.png";
import Rating from "../assets/Rating.png";


const Card = ({img,name,exp}) => {
  return (
    <div
      className="bg-[#F9F8F8] h-[400px] w-[290px] mb-9"
      style={{ borderRadius: "30px" }}
    >
      <button className="bg-[#274C5B] text-white outline-none border-none rounded-md py-1 px-2 ml-[30px] mt-[25px] mb-3">
        {name}
      </button>
      <img src={img} className="bg-[#F9F8F8] h-[240px] w-full"></img>
      <p className="text-[#274C5B] text-[20px] font-sans font-medium ml-[30px] capitalize py-2">
        {exp}
      </p>
      <p className="text-center ">
        <img src={Rating}className="w-[280px]"></img>
      </p>

    </div>
  );
};

export default Card;
