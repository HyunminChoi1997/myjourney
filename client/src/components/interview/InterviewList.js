import React, { useState, useEffect } from "react";
import axios from "axios";
import { basic } from "./dummydata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import InterviewCard from "./InterviewCard";
import {
  FlashcardsBox,
  CreateCardButton,
  ModalBackdrop,
  ModalView,
} from "./styles";

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
    console.log(name);
    console.log(value);
    setQuestionAnswer({
      ...questionAnswer,
      [name]: value,
    });
  };

  return (
    <>
      {showModal ? (
        <ModalBackdrop open={showModal}>
          <ModalView>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              size="3x"
              onClick={() => setShowModal(false)}
            />
            <div>Question</div>
            <textarea name="question" onChange={textHandler}></textarea>
            <div>Answer</div>
            <textarea name="answer" onChange={textHandler}></textarea>
          </ModalView>
        </ModalBackdrop>
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
