import React from "react";
import styles from "../css/CardImage.module.css";

export default function CardImage(props) {
  return (
    <React.Fragment>
      <img
        className="w-32 h-32 rounded-full mx-auto"
        src={props.src}
        alt={props.alt}
      />
    </React.Fragment>
  );
}
