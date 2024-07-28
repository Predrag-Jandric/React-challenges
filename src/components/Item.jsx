import React from "react";
import { Link } from "react-router-dom";

function Item({ name, desc, link }) {
  return (
    <div className="text-white shadow-xl border border-shadow rounded-lg text-lg max-w-[20rem] gap-8 flex flex-col items-start p-6 bg-bg2 ">
      <h3 className="text-2xl font-bold text-react">{name}</h3>
      <p>{desc}</p>
      <Link className="mt-auto rounded-full font-bold px-5 py-2 bg-react text-btn-color hover:bg-react-hover transition" to={link}>Open</Link>
    </div>
  );
}

export default Item;
