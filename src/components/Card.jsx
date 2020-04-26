import React from "react";

function Card(props) {
  function ListItem(props) {
    return <li>{props.item}</li>
  }

  function BenefitList(props) {
    const items = props.benefits;

    return (
      <ul className="list-unstyled mt-3 mb-4">
        {
          items.map(item => (
            <ListItem item={item} />
          ))
        }
      </ul>
    )
  }

 return (
   <div className="card mb-4 box-shadow">
     <img className="card-img-top" src={props.img} alt="Copywriting"/>
     <div className="card-body">
       <h1 className="card-title">{props.title}</h1>
       <BenefitList benefits={props.benefits} />
       <button type="button" className="btn btn-lg btn-block btn-outline-success">{props.price}</button>
     </div>
   </div>
 )
}

export default Card;
