import React from "react";
import SearchBar from "./component_table/SearchBar";
import ProductTable from "./component_table/ProductTable";

function FilterableProductTable() {
  return (
    <div>
      <style>
        {`
          .container {
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #000;
            max-width: 600px;
            margin: 0 auto;
          }
          .container h1 {
            font-size: 24px;
            margin-bottom: 20px;
            color: #333;
          }
        `}
      </style>
      <div className="container">
        <SearchBar label={"List Product Handphone Gaming"} />
        <ProductTable />
      </div>
    </div>
  );
}

export default FilterableProductTable;
