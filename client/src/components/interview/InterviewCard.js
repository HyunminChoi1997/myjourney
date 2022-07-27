import React, { useState } from "react";
import Swal from "sweetalert2";
import { useSWRConfig } from "swr";
import CardModal from "./CardModal";
import {
  postMemoInterview,
  deleteInterview,
} from "../../requests/interviewRequest";
import {
  Flashcard,
  Creator,
  FlashcardContent,
  ButtonContainer,
  Button,
  FlashcardInner,
  Cardface,
} from "./styles";

function InterviewCard({ data, actionDetector }) {
  const [showModal, setShowModal] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { cache } = useSWRConfig();
  const user = cache.get("sign");

  const modalOpenHandler = (e) => {
    e.stopPropagation();
    if (user) {
      setShowModal(true);
    } else {
      return Swal.fire("Please Sign In", "로그인해주세요", "error");
    }
  };

  const closeHandler = () => {
    setShowModal(false);
  };

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

  const onDeleteClick = async (e) => {
    e.stopPropagation();
    Swal.fire({
      title: "Delete Card? Can't be undone",
      text: "삭제하시겠습니까? 되돌릴수없습니다",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteInterview(data.subject, data.id).then((res) => {
          if (res.err) {
            return Swal.fire("Error", res.err, "error");
          }
          Swal.fire("Deleted", "삭제됐습니다", "success");
          actionDetector();
          navigate(`/${data.subject}`);
        });
      }
    });
  };

  return (
    <>
      {showModal ? (
        <CardModal
          id={data.id}
          showModal={showModal}
          closeHandler={closeHandler}
          actionDetector={actionDetector}
          question={data.question}
          answer={data.answer}
          subject={data.subject}
          lang={data.language}
          edit={true}
        />
      ) : null}
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
              <ButtonContainer>
                {user ? (
                  <Button onClick={(e) => memoClickHandler(e)}>
                    {data.language === "KR" ? "외움" : "Memorized"}
                  </Button>
                ) : (
                  <div />
                )}
                {data.user.nickname === user?.nickname ? (
                  <div>
                    <Button onClick={(e) => modalOpenHandler(e)}>
                      {data.language === "KR" ? "수정" : "Update"}
                    </Button>
                    <Button onClick={(e) => onDeleteClick(e)}>
                      {data.language === "KR" ? "삭제" : "Delete"}
                    </Button>
                  </div>
                ) : (
                  <></>
                )}
              </ButtonContainer>
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
    </>
  );
  // return clicked ? (
  //   <Flashcard className="answer" onClick={() => setClicked(!clicked)}>
  //     <Creator>
  //       {data.language === "KR" ? "작성자" : "Created By"}: {data.user.nickname}
  //     </Creator>
  //     <FlashcardContent>
  //       <div className="answertitle">A.</div>
  //       <div>{data.answer}</div>
  //     </FlashcardContent>
  //   </Flashcard>
  // ) : (
  //   <Flashcard className="question" onClick={() => setClicked(!clicked)}>
  //     <Creator>
  //       {data.language === "KR" ? "작성자" : "Created By"}: {data.user.nickname}
  //     </Creator>
  //     <FlashcardContent between={true}>
  //       <div className="questiontitle">Q.</div>
  //       <div>{data.question}</div>
  //       {user ? (
  //         <MemoButton onClick={(e) => memoClickHandler(e)}>
  //           Memorized 외움
  //         </MemoButton>
  //       ) : (
  //         <div />
  //       )}
  //     </FlashcardContent>
  //   </Flashcard>
  // );
}

export default InterviewCard;
