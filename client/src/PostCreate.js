import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();

//     await axios.post("http://localhost:4000/posts", {
//       title,
//     });
//     setTitle("");
//   };

await axios.post("https://ranjan-alt-silver-acorn-46vj6w45rgwfqxr5-4000.preview.app.github.dev/posts", {
          title,
        });
        setTitle("");
      };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Create post</h1>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default PostCreate;
