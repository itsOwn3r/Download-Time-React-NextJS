import React from "react";

export default function Input(props) {
  return (
    <input
      type={props.type}
      name={props.id}
      id={props.id}
      placeholder={props.placeholder}
      onInput={props.onInput}
      onPaste={props.onPaste}
    />
  );
}
