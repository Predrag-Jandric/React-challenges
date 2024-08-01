import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import ch5gif from "../../assets/ch5-completed.gif";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Footer";

export default function Ch5() {
  const [showSolution, setShowSolution] = useState(false);

  function handleshowSolution() {
    setShowSolution(true);
  }

  const starterCode = `
  import React, { useState } from "react";

export default function Test() {
  return (
    <div
      style={{
        backgroundColor: "burlywood",
        fontSize: "1.1rem",
        margin: "1rem",
        padding: "1.5rem",
        fontWeight: 600,
        width: "30rem",
        marginTop: "10rem",
      }}
    >
      <form>
        <label>
          Enter something:
          <input style={{ marginLeft: "15px" }} type="text" />
        </label>
      </form>
      <button
        style={{
          border: "1px solid black",
          padding: "0.5rem",
          marginTop: "1rem",
          backgroundColor: "beige",
          marginBottom: "1rem",
        }}
        type="submit"
      >
        Submit
      </button>
    </div>
  );
}
`;

  const solutionCode = `
  import React, { useState } from "react";

export default function Test() {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue("");
  }

  return (
    <div
      style={{
        backgroundColor: "burlywood",
        fontSize: "1.1rem",
        margin: "1rem",
        padding: "1.5rem",
        fontWeight: 600,
        width: "30rem",
      }}
    >
      <form>
        <label>
          Enter something:
          <input
            style={{ marginLeft: "15px" }}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
      </form>
      <button
        style={{
          border: "1px solid black",
          padding: "0.5rem",
          marginTop: "1rem",
          backgroundColor: "beige",
          marginBottom: "1rem",
        }}
        onClick={handleSubmit}
        type="submit"
      >
        Submit
      </button>
      {submittedValue && <p>You entered: "{submittedValue}"</p>}
    </div>
  );
}
`;

  const ch5Hints = [
    "1. Create 'inputValue' and 'submittedValue' state and set them to an empty string initially.",
    "2. Add a value attribute and onChange to the input.",
    "3. Add onClick to the button which will submit the form.",
    "4. Write 'handleInputChange' function that will handle input changes.",
    "5. Write 'handleSubmit' that will submit the data and reset the form to empty string.",
    "6. Conditionally render the submitted value if it exists.",
  ];

  const customStyle = {
    margin: "25px",
    marginBottom: "60px",
  };

  const [currentHints, setCurrentHints] = useState([]);

  const handleRevealHint = () => {
    if (currentHints.length < ch5Hints.length) {
      setCurrentHints([...currentHints, ch5Hints[currentHints.length]]);
    }
  };

  return (
    <section className="bg-bg relative text-white text-lg flex flex-col items-center text-center ">
      <p className="text-react py-8 mx-5 px-10 text-5xl font-bold">
        05: Simple form
      </p>
      <Link
        className="absolute left-6 top-7 rounded-full font-bold flex items-center justify-center h-12 w-12 bg-react text-btn-color hover:bg-react-hover transition"
        to="../panel"
      >
        <FaArrowLeft className="rounded-full" />
      </Link>
      <article className="flex-col m-6 py-8 max-w-[50rem] flex bg-bg2 p-6 gap-4 items-start rounded-xl">
        <p className="mt-3 text-xl text-start leading-8">
          Create logic for the simple form, in which the information from the
          input is submitted and displayed inside a paragraph when the button is
          clicked.
          <FaArrowDown className="inline" />
        </p>

        <img className="mx-auto pt-4" src={ch5gif} alt="gif here" />
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
