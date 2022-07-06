import React from "react";
import { FooterBox, FooterGridBox } from "./styles";

function Footer() {
  return (
    <FooterBox>
      <FooterGridBox />
      <FooterGridBox>
        <div className="title">Personal Info</div>
        <div>Hyunmin Choi</div>
        <div>chlgusals3@gmail.com</div>
        <a href="https://github.com/HyunminChoi1997" target="_blank">
          MyGitHub
        </a>
      </FooterGridBox>
      <FooterGridBox />
      <FooterGridBox>
        <div className="title">Blog Posts</div>
        <a href="https://fattycodes.tistory.com/" target="_blank">
          TIL
        </a>
      </FooterGridBox>
      <FooterGridBox>
        <div className="title">Interview</div>
      </FooterGridBox>
      <FooterGridBox>
        <div className="title">Algo</div>
      </FooterGridBox>
    </FooterBox>
  );
}

export default Footer;
