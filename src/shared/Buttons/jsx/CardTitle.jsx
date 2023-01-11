import React from "react";
import styles from "../css/CardTitle.module.css";

export default function CardTitle(props) {
  return (
    <React.Fragment>
      <h1 className="text-lg text-gray-700"> {props.children} </h1>
    </React.Fragment>
  );
}
