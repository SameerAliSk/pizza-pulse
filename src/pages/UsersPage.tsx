import React from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import Users from "../components/Users/Users";
import UserTabs from "../components/UserTabs/UserTabs";

export default function UsersPage() {
  return (
    <>
      <Navbar />
      <UserTabs />
      <Users />
      <Footer />
    </>
  );
}
