import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <header className="text-center my-4 ">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="mt-2 text-[16px]">{subtitle}</p>
    </header>
  );
};

export default Header;
