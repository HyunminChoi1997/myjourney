import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { postInterview } from "../../requests/interviewRequest";
import Modal from "../common/Modal";
import {
  CreateCardButton,
  QATextArea,
  ToggleContainer,
  Desc,
  Warning,
} from "./styles";
import { useSWRConfig } from "swr";

function CardPost({ actionDetector, subject }) {
  const [showModal, setShowModal] = useState(false);
  const [language, setLanguage] = useState("KR");
  const [isOn, setisOn] = useState(false);

  const { cache } = useSWRConfig();
  const user = cache.get("sign");

  const toggleHandler = () => {
    setisOn(!isOn);
    setLanguage(language === "KR" ? "EN" : "KR");
  };

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

  const modalOpenHandler = () => {
    if (user) {
      setShowModal(true);
    } else {
      return Swal.fire("Please Sign In", "로그인해주세요", "error");
    }
  };

  const submitHandler = async () => {
    const Q = questionAnswer.question;
    const A = questionAnswer.answer;
    if (Q.length >= 255) {
      return Swal.fire(
        "Question is too long ( <= 255 )",
        "질문이 너무 길어요 ( <= 255 )",
        "error"
      );
    } else if (A.length >= 750) {
      return Swal.fire(
        "Answer is too long ( <= 750 )",
        "답변이 너무 길어요 ( <= 750 )",
        "error"
      );
    }

    return Swal.fire({
      title: "Are you sure to post?",
      text: "포스팅 하실건가요?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK",
      cancelButtonText: "Not yet",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await postInterview(Q, A, language, subject);
        if (res.err) {
          return Swal.fire("Error", res.err, "error");
        }
        Swal.fire("Good! Thank you", "좋습니다! 감사합니다", "success");
        actionDetector();
        setShowModal(false);
      }
    });
  };

  return (
    <CreateCardButton>
      {showModal ? (
        <Modal open={showModal} closeHandler={() => setShowModal(false)}>
          <div>Question</div>
          <QATextArea name="question" onChange={textHandler}></QATextArea>
          <div>Answer</div>
          <QATextArea name="answer" onChange={textHandler}></QATextArea>

          <Desc>Language : {language}</Desc>
          <ToggleContainer>
            <div
              onClick={toggleHandler}
              className={`toggle-container ${isOn ? "toggle--checked" : ""}`}
            />
            <div
              onClick={toggleHandler}
              className={`toggle-circle ${isOn ? "toggle--checked" : ""}`}
            />
          </ToggleContainer>

          <FontAwesomeIcon
            icon={faLayerGroup}
            size="3x"
            onClick={submitHandler}
          />
          <Warning>
            The card will be posted once the content is confirmed appropriate
          </Warning>
          <Warning>
            부적절한 컨텐트인지 확인한 후에 새로운 카드가 추가됩니다
          </Warning>
        </Modal>
      ) : null}
      <span>New Flashcard</span>
      <FontAwesomeIcon
        className="postbutton"
        icon={faBook}
        size="5x"
        onClick={modalOpenHandler}
      />
    </CreateCardButton>
  );
}

export default CardPost;
