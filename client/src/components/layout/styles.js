import styled from "styled-components";

export const HeaderBox = styled.div`
  width: 100 vw;
  height: 13vh;
  border: 2px solid black;
`;

export const FooterBox = styled.div`
  border: 2px solid black;
  width: 100 vw;
  height: 13vh;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

export const FooterGridBox = styled.div`
  display: flex;
  flex-direction: column;
  > .title {
    font-weight: bold;
  }
  > div {
    margin-bottom: 10px;
  }
`;

export const ContentBox = styled.div`
  margin: 10px 0;
`;
