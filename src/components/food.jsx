import React, { useState } from "react";
import { data } from "../data/data";

function Food() {
  // console.log(data);
  const [foods, setFoods] = useState(data);
  // filter Type burger/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className=" max-w-[1360px] m-auto px-4 py-12 ">
      <h1 className=" text-orange-600 font-bold text-4xl text-center ">
        Top Rated Menu Items
      </h1>
      {/* Filter Row */}
      <div className=" flex flex-col lg:flex-row justify-between ">
        {/* Filter Type */}
        <div>
          <p className=" font-bold text-gray-700 ">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-60 hover:text-white"
            >
              All
            </button>
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Burger
            </button>
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Pizza
            </button>
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              SOlads
            </button>
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700 ">Filter Price</p>
          <div className="flex justify-between max-w-[300px] w-full ">
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white ">
              $
            </button>
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white ">
              $$
            </button>
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white ">
              $$$
            </button>
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white ">
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg  hover:scale-105 duration-300 "
          >
            <img
              src={item.image}
              alt=" {item.name}  "
              className="w-full h-[200px] object-cover rounded-t-lg  "
            />
            <div className="flex justify-between px-2 py-4  ">
              <p className="font-bold">{item.name} </p>
              <p>
                <span className="bg-orange-500 text-white  rounded-full p-1 ">
                  {item.price}{" "}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
