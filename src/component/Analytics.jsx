import React from "react";
import laptopImg from "../assets/laptop.jpeg";
const Analytics = () => {
  return (
    <div className="bg-white w-full p-16">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img className="w-[500px] mx-auto " src={laptopImg} alt="" />
        <div className="p-4 flex flex-col justify-center">
          <p className="text-[#148412] font-bold md:text-lg uppercase">
            data analytics dashboard
          </p>
          <h1 className="text-2xl font-bold py-2">
            Manage Data Analytics centrale
          </h1>
          <p className="mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est error
            laboriosam excepturi ipsum aperiam aut nam magnam adipisci laborum
            illum corrupti velit, aliquam necessitatibus, dolorum reprehenderit
            asperiores! Numquam, ratione excepturi.
          </p>
          <button className=" bg-[#148412] font-bold px-7 py-3 rounded-md w-[200px] ">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
