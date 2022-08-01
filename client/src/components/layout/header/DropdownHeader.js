import React, { useState } from "react";
import { useSWRConfig } from "swr";
import Dropdown from "./Dropdown";
import { HeaderFooterGridBox, NavItem } from "../styles";
import {
  interviewDropdown,
  programmingDropdown,
  mathDropdown,
} from "./dropdownData";

function DropdownHeader({ topic }) {
  const [dropdown, setDropdown] = useState(false);
  const { cache } = useSWRConfig();
  const user = cache.get("sign");

  function getData(topic) {
    if (topic === "Interview") {
      return interviewDropdown;
    } else if (topic === "Programming") {
      const data = [...programmingDropdown];
      if (user?.position !== "admin") {
        data.pop();
      }
      return data;
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
