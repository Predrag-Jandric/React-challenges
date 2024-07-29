import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import ch1gif from "../../assets/ch1-completed.gif";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Ch1() {
  const [showSolution, setShowSolution] = useState(false);

  function handleshowSolution() {
    setShowSolution(true);
  }

  const starterCode = `import React, { useState } from "react";

function Ch1() {

return (
    <div>
      <button>
        Click
      </button>
      <p>text</p>
    </div>
  )
}
`;

  const solutionCode = `import React, { useState } from "react";

function Ch1() {
const [text, setText] = useState("");

function handleClick() {
  setText("Hello World");
}

return (
    <div>
      <button onClick={handleClick}>
        Click
      </button>
      <p>{text}</p>
    </div>
  )
}
`;

  const ch1Hints = [
    "1. The text that is to be displayed after the button is clicked, needs to be stored in a state. So, create a state of 'text' and set it to empty string.",
    "2. The paragraph is going to display this 'text' state so set the content of the paragraph to 'text' state.",
    "3. Create a function 'handleClick' that will use the 'text' setter function to change the 'text' state.",
    "4. Create an 'onClick' event on the button and add the 'handleClick' function to the button's 'onClick' event brackets.",
  ];

  const customStyle = {
    margin: "25px",
    marginBottom: "100px",
  };

  const [currentHints, setCurrentHints] = useState([]);

  const handleRevealHint = () => {
    if (currentHints.length < ch1Hints.length) {
      setCurrentHints([...currentHints, ch1Hints[currentHints.length]]);
    }
  };

  return (
    <section className="bg-bg relative text-white text-lg flex flex-col items-center text-center ">
      <p className="text-react py-8 mx-5 px-10 text-5xl font-bold">
        01: Basic click event
      </p>
      <Link
        className="absolute left-6 top-7 rounded-full font-bold flex items-center justify-center h-12 w-12 bg-react text-btn-color hover:bg-react-hover transition"
        to="../panel"
      >
        <FaArrowLeft className="rounded-full" />
      </Link>
      <article className="max-[650px]:flex-col m-6 py-8 max-w-[50rem] flex bg-bg2 p-6 gap-4 items-start rounded-xl">
        <p className="mt-3 text-xl text-start leading-8">
          Implement the necessary logic that displays a piece of text.
          Initially, the text should be empty. Upon clicking a button, the text
          should change to "Hello World!". Use the provided React code as a
          starting point. Completed task should behave like this{" "}
          <FaArrowRight className="inline" />
        </p>

        <img className="mx-auto pt-4" src={ch1gif} alt="gif here" />
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
