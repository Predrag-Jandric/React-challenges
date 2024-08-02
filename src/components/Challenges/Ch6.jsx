import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import ch6gif from "../../assets/ch6-completed.gif";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Footer";

export default function Ch6() {
  const [showSolution, setShowSolution] = useState(false);

  function handleshowSolution() {
    setShowSolution(true);
  }

  const starterCode = `
import { useState } from "react";

export default function Test() {
  return (
    <main>
      <h1>React To-do List</h1>

      <section>
        <input
          type="text"
          // value=?
          placeholder="Enter task"
        />
        <button>Add</button>
      </section>

      <Item />
    </main>
  );
}

function Item() {
  return <section></section>;
}
`;

  const solutionCode = `
 import { useState } from "react"

 export default function Test() {

  const [todos, setTodos] = useState([])
  const [inputVal, setInputVal] = useState("")

  function handleInput(e){
    setInputVal(e.target.value)
  }

  function addToDo(){
    if (inputVal !== "") {
      setTodos(prevTodo => [...prevTodo, inputVal])
      setInputVal("")
    }
  }

  function handleDelete(uniqueIndex){
    setTodos((prev) => prev.filter((prevTodo, prevIndex) => prevIndex !== uniqueIndex));
  }

  return (
    <main >
      <h1>React To-do List</h1>

      <section>
        <input type="text" value={inputVal} placeholder="Enter task" onChange={handleInput} />
        <button onClick={addToDo}>Add</button>
      </section>

      <Item todos={todos} handleDelete={handleDelete} />

    </main>
  );
}


function Item({todos, handleDelete}) {
  return (
    <section>

    {todos.map((item, index) => {
        return (
          <article key={index}>
            <p>{item}</p> 

            <div >
              <input type="checkbox" />
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>

          </article>
        )
      })}
        
    </section>
  )
}

`;

  const ch6Hints = [
    "1. Create a state called 'inputVal' which will hold an input value, initially an empty string. Then create a function that holds the event as an argument, that will set what whatever is typed into the input as an 'inputVal'.",
    "2. Inside the input element tag, define value as 'inputVal' and an onChange event listener as a previously created function.",
    "3. Create a state called 'todos' and set it as an empty array.",
    "4. Render the 'Item' component inside the main component, between the 'main' and the 'section' element tag, and pass 'todos' state as props.",
    "5. Inside the 'Item' component accept props and render the array state using map method. Might be a good idea to fill the array with dummy data just so that the map will return something visible on the screen.",
    "6. Create a function that will copy the previous todos using spread operator and then set 'todos' as an 'inputVal'. All of this should happen only if 'inputVal' is not an empty string. We also want to reset 'inputVal' to an empty string at the end of the function.",
    "7. Create a function that will handle deleting the item using filter method and don't forget to pass this function as a prop to 'Item' as well.",
  ];

  const customStyle = {
    margin: "25px",
    marginBottom: "60px",
  };

  const [currentHints, setCurrentHints] = useState([]);

  const handleRevealHint = () => {
    if (currentHints.length < ch6Hints.length) {
      setCurrentHints([...currentHints, ch6Hints[currentHints.length]]);
    }
  };

  return (
    <section className="bg-bg relative text-white text-lg flex flex-col items-center text-center ">
      <p className="text-react py-8 mx-5 px-10 text-5xl font-bold">
        06: To-do list
      </p>
      <Link
        className="absolute left-6 top-7 rounded-full font-bold flex items-center justify-center h-12 w-12 bg-react text-btn-color hover:bg-react-hover transition"
        to="../panel"
      >
        <FaArrowLeft className="rounded-full" />
      </Link>
      <article className="flex-col m-6 py-8 max-w-[50rem] flex bg-bg2 p-6 gap-4 items-start rounded-xl">
        <p className="mt-3 text-xl text-start leading-8">
          Your task is to create an app where the user can type into the input
          field and submit that data into a separate component which will render
          each new input as a separate item. For this, simply use the 'map'
          method and props to send data to the child 'Item' component. Apply
          your styling which can be whatever, the goal is to practice React
          logic. If this task was easy, as a bonus challenge, try adding a local
          storage feature that will not delete previously added to-dos upon
          refreshing the page <FaArrowDown className="inline" />
        </p>

        <img className="mx-auto pt-4" src={ch6gif} alt="gif here" />
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
