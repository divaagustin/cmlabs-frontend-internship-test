import React from "react";
import FoodsApi from "../ApiComponent/FoodApi";

const Meals = () => {
  return (
    <>
      <div className="container mx-auto py-48">
        <div className="grid grid-cols-2 md:grid-cols-4 ">
          <FoodsApi />
        </div>
      </div>
    </>
  );
};

export default Meals;
