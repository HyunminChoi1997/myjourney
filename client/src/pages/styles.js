import styled from "styled-components";

export const Background = styled.div`
  background-image: url(${(props) => props.url});
  background-color: black;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  opacity: 0.5;
  width: 100vw;
  height: 100vh;
`;
