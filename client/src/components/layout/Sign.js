import React, { useState } from "react";
import SignupForm from "../sign/SignupForm";
import SigninForm from "../sign/SigninForm";
import { signoutRequest } from "../../requests/signRequest";
import { SignButton } from "./styles";

function Sign({ user }) {
  const [signupModal, setSignupModal] = useState(false);
  const [signinModal, setSigninModal] = useState(false);
  return user ? (
    <SignButton onClick={signoutRequest}>Signout</SignButton>
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
  );
}

export default Sign;
