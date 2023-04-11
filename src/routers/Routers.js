import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductsDetails from "../components/ShopsComponents/ProductsDetails/ProductsDetails";

const routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:id" element={<ProductsDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default routers;
