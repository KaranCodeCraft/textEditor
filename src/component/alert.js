import React from "react";

export default function Alert(props) {
  return (
      <div
        class="alert alert-success"
        role="alert"
      >
        {props.text}<bold>Sucessfully</bold>
      </div>
  );
}
