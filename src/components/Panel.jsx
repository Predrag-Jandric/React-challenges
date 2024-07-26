import React from "react";
import { allChallengesData } from "../allChallengesData";
import Challenge from "./Challenge";

function Panel() {
  return (
    <div>
      {allChallengesData.map((challenge) => (
        <Challenge
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
