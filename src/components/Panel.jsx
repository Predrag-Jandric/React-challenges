import React from "react";
import { allChallengesData } from "../allChallengesData";
import Item from "./Item";

function Panel() {
  return (
    <div className="bg-bg px-16">
      <p className="text-white text-center text-5xl py-8">Select your first challenge</p>
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
