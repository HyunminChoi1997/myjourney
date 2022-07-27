import axios from "axios";

const requestUrl = `${process.env.SERVER_URL}/interview`;
const request = axios.create({
  withCredentials: true,
  baseURL: requestUrl,
});

export const getAllInterview = async (subject, language) => {
  const response = await request.get(`/${subject}/all/${language}`);
  return response.data;
};

export const postInterview = async (question, answer, language, subject) => {
  return await request.post(`/${subject}`, { question, answer, language });
};

export const postMemoInterview = async (interview_id) => {
  return await request.post("/memo", { interview_id });
};

export const updateInterview = async (
  newQuestion,
  newAnswer,
  newLanguage,
  subject,
  interview_id
) => {
  return await request.patch(`/${subject}/${interview_id}`, {
    newQuestion,
    newAnswer,
    newLanguage,
  });
};

export const deleteInterview = async (subject, interview_id) => {
  return await request.delete(`/${subject}/${interview_id}`);
};
