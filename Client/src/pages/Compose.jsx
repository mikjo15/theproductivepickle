import React, { useState, useEffect } from "react";
import axios from "axios";

function Compose() {
  const [postList, setPostList] = useState([]);

  // Get this to work
  useEffect(() => {
    axios.get("http://localhost:3000/posts")
    .then(response => {
      const data = response.data;
      setPostList(data);
    });
  }, [postList])

  const [post, setPost] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setPost(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submitPost(event) {
    event.preventDefault();

    axios.post("http://localhost:3000/addPost", post)
    .then(res => console.log(res.data));

    setPost({
      title: "",
      content: ""
    });
  }

  return (
    <div className="container w-50 mt-5">
      <form className="mb-5">
        <div className="form-group">
          <input
            className="form-control"
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={post.title}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            onChange={handleChange}
            name="content"
            placeholder="Take a note..."
            rows="3"
            value={post.content}
          />
        </div>
        <button onClick={submitPost}>Add</button>
      </form>

      {postList.map((post, index) =>
        <div key={index}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      )}
    </div>
  )
}

export default Compose;
