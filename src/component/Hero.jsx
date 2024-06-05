import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white ">
      <div className="flex flex-col justify-center items-center h-screen max-w-[800px] mx-auto">
        <p className="text-[#148412] font-bold p-4 md:text-lg uppercase">
          growing with data analytics
        </p>
        <h1 className="font-bold md:text-7xl sm:text-5xl text-4xl">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center gap-2">
          <p className="font-bold md:text-5xl sm:text-4xl text-xl py-5 ">
            {" "}
            Fast, flexible finance for{" "}
          </p>
          <ReactTyped
            className="font-bold md:text-5xl sm:text-4xl text-xl text-gray-400 py-4 "
            strings={["USDT.", "BTC.", "ETH."]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <button className=" sm:text-2xl text-lg bg-[#148412]  py-3 px-8 rounded-md hover:transform my-4 text-black">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Hero;
