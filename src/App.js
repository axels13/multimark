import React from "react";
import "remixicon/fonts/remixicon.css";
import Layout from "./Layout/Layout";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <>
      <ToastContainer />
      <Layout />
    </>
  );
};

export default App;
