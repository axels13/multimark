import React from "react";
import "./CartItem.css";

const CartItem = ({ item, handleRemoveFromCart }) => {
  return (
    <>
      <article className="cart-item__container">
        <div className="cart__item__text_first">
          <img src={item.imgUrl} alt={item.productName} width={100} />
        </div>
        <div>
          <span>{item.productName}</span>
        </div>
        <div className="cart__item__text">
          <span>${item.price}</span>
          <span>{item.quantity}</span>
          <span onClick={() => handleRemoveFromCart(item.id)}>
            <i class="ri-delete-bin-line"></i>
          </span>
        </div>
      </article>
    </>
  );
};

export default CartItem;
