import React from "react";
import "./Best.css";
import products from "../../assets/images/data/products";
import Product from "../Product/Product";
const BestSales = () => {
  return (
    <section id="best">
      <article>
        <h2 style={{ textAlign: "center" }}>Best Sales</h2>
        <div className="best__container">
          {products.slice(0, 8).map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </article>
    </section>
  );
};

export default BestSales;
