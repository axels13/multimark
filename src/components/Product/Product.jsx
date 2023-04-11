import React, { useState } from "react";
import "./product.css";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addToCart } from "../../hook/actions";
import { toast } from "react-toastify";
const Product = ({ product }) => {
  const item = product.id;
  const dispatch = useDispatch();

  const handleAddToCard = () => {
    const itemToAdd = { ...product };
    dispatch(addToCart(itemToAdd));
    toast.success(` Product added to cart!!`);
  };
  return (
    <div className="product__img">
      <div>
        <Link to={`/shop/${product.id}`}>
          <img src={product.imgUrl} alt={product.productName} width={300} />
        </Link>
      </div>
      <div className="product__card">
        <div>
          <h3 className="product__title">{product.productName}</h3>
          <p>{product.category}</p>
        </div>
        <div className="product__money">
          <span className="price">${product.price}</span>
          <span className="product_circle" onClick={handleAddToCard}>
            <i class="ri-add-line"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
