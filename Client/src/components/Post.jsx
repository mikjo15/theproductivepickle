import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import {stateToHTML} from 'draft-js-export-html';
import {  convertFromRaw } from 'draft-js';

function Post(props) {
  const convertFromJSONToHTML = (text) => {
          try{
              return { __html: stateToHTML(convertFromRaw(text))}
            } catch(exp) {
              console.log(exp)
              return { __html: 'Error' }
            }
      }

  return (
    <div className="text-light">
      <h3 className="display-5 p-3">{_.startCase(props.post.title)}</h3>
      <div dangerouslySetInnerHTML={convertFromJSONToHTML(props.post.description)}></div>
      <Link to={"posts/" + props.post.title} className="btn btn-outline-light mb-3">Read more</Link>
    </div>
  )
}

// <img className="w-50 img-circle" src={props.img} alt=""/>

export default Post;
