import React from "react";
import Post from "../components/Post";
import posts from "../blogposts";

function Blogpost() {
  return (
  <section className="bg-success text-center text-light">
    <h1 className="display-4 pt-4">Latest posts</h1>

    {posts.map(post => (
      <Post
        title={post.title}
        img={post.img}
        content={post.content}
      />
    ))}
  </section>
)
}

export default Blogpost;
