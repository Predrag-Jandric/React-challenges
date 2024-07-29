import React from "react";
import { allChallengesData } from "../allChallengesData";
import Item from "./Item";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Panel() {
  return (
    <>
      <div className="bg-bg px-16 flex flex-col  items-center">
        <Link
          className="absolute left-6 top-7 rounded-full font-bold flex items-center justify-center h-12 w-12 bg-react text-btn-color hover:bg-react-hover transition"
          to="/"
        >
          <FaArrowLeft className="text-lg rounded-full" />
        </Link>
        <p className="text-white text-center font-bold text-5xl py-8 mb-6">
          Select your challenge
        </p>
        <div className="mb-14 2xl:w-[92rem] xl:w-max md:w-[47rem] grid grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
          {allChallengesData.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              desc={item.desc}
              link={item.link}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Panel;
