import { useState } from "react";

function Test() {
  const [toggle, setToggle] = useState(true);

  function handleToggle() {
    setToggle((prev) => !prev);
  }

  return (
    <div className="bg-white p-20 text-lg text-center font-semibold ">
      <button className="hover:bg-testbtnhover transition border py-1 px-3 mb-3 bg-testbtn rounded-lg " onClick={handleToggle}>Toggle</button>
      <p>{toggle ? "I'm true" : "I'm false"}</p>
    </div>
  );
}

export default Test;
