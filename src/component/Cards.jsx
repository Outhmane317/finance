import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="bg-white w-full py-[10rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
        <div className="w-full border shadow-sm">
          <img className=" w-20 mx-auto -mt-[3rem] bg-white " src={single} alt="" />
          <h2 className=" font-bold text-2xl text-center py-8">Single User</h2>
          <p>$149</p>
          <div>
            <p>500 GB Storage</p>
            <p>1 Granted User</p>
            <p>Send up to 2 GB</p>
          </div>
          <button>Start Trial</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
