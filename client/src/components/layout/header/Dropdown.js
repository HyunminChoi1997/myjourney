import React, { useState } from "react";
import { DropdownMenu, DropdownItem, LinkItem } from "../styles";

function Dropdown({ data }) {
  const [dropdown, setDropdown] = useState(true);

  return (
    <DropdownMenu className={dropdown ? "" : "clicked"} onClick={() => setDropdown(!dropdown)}>
      {data.map((item) => {
        return (
          <DropdownItem key={item.id}>
            <LinkItem to={item.path} onClick={() => setDropdown(!dropdown)}>
              {item.title}
            </LinkItem>
          </DropdownItem>
        );
      })}
    </DropdownMenu>
  );
}

export default Dropdown;
