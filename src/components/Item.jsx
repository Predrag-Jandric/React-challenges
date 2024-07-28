import React from "react";
import { Link } from "react-router-dom";

function Item({ name, desc, link }) {
  return (
    <div className="text-white border border-react rounded-md text-lg max-w-[16rem] gap-5 flex flex-col items-start p-4 bg-bg2 ">
      <h3 className="text-2xl font-bold text-react">{name}</h3>
      <p>{desc}</p>
      <Link className="mt-auto rounded-full font-bold px-5 py-2 bg-react text-btn-color hover:bg-react-hover transition" to={link}>Open</Link>
    </div>
  );
}

export default Item;
