import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="bg-white w-full py-[10rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
        <div className=" flex flex-col py-8 w-full rounded-xl shadow-lg hover:scale-105 duration-300 cursor-pointer my-4">
          <img
            className=" w-20 mx-auto -mt-[3rem] bg-white "
            src={single}
            alt=""
          />
          <h2 className=" font-bold text-2xl text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium mt-6">
            <p className="py-2 border-b mx-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className=" bg-[#148412] text-black mx-auto font-bold px-5 py-3 rounded-md w-[150px] mt-5">
            Get started
          </button>{" "}
        </div>

        <div className=" flex flex-col py-8 w-full rounded-xl shadow-lg hover:scale-105 duration-300 cursor-pointer my-4 md:m-0">
          <img
            className=" w-20 mx-auto -mt-[3rem] bg-white "
            src={double}
            alt=""
          />
          <h2 className=" font-bold text-2xl text-center py-8">Double User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium mt-6">
            <p className="py-2 border-b mx-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className=" bg-black text-white mx-auto font-bold px-5 py-3 rounded-md w-[150px] mt-9">
            Get started
          </button>{" "}
        </div>

        <div className=" flex flex-col py-8 w-full rounded-xl shadow-lg hover:scale-105 duration-300 cursor-pointer my-4">
          <img
            className=" w-20 mx-auto -mt-[3rem] bg-white "
            src={triple}
            alt=""
          />
          <h2 className=" font-bold text-2xl text-center py-8">Triple User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium mt-6">
            <p className="py-2 border-b mx-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className=" bg-[#148412] text-black mx-auto font-bold px-5 py-3 rounded-md w-[150px] mt-5">
            Get started
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Cards;
