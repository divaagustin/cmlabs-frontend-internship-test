import React from "react";
import FoodsApi from "../ApiComponent/FoodApi";
import Hero from "../MainComponent/Hero";

const DashBoard = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 ">
          <FoodsApi />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
