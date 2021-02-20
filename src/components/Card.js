import React from "react";
import "../App.css";

function Card(props) {
  return (
    <div>
      <div className="card" style={{ width: "400px" }}>
        <img className="card-img-top" src={props.image} alt="Card image" />
        <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
