import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <style>
        {`
          .search-bar__container {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 20px;
          }

          .search-bar__container input[type="text"] {
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            width: 100%;
            box-sizing: border-box;
          }

          .search-bar__in_stock_checkbox {
            display: flex;
            align-items: center;
            gap: 5px;
          }

          .search-bar__in_stock_checkbox input[type="checkbox"] {
            margin: 0;
          }

          .search-bar__in_stock_checkbox label {
            font-size: 14px;
            color: #333;
          }
        `}
      </style>
      <div className="search-bar__container">
        <input type="text" placeholder="Search..." />
        <div className="search-bar__in_stock_checkbox">
          <input type="checkbox" />
          <label>{props.label}</label>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
