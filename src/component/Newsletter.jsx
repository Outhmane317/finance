import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-black text-white p-16 ">
      <div className=" max-w-[1240px] mx-auto grid lg:grid-cols-3 ">
        <div className="lg:col-span-2 my-4 ">
          <h1 className="text-2xl sm:text-4xl font-bold mb-3">
            Wan tips & tricks to optimize your flow?
          </h1>
          <p className=" text-md sm:text-lg">
            Sign up to our newsletter and stay up to date
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col lg:flex-row gap-5 mb-2">
            <input
              className=" px-2 py-3 rounded-md outline-none"
              type="text"
              placeholder="Enter you email"
            />
            <button className=" bg-[#148412] text-black font-bold px-5 py-3 rounded-md w-[150px] ">
              Get started
            </button>
          </div>
          <p className="">
            We care about the protetion of your data. Read our{" "}
            <span className="underline text-[#148412]">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
