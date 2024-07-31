import React from "react";

const CardHeader = ({ image, category }) => {
  return (
    <header>
      <h4 className="text-center mb-2 bg-gray-600 p-2 text-sm text-white rounded-md mx-auto w-fit absolute">
        {category}
      </h4>
      <img
        src={image}
        alt="ini gambar"
        className="w-full h-48 object-cover rounded-md"
      />
    </header>
  );
};

export default CardHeader;
