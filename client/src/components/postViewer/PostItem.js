import React from "react";
import { useNavigate } from "react-router-dom";
import { PostItemBox, Title, Writer, Date, Subject } from "./styles";

function PostItem({ data }) {
  const date = data.createdAt.split("T")[0];
  const navigate = useNavigate();

  const blogOnClick = () => {
    navigate(`/${data.subject}/${data.id}`, {
      state: {
        stateHTML: data.stateHTML,
        title: data.title,
        nickname: data.user.nickname,
      },
    });
  };
  return (
    <PostItemBox onClick={blogOnClick}>
      <Title>{data.title}</Title>
      <Writer>{data.user.nickname}</Writer>
      <Date>{date}</Date>
      <Subject>{data.subject}</Subject>
    </PostItemBox>
  );
}

export default PostItem;
