import React, { useState, useEffect } from "react";
import "./Posts.css";
import Post from "../../components/Post/Post";
import { getPosts } from "../../services/posts";

const Posts = (props) => {
  const [allPosts, setAllPosts] = useState([]);
  const [queriedPosts, setQueriedPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setAllPosts(posts);
      setQueriedPosts(posts);
    };
    fetchPosts();
  }, []);

  const handleSubmit = (event) => event.preventDefault();

  const postsJSX = queriedPosts.map((post, index) => (
    <Post
      _id={post._id}
      title={post.title}
      author={post.author}
      content={post.content}
      key={index}
    />
  ));

  return (
    <>
      <div className="posts">{postsJSX}</div>
    </>
  );
};

export default Posts;
