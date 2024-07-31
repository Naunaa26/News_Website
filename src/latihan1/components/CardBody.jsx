import React, { useState } from "react";
import Button from "./Button";

const CardBody = ({ date, title, content, link }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 100; // Batasan jumlah karakter yang ditampilkan

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mt-4 mb-2">
      <p className="text-base text-gray-400">{date}</p>
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="mt-2">
        {isExpanded ? content : `${content.substring(0, MAX_LENGTH)}...`}
        {content.length > MAX_LENGTH && (
          <span
            className="text-orange-500 cursor-pointer"
            onClick={toggleReadMore}
          >
            {isExpanded ? "Sisipkan" : " Baca Selengkapnya"}
          </span>
        )}
      </p>
      <Button link={link} />
    </div>
  );
};

export default CardBody;
