import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(220, 220, 220, 0.5);
  z-index: 9;
`;

export const ModalView = styled.div`
  border: blue 1px solid;
  background-color: white;
  color: black;
  width: 80vw;
  height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .close {
    position: absolute;
    top: 120px;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 80vh;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;
`;
