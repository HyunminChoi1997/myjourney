import styled from "styled-components";

export const Background = styled.article`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;

  opacity: 0.5;
  height: 100%;

  display: grid;
  grid-template-rows: repeat(6, 1fr);
  place-items: center;

  @keyframes slideInFromLeft {
    0% {
      color: blue;
      transform: translateY(-500%);
    }
    100% {
      transform: translateY(0);
    }
  }

  > h1 {
    animation: 2s ease-out 0s 1 slideInFromLeft;

    font-size: 80px;
    color: white;
    text-align: center;
    margin: 0px auto;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;
