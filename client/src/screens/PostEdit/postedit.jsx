import React, { useState, useEffect } from "react";
import "./PostEdit.css";
import { useParams, Redirect } from "react-router-dom";
import { getPost, updatePost } from "../../services/posts";

const PostEdit = (props) => {
  const [post, setPost] = useState({
    title: "",
    author: "",
    content: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
    };
    fetchPost();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { id } = props.match.params;
    const updated = await updatePost(id, post);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/posts/${props.match.params.id}`} />;
  }

  return (
    <div className="post-edit">
      <form className="edit-form" onSubmit={handleSubmit}>
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
          cols={78}
          placeholder="content"
          value={post.content}
          name="content"
          required
          onChange={handleChange}
        />
        <button type="submit" className="save-button">
          Save
        </button>
      </form>
    </div>
  );
};

export default PostEdit;
