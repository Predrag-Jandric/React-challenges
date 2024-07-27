import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import ch1gif from "../assets/ch1-completed.gif";

export default function Ch1() {
  const [text, setText] = useState("");
  const [showSolution, setShowSolution] = useState(false);

  function handleshowSolution() {
    setShowSolution(true);
  }

  function handleClick() {
    setText("Hello World!");
  }

  const starterCode = `
import { useState } from "react";

export default function Ch1() {

return (
    <div className="ch1-container">
      <button class="btn">
        Click
      </button>
      <p className="ch1-text">text</p>
    </div>
  )
}
`;

  const solutionCode = `
import { useState } from "react";

export default function Ch1() {
const [text, setText] = useState("");

function handleClick() {
  setText("Hello World");
}

return (
    <div className="ch1-container">
      <button onClick={handleClick} class="btn">
        Click
      </button>
      <p className="ch1-text">{text}</p>
    </div>
  )
}
`;

  const ch1Hints = [
    "1. The text that is to be displayed after the button is clicked, needs to be stored in a state. So, create a state of 'text' and set it to empty string",
    "2. The paragraph is going to display this text so set the content of the paragraph to 'text' state",
    "3. you won the challenge",
  ];

  const [currentHints, setCurrentHints] = useState([]);

  const handleRevealHint = () => {
    if (currentHints.length < ch1Hints.length) {
      setCurrentHints([...currentHints, ch1Hints[currentHints.length]]);
    }
  };

  return (
    <>
      <div>
        <p>
          Build a React component that displays a piece of text. Initially, the
          text should be empty. Upon clicking a button, the text should change
          to "Hello World!"
        </p>
        <p>Challenge Requirements:</p>
        <ul>
          <li>Use the provided React code as a starting point.</li>
          <li>
            Implement the necessary logic to update the "text" state when the
            button is clicked.
          </li>
        </ul>
        <p>Completed task should behave like this</p>
        <img src={ch1gif} alt="gif here" />
      </div>
      {/* <div className="ch1-container">
        <button onClick={handleClick} class="btn">
          Click
        </button>
        <p className="ch1-text">{text}</p>
      </div> */}
      <div>
        <p>
          Copy and paste this <b>Started code</b> into your local editor and
          start building.
        </p>
        <SyntaxHighlighter language="javascript" wrapLines style={nightOwl}>
          {starterCode}
        </SyntaxHighlighter>
      </div>

      <button onClick={handleRevealHint}>Reveal a hint</button>
      <p style={{ whiteSpace: "pre-wrap" }}>{currentHints.join("\n")}</p>

      <p>I still cannot do it, show me the solution</p>
      <button onClick={handleshowSolution}>Show solution</button>
      {showSolution && (
        <SyntaxHighlighter language="javascript" wrapLines style={nightOwl}>
          {solutionCode}
        </SyntaxHighlighter>
      )}
    </>
  );
}
