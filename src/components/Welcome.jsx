import React from "react";

const Welcome = ({ title, description, button }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{description}</h3>
      <p>{button}</p>
    </div>
  );
};

export default Welcome;
