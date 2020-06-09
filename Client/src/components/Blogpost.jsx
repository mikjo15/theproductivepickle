import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../components/Post";

function Blogpost() {
  const [postList, setPostList] = useState([]);

  // Get this to work
  useEffect(() => {
    let data = [];
    let unmounted = false;

    axios.get("http://localhost:3000/posts")
    .then(response => {
      if (!unmounted){
        data = response.data;
        setPostList(data);
      }
    });

    return () => {unmounted = true}

  }, [postList]);

  return (
  <section className="bg-success text-center text-light">
    <h1 className="display-4 pt-4">Latest posts</h1>

    {postList.map((post, index) =>
      <Post
        key={index}
        title={post.title}
        content={post.content.substring(0, 180) + " ..."}
      />
    )}
  </section>
)
}

export default Blogpost;
