import React from "react";
import Banner from "../components/Banner/Banner";
import Trending from "../components/Trending/Trending";
import BestSales from "../components/BestSales/BestSales";
import Card from "../components/card/Card";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import Popular from "../components/Popular/Popular";

const Home = () => {
  return (
    <>
      <Banner />
      <Trending />
      <BestSales />
      <Card />
      <NewArrivals />
      <Popular />
    </>
  );
};

export default Home;
