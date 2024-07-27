import React from "react";
import { Link } from "react-router-dom";

function Item({ img, name, desc, label, link }) {
  return (
    <div className="item">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <span>{label}</span>
      <p>{desc}</p>
      <Link to={link}>Open</Link>
    </div>
  );
}

export default Item;
