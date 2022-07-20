import React, { useEffect, useState } from "react";
import { useSWRConfig } from "swr";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SignupForm from "./sign/SignupForm";
import SigninForm from "./sign/SigninForm";
import { signoutRequest } from "../../requests/signRequest";
import { SignButton } from "./styles";

function Sign() {
  const [signupModal, setSignupModal] = useState(false);
  const [signinModal, setSigninModal] = useState(false);
  const navigate = useNavigate();

  const { cache, mutate } = useSWRConfig();
  const user = cache.get("sign");

  const revalidate = () => {
    mutate("sign");
  };

  const logoutHandler = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "로그아웃 하시겠습니까?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await signoutRequest();
        navigate("/");
        mutate("sign");
        Swal.fire("Hope to see you again soon!", "또 오십시요!", "success");
      }
    });
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
          revalidate={revalidate}
        />
      )}
      <SignButton onClick={() => setSignupModal(true)}>Signup</SignButton>
      {signupModal && <SignupForm open={signupModal} closeHandler={() => setSignupModal(false)} />}
    </>
  );
}

export default Sign;
