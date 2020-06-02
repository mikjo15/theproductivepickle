import React, { useState } from "react";
import axios from "axios";

function Compose() {
  const [post, setPost] = useState({
    title: "",
    content: ""
  });

  const [currentPost, setCurrentPost] = useState({
    title: "",
    content: ""
  })

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
    // change setCurrentPost to create/update db
    setCurrentPost({
      title: post.title,
      content: post.content
    });

    axios.post("http://localhost:3000/addPost", post)
    .then(res => console.log(res.data));

    setPost({
      title: "",
      content: ""
    });
  }


  return (
    <div className="container w-50 mt-5">
      <form>
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

      <h1 className="mt-5">{currentPost.title}</h1>

      <p>{currentPost.content}</p>
    </div>
  )
}

export default Compose;
