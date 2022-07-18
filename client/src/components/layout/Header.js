import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Sign from "./Sign";
import { HeaderNav, HeaderFooterGridBox, NavLink, NavItem } from "./styles";
import {
  interviewDropdown,
  programmingDropdown,
  mathDropdown,
} from "./dropdownData";

function Header() {
  const [dropdown, setdropdown] = useState(false);

  const mouseEnterHandler = () => setdropdown(true);
  const mouseLeaveHandler = () => setdropdown(false);

  return (
    <HeaderNav
      grid="6"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <HeaderFooterGridBox onMouseEnter={mouseLeaveHandler}>
        <NavLink to="/">Home</NavLink>
      </HeaderFooterGridBox>
      <HeaderFooterGridBox />
      <HeaderFooterGridBox>
        <NavItem>Interview</NavItem>
        {dropdown && <Dropdown data={interviewDropdown} />}
      </HeaderFooterGridBox>
      <HeaderFooterGridBox>
        <NavItem>Programming</NavItem>
        {dropdown && <Dropdown data={programmingDropdown} />}
      </HeaderFooterGridBox>
      <HeaderFooterGridBox>
        <NavItem>Math</NavItem>
        {dropdown && <Dropdown data={mathDropdown} />}
      </HeaderFooterGridBox>
      <HeaderFooterGridBox
        style={{ flexDirection: "row", justifyContent: "right", height: "6vh" }}
        onMouseEnter={mouseLeaveHandler}
      >
        <Sign />
      </HeaderFooterGridBox>
    </HeaderNav>
  );
}

export default Header;
