import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import ch4gif from "../../assets/ch4-completed.png";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Footer";

export default function Ch4() {
  const [showSolution, setShowSolution] = useState(false);

  function handleshowSolution() {
    setShowSolution(true);
  }

  const starterCode = `import React, { useState } from "react";

// dont change anything here
const data = [
  { firstName: "Michael", age: 45, job: "Mechanic", id: 1 },
  { firstName: "Maria", age: 35, job: "Secretary", id: 2 },
  { firstName: "Jason", age: 24, job: "Developer", id: 3 },
];

function Ch4() {
  return (
    <div>
      // use map method here
    </div>
  );
}

function User() {
  return (
    <div className="user">
      <p>Name: {}</p>
      <p>Age: {}</p>
      <p>Job: {}</p>
    </div>
  );
}
  
// ----- CSS code ------
.user {
  background-color: white;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  border: 2px solid gray;
  border-radius: 5px;
  margin: 15px;
  width: 14rem;
  font-weight: bold;
}`;

  const solutionCode = `import React, { useState } from "react";

const data = [
  { firstName: "Michael", age: 45, job: "Mechanic", id: 1 },
  { firstName: "Maria", age: 35, job: "Secretary", id: 2 },
  { firstName: "Jason", age: 24, job: "Developer", id: 3 },
];

function Ch4() {
  return (
    <div>
      {data.map((item) => (
        <User
          key={item.id}
          firstName={item.firstName}
          age={item.age}
          job={item.job}
        />
      ))}
    </div>
  );
}

function User({ firstName, age, job }) {
  return (
    <div className="user">
      <p>Name: {firstName}</p>
      <p>Age: {age}</p>
      <p>Job: {job}</p>
    </div>
  );
}`;

  const ch4Hints = [
    "1. Use map method on 'data' inside curly brackets in 'Ch4' component, then return a new component called 'User' and immediately pass all the props including 'key'.",
    "2. If you are unfamiliar with map method, please read about it here before revealing the solution. https://react.dev/learn/rendering-lists",
    "3. Receive those props as arguments for 'User' component. You can destructure them for cleaner code.",
    "4. Pass those props to each paragraph.",
  ];

  const customStyle = {
    margin: "25px",
    marginBottom: "60px",
  };

  const [currentHints, setCurrentHints] = useState([]);

  const handleRevealHint = () => {
    if (currentHints.length < ch4Hints.length) {
      setCurrentHints([...currentHints, ch4Hints[currentHints.length]]);
    }
  };

  return (
    <section className="bg-bg relative text-white text-lg flex flex-col items-center text-center ">
      <p className="text-react py-8 mx-5 px-10 text-5xl font-bold">
        04: Map method
      </p>
      <Link
        className="absolute left-6 top-7 rounded-full font-bold flex items-center justify-center h-12 w-12 bg-react text-btn-color hover:bg-react-hover transition"
        to="../panel"
      >
        <FaArrowLeft className="rounded-full" />
      </Link>
      <article className="max-[650px]:flex-col m-6 py-8 max-w-[50rem] flex bg-bg2 p-6 gap-4 items-start rounded-xl">
        <p className="mt-3 text-xl text-start leading-8">
          Transform static user data into a dynamic component using map method,
          which will return a new component called 'User' that will receive all
          the props and render content. Completed task should behave like this{" "}
          <FaArrowRight className="inline" />
        </p>

        <img className="mx-auto pt-4" src={ch4gif} alt="gif here" />
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
