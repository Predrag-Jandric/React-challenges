import React from "react";
import { allChallengesData } from "../allChallengesData";
import Item from "./Item";

function Panel() {
  return (
    <div>
      {allChallengesData.map((challenge) => (
        <Item
          key={challenge.id}
          img={challenge.img}
          name={challenge.name}
          desc={challenge.desc}
          label={challenge.label}
          link={challenge.link}
        />
      ))}
      <p>Panel</p>
    </div>
  );
}

export default Panel;
