import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import axios from "axios";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("/api/products");
      setProducts(res.data)
    };
    fetchProducts();
  }, []);

  return (
    <div className="border border-red=500 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {products.map((product, i) => (
        <Product key={i} product={product} />
      ))}
    </div>
  );
}
