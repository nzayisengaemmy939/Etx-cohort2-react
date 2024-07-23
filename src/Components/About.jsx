import React from "react";
import food from "../assets/food.png";
import fresh from "../assets/rightFresh.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";

const About = () => {
  return (
    <div className="w-full h-[130vh] bg-[#F1EFF0] content-center">
      <div className="ml-[120px] mr-[100px]  h-[120vh] flex justify-between">
        <div
          className="w-[49%] h-[100%]"
          style={{
            backgroundImage: `url(${food})`,
            backgroundSize: "cover", // Adjust to cover the entire div
            backgroundPosition: "center", // Center the image
            backgroundRepeat: "no-repeat", // Prevent image repetition
          }}
        ></div>
        <div className="w-[49%] h-[100%] content-center flex flex-col gap-[15px]">
          <p className="font-cursive text-[#68A47F] text-[36px] font-medium">
            About Us
          </p>
          <p
            className="text-[50px] text-[#274C5B] font-sans font-bold"
            style={{ lineHeight: "50px" }}
          >
            We Believe in Working Accredited Farmers
          </p>
          <p className="font-medium text-[#525C60] text-[18px] font-opens">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <p className="flex flex-col gap-[8px]">
            <span className="text-[#274C5B] font-medium  font-sans text-[25px] flex gap-[10px] items-center">
              <span>
                <img src={icon2}></img>
              </span>
              <span>Organic Foods Only</span>
            </span>
            <span className="font-medium text-[#525C60] text-[18px] font-opens">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </span>
          </p>
          <p className="flex flex-col gap-[8px]">
            <span className="text-[#274C5B] font-medium  font-sans text-[25px] flex gap-[10px] items-center">
              <span>
                <img src={icon1}></img>
              </span>
              <span> Quality Standards </span>
            </span>
            <span className="font-medium text-[#525C60] text-[18px] font-opens">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </span>
          </p>

          <button className="w-[220px] h-[79px] bg-[#274C5B] text-white font-medium rounded-lg flex items-center justify-center gap-5">
            <span>Explore now</span>
            <span>
              <img
                src={fresh}
                className=" bg-[#335b6b] w-[19px] h-[19px] rounded-3xl"
              ></img>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
