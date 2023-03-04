import React, {useState, useEffect} from "react";
import axios from "axios";
const PostList = () => {

    const [posts, setPosts] = useState({})

    const fetchPost = async()=>{
        const res = await axios.get("http://localhost:4000/posts")
        setPosts(res.data)
    }

    useEffect(()=>{
        fetchPost()
    },[])
  return (
    <>
      <h1>List of Post</h1>
    </>
  );
};

export default PostList;
