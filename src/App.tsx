import "./App.css";
import Navbar from "./components/Header/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/na";
import Footer from "./components/Footer/Footer";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import NutritionPage from "./pages/NutritionPage";
import MenuPage from "./pages/MenuPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import UserAdminInfoPage from "./pages/UserAdminInfoPage";
import UsersPage from "./pages/UsersPage";
import OrdersPage from "./pages/OrdersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/nutritional-info" element={<NutritionPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/check-out" element={<CartPage />} />
        <Route path="user-info" element={<UserAdminInfoPage />} />
        <Route path="all-users" element={<UsersPage />} />
        <Route path="all-customers" element={<OrdersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
