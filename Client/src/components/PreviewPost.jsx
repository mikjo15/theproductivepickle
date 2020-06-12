import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

function PreviewPost(props) {
  return (
    <div className="text-light">
      <h3 className="display-5 p-3">{_.startCase(props.post.title)}</h3>
      <p>{props.post.shortDesc}</p>
      <Link to={"posts/" + props.post.title} className="btn btn-outline-light mb-3">Read more</Link>
    </div>
  )
}

// <img className="w-50 img-circle" src={props.img} alt=""/>

export default PreviewPost;
