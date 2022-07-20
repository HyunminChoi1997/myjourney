import axios from "axios";

const requestUrl = `${process.env.SERVER_URL}/interview`;
const request = axios.create({
  withCredentials: true,
  baseURL: requestUrl,
});

export const getAllInterview = async (subject, language) => {
  const response = await request.get(`/${subject}/all/${language}`);
  return response.data.interviewList;
};

export const postInterview = async (question, answer, language, subject) => {
  return await request.post(`/${subject}`, { question, answer, language });
};

export const postMemoInterview = async (interview_id) => {
  return await request.post("/memo", { interview_id });
};
