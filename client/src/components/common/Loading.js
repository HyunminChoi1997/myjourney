import React, { useState, useEffect } from "react";
import moonwalkcat from "../../images/moonwalkcat.gif";
import { Container } from "./styles";

function Loading() {
  const [text, setText] = useState("Loading");
  useEffect(() => {
    setTimeout(() => {
      setText(text + ".");
    }, 2000);
  });
  return (
    <Container>
      <h1>{text}</h1>
      <img src={moonwalkcat} alt="loading..." />
    </Container>
  );
}

export default Loading;
