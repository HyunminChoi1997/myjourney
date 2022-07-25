import React, { useState, useEffect } from "react";
import { getBlogPost } from "../../requests/progblogRequest";
import PostItem from "./PostItem";

function PostList({ subject }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [action, setAction] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getBlogPost(subject)
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .then(() => setIsLoading(false));
  }, [subject, action]);

  return isLoading ? <div>Loading</div> : <PostItem />;
}

export default PostList;
