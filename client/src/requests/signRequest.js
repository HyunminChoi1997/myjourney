import axios from "axios";
import useSWR from "swr";

const requestUrl = `${process.env.SERVER_URL}/user`;
const request = axios.create({
  withCredentials: true,
  baseURL: requestUrl,
});
const fetcher = async (url) => {
  try {
    const res = await request.get(`${requestUrl}${url}`);
    return res?.data?.userInfo;
  } catch (err) {
    return undefined;
  }
};

export const validateUser = () => {
  const { data, error } = useSWR("/sign", fetcher);
  console.log(data);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

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
