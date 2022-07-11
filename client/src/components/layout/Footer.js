import React from "react";
import { FooterBox, HeaderFooterGridBox } from "./styles";

function Footer() {
  return (
    <FooterBox grid="6">
      <HeaderFooterGridBox />
      <HeaderFooterGridBox>
        <div className="title">Personal Info</div>
        <div>Hyunmin Choi</div>
        <div>chlgusals3@gmail.com</div>
        <a href="https://github.com/HyunminChoi1997" target="_blank">
          MyGitHub
        </a>
      </HeaderFooterGridBox>
      <HeaderFooterGridBox />
      <HeaderFooterGridBox>
        <div className="title">Blog Posts</div>
        <a href="https://fattycodes.tistory.com/" target="_blank">
          TIL
        </a>
      </HeaderFooterGridBox>
      <HeaderFooterGridBox>
        <div className="title">Interview</div>
      </HeaderFooterGridBox>
      <HeaderFooterGridBox>
        <div className="title">Algo</div>
      </HeaderFooterGridBox>
    </FooterBox>
  );
}

export default Footer;
