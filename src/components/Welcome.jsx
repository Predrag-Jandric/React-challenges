import React from "react";
import { useState } from "react";
import Button from "./Button";
import BeforeWeStart from "./BeforeWeStart";

function Welcome() {
  const [showBeforeWeStartComp, setShowBeforeWeStartComp] = useState(false);

  function handleShowBeforeWeStartComp() {
    setShowBeforeWeStartComp(true);
  }

  return (
    <div>
      <h1>Welcome to React challenges</h1>
      <div>
        <img src="../../public/devPhoto.jpeg" alt="missing" />
        <p>
          Hi, my name is Predrag, great to see you. Are you looking to test up
          your React skills completely free ? Dive into my interactive
          challenges and put your knowledge to the test !
        </p>
      </div>
      <Button onClick={handleShowBeforeWeStartComp}>I am ready</Button>
      {showBeforeWeStartComp && <BeforeWeStart />}
    </div>
  );
}

export default Welcome;
