import React from "react";

function Entry(props) {
  return (
    <div className="col-md-6 p-4">
      <h4>{props.job}</h4>
      <p class="m-0 ">
        {props.desc}
      </p>
      <p class="m-0 "><em>{props.year}</em></p>
    </div>
  )
}

export default Entry;
