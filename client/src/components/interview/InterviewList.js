import React, { useState, useEffect } from "react";
import { basic } from "./dummydata";
import CardPost from "./CardPost";
import InterviewCard from "./InterviewCard";
import { getAllInterview } from "../../requests/interviewRequest";
import { FlashcardsBox } from "./styles";

function InterviewList({ subject }) {
  const [data, setData] = useState([]);
  const [action, setAction] = useState(false);

  const actionDetector = () => {
    setAction(!action);
  };

  useEffect(() => {
    getAllInterview(subject).then((res) => {
      setData(res);
    });
  }, [action]);

  return (
    <>
      <CardPost actionDetector={actionDetector} />
      <FlashcardsBox>
        {basic.map((el) => {
          return <InterviewCard key={el.id} data={el} />;
        })}
      </FlashcardsBox>
    </>
  );
}

export default InterviewList;
