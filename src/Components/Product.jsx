import React from 'react';
import Card from './Card';
// import one from "../assets/1(2).png";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import five from "../assets/five.png";
import six from "../assets/six.png";
import seven from "../assets/seven.png";
import Vegetable from "../assets/vegetable.png";
import fresh from "../assets/rightFresh.png";
import freshRight from "../assets/freshRight.svg";



const Product = () => {
  return (
    <div className="h-full w-full px-4 py-8 md:[100vh]">
      <p className="text-center text-[36px] font-cursive font-medium text-[#7EB693]">Categories</p>
      <p className="text-center font-bold text-[50px] font-sans text-[#274C5B]">Our Product</p>
      <div className="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-screen-xl">
        <Card img={Vegetable} name="Vegetable" exp="Calabrese Broccoli" />
        <Card img={seven} name="Fresh" exp="Fresh Banana Fruits" />
        <Card img={six} name="Millet" exp="White Nuts" />
        <Card img={five} name="Vegetable" exp="White Nuts" />
        <Card img={four} name="Health" exp="Vegan Red Tomato" />
        <Card img={three} name="Nut" exp="Mung Bean" />
        <Card img={two} name="Fresh" exp="Eggs" />
        <Card img={one} name="Fresh" exp="Zelco Suji Elaichi Rusk" />
      
      </div>
      <button className="w-[200px] h-[68px] bg-[#274C5B] text-white font-medium rounded-lg flex items-center justify-center gap-5  m-auto">
            <span>Load More...</span>
            <span>
              <img
                src={freshRight}
                className=" bg-[#335b6b] w-[19px] h-[19px] rounded-3xl p-1 invert"
              ></img>
            </span>
          </button>
     
    </div>
  );
};

export default Product;
