import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSWRConfig } from "swr";
import Swal from "sweetalert2";
import { deleteBlogPost } from "../../../requests/progblogRequest";
import {
  Title,
  Creator,
  OuterContainer,
  ContentContainer,
  Button,
  ButtonContainer,
} from "./styles";

function PostContent({ state }) {
  const navigate = useNavigate();

  const { data } = state;
  const { cache } = useSWRConfig();
  const user = cache.get("sign");

  useEffect(() => {
    const aTag = document.querySelectorAll("a");
    for (const tag of aTag) {
      tag.setAttribute("target", "_blank");
    }
  }, [data.stateHTML]);

  const onEditClick = () => {
    navigate("/edit-editor", { state: { data: data } });
  };

  const onDeleteClick = () => {
    Swal.fire({
      title: "Delete Post? Can't be undone",
      text: "삭제하시겠습니까? 되돌릴수없습니다",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        deleteBlogPost(data.subject, data.id).then((res) => {
          if (res.err) {
            return Swal.fire("Error", res.err, "error");
          }
          Swal.fire("Deleted", "삭제됐습니다", "success");
          navigate(`/${data.subject}`);
        });
      }
    });
  };

  return (
    <OuterContainer>
      <Title style={{ fontSize: "2rem" }}>{data.title}</Title>
      <ContentContainer>
        {user?.nickname === data.user.nickname ? (
          <ButtonContainer>
            <Button onClick={onEditClick}>글수정</Button>
            <Button onClick={onDeleteClick}>글삭제</Button>
          </ButtonContainer>
        ) : null}
        <Creator>닉네임 : {data.user.nickname}</Creator>
        <div dangerouslySetInnerHTML={{ __html: data.stateHTML }}></div>
      </ContentContainer>
    </OuterContainer>
  );
}

export default PostContent;
