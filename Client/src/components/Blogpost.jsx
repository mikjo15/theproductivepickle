import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../components/Post";

// TODO: Make the blog post preview shorter

function Blogpost() {
  const [postList, setPostList] = useState([]);

  // Get this to work
  useEffect(() => {
    axios.get("http://localhost:3000/posts")
    .then(response => {
      const data = response.data;
      setPostList(data);
    });
  }, [postList])

  return (
  <section className="bg-success text-center text-light">
    <h1 className="display-4 pt-4">Latest posts</h1>

    {postList.map((post, index) =>
      <Post
        key={index}
        title={post.title}
        content={post.content}
      />
    )}

  </section>
)
}

export default Blogpost;
