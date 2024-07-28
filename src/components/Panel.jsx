import React from "react";
import { allChallengesData } from "../allChallengesData";
import Item from "./Item";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function Panel() {
  return (
    <div className="bg-bg px-16">
      <Link
        className="absolute left-6 top-8 rounded-full font-bold flex items-center justify-center h-12 w-12 bg-react text-btn-color hover:bg-react-hover transition"
        to="/"
      >
        <FaArrowLeft className="rounded-full" />
      </Link>
      <p className="text-white text-center font-bold text-5xl py-8">
        Select your first challenge
      </p>
      <div className=" flex gap-10">
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
  );
}

export default Panel;
