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
