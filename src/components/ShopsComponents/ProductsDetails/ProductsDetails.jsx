import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../../assets/images/data/products";
import BannerShop from "../BannerShop/BannerShop";
import "./ProductsDetails.css";
import { useDispatch } from "react-redux";

import { addToCart } from "../../../hook/actions";
import Product from "../../Product/Product";
import Reviews from "./Reviews";
import { toast } from "react-toastify";
const ProductsDetails = () => {
  const [activeBtn, setActiveBtn] = useState("desc");

  const handleDescClick = () => {
    setActiveBtn("desc");
  };

  const handleReviewsClick = () => {
    setActiveBtn("reviews");
  };
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    review,
    shortDesc,
    description,
  } = product;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const handleAddToCard = () => {
    const itemToAdd = { ...product, quantity: quantity };
    dispatch(addToCart(itemToAdd));
    toast.success(` Product added to cart!!`);
    setQuantity(1);
  };
  return (
    <section>
      <BannerShop />
      <main className="productsdetails_card">
        <div className="productsdetails__container">
          <div>
            <img src={imgUrl} width={500} alt={product.productName} />
          </div>

          <div className="products-details__text">
            <h2>{productName}</h2>
            <div>
              <div className="products__icons__star">
                <span>
                  <i className="ri-star-s-fill"></i>
                </span>
                <span>
                  <i className="ri-star-s-fill"></i>
                </span>
                <span>
                  <i className="ri-star-s-fill"></i>
                </span>
                <span>
                  <i className="ri-star-s-fill"></i>
                </span>
                <span>
                  <i className="ri-star-s-fill"></i>
                </span>
              </div>

              <p>({avgRating} ratings)</p>
            </div>

            <div className="productsdetails__text">
              <span>${price}</span>
              <p className="shortdesc">{shortDesc}</p>
              <p>{review}</p>
              <button className="product_btn" onClick={handleAddToCard}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>
      <div className="product-details__desc">
        <span onClick={handleDescClick} className="desc">
          description
        </span>

        <span onClick={handleReviewsClick}>Reviews(2)</span>
        <div style={{ display: activeBtn === "desc" ? "block" : "none" }}>
          <p className="description">{description}</p>
        </div>
        <div style={{ display: activeBtn === "reviews" ? "block" : "none" }}>
          <Reviews />
        </div>

        <div className="details">
          <h3>You might also like</h3>
          <div className="details__products">
            {products.slice(0, 8).map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsDetails;
