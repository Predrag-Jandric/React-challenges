import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import ch2gif from "../../assets/ch2-completed.gif";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Ch2() {
  const [showSolution, setShowSolution] = useState(false);

  function handleshowSolution() {
    setShowSolution(true);
  }

  const starterCode = `import React, { useState } from "react";

export default function Ch2() {
  
  return (
    <div>
      <button >Toggle</button>
      <p></p>
    </div>
  );
}
`;

  const solutionCode = `import React, { useState } from "react";

export default function Ch2() {
  const [toggle, setToggle] = useState(true);

  function handleToggle() {
    setToggle((prev) => !prev);
  }

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      <p>{toggle ? "I'm true" : "I'm false"}</p>
    </div>
  );
}`;

  const ch2Hints = [
    "1. We will need to store somewhere information about whether toggle is on or off. Create a state called 'toggle' and set it's initial value to true.",
    "2. We need a logic for the button, so create a function 'handleToggle' and using the setter function, take previous value as an argument then return whatever is negative from the previous value. Use '!' negation operator.",
    "3. Add an 'onClick' event on the button which will run 'handleToggle' when clicked.",
    "4. In the paragraph, conditionally render content using ternary operator. If 'toggle' state is true set it to 'I'm true' and if not, to 'I'm false'.",
  ];

  const customStyle = {
    margin: "25px",
    marginBottom: "100px",
  };

  const [currentHints, setCurrentHints] = useState([]);

  const handleRevealHint = () => {
    if (currentHints.length < ch2Hints.length) {
      setCurrentHints([...currentHints, ch2Hints[currentHints.length]]);
    }
  };

  return (
    <section className="bg-bg relative text-white text-lg flex flex-col items-center text-center ">
      <p className="text-react py-8 mx-5 px-10 text-5xl font-bold">
        02: Toggle button
      </p>
      <Link
        className="absolute left-6 top-7 rounded-full font-bold flex items-center justify-center h-12 w-12 bg-react text-btn-color hover:bg-react-hover transition"
        to="../panel"
      >
        {" "}
        <FaArrowLeft className="rounded-full" />
      </Link>
      <article className="max-[650px]:flex-col m-6 py-8 max-w-[50rem] flex bg-bg2 p-6 gap-4 items-start rounded-xl">
        <p className="mt-3 text-xl text-start leading-8">
          Implement the necessary logic for toggle button. Each time the button
          is clicked, the content should switch between two different sentences.
          Use the provided React code as a starting point. Completed task should
          behave like this <FaArrowRight className="inline" />
        </p>
        <p></p>
        <img className="mx-auto pt-4" src={ch2gif} alt="gif here" />
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
    </section>
  );
}
