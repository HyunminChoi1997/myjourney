import React, { useState } from "react";
import Dropdown from "../home/Dropdown";
import { HeaderNav, HeaderFooterGridBox, NavLink, NavItem } from "./styles";

function Header() {
  const [dropdown, setdropdown] = useState(false);

  return (
    <HeaderNav grid="6">
      <HeaderFooterGridBox>
        <NavLink to="/">Main</NavLink>
      </HeaderFooterGridBox>
      <HeaderFooterGridBox />
      <HeaderFooterGridBox
        onMouseEnter={() => setdropdown(true)}
        onMouseLeave={() => setdropdown(false)}
      >
        <NavItem>Hello</NavItem>
        {dropdown && <Dropdown />}
      </HeaderFooterGridBox>
      <HeaderFooterGridBox
        onMouseEnter={() => setdropdown(true)}
        onMouseLeave={() => setdropdown(false)}
      >
        <NavItem>Hello</NavItem>
        {dropdown && <Dropdown />}
      </HeaderFooterGridBox>
      <HeaderFooterGridBox
        onMouseEnter={() => setdropdown(true)}
        onMouseLeave={() => setdropdown(false)}
      >
        <NavItem>Hello</NavItem>
        {dropdown && <Dropdown />}
      </HeaderFooterGridBox>
      <HeaderFooterGridBox
        onMouseEnter={() => setdropdown(true)}
        onMouseLeave={() => setdropdown(false)}
      >
        <NavItem>Hello</NavItem>
        {dropdown && <Dropdown />}
      </HeaderFooterGridBox>
    </HeaderNav>
  );
}

export default Header;
