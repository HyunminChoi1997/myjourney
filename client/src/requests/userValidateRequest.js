import axios from "axios";
import useSWR from "swr";

const requestUrl = `${process.env.SERVER_URL}/user`;
const request = axios.create({
  withCredentials: true,
  baseURL: requestUrl,
});

const fetcher = async (url) => {
  console.log("Revalidate");
  try {
    const res = await request.get(`${url}`);
    return res?.data?.userInfo;
  } catch (err) {
    return undefined;
  }
};

export const validateUser = () => {
  const { data, error } = useSWR("sign", fetcher, {
    // refreshInterval: 60000,
    // revalidateIfStale: false,
    // revalidateOnFocus: false,
    // revalidateOnReconnect: false,
  });

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};
