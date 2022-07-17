import styled from "styled-components";

export const TypeForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 4rem;
    position: absolute;
    top: 110px;
  }

  > #signForm {
    display: flex;
    flex-direction: column;
    align-items: center;

    > button {
      border: none;
      background-color: black;
      border-radius: 15px;
      color: white;

      font-weight: bold;
      font-size: 1.2rem;

      width: 100px;
      height: 50px;
    }
  }
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: bold;
  font-size: 1.5rem;

  margin-bottom: 10px;

  > input {
    width: 50vw;
    height: 5vh;
    border-radius: 30px;
    font-size: 2rem;
    text-align: center;
  }

  > div {
    color: red;
    font-size: 1rem;
    font-weight: normal;
  }
`;
