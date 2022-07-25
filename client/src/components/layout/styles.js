import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderNav = styled.nav`
  height: 57px;
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

  z-index: 1;

  &.clicked {
    display: none;
  }
`;

export const DropdownItem = styled.li`
  background: rgb(245, 235, 223);
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

export const SignButton = styled.button`
  border: none;
  background-color: white;
  border-radius: 15px;
  color: black;
  font-size: 1.3rem;

  width: 100px;
  height: 46px;
  margin: 5px;

  &:hover {
    cursor: pointer;
  }
`;
