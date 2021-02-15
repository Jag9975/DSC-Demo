import React from "react";
import "../App.css";

function Card(props) {
  return (
    <div>
      <div class="card" style={{ width: "400px" }}>
        <img class="card-img-top" src={props.image} alt="Card image" />
        <div class="card-body">
          <h4 class="card-title">{props.title}</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
