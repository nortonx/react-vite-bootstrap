import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return(
    <div className="container py-4 px-3 mx-auto">
      <Header />
        <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout;