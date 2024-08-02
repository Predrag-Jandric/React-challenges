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
