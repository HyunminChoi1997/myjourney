import axios from "axios";
import useSWR from "swr";

const requestUrl = `${process.env.SERVER_URL}/interview`;
const request = axios.create({
  withCredentials: true,
  baseURL: requestUrl,
});

export const getAllInterview = async (subject) => {
  const response = await request.get(`/${subject}/all`);
  return response.data.interviewList;
};
