import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Modal from "../../common/Modal";
import { signinRequest } from "../../../requests/signRequest";
import { InputField, TypeForm } from "./styles";

const SigninForm = (props) => {
  const navigate = useNavigate();

  const formikValidationSchema = Yup.object({
    username: Yup.string()
      .min(5, "Length : 5 ~ 15")
      .max(15, "Length : 5 ~ 15")
      .required("Required"),
    password: Yup.string()
      .min(8, "Length : 8 ~ 20")
      .max(20, "Length : 8 ~ 20")
      .required("Required"),
  });

  const submitHandler = async (values) => {
    try {
      await signinRequest(values);
      Swal.fire("Success", "로그인 성공", "success");
      props.revalidate();
      props.closeHandler();
      navigate("/");
    } catch (err) {
      return Swal.fire(
        "Check your username and password",
        "아이디와 비밀번호를 확인해주세요",
        "error"
      );
    }
  };

  return (
    <Modal open={props.open} closeHandler={props.closeHandler}>
      <TypeForm>
        <h1>Signin</h1>
        <Formik
          initialValues={{ username: "", password: "" }}
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

export default SigninForm;
