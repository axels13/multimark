import React, { useState } from "react";
import "./Category.css";
import Product from "../../Product/Product";
import products from "../../../assets/images/data/products";
const Category = () => {
  const [category, setCategory] = useState(products);

  const handleChange = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setCategory(filteredProducts);
    }

    if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );
      setCategory(filteredProducts);
    }

    if (filterValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setCategory(filteredProducts);
    }

    if (filterValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );
      setCategory(filteredProducts);
    }

    if (filterValue === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
      );
      setCategory(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCategory(searchedProducts);
  };
  return (
    <section className="category">
      <main className="category__container">
        <div>
          <select onChange={handleChange}>
            <option>Filter By Category</option>

            <option value="sofa">Sofa</option>
            <option value="mobile">Mobile</option>
            <option value="chair">Chair</option>
            <option value="watch">Watch</option>
            <option value="wireless">Wireless</option>
          </select>
        </div>

        <div className="category__card-input">
          <input type="text" placeholder="Search..." onChange={handleSearch} />
          <i className="ri-search-line"></i>
        </div>
      </main>

      <div className="category__products">
        {category.length === 0 ? (
          <h1>No products are found!</h1>
        ) : (
          category.map((product) => (
            <Product product={product} key={product.id} />
          ))
        )}
      </div>
    </section>
  );
};

export default Category;
