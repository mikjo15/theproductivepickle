import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

function Post(props) {

  return (
    <div className="text-light">
      <h3 className="display-5 p-3">{_.startCase(props.title)}</h3>
      <p className="w-50 mx-auto pb-3 m-0">{props.content}</p>
      <Link to={"posts/" + props.title} className="btn btn-outline-light mb-3">Read more</Link>
    </div>
  )
}

// <img className="w-50 img-circle" src={props.img} alt=""/>

export default Post;
