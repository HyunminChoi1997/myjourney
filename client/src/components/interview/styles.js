import styled from "styled-components";

export const Flashcard = styled.div`
  width: 600px;
  height: 250px;
  border: 2px solid black;
  margin: 20px;
  padding: 15px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  &.answer .title {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  &.question .title {
    font-size: 2rem;
    margin-bottom: 80px;
  }
`;

export const FlashcardsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const CreateCardButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 10px 0;

  > span {
    margin-bottom: 10px;
    font-weight: bold;
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: rgba(220, 220, 220, 0.5);
`;

export const ModalView = styled.div`
  border: blue 1px solid;
  background-color: white;
  width: 80%;
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .close {
    position: absolute;
    top: 120px;
  }

  > div {
    margin-top: 30px;
  }

  > textarea {
  }
`;
