// src/components/Layout.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AddToCartButton from "./AddToCartButton";
import WebsiteCounter from "./WebsiteCounter";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Renders nested routes */}
      <Footer />
      <AddToCartButton />
      <WebsiteCounter />
    </>
  );
};

export default Layout;