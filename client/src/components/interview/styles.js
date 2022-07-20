import styled from "styled-components";
import krflag from "../../images/krflag.png";
import usflag from "../../images/usflag.png";

export const Flashcard = styled.div`
  width: 600px;
  height: 250px;
  border: 2px solid black;
  margin: 20px;
  padding: 15px;
  border-radius: 20px;
`;

export const FlashcardContent = styled.div`
  width: 600px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => (props.between ? "space-between" : "")};

  .questiontitle {
    font-size: 2rem;
  }

  .answertitle {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

export const FlashcardsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Creator = styled.div``;

export const MemoButton = styled.button`
  width: 150px;
  height: 20px;
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

export const QATextArea = styled.textarea`
  width: 60%;
  height: 150px;

  background: none repeat scroll 0 0 rgba(0, 0, 0, 0.07);
  border-image: none;
  border-radius: 6px 6px 6px 6px;
  border-style: none solid solid none;
  border-width: medium 1px 1px medium;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
  color: #555555;
  font-size: 1.1rem;
  line-height: 1.4em;
  padding: 5px 8px;
  margin-bottom: 20px;
  transition: background-color 0.2s ease 0s;

  resize: none;

  &:focus {
    background: none repeat scroll 0 0 #ffffff;
    outline-width: 0;
  }
`;

export const ToggleContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  cursor: pointer;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: blue;
    transition: background-color 0.3s ease;

    &.toggle--checked {
      background-color: red;
    }
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;

    background-image: url(${krflag});
    background-repeat: no-repeat;
    background-size: 22px 22px;
    transition: all 0.3s ease;

    &.toggle--checked {
      background-image: url(${usflag});
      background-repeat: no-repeat;
      background-size: 22px 22px;
      left: 26px;
    }
  }
`;

export const Desc = styled.div`
  text-align: center;
  font-size: 1rem;
  color: purple;
  font-weight: bold;
`;

export const Warning = styled.div`
  color: red;
  font-size: 0.6rem;
`;

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
