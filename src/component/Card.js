import React from "react";

function Card(props) {
  return (
    <li className="card">
      <div className="boxed position-relative">
        <img className="position-cover" src={props.image} alt={props.alt}/>
      </div>
    </li>
  );
}

export default Card;
