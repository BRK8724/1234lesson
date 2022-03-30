import React from "react";
import { Card } from "../card/";
import "./style.css";

export const Cardlist = (props) => (
  <div className="card-list">
    {props.robots.map((el) => (
      <Card key={el.id} robot={el} />
    ))}
  </div>
);
