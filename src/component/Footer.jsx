import React from "react";
import { SocialIcon } from "react-social-icons";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () =>  {
    return (
      <div className="text-gray-500 py-16 px-4 overflow-x-hidden">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-5 gap-7 ">
          <div className="md:col-span-2 w-full flex flex-col gap-5">
            <h1 className="font-bold text-3xl text-[#148412]">Finance.</h1>
            <p className="text- text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi saepe aperiam necessitatibus fugiat.
            </p>
            <div className="flex gap-4">
              <FaFacebookF size={30} />
              <FaTwitter size={30} />
              <FaInstagram size={30} />
              <FaLinkedinIn size={30} />
            </div>
          </div>
  
          <div className="w-full">
            <h5 className="my-2">Solution</h5>
            <ul className="flex flex-col gap-3">
              <li className="hover:text-[#148412] cursor-pointer">Analytics</li>
              <li className="hover:text-[#148412] cursor-pointer">Marketing</li>
              <li className="hover:text-[#148412] cursor-pointer">Commerce</li>
              <li className="hover:text-[#148412] cursor-pointer">Insights</li>
            </ul>
          </div>
  
          <div className="w-full">
            <h5 className="my-2">Support</h5>
            <ul className="flex flex-col gap-3">
              <li className="hover:text-[#148412] cursor-pointer">Pricing</li>
              <li className="hover:text-[#148412] cursor-pointer">Documentation</li>
              <li className="hover:text-[#148412] cursor-pointer">Guides</li>
              <li className="hover:text-[#148412] cursor-pointer">API Status</li>
            </ul>
          </div>
  
          <div className="w-full">
            <h5 className="my-2">Company</h5>
            <ul className="flex flex-col gap-3">
              <li className="hover:text-[#148412] cursor-pointer">About</li>
              <li className="hover:text-[#148412] cursor-pointer">Blogs</li>
              <li className="hover:text-[#148412] cursor-pointer">Jobs</li>
              <li className="hover:text-[#148412] cursor-pointer">Press</li>
              <li className="hover:text-[#148412] cursor-pointer">Partners</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

export default Footer;
