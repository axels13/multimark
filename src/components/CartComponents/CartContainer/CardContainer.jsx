import React from "react";
import CartItem from "../CartItem/CartItem";
import "./CardContainer.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../../hook/actions";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const CardContainer = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    toast.warning("You have removed a product");
    dispatch(removeFromCart(itemId));
  };
  const calculateSubtotal = () => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };
  return (
    <section>
      <main className="cart__container">
        <div className="cart__table">
          <div className="cart__row">
            <div className="cart__row__card__left">
              <span>Image</span>
              <span>title</span>
            </div>
            <div className="cart__row__card">
              <span>price</span>
              <span>Qty</span>
              <span>Delete</span>
            </div>
          </div>
          <div>
            {items.length === 0 ? (
              <h2>The cart is empty !! </h2>
            ) : (
              items.map((item) => (
                <CartItem
                  item={item}
                  key={item.id}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              ))
            )}
          </div>
        </div>

        <div className="card-container__checkout">
          <span>
            Subtotal: <span>${parseInt(calculateSubtotal())}</span>{" "}
          </span>
          <p>Taxes and shipping will calculate in checkout</p>

          <button className="card_checkout__btn">Checkout</button>
          <Link to="/shop">
            <button className="card_checkout">Continue Shipping</button>
          </Link>
        </div>
      </main>
    </section>
  );
};

export default CardContainer;
