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

const Product = () => {
  return (
    <div className="h-screen w-full px-4 py-8">
      <p className="text-center text-[36px] font-cursive font-medium text-[#7EB693]">Categories</p>
      <p className="text-center font-bold text-[50px] font-sans text-[#274C5B]">Our Product</p>
      <div className="h-[800px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-screen-xl">
        <Card img={Vegetable} name="Vegetable" exp="Calabrese Broccoli" />
        <Card img={seven} name="Fresh" exp="Fresh Banana Fruits" />
        <Card img={six} name="Millet" exp="White Nuts" />
        <Card img={five} name="Vegetable" exp="White Nuts" />
        <Card img={four} name="Health" exp="Vegan Red Tomato" />
        <Card img={three} name="Nut" exp="Mung Bean" />
        <Card img={two} name="Fresh" exp="Eggs" />
        <Card img={one} name="Fresh" exp="Zelco Suji Elaichi Rusk" />
      </div>
    </div>
  );
};

export default Product;
