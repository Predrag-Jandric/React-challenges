import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import ch8gif from "../../assets/ch8-completed.gif";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Footer";

export default function Ch8() {
  const [showSolution, setShowSolution] = useState(false);

  function handleshowSolution() {
    setShowSolution(true);
  }

  const starterCode = `
import React, { useState } from "react";

export default function Test() {
  return (
    <section
      style={{ padding: "1rem", backgroundColor: "darkgreen", color: "black" }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          border: "1px solid black",
          backgroundColor: "lightblue",
          alignItems: "start",
          fontSize: "1.2rem",
          padding: "1rem",
          width: "30rem",
        }}
      >
        <div>
          <label>
            Name:
            <input type="" name="name" />
          </label>
        </div>
        <div>
          <label>
            Message:
            <textarea name="message" />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input type="" name="age" />
          </label>
        </div>
        <div>
          <label>
            Favorite Color:
            <select name="favoriteColor">
              <option value="">Select a color</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>
            </select>
          </label>
        </div>
        <button
          style={{
            backgroundColor: "orange",
            padding: "5px 15px",
            fontWeight: 700,
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
      {/* create a div here that will display the submitted data */}
    </section>
  );
}


// CSS (not necessary, you can implement your own style)

// label,
// input,
// textarea,
// select {
//   padding: 5px;
//   margin-left: 15px;
// }

// button:hover {
//   background-color: salmon;
// }
`;

  const solutionCode = `import React, { useState } from "react";

export default function Ch8() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    age: "",
    favoriteColor: "",
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, message, age, favoriteColor } = formData;

    const ageNum = Number(age);

    if (!name || !message || !ageNum || !favoriteColor) {
      setError("All fields are required.");
      return;
    }

    setError("");
    setSubmittedData(formData);
  };

  return (
    <section
      style={{ padding: "1rem", backgroundColor: "darkgreen", color: "black" }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          border: "1px solid black",
          backgroundColor: "lightblue",
          alignItems: "start",
          fontSize: "1.2rem",
          padding: "1rem",
          width: "30rem",
        }}
      >
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input
              type="number"
              name="age"
              min={1}
              max={90}
              value={formData.age}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Favorite Color:
            <select
              name="favoriteColor"
              value={formData.favoriteColor}
              onChange={handleChange}
            >
              <option value="">Select a color</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>
            </select>
          </label>
        </div>
        <button
          style={{
            backgroundColor: "orange",
            padding: "5px 15px",
            fontWeight: 700,
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {submittedData && (
        <div
          style={{
            marginTop: "2rem",
            fontSize: "1.2rem",
            borderRadius: "5px",
            border: "2px solid black",
            padding: "1rem",
            backgroundColor: "khaki",
            width: "30rem",
          }}
        >
          <h3>Submitted Information:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Message: {submittedData.message}</p>
          <p>Age: {submittedData.age}</p>
          <p>Favorite Color: {submittedData.favoriteColor}</p>
        </div>
      )}
    </section>
  );
}
`;

  const ch8Hints = [
    "1. Analyse the code carefully and think about ste steps needed to implement this logic. ",
    "2. ",
    "3. ",
    "4. ",
    "5. ",
    "6. ",
  ];

  const customStyle = {
    margin: "25px",
    marginBottom: "60px",
  };

  const [currentHints, setCurrentHints] = useState([]);

  const handleRevealHint = () => {
    if (currentHints.length < ch8Hints.length) {
      setCurrentHints([...currentHints, ch8Hints[currentHints.length]]);
    }
  };

  return (
    <section className="bg-bg relative text-white text-lg flex flex-col items-center text-center ">
      <p className="text-react py-8 mx-5 px-10 text-5xl font-bold">
        08: Complex form
      </p>
      <Link
        className="absolute left-6 top-7 rounded-full font-bold flex items-center justify-center h-12 w-12 bg-react text-btn-color hover:bg-react-hover transition"
        to="../panel"
      >
        <FaArrowLeft className="rounded-full" />
      </Link>
      <article className="m-6 py-8 max-w-[50rem] flex-row bg-bg2 p-6 gap-6 items-start rounded-xl">
        <p className="mt-3 mb-6 text-xl text-start leading-8">
          Welcome to the last challenge, you need to make a form with text
          input, textarea input, number input, 'select from options' input, and
          a submit button. When the submit button is clicked we need all the
          submitted information to be displayed as shown in the gif. Form should
          also have some guard rails so that all fields must be filled and the
          'Age' field must be a number from 1 to 90 max. This is a very hard one
          so it might be a good idea to reveal and follow the hints from the
          start. This will be a learning journey. When you think you understand
          everything and have seen and analyzed to solution, try the challenge
          again without any help! <FaArrowDown className="inline" />
        </p>

        <img className="mx-auto pt-4" src="" alt="gif here" />
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
