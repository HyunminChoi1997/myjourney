import React from "react";
import { HeaderFooterBox, HeaderFooterGridBox } from "./styles";

function Header() {
  return (
    <HeaderFooterBox grid="6">
      <HeaderFooterGridBox>Main</HeaderFooterGridBox>
      <HeaderFooterGridBox>Testing</HeaderFooterGridBox>
      <HeaderFooterGridBox>3</HeaderFooterGridBox>
      <HeaderFooterGridBox>4</HeaderFooterGridBox>
      <HeaderFooterGridBox>5</HeaderFooterGridBox>
      <HeaderFooterGridBox>6</HeaderFooterGridBox>
    </HeaderFooterBox>
  );
}

export default Header;
