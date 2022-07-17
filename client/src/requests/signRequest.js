import axios from "axios";
import useSWR from "swr";

const requestUrl = `${process.env.SERVER_URL}/user`;

export const validateUser = () => {
  const fetcher = (url) => {
    return axios
      .get(`${requestUrl}${url}`, {
        withCredentials: true,
      })
      .then((res) => res.data.userInfo);
  };

  const { data, error } = useSWR("/sign", fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

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

export const signoutRequest = async () => {
  return await axios.post(`${requestUrl}/signout`, { withCredentials: true });
};
