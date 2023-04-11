import React from "react";
import "./NewArrivals.css";
import Product from "../Product/Product";
import products from "../../assets/images/data/products";
const NewArrivals = () => {
  return (
    <section>
      <article className="new__title">
        <h2 className="new__title"> New Arrivals </h2>
        <div className="new__arrivals">
          {products.slice(11, 19).map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </article>
    </section>
  );
};

export default NewArrivals;
