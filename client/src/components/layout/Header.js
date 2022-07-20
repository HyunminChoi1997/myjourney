import React, { useState } from "react";
import Sign from "./Sign";
import DropdownHeader from "./header/DropdownHeader";
import { HeaderNav, HeaderFooterGridBox, NavLink } from "./styles";
import { topics } from "./header/dropdownData";

function Header() {
  return (
    <HeaderNav grid="6">
      <HeaderFooterGridBox>
        <NavLink to="/">Home</NavLink>
      </HeaderFooterGridBox>
      <HeaderFooterGridBox />
      {topics.map((topic, idx) => {
        return <DropdownHeader key={idx} topic={topic} />;
      })}
      <HeaderFooterGridBox style={{ flexDirection: "row", justifyContent: "right", height: "6vh" }}>
        <Sign />
      </HeaderFooterGridBox>
    </HeaderNav>
  );
}

export default Header;
