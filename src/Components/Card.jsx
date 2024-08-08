import React from "react";
import "./slide.css"
import { useNavigate } from "react-router-dom";
const url =
  "data:image/png;base64,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";

const Card = ({ img, name, exp, price, id }) => {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/product/${id}`,{state:{
      name,
      exp,
      img,price
    }}); // Correct the URL by removing the '|'
  };

  return (
    <div
      className="bg-[#F9F8F8] h-[400px] w-[100%] mb-9 border-2 slide-in"
      style={{ borderRadius: "10px" }}
      onClick={handleDetail} // Set the click handler
    >
      <button className="bg-[#274C5B] text-white outline-none border-none rounded-md py-1 px-2 ml-[15px] mt-[25px] mb-3">
        {name}
      </button>
      <img
        src={img}
        className="bg-[#F9F8F8] h-[240px] w-[90%] m-auto"
        alt={name}
      />
      <p className="text-[#274C5B] text-[20px] font-sans font-medium ml-[15px] capitalize py-2">
        {exp}
      </p>
      <div className="flex justify-between w-[90%] m-auto">
        <span>{price}</span>
        <div className="flex gap-2">
          <img src={url} width="12px" height="12px" alt="Rating" />
          <img src={url} width="12px" height="12px" alt="Rating" />
          <img src={url} width="12px" height="12px" alt="Rating" />
          <img src={url} width="12px" height="12px" alt="Rating" />
          <img src={url} width="12px" height="12px" alt="Rating" />
        </div>
      </div>
    </div>
  );
};

export default Card;
