import React, { useState, useEffect } from "react";
import axios from "axios";
const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPost = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data);
  };

  // const fetchPost = async () => {
  //   const res = await axios.get("https://ranjan-alt-silver-acorn-46vj6w45rgwfqxr5-4000.preview.app.github.dev/posts");
  //   setPosts(res.data);
  // };

  useEffect(() => {
    fetchPost();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <>
        <div
          className="card"
          style={{ width: "30%", marginBottom: "20px" }}
          key={post.id}
        >
          <div className="card-body">
            <h3>{post.title}</h3>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <h1>List of Post</h1>
      <div className="d-flex flex-wrap justify-content-between">
        {renderedPosts}
      </div>
    </>
  );
};

export default PostList;
