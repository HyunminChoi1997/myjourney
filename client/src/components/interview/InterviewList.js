import React, { useState, useEffect } from "react";
import CardPost from "./CardPost";
import InterviewCard from "./InterviewCard";
import Loading from "../common/Loading";
import { getAllInterview } from "../../requests/interviewRequest";
import { FlashcardsBox, ToggleContainer, Desc } from "./styles";

function InterviewList({ subject }) {
  const [data, setData] = useState([]);
  const [language, setLanguage] = useState("KR");
  const [isOn, setisOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [action, setAction] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllInterview(subject, language)
      .then((res) => {
        if (res.err) {
          return Swal.fire("Error", res.err, "error");
        }
        setData(res.interviewList);
      })
      .then(() => setIsLoading(false));
  }, [subject, action, language]);

  const actionDetector = () => {
    setAction(!action);
  };

  const toggleHandler = () => {
    setisOn(!isOn);
    setLanguage(language === "KR" ? "EN" : "KR");
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <CardPost actionDetector={actionDetector} subject={subject} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
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
      </div>
      <FlashcardsBox>
        {data.map((el) => {
          return (
            <InterviewCard
              key={el.id}
              data={el}
              actionDetector={actionDetector}
            />
          );
        })}
      </FlashcardsBox>
    </>
  );
}

export default InterviewList;
