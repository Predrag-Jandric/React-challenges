import React from "react";
import { Link } from "react-router-dom";
import devPhoto from "../assets/devPhoto.jpeg";
import reactLogo from "../assets/reactLogo.png";

function Welcome() {
  return (
    <main className=" flex flex-col items-center bg-bg text-white text-xl">
      <div className="max-w-[50rem] m-6 ">
        <div className="flex flex-col items-center mt-2">
          <img className="w-28 mb-6" src={reactLogo} alt="missing" />
          <h1 className="text-center text-5xl font-bold">
            Welcome to React challenges
          </h1>
        </div>

        <div className="max-[650px]:flex-col max-[650px]:text-center my-14 flex items-center justify-center gap-8 ">
          <img
            className="w-[200px] rounded-full"
            src={devPhoto}
            alt="missing"
          />
          <p>
            Hi, I'm Predrag, great to see you. Are you ready to level up your
            React skills ? Dive into my interactive and completely free
            challenges and put your knowledge to the test while having fun at
            the same time. I am well aware that my site is not perfect, I
            encountered many problems while building it, so I just made it how I
            could at the time.
          </p>
        </div>

        <div className="text-center pb-8 bg-bg2 rounded-xl p-6">
          <h2 className="text-4xl font-bold">Before we start...</h2>
          <p className="my-5">
            To get the most out of these challenges, it's helpful to have a
            basic understanding of JSX, components, state, and props. But don't
            worry if you're new to these concepts! You'll receive step-by-step
            explanations as you work through the challenges.
          </p>
          <p className="mb-10">
            For each project, we'll start with a fresh, blank React project.
            Copy and paste my starter code and start building your solution in
            your local development environment.
          </p>

          <Link
            className="rounded-full font-bold px-5 py-4 bg-react text-btn-color hover:bg-react-hover transition"
            to="panel"
          >
            Let's go !
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Welcome;
