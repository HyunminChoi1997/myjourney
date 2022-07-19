import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import Modal from "../common/Modal";
import { CreateCardButton } from "./styles";

function CardPost({ actionDetector }) {
  const [showModal, setShowModal] = useState(false);
  const [questionAnswer, setQuestionAnswer] = useState({
    question: "",
    answer: "",
  });

  const textHandler = (e) => {
    const { name, value } = e.target;
    setQuestionAnswer({
      ...questionAnswer,
      [name]: value,
    });
  };

  return (
    <CreateCardButton>
      {showModal ? (
        <Modal open={showModal} closeHandler={() => setShowModal(false)}>
          <div>Question</div>
          <textarea name="question" onChange={textHandler}></textarea>
          <div>Answer</div>
          <textarea name="answer" onChange={textHandler}></textarea>
          <FontAwesomeIcon icon={faLayerGroup} size="3x" />
        </Modal>
      ) : null}
      <span>New Flashcard</span>
      <FontAwesomeIcon
        icon={faBook}
        size="5x"
        onClick={() => setShowModal(true)}
      />
    </CreateCardButton>
  );
}

export default CardPost;
