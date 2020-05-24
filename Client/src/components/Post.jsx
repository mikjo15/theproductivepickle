import React from "react";

function Post(props) {
  return (
    <div className="text-light">
      <h3 className="display-5 p-3">{props.title}</h3>
      <img className="w-50 img-circle" src={props.img} alt=""/>
      <p className="w-50 mx-auto pt-4 pb-3 m-0">{props.content}</p>
      <button className="btn btn-outline-light">Read more</button>
    </div>
  )
}

export default Post;
