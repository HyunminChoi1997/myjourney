import styled from "styled-components";
import { Link } from "react-router-dom";

export const DropdownMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  text-align: left;

  display: relative;
  z-index: 1;

  &.clicked {
    display: none;
  }
`;

export const DropdownItem = styled.li`
  background: white;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: rgb(255, 255, 200);
  }
`;

export const LinkItem = styled(Link)`
  display: block;
  text-decoration: none;
  color: black;
  padding: 16px;
`;
