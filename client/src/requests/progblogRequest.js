import axios from "axios";

const requestUrl = `${process.env.SERVER_URL}/programming`;
const request = axios.create({
  withCredentials: true,
  baseURL: requestUrl,
});

export const getBlogPost = async (subject) => {
  const response = await request.get(`/${subject}`);
  return response.data.blogList;
};

export const postBlogPost = async (title, stateJson, stateHTML, subject) => {
  return await request.post(`/${subject}`, { title, stateJson, stateHTML });
};

export const updateBlogPost = async (
  newTitle,
  newStateJson,
  newStateHTML,
  subject,
  post_id
) => {
  return await request.post(`/${subject}/${post_id}`, {
    newTitle,
    newStateJson,
    newStateHTML,
  });
};
