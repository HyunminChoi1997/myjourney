import axios from "axios";

const requestUrl = `${process.env.SERVER_URL}/user`;

export const signupRequest = async ({ username, nickname, password }) => {
  return await axios.post(`${requestUrl}/signup`, {
    username,
    nickname,
    password,
  });
};

export const signinRequest = async ({ username, password }) => {
  return await axios.post(
    `${requestUrl}/signin`,
    {
      username,
      password,
    },
    {
      withCredentials: true,
    }
  );
};
