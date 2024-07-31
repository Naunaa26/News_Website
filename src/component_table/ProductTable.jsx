import React from "react";

const ProductTable = () => {
  return (
    <div>
      <style>
        {`
          .product-table__container {
            width: 100%;
            overflow-x: auto;
            margin-bottom: 20px;
          }

          .product-table__container table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }

          .product-table__container th,
          .product-table__container td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
          }
          

          .product-table__container tbody tr:hover {
            background-color: #2F402E;
          }

          .product-table__container td[colspan="2"] {
            background-color: #3A6663;
            font-weight: bold;
          }
        `}
      </style>
      <div className="product-table__container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2">
                <strong>Sporting Goods</strong>
              </td>
            </tr>
            <tr>
              <td>Football</td>
              <td>$49.99</td>
            </tr>
            <tr>
              <td>Baseball</td>
              <td>$9.99</td>
            </tr>
            <tr>
              <td>Basketball</td>
              <td>$29.99</td>
            </tr>
            <tr>
              <td colSpan="2">
                <strong>Electronics</strong>
              </td>
            </tr>
            <tr>
              <td>iPod Touch</td>
              <td>$99.99</td>
            </tr>
            <tr>
              <td>iPhone 5</td>
              <td>$399.99</td>
            </tr>
            <tr>
              <td>Nexus 7</td>
              <td>$199.99</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
