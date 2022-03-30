import React from "react";
import "./style.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.robot.id}?set=set2&size=180x180`}
      alt=""
    />
    <h2>{`Hello i'm ${props.robot.name}`}</h2>
    <p>{`My phone: ${props.robot.phone}`}</p>
    <p>{`My email: ${props.robot.email}`}</p>
  </div>
);
