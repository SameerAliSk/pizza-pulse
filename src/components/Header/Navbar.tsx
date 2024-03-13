import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../Assets/Designer.png";
import { Button, Stack, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Footer from "../Footer/Footer";

export default function Navbar() {
  return (
    <>
      <header className="header">
        <nav className="nav-bar">
          <Link to="/">
            <img src={logo} alt="pizza-pulse-logo" className="logo" />
          </Link>
          <div className="link-elements-container">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about-us">About</Link>
            <Link to="/nutrition">Nutrition</Link>
            <Link to="/contact-us">Contact</Link>
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
