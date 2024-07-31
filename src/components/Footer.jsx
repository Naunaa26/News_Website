import React from "react";

// cara Kedua menggunakan props //
const Footer = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
      <p>{props.button}</p>
    </div>
  );
};

export default Footer;
