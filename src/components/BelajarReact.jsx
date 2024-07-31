import React from "react";

// cara pertama menggunakan props //
const BelajarReact = ({ title, body, p }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{body}</h3>
      <p>{p}</p>
    </div>
  );
};

export default BelajarReact;
