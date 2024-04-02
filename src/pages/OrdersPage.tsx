import React from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import UserTabs from "../components/UserTabs/UserTabs";
import Orders from "../components/Orders/Orders";

export default function OrdersPage() {
  return (
    <>
      <Navbar />
      <UserTabs />
      <Orders />
      <Footer />
    </>
  );
}
