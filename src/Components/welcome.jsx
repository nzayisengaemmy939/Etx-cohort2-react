import React from "react";
import bgimage from "../assets/bgimage.png";
import agriculture from "../assets/agriculture.png";
import Image from "../assets/Image.png";
import fresh from "../assets/rightFresh.png";


const Welcome = () => {
  return (
    <div
      className="w-full h-screen bg-[#F1EFF0]
] mx"
      style={{
        backgroundImage: `url(${agriculture})`,
        backgroundSize: "cover", // Adjust to cover the entire div
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent image repetition
      }}
    >
    
        <div className="h-[100vh] w-[80%]"  style={{
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover", // Adjust to cover the entire div
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent image repetition

      }}>
   <div className="ml-[120px]">
        <div className="h-[100vh] w-[50%] flex flex-col justify-center">
          <p className="font-cursive text-[#68A47F]">100% Natural Food</p>
          <p className="font-bold font-sans text-[#274c5b] text-[70px]">Choose the best healthier way of life</p>
          <button className="w-[220px] h-[79px] bg-[#EFD372] rounded-lg flex items-center justify-center gap-5"><span>Explore now</span><span><img src={fresh} className=" bg-[#335B6B] w-[19px] h-[19px] rounded-3xl"></img></span></button>
        </div>
</div>


      </div>
    </div>
  );
};

export default Welcome;
