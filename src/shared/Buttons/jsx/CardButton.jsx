import React from "react";
import styles from "../css/CardButton.module.css";

export default function CardButton(props) {
  return (
    <React.Fragment>
      <button
        onClick={props.onClick}
        className="bg-blue-600 hover:bg-blue-400 duration-150 px-4 py-2 mt-4 rounded-lg text-gray-100 font-semibold text-sm uppercase tracking-wide"
      >
        {props.children}
      </button>
    </React.Fragment>
  );
}
