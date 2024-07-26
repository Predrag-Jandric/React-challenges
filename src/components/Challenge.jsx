import React from "react";
import { Link } from "react-router-dom";

function Challenge({ img, name, desc, label, link }) {
  return (
    <div className="challenge">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <span>{label}</span>
      <p>{desc}</p>
      <Link to={link}>Open</Link>
    </div>
  );
}

export default Challenge;
