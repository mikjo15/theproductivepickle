import React, { useState, useEffect } from "react";
import axios from "axios";
import PreviewPost from "../components/PreviewPost";

function Blogpost() {
  const [postList, setPostList] = useState([]);

  // TODO: Fix
  // useEffect is constantly calling...
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

    <div className="w-50 mx-auto">
      {
        postList.length > 0
          ? postList.map(post => <PreviewPost post={post} key={post._id} />)
          : < h1 > Loading... < /h1>
      }
    </div>

  </section>
)
}

export default Blogpost;
