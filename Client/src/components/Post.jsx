import React from "react";

function Post(props) {
  return (
    <div key={props.key} className="text-light">
      <h3 className="display-5 p-3">{props.title}</h3>
      <p className="w-50 mx-auto pb-3 m-0">{props.content}</p>
      <button className="btn btn-outline-light mb-3">Read more</button>
    </div>
  )
}

// <img className="w-50 img-circle" src={props.img} alt=""/>

export default Post;
