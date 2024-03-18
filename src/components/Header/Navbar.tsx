import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../Assets/Designer.png";
import { Button, Stack, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Footer from "../Footer/Footer";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  return (
    <>
      <header className="header">
        <nav className="nav-bar">
          <NavLink to="/">
            <img src={logo} alt="pizza-pulse-logo" className="logo" />
          </NavLink>
          <div className="NavLink-elements-container">
            <NavLink
              className={location.pathname === "/" ? "navlink-active" : ""}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={location.pathname === "/menu" ? "navlink-active" : ""}
              to="/menu"
            >
              Menu
            </NavLink>
            <NavLink
              className={
                location.pathname === "/about-us" ? "navlink-active" : ""
              }
              to="/about-us"
            >
              About
            </NavLink>
            <NavLink
              className={
                location.pathname === "/nutritional-info"
                  ? "navlink-active"
                  : ""
              }
              to="/nutritional-info"
            >
              Nutrition
            </NavLink>
            <NavLink
              className={
                location.pathname === "/contact-us" ? "navlink-active" : ""
              }
              to="/contact-us"
            >
              Contact
            </NavLink>
          </div>
          <Stack spacing={2} direction="row">
            <Button
              variant="text"
              sx={{ fontSize: "14px", fontWeight: 600, color: "#5f88a3" }} //15px
            >
              login
            </Button>
            <Button
              variant="contained"
              size="medium" //
              sx={{
                backgroundColor: "#FF0800",
                borderRadius: "9999px",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#CC0000",
                },
              }}
            >
              Register
            </Button>
            <Button
              variant="text"
              sx={{ fontSize: "14px", fontWeight: 600, color: "#5f88a3" }} //15
              startIcon={
                <Badge
                  sx={{
                    fontSize: "35px",
                    "& .MuiBadge-badge": {
                      backgroundColor: "#FF0800",
                      color: "#fff",
                    },
                  }}
                  badgeContent={2}
                >
                  <ShoppingCartIcon sx={{ fontSize: "30px" }} />
                </Badge>
              }
            >
              Cart
            </Button>
          </Stack>
        </nav>
      </header>
      <Footer />
    </>
  );
}
