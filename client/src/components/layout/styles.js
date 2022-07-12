import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderNav = styled.nav`
  height: 6vh;
  background: #1b1919;
  color: white;

  display: grid;
  grid-template-columns: repeat(${(props) => props.grid}, 1fr);
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: "Oswald-Light";
  font-size: 2rem;

  width: intrinsic; /* Safari/WebKit uses a non-standard name */
  width: -moz-max-content; /* Firefox/Gecko */
  width: -webkit-max-content; /* Chrome */
  width: max-content;
`;

export const NavItem = styled.div`
  color: white;
  text-decoration: none;
  font-family: "Oswald-Light";
  font-size: 2rem;

  width: intrinsic; /* Safari/WebKit uses a non-standard name */
  width: -moz-max-content; /* Firefox/Gecko */
  width: -webkit-max-content; /* Chrome */
  width: max-content;
`;

export const FooterBox = styled.div`
  background-color: black;
  color: white;

  display: grid;
  grid-template-columns: repeat(${(props) => props.grid}, 1fr);
`;

export const HeaderFooterGridBox = styled.div`
  display: flex;
  flex-direction: column;
  > .title {
    font-weight: bold;
    font-size: 1.7rem;
  }
  > div {
    margin-bottom: 10px;
  }
  > a {
    color: white;
  }
`;

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
