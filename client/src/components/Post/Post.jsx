import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <>
      <Link className="post" to={`/posts/${props._id}`}>
        <h2 className="post-title">{props.title}</h2>
        <h3 className="post-author">{props.author}</h3>
      </Link>
    </>
  );
};

export default Post;
