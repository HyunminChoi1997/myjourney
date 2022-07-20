import axios from "axios";

const requestUrl = `${process.env.SERVER_URL}/user`;
const request = axios.create({
  withCredentials: true,
  baseURL: requestUrl,
});

export const signupRequest = async ({ username, nickname, password }) => {
  return await request.post("signup", {
    username,
    nickname,
    password,
  });
};

export const signinRequest = async ({ username, password }) => {
  return await request.post("signin", {
    username,
    password,
  });
};

export const signoutRequest = async () => {
  return await request.post("signout");
};
