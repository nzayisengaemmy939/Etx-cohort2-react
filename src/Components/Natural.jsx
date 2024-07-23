import React from "react";
import natural from "../assets/natural.png";
import offer from "../assets/offer.png";

const Natural = () => {
  return (
    <div className="h-[80vh] w-full flex flex-col justify-center">
      <div className="ml-[120px] mr-[100px]  flex justify-between">
        <div
          className="w-[48%] h-[360px] border rounded-3xl text-white content-center"
          style={{
            backgroundImage: `url(${natural})`,
            backgroundSize: "cover", // Adjust to cover the entire div
            backgroundPosition: "center", // Center the image
            backgroundRepeat: "no-repeat", // Prevent image repetition
          }}
        >
            
            <div className="w-[277px] h-[155px] ml-[40px]">
            <p className="font-cursive text-[36px] font-md">Natural!!</p>
            <p className="font-md font-sans text-[40px]">Get Garden Fresh Fruits</p>
            </div>
       
        </div>
        <div
          className="w-[48%] h-[360px] border  rounded-3xl text-white content-center"
          style={{
            backgroundImage: `url(${offer})`,
            backgroundSize: "cover", // Adjust to cover the entire div
            backgroundPosition: "center", // Center the image
            backgroundRepeat: "no-repeat", // Prevent image repetition
          }}
        >
            <div className="w-[277px] h-[155px] ml-[40px]">
            <p className="font-cursive text-[36px] font-md text-[#68A47F]">Offer!!</p>
            <p className="font-md font-sans text-[40px] text-[#274C5B]">Get 10% off on Vegetables</p>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Natural;
