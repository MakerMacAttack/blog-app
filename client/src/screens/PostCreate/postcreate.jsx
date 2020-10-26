import React, { useState } from "react";
import "./PostCreate.css";
import { Redirect } from "react-router-dom";
import { createPost } from "../../services/posts";

const PostCreate = (props) => {
  const [post, setPost] = useState({
    title: "",
    author: "",
    content: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createPost(post);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/posts`} />;
  }
  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        className="input-title"
        placeholder="title"
        value={post.title}
        name="title"
        required
        autoFocus
        onChange={handleChange}
      />
      <input
        className="input-author"
        placeholder="author"
        value={post.author}
        name="author"
        required
        onChange={handleChange}
      />
      <textarea
        className="textarea-content"
        rows={10}
        placeholder="content"
        value={post.content}
        name="content"
        required
        onChange={handleChange}
      />
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default PostCreate;
