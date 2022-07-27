import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import Modal from "../common/Modal";
import {
  postInterview,
  updateInterview,
} from "../../requests/interviewRequest";
import { QATextArea, ToggleContainer, Desc, Warning } from "./styles";

function CardModal({
  id,
  showModal,
  closeHandler,
  actionDetector,
  subject,
  question,
  answer,
  lang,
  edit,
}) {
  const [language, setLanguage] = useState("KR");
  const [isOn, setIsOn] = useState(false);
  const [questionAnswer, setQuestionAnswer] = useState({
    question: "",
    answer: "",
  });

  useEffect(() => {
    if (edit) {
      setQuestionAnswer({ question, answer });
      if (lang === "EN") {
        setLanguage(lang);
        setIsOn(true);
      }
    }
  }, []);

  const textHandler = (e) => {
    const { name, value } = e.target;
    setQuestionAnswer({
      ...questionAnswer,
      [name]: value,
    });
  };

  const toggleHandler = () => {
    setIsOn(!isOn);
    setLanguage(language === "KR" ? "EN" : "KR");
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
      confirmButtonText: "Yes",
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

  const editHandler = async () => {
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
      title: "Are you sure to update?",
      text: "수정하실건가요?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await updateInterview(Q, A, language, subject, id);
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
    <Modal open={showModal} closeHandler={closeHandler}>
      <div>Question</div>
      <QATextArea
        name="question"
        value={questionAnswer.question}
        onChange={textHandler}
      ></QATextArea>
      <div>Answer</div>
      <QATextArea
        name="answer"
        value={questionAnswer.answer}
        onChange={textHandler}
      ></QATextArea>

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

      {edit ? (
        <FontAwesomeIcon icon={faLayerGroup} size="3x" onClick={editHandler} />
      ) : (
        <FontAwesomeIcon
          icon={faLayerGroup}
          size="3x"
          onClick={submitHandler}
        />
      )}
      <Warning>
        The card will be posted once the content is confirmed appropriate
      </Warning>
      <Warning>
        부적절한 컨텐트인지 확인한 후에 새로운 카드가 추가됩니다
      </Warning>
    </Modal>
  );
}

export default CardModal;
