import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Routers from "../routers/Routers";
import Footer from "../components/Footer/Footer";
const Layout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
