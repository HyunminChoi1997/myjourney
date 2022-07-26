import styled from "styled-components";

export const Title = styled.input`
  width: 70vw;
  height: 40px;
  border-radius: 30px;
  text-align: center;
  font-size: 1.2rem;
`;

export const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  border: none;
  background-color: black;
  border-radius: 15px;
  color: white;
  font-size: 1.3rem;

  width: 100px;
  height: 46px;
  margin: 5px;

  &:hover {
    cursor: pointer;
  }
`;
