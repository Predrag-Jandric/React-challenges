import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import ch7gif from "../../assets/ch7-completed.png";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Footer";

export default function Ch7() {
  const [showSolution, setShowSolution] = useState(false);

  function handleshowSolution() {
    setShowSolution(true);
  }

  const starterCode = `
import React, { useEffect, useState } from "react";

export default function Test() {

  // fetch data from here
  // fetch("https://jsonplaceholder.typicode.com/users")

  return (
    <ul>
      {/* {render data here with map method} */}
    </ul>
  );
}
`;

  const solutionCode = `
import React, { useEffect, useState } from "react";

export default function Test() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ul>
      {records.map((record) => (
        <li key={record.id}>
          My name is {record.name} and my email is {record.email}.
        </li>
      ))}
    </ul>
  );
}
`;

  const ch7Hints = [
    "1. Create 'records' state that will hold all the data that is fetched.",
    "2. Create useEffect and fecth the data, leave the dependency array empty, meaning the useEffect will run only once, upon first component render.",
    "3. inside 'ul' tag, create a map on 'records' and return 'li' element with static sentence and dynamic user information. Dont forget the key prop.",
  ];

  const customStyle = {
    margin: "25px",
    marginBottom: "60px",
  };

  const [currentHints, setCurrentHints] = useState([]);

  const handleRevealHint = () => {
    if (currentHints.length < ch7Hints.length) {
      setCurrentHints([...currentHints, ch7Hints[currentHints.length]]);
    }
  };

  return (
    <section className="bg-bg relative text-white text-lg flex flex-col items-center text-center ">
      <p className="text-react py-8 mx-5 px-10 text-5xl font-bold">
        07: Data fetching
      </p>
      <Link
        className="absolute left-6 top-7 rounded-full font-bold flex items-center justify-center h-12 w-12 bg-react text-btn-color hover:bg-react-hover transition"
        to="../panel"
      >
        <FaArrowLeft className="rounded-full" />
      </Link>
      <article className="flex-col m-6 py-8 max-w-[50rem] flex bg-bg2 p-6 gap-4 items-start rounded-xl">
        <p className="mt-3 text-xl text-start leading-8">
          In this data fetching exercise, we need to successfully fetch data,
          store it in a state, then use the map method on that state to render
          the user's first name and email address. You can further complicate
          the challenge and display more user info or add unique style{" "}
          <FaArrowDown className="inline" />
        </p>

        <img className="mx-auto pt-4" src={ch7gif} alt="gif here" />
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
