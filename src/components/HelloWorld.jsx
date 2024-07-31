import React from "react";

const HelloWorld = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
      <p>{props.button}</p>
    </div>
  );
};

export default HelloWorld;
