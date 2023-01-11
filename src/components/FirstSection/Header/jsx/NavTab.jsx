import React from "react";
import styles from "../css/NavTab.module.css";

export default function NavTab(props) {
  return (
    <React.Fragment>
      <a
        href={props.href}
        className="text-sm font-semibold hover:text-blue-600 duration-150 mr-4 text-slate-100"
      >
        {props.children}
      </a>
    </React.Fragment>
  );
}
