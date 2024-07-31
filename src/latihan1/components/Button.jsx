import React from "react";

const Button = ({ link }) => {
  return (
    <div className="mt-4">
      <a
        href={link}
        target="blank"
        className="bg-orange-500 p-2 px-4 rounded-md text-white"
      >
        More Information
      </a>
    </div>
  );
};

export default Button;
