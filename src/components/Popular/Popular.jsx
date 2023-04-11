import React from "react";
import "./Popular.css";
import Product from "../Product/Product";
import products from "../../assets/images/data/products";
const Popular = () => {
  return (
    <section>
      <article>
        <h2 style={{ textAlign: "center" }}>Popular in Category</h2>
        <div className="popular__container">
          {products.slice(20, 23).map((product) => (
            <Product key={product.id} product={product} />
          ))}
          {console.log(products)}
        </div>
      </article>
    </section>
  );
};

export default Popular;
