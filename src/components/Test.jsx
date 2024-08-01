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
