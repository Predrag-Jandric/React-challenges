import React from "react";
import { Link } from "react-router-dom";
import devPhoto from "../assets/devPhoto.jpeg";

function Welcome() {
  return (
    <div>
      <h1>Welcome to React challenges</h1>
      <div>
        <img src={devPhoto} alt="missing" />
        <p>
          Hi, I'm Predrag, great to see you. Are you ready to level up your
          React skills ? Dive into my interactive and completely free challenges
          and put your knowledge to the test while having fun at the same time.
        </p>
      </div>
      <h2>Before we start...</h2>
      <p>
        To get the most out of these challenges, it's helpful to have a basic
        understanding of JSX, components, state, and props. But don't worry if
        you're new to these concepts! You'll receive step-by-step explanations
        as you work through the challenges.
      </p>
      <p>
        For each project, we'll start with a fresh, blank React project. Copy
        and paste my starter code and start building your solution in your local
        development environment.
      </p>

      <Link className="btn" to="panel">
        Let's go !
      </Link>
    </div>
  );
}

export default Welcome;
