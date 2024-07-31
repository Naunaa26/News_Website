import React, { useState, useEffect } from "react";
import axios from "axios";

const GetApi = () => {
  const [products, setProducts] = useState([]);

  //get api
  const getData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>Get Api</h2>{" "}
      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </>
  );
};

export default GetApi;
