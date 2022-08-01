import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSWRConfig } from "swr";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import { getBlogPost } from "../../../requests/progblogRequest";
import { CreatePostButton } from "./styles";
import PostItem from "./PostItem";

function PostList({ subject }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [action, setAction] = useState(false);
  const navigate = useNavigate();
  const { cache } = useSWRConfig();
  const user = cache.get("sign");

  useEffect(() => {
    setIsLoading(true);
    getBlogPost(subject)
      .then((res) => {
        if (res.err) {
          return Swal.fire("Error", res.err, "error");
        }
        setData(res.blogList);
      })
      .then(() => setIsLoading(false));
  }, [subject, action]);

  const postOnClick = () => {
    if (!user) {
      return Swal.fire("Please Sign In", "로그인해주세요", "error");
    }
    navigate("/editor", { state: { subject } });
  };

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <>
      <CreatePostButton>
        <span>New BlogPost</span>
        <FontAwesomeIcon
          className="postbutton"
          icon={faBook}
          size="5x"
          onClick={postOnClick}
        />
      </CreatePostButton>
      {data.map((el) => (
        <PostItem key={el.id} data={el} />
      ))}
    </>
  );
}

export default PostList;
