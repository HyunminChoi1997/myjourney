import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { HeaderNav, HeaderFooterGridBox, NavLink, NavItem } from "./styles";
import { interviewDropdown, algoDropdown } from "./dropdownData";

function Header() {
  const [dropdown, setdropdown] = useState(false);

  return (
    <HeaderNav grid="6">
      <HeaderFooterGridBox>
        <NavLink to="/">Home</NavLink>
      </HeaderFooterGridBox>
      <HeaderFooterGridBox />
      <HeaderFooterGridBox
        onMouseEnter={() => setdropdown(true)}
        onMouseLeave={() => setdropdown(false)}
      >
        <NavItem>Interview</NavItem>
        {dropdown && <Dropdown data={interviewDropdown} />}
      </HeaderFooterGridBox>
      <HeaderFooterGridBox
        onMouseEnter={() => setdropdown(true)}
        onMouseLeave={() => setdropdown(false)}
      >
        <NavItem>Algorithm</NavItem>
        {dropdown && <Dropdown data={algoDropdown} />}
      </HeaderFooterGridBox>
      <HeaderFooterGridBox
        onMouseEnter={() => setdropdown(true)}
        onMouseLeave={() => setdropdown(false)}
      >
        <NavItem>Hello</NavItem>
        {dropdown && <Dropdown data={[]} />}
      </HeaderFooterGridBox>
      <HeaderFooterGridBox
        onMouseEnter={() => setdropdown(true)}
        onMouseLeave={() => setdropdown(false)}
      >
        <NavItem>Hello</NavItem>
        {dropdown && <Dropdown data={[]} />}
      </HeaderFooterGridBox>
    </HeaderNav>
  );
}

export default Header;
