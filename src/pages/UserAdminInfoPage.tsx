import React from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import UserTabs from "../components/UserTabs/UserTabs";
import Categories from "../components/Categories/Categories";

export default function UserAdminInfoPage() {
  return (
    <>
      <Navbar />
      <UserTabs />
      <Categories />
      <Footer />
    </>
  );
}
