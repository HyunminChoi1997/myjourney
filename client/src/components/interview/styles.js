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
  align-items: center;

  > span {
    margin: 15px 0px;
    font-weight: bold;
  }
`;
