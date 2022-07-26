import React, { useEffect } from "react";
import { useSWRConfig } from "swr";
import {
  Title,
  Creator,
  OuterContainer,
  ContentContainer,
  Button,
  ButtonContainer,
} from "./styles";

function PostContent({ state }) {
  const { stateHTML, title, nickname } = state;
  const { cache } = useSWRConfig();
  const user = cache.get("sign");

  useEffect(() => {
    const aTag = document.querySelectorAll("a");
    for (const tag of aTag) {
      tag.setAttribute("target", "_blank");
    }
  }, [stateHTML]);

  return (
    <OuterContainer>
      <Title style={{ fontSize: "2rem" }}>{title}</Title>
      <ContentContainer>
        {user?.nickname === nickname ? (
          <ButtonContainer>
            <Button>글수정</Button>
            <Button>글삭제</Button>
          </ButtonContainer>
        ) : null}
        <Creator>닉네임 : {nickname}</Creator>
        <div dangerouslySetInnerHTML={{ __html: stateHTML }}></div>
      </ContentContainer>
    </OuterContainer>
  );
}

export default PostContent;
