import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import ch3gif from "../../assets/ch3-completed.gif";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Footer";

export default function Ch3() {
  const [showSolution, setShowSolution] = useState(false);

  function handleshowSolution() {
    setShowSolution(true);
  }

  const starterCode = `import React, { useState } from "react";

  function Ch3() {
    
  return (
    <div>
      <button>-</button>
      <p>Count: </p>
      <button>+</button>
    </div>
  );
}
`;

  const solutionCode = `import React, { useState } from "react";

  function Ch3() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((prev) => prev + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  }

  return (
    <div>
      <button onClick={decrease}>-</button>
      <p>Count: {count}</p>
      <button onClick={increase}>+</button>
    </div>
  );
}
`;

  const ch3Hints = [
    "1. We need a place to store data that will change. Let's create a state called 'count' and set it to number zero",
    "2. Display the static 'count' state within a paragraph element.",
    "3. Create 'increase' function that will use the setter function and take previous value as an argument then return that previous value + 1.",
    "4. Create another function called 'decrease' which will do the same, only with previous value - 1.",
    "5. Add an 'if' statement to the 'decrease' function so that it will start only if the 'count' state is more than zero.",
    "6. Attach 'onClick' event handlers to buttons, linking them to their 'increment' and 'decrement' functions.",
  ];

  const customStyle = {
    margin: "25px",
    marginBottom: "60px",
  };

  const [currentHints, setCurrentHints] = useState([]);

  const handleRevealHint = () => {
    if (currentHints.length < ch3Hints.length) {
      setCurrentHints([...currentHints, ch3Hints[currentHints.length]]);
    }
  };

  return (
    <section className="bg-bg relative text-white text-lg flex flex-col items-center text-center ">
      <p className="text-react py-8 mx-5 px-10 text-5xl font-bold">
        03: Number counter
      </p>
      <Link
        className="absolute left-6 top-7 rounded-full font-bold flex items-center justify-center h-12 w-12 bg-react text-btn-color hover:bg-react-hover transition"
        to="../panel"
      >
        <FaArrowLeft className="rounded-full" />
      </Link>
      <article className="max-[650px]:flex-col m-6 py-8 max-w-[50rem] flex bg-bg2 p-6 gap-4 items-start rounded-xl">
        <p className="mt-3 text-xl text-start leading-8">
          Build a basic counter application that displays a numerical value and
          allows the user to increase or decrease it, but only in the positive
          number range. Completed task should behave like this{" "}
          <FaArrowRight className="inline" />
        </p>

        <img className="mx-auto pt-4" src={ch3gif} alt="gif here" />
      </article>
      <article className="max-w-[50rem]">
        <p className="text-xl pb-2  m-6">
          Copy and paste this <b>Started code</b> into your local editor and
          start building.
        </p>
        <SyntaxHighlighter language="javascript" wrapLines style={nightOwl}>
          {starterCode}
        </SyntaxHighlighter>
      </article>

      <button
        className="mt-6 rounded-full font-bold px-5 py-2 bg-react text-btn-color hover:bg-react-hover transition"
        onClick={handleRevealHint}
      >
        Reveal a hint
      </button>
      <p
        className="text-xl my-6 leading-8 p-6 rounded-xl text-start max-w-[50rem]"
        style={{ whiteSpace: "pre-wrap" }}
      >
        {currentHints.join("\n")}
      </p>

      <button
        className="mb-8 rounded-full font-bold px-5 py-2 bg-react text-btn-color hover:bg-react-hover transition"
        onClick={handleshowSolution}
      >
        Show solution <FaArrowDown className="inline" />
      </button>
      {showSolution && (
        <SyntaxHighlighter
          customStyle={customStyle}
          language="javascript"
          wrapLines
          style={nightOwl}
        >
          {solutionCode}
        </SyntaxHighlighter>
      )}
      <Footer />
    </section>
  );
}
