import React, { useState } from "react";
import { Flashcard } from "./styles";

function InterviewCard({ data }) {
  const [clicked, setClicked] = useState(false);

  return clicked ? (
    <Flashcard onClick={() => setClicked(!clicked)}>
      <div className="title">A.</div>
      <div>{data?.answer}</div>
    </Flashcard>
  ) : (
    <Flashcard onClick={() => setClicked(!clicked)}>
      <div className="title">Q.</div>
      <div>{data?.question}</div>
    </Flashcard>
  );
}

export default InterviewCard;
