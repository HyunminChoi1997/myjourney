import React, { useState } from "react";
import Swal from "sweetalert2";
import { useSWRConfig } from "swr";
import { postMemoInterview } from "../../requests/interviewRequest";
import {
  Flashcard,
  Creator,
  FlashcardContent,
  MemoButton,
  FlashcardInner,
  Cardface,
} from "./styles";

function InterviewCard({ data, actionDetector }) {
  const [clicked, setClicked] = useState(false);
  const { cache } = useSWRConfig();
  const user = cache.get("sign");

  const memoClickHandler = async (e) => {
    e.stopPropagation();
    Swal.fire({
      title: "You can check memorized list in mypage (Not Implemented Yet)",
      text: "외우신 목록은 마이페이지에서 확인 가능합니다 (미구현)",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK",
      cancelButtonText: "Not yet",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await postMemoInterview(data.id);
        Swal.fire("Good!", "좋습니다!", "success");
        actionDetector();
      }
    });
  };

  return (
    <Flashcard>
      <FlashcardInner
        className={clicked ? "flipped" : ""}
        onClick={() => setClicked(!clicked)}
      >
        <Cardface className="front">
          <Creator>
            {data.language === "KR" ? "작성자" : "Created By"}:{" "}
            {data.user.nickname}
          </Creator>
          <FlashcardContent between={true}>
            <div className="questiontitle">Q.</div>
            <div>{data.question}</div>
            {user ? (
              <MemoButton onClick={(e) => memoClickHandler(e)}>
                Memorized 외움
              </MemoButton>
            ) : (
              <div />
            )}
          </FlashcardContent>
        </Cardface>
        <Cardface className="back">
          <Creator>
            {data.language === "KR" ? "작성자" : "Created By"}:{" "}
            {data.user.nickname}
          </Creator>
          <FlashcardContent>
            <div className="answertitle">A.</div>
            <div>{data.answer}</div>
          </FlashcardContent>
        </Cardface>
      </FlashcardInner>
    </Flashcard>
  );
  return clicked ? (
    <Flashcard className="answer" onClick={() => setClicked(!clicked)}>
      <Creator>
        {data.language === "KR" ? "작성자" : "Created By"}: {data.user.nickname}
      </Creator>
      <FlashcardContent>
        <div className="answertitle">A.</div>
        <div>{data.answer}</div>
      </FlashcardContent>
    </Flashcard>
  ) : (
    <Flashcard className="question" onClick={() => setClicked(!clicked)}>
      <Creator>
        {data.language === "KR" ? "작성자" : "Created By"}: {data.user.nickname}
      </Creator>
      <FlashcardContent between={true}>
        <div className="questiontitle">Q.</div>
        <div>{data.question}</div>
        {user ? (
          <MemoButton onClick={(e) => memoClickHandler(e)}>
            Memorized 외움
          </MemoButton>
        ) : (
          <div />
        )}
      </FlashcardContent>
    </Flashcard>
  );
}

export default InterviewCard;
