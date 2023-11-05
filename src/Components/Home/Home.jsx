import React from "react";
import Layout from "../../Layout/Layout";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import Card from "../Card/card";
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center p-3 mx-3 my-1">
        <div className="flex gap-2 items-center">
          <span>
            <FaLessThan className="bg-white/10 text-2xl p-1 rounded-[50%]" />
          </span>
          <span>
            <FaGreaterThan className="bg-white/10 text-2xl p-1 rounded-[50%]" />
          </span>
        </div>
        <div>
          <Link to={'/signup'} className="rounded-full text-black text-base py-2 mt-4 px-4 bg-white font-bold">
            Sign up
          </Link>

          <Link to={'/Login'} className="rounded-full text-black text-base py-2 mt-4 px-4 bg-white font-bold">
            Login
          </Link>
        </div>
      </div>

      <div className="tertiary_bg px-4 py-4 mx-6 ">

	  <div className=" flex justify-between item-center my-2">
          <span className="font-bold cursor-pointer text-xl text-animation">Focus</span>
          <span className="open-file-animation cursor-pointer">Show All</span>
        </div>
        <div className="grid gap-6 grid-cols-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex justify-between item-center my-4">
          <span className="text-xl font-bold cursor-pointer hover:text-underline text-animation">Spotify List</span>
          <span className="open-file-animation cursor-pointer">Show All</span>
        </div>
        <div className="grid gap-6 grid-cols-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          
        </div>
      </div>
    </Layout>
  );
};

export default Home;
