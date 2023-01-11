import React from "react";
import styles from "../css/Title.module.css";

export default function Title(props) {
  return (
    <React.Fragment>
      <h2 className="text-3xl font-bold text-gray-800 md:text-6xl mt-14">
        {props.children}
      </h2>
    </React.Fragment>
  );
}
