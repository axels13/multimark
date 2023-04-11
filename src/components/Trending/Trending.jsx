import React from "react";
import "./Trending.css";
import products from "../../assets/images/data/products";
import Product from "../Product/Product";
const Trending = () => {
  return (
    <section id="trending">
      <h2 style={{ textAlign: "center" }}>Trending Products</h2>
      <div className="trending__container">
        {products.slice(0, 4).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Trending;
