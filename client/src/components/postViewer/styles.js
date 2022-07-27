import styled from "styled-components";

export const PostItemBox = styled.div`
  width: 100vw;
  height: 100px;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0px -5px 18px grey;
  border-bottom: solid black 1px;
  transition: transform 0.5s;

  display: grid;
  grid-template-areas:
    "title title title none1 none2 subject"
    "writer writer date none3 none4 none5";

  &:hover {
    transform: scale(0.95);
  }
`;

export const Title = styled.div`
  grid-area: title;
  font-size: 1.3rem;
  font-weight: bold;
`;

export const Writer = styled.div`
  grid-area: writer;
  opacity: 0.5;
`;

export const Date = styled.div`
  grid-area: date;
  opacity: 0.5;
`;

export const Subject = styled.div`
  grid-area: subject;
  text-align: right;
  font-weight: bold;
  opacity: 0.5;
`;

export const CreatePostButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    margin: 15px 0px;
    font-weight: bold;
  }

  > .postbutton {
    margin-bottom: 50px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const OuterContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0px;
`;

export const ContentContainer = styled.div`
  width: 80vw;
  border-left: solid black 2px;
  border-right: solid black 2px;
  padding-left: 40px;
  padding-right: 40px;
`;

export const Creator = styled.div`
  text-align: right;
  font-size: 0.8rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background-color: white;
  font-size: 1rem;
  border-radius: 10px;
  margin-left: 10px;

  &:hover {
    cursor: pointer;
  }
`;
