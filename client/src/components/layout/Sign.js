import React, { useState } from "react";
import { useSWRConfig } from "swr";
import { validateUser } from "../../requests/userValidateRequest";
import SignupForm from "./sign/SignupForm";
import SigninForm from "./sign/SigninForm";
import { signoutRequest } from "../../requests/signRequest";
import { SignButton } from "./styles";

function Sign() {
  const [signupModal, setSignupModal] = useState(false);
  const [signinModal, setSigninModal] = useState(false);

  const { user, isLoading, isError } = validateUser();
  const { mutate } = useSWRConfig();

  const logoutHandler = async () => {
    await signoutRequest();
    mutate("sign");
  };

  return user ? (
    <SignButton onClick={logoutHandler}>Signout</SignButton>
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
