import React, { useState } from "react";
import { DropdownMenu, DropdownItem, LinkItem } from "./styles";

function Dropdown() {
  const [dropdown, setDropdown] = useState(true);
  const dummyData = [
    { id: 1, path: "/", title: "menu1" },
    { id: 2, path: "/", title: "menu2" },
    { id: 3, path: "/", title: "menu3" },
  ];

  return (
    <DropdownMenu
      className={dropdown ? "" : "clicked"}
      onClick={() => setDropdown(!dropdown)}
    >
      {dummyData.map((item) => {
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
