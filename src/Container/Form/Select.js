import React from "react";

export default function Select(props) {
  return (
    <select
      id={props.id}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
    >
      {props.children}
    </select>
  );
}
