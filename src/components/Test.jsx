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
