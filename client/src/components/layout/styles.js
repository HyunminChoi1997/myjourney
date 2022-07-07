import styled from "styled-components";

export const HeaderFooterBox = styled.div`
  background-color: ${(props) => props.bgColor || "white"};
  color: ${(props) => props.fontColor || "black"};
  width: 100vw;

  display: grid;
  grid-template-columns: repeat(${(props) => props.grid}, 1fr);
`;

export const HeaderFooterGridBox = styled.div`
  display: flex;
  flex-direction: column;
  > .title {
    font-weight: bold;
    font-size: 1.7rem;
  }
  > div {
    margin-bottom: 10px;
  }
  > a {
    color: white;
  }
`;
