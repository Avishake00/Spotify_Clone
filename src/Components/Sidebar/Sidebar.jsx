import React from "react";
import { BiHome, BiLibrary } from "react-icons/bi";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { TbWorldPlus } from "react-icons/tb";
import Signup from "./Signup";
import './Sidebar.css'

const Sidebar = () => {
  const isMobileView = window.innerWidth <= 1024; // Adjust the width as needed
  const sidebarHeight = isMobileView ? "100%" : "90%";

  return (
    <div className="w-1/4 sidebar" style={{ height: sidebarHeight }}>
      
      {/* Home and Search in sidebar */}
      <div className="nav secondary_bg rounded-lg p-6">
        <div className="flex mb-4 items-center gap-4">
          <BiHome className="font-bold text-xl" />
          <span>Home</span>
        </div>
        <div className="flex items-center gap-4">
          <BiSearchAlt className="font-bold text-xl" />
          <span>Search</span>
        </div>
      </div>

      {/* Libraries */}
      <div className="Your_libraries mt-2 secondary_bg rounded-lg px-2 py-2">
        <div className="flex px-4 justify-between mb-4 items-center gap-4">
          <div className="flex gap-2 items-center">
            <BiLibrary className="font-bold text-xl" />
            <span>Your Library</span>
          </div>
          <button className="hover:bg-black/40 rounded-[50%] py-6 px-4">
            <AiOutlinePlus className="font-bold text-xl" />
          </button>
        </div>

        <div className="Your_libraries_component">

        <div className=" leading-8 mt-2 tertiary_bg rounded-lg p-6">
          <p className="font-bold">Create your first playlist</p>
          <p className="font-semibold">It's easy, we'll help you</p>
          <button className="rounded-full text-black mt-4 px-4 bg-white font-semibold">
            Create playlist
          </button>
        </div>

        <div className="leading-8 mt-4 tertiary_bg rounded-lg p-6">
          <p className="font-bold">Let's find some podcasts to follow</p>
          <p className="font-semibold">We'll keep you updated on new episodes</p>
          <button className="rounded-full text-black mt-4 px-4 bg-white font-semibold">
            Browse podcasts
          </button>
        </div>

        </div>

      </div>

      <div className="mt-4 px-4 flex gap-4 flex-wrap">
        <a className="text-xs text-grey-300 mx-4" href="#">
          Legal
        </a>
        <a className="text-xs text-grey-300 mx-4" href="#">
          Privacy Center
        </a>
        <a className="text-xs text-grey-300 mx-4" href="#">
          Privacy Policy
        </a>
        <a className="text-xs text-grey-300 mx-4" href="#">
          Cookies
        </a>
        <a className="text-xs text-grey-300 mx-4" href="#">
          About Ads
        </a>
        <a className="text-xs text-grey-300 mx-4" href="#">
          Accessibility
        </a>
      </div>

      <button className="mt-4 mx-4 text-sm text-white border-white border rounded-full flex gap-2 px-3 py-1 items-center">
        <TbWorldPlus />
        <span className="text-white font-bold">English</span>
      </button>

    <div >
      <Signup />
    </div>
      
    </div>
  );
};

export default Sidebar;
