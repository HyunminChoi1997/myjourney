import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import Modal from "../../common/Modal";
import { signupRequest } from "../../../requests/signRequest";
import { InputField, TypeForm } from "./styles";

const SignupForm = (props) => {
  const formikValidationSchema = Yup.object({
    username: Yup.string()
      .min(5, "Length : 5 ~ 15")
      .max(15, "Length : 5 ~ 15")
      .required("Required"),
    nickname: Yup.string()
      .min(2, "Length : 2 ~ 15")
      .max(15, "Length : 2 ~ 15")
      .required("Required"),
    password: Yup.string()
      .min(8, "Length : 8 ~ 20")
      .max(20, "Length : 8 ~ 20")
      .required("Required"),
  });

  const submitHandler = async (values) => {
    Swal.fire({
      title: "Did you double check the info?",
      text: "입력하신 정보가 확실합니까?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Signup",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await signupRequest(values);
          Swal.fire("Success", "회원가입 성공", "success");
          props.closeHandler();
          return;
        } catch (err) {
          const message = err.response.data.message;
          if (message.includes("Username")) {
            return Swal.fire("Username already in use", "존재하는 아이디 입니다", "error");
          } else {
            return Swal.fire("Nickname already in use", "존재하는 닉네임 입니다", "error");
          }
        }
      }
    });
  };

  return (
    <Modal open={props.open} closeHandler={props.closeHandler}>
      <TypeForm>
        <h1>Signup</h1>
        <Formik
          initialValues={{ username: "", nickname: "", password: "" }}
          validationSchema={formikValidationSchema}
          onSubmit={(values) => {
            submitHandler(values);
          }}
        >
          <Form className="signForm">
            <InputField>
              <label htmlFor="username">Username</label>
              <Field name="username" type="text" />
              <ErrorMessage component="div" name="username" />
            </InputField>

            <InputField>
              <label htmlFor="nickname">Nickname</label>
              <Field name="nickname" type="text" />
              <ErrorMessage component="div" name="nickname" />
            </InputField>

            <InputField>
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" />
              <ErrorMessage component="div" name="password" />
            </InputField>

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </TypeForm>
    </Modal>
  );
};

export default SignupForm;
