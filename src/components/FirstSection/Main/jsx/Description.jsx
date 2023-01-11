import React from "react";

export default function Description(props) {
  return (
    <React.Fragment>
      <p className="my-12 text-sm text-gray-500 md:text-2xl">
        {props.children}
      </p>
    </React.Fragment>
  );
}
