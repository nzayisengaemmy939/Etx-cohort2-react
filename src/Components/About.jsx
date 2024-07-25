import React from "react";
import food from "../assets/food.png";
import fresh from "../assets/rightFresh.png";
import icon1 from "../assets/icon1.png";
import freshRight from "../assets/freshRight.svg";

import icon2 from "../assets/icon2.png";

const About = () => {
  return (
    <div className="w-full h-[120vh] bg-[#F1EFF0] content-center md:h-[100vh] ">
      <div className="mx-[20px] h-full flex flex-col justify-between md:ml-[120px] md:mr-[100px] md:flex-row">
        <div
          className="w-[100%] h-[30%] md:w-[49%] md:h-[100%]  my-[30px] md-my-[0px]"
          style={{
            backgroundImage: `url(${food})`,
            backgroundSize: "cover", // Adjust to cover the entire div
            backgroundPosition: "center", // Center the image
            backgroundRepeat: "no-repeat", // Prevent image repetition
          }}
        ></div>
        <div className="w-[100%] h-[70%] content-center flex flex-col gap-[15px] md:w-[49%] md:h-[100%]">
          <p className="font-cursive text-[#68A47F] text-[26px] font-medium mt-[50px]">
            About Us
          </p>
          <p
            className="text-[30px] text-[#274C5B] font-sans font-bold md:text-[40px]"
            style={{ lineHeight: "40px" }}
          >
            We Believe in Working Accredited Farmers
          </p>
          <p className="font-medium text-[#525C60] text-[15px] font-opens">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <p className="flex flex-col gap-[8px]">
            <span className="text-[#274C5B] font-medium  font-sans text-[15px] flex gap-[10px] items-center">
              <span>
                <img src={icon2}  className="w-[55px] h-[55px]"></img>
              </span>
              <span className="text-[25px]">Organic Foods Only</span>
            </span>
            <span className="font-medium text-[#525C60] text-[15px] font-opens">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </span>
          </p>
          <p className="flex flex-col gap-[8px]">
            <span className="text-[#274C5B] font-medium  font-sans text-[25px] flex gap-[10px] items-center">
              <span>
                <img src={icon1} className="w-[55px] h-[55px]"></img>
              </span>
              <span> Quality Standards </span>
            </span>
            <span className="font-medium text-[#525C60] text-[15px] font-opens">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </span>
          </p>

          <button className="w-[200px] h-[68px] bg-[#274C5B] text-white font-medium rounded-lg flex items-center justify-center gap-5">
            <span>Explore now</span>
            <span>
              <img
                src={freshRight}
                className=" bg-[#335b6b] w-[19px] h-[19px] rounded-3xl invert p-1"
              ></img>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
