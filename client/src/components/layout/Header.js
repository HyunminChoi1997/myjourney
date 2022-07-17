import React, { useState } from "react";
import Dropdown from "./Dropdown";
import SignupForm from "../sign/SignupForm";
import SigninForm from "../sign/SigninForm";
import Sign from "./Sign";
import { validateUser } from "../../requests/signRequest";
import {
  HeaderNav,
  HeaderFooterGridBox,
  NavLink,
  NavItem,
  SignButton,
} from "./styles";
import { interviewDropdown, algoDropdown } from "./dropdownData";

function Header() {
  const [dropdown, setdropdown] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [signinModal, setSigninModal] = useState(false);

  const mouseEnterHandler = () => setdropdown(true);
  const mouseLeaveHandler = () => setdropdown(false);

  const { user, isLoading, isError } = validateUser();

  console.log("isLoading : ", isLoading);
  console.log("isError : ", isError);
  console.log("user : ", user);

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
        <NavItem>Algorithm</NavItem>
        {dropdown && <Dropdown data={algoDropdown} />}
      </HeaderFooterGridBox>
      <HeaderFooterGridBox>
        <NavItem>Hello</NavItem>
        {dropdown && <Dropdown data={[]} />}
      </HeaderFooterGridBox>
      <HeaderFooterGridBox
        style={{ flexDirection: "row", justifyContent: "right", height: "6vh" }}
        onMouseEnter={mouseLeaveHandler}
      >
        <Sign user={user} />
        {/* {user ? (
          <SignButton>Signout</SignButton>
        ) : (
          <>
            <SignButton onClick={() => setSigninModal(true)}>Signin</SignButton>
            {signinModal && (
              <SigninForm
                open={signinModal}
                closeHandler={() => setSigninModal(false)}
              />
            )}
            <SignButton onClick={() => setSignupModal(true)}>Signup</SignButton>
            {signupModal && (
              <SignupForm
                open={signupModal}
                closeHandler={() => setSignupModal(false)}
              />
            )}
          </>
        )} */}
      </HeaderFooterGridBox>
    </HeaderNav>
  );
}

export default Header;
