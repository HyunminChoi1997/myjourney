import React, { useState, useEffect } from "react";
import { basic } from "./dummydata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import InterviewCard from "./InterviewCard";
import Modal from "../common/Modal";
import { FlashcardsBox, CreateCardButton } from "./styles";

function InterviewList({ subject }) {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [questionAnswer, setQuestionAnswer] = useState({
    question: "",
    answer: "",
  });

  // useEffect(() => {});

  const textHandler = (e) => {
    const { name, value } = e.target;
    setQuestionAnswer({
      ...questionAnswer,
      [name]: value,
    });
  };

  return (
    <>
      {showModal ? (
        <Modal open={showModal} closeHandler={() => setShowModal(false)}>
          <div>Question</div>
          <textarea name="question" onChange={textHandler}></textarea>
          <div>Answer</div>
          <textarea name="answer" onChange={textHandler}></textarea>
        </Modal>
      ) : null}
      <CreateCardButton>
        <span>New Flashcard</span>
        <FontAwesomeIcon
          icon={faBook}
          size="5x"
          onClick={() => setShowModal(true)}
        />
      </CreateCardButton>
      <FlashcardsBox>
        {basic.map((el) => {
          return <InterviewCard key={el.id} data={el} />;
        })}
      </FlashcardsBox>
    </>
  );
}

export default InterviewList;
