import React from "react";

const Data = ({ title, imageurl, description, button }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={imageurl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition">
          {button}
        </button>
      </div>
    </div>
  );
};

export default Data;
