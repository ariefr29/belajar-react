import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img className="image" src={props.image} />
      <div className="title">{props.title}</div>
      <div className="user">{props.user}</div>
    </div>
  );
}

export default Card;
