import React, { useState } from "react";
import axios from "axios";

function Compose() {

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

      <h1>Preview</h1>

      <div className="text-dark">
        <h3 onChange={handleChange} value={post.title} className="display-5 p-3 mx-auto">{post.title}</h3>
        <p onChange={handleChange} value={post.content} className="w-100 mx-auto pb-3 m-0">{post.content}</p>
      </div>

    </div>
  )
}

export default Compose;
