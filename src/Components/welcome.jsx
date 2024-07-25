import React from "react";
import bgimage from "../assets/bgimage.png";
import agriculture from "../assets/agriculture.png";
import Image from "../assets/Image.png";
import Sahani from "../assets/sahani.png";

import fresh from "../assets/rightFresh.png";
import freshRight from "../assets/freshRight.svg";


const Welcome = () => {
  return (
    <div
      className="w-full h-screen bg-[#F1EFF0]
] mx content-center"
      style={{
        backgroundImage: `url(${agriculture})`,
        backgroundSize: "cover", // Adjust to cover the entire div
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent image repetition
      }}
    >
      <div className="mx-[20px] h-[60vh] flex justify-between md:mx-[100px]">
      <div className="h-[80vh] w-[90%] flex flex-col justify-center m-auto md:w-[50%] md:[100vh]">
            <p className="font-cursive text-[#68A47F]">100% Natural Food</p>
            <p className="font-bold font-sans text-[#274c5b] text-[50px]">
              Choose the best healthier way of life
            </p>
            <button className="w-[200px] h-[68px] bg-[#EFD372] rounded-lg flex items-center justify-center gap-5 mt-10">
              <span>Explore now</span>
              <span>
                <img
                  src={freshRight}
                  className=" bg-[rgb(51,91,107)] w-[19px] h-[19px] rounded-3xl invert p-1"
                ></img>
              </span>
            </button>
          </div>
      <div
        className="h-[100%] w-[50%] hidden md:flex"
        style={{
          backgroundImage: `url(${Sahani})`,
          backgroundSize: "cover", // Adjust to cover the entire div
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent image repetition
        }}
      >
       
      </div>
    
         
        </div>
      </div>
     
  
  );
};

export default Welcome;
