import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";

function ShowPost(props) {
  const [post, setPost] = useState({
    title: "",
    content: ""
  })

  // TODO: Make text format proper, so its not just one big paragraph
  // TODO: Dashes instead of spaces in url
  // TODO: Make a delete function
  // TODO: Check for dublicates in db
  // TODO: Handle 404
  // TODO: Handle posts that don't exist

  useEffect(() => {
    const title = window.location.pathname.split("/").pop();

      axios.get("http://localhost:3000/posts/" + title)
      .then(response => setPost(response.data));

  }, []);

  return (
    <section className="bg-success text-center text-light">
      <div className="text-light bg-post">
        <h3 className="display-5 p-3">{_.startCase(post.title)}</h3>
        <p className="w-50 mx-auto pb-3 m-0">{post.content}</p>
      </div>
    </section>
  )
}

export default ShowPost;
