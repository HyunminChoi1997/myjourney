import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { HeaderFooterGridBox, NavItem } from "../styles";
import { interviewDropdown, programmingDropdown, mathDropdown } from "./dropdownData";

function DropdownHeader({ topic }) {
  const [dropdown, setDropdown] = useState(false);

  function getData(topic) {
    if (topic === "Interview") {
      return interviewDropdown;
    } else if (topic === "Programming") {
      return programmingDropdown;
    } else {
      return mathDropdown;
    }
  }

  return (
    <HeaderFooterGridBox
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
    >
      <NavItem>{topic}</NavItem>
      {dropdown && <Dropdown data={getData(topic)} />}
    </HeaderFooterGridBox>
  );
}

export default DropdownHeader;
