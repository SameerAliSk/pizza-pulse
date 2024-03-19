import React, { useState } from "react";
import home from "../../Assets/home.png";
import "./Home.css";
import onionPeprika from "../../Assets/onion&peprika.png";
import {
  Button,
  Stack,
  Typography,
  Paper,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
export default function Home() {
  const [size, setSize] = useState("");
  const [crust, setCrust] = useState("New Hand Tossed");
  const handleSizeChange = (event: React.ChangeEvent<{ value: string }>) => {
    setSize(event.target.value);
    console.log(event.target.value);
  };
  const handleCrustChange = (event: React.ChangeEvent<{ value: string }>) => {
    setCrust(event.target.value);
  };
  return (
    <div className="pizza-container">
      <div className="pizza-heading-container">
        <div>
          <h1 className="home-heading">
            Slice into Flavor:{" "}
            <span className="home-sub-heading">
              {" "}
              Your One-Stop{" "}
              <span style={{ color: "#006400" }}>Pizza Paradise</span>
            </span>
          </h1>
          <p className="description">
            Embark on a culinary journey with Pizza Pulse, where every slice is
            an invitation to savor the essence of flavor. Discover a world of
            taste sensations at your fingertips, from classic favorites to
            innovative creations. As your trusted one-stop pizza paradise, we're
            dedicated to delivering quality, satisfaction, and a slice of
            happiness with every order.
          </p>
          <Stack direction="row" spacing={4}>
            <Link to="/menu">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#f13a01",
                  borderRadius: "9999px",
                  fontWeight: "600",
                  "&:hover": {
                    backgroundColor: "#ff4500",
                  },
                }}
                endIcon={<ArrowForwardIcon />}
              >
                Order Now
              </Button>
            </Link>
            <Link to="/about-us">
              <Button
                variant="text"
                endIcon={<ArrowForwardIcon />}
                sx={{ color: "#4b5563", fontWeight: "600", fontSize: "14px" }}
              >
                Learn More
              </Button>
            </Link>
          </Stack>
        </div>
        <img src={home} alt="baked-pizza" className="pizza-img" />
      </div>
      <Typography
        variant="h4"
        component="h2"
        sx={{ fontWeight: "600", color: "#f13a01" }}
      >
        Our Most Selling Pizzas
      </Typography>
      <div className="menu-cards-container">
        <Paper elevation={3} sx={{ height: "23rem", width: "22%" }}>
          <img src={onionPeprika} alt="pizza" className="product-img" />
          <div className="product-content">
            <Typography
              variant="body1"
              component="h1"
              sx={{ fontWeight: "600" }}
            >
              Blazing Onion & Paprika
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                color: "rgb(122 122 122 / 87%)",
                display: "-webkit-box",
                WebkitLineClamp: "3",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              Spiciest non veg pizza with spicy &amp; herby chicken sausage and
              red paprika toppings on a new spicy peri peri sauce base."Spiciest
              non veg pizza with spicy &amp; herby chicken sausage and red
              paprika toppings on a new spicy peri peri sauce base.
            </Typography>
            <div className="size-crust-container">
              <div>
                <InputLabel
                  variant="standard"
                  htmlFor="uncontrolled-native"
                  sx={{
                    fontSize: "12px",
                    color: "rgb(122 122 122 / 87%)",
                    fontWeight: "600",
                  }}
                >
                  Size
                </InputLabel>
                <NativeSelect
                  onChange={handleSizeChange}
                  value={size}
                  inputProps={{
                    name: "Size",
                    id: "uncontrolled-native",
                  }}
                  sx={{
                    fontSize: "12px",
                    color: "rgb(53, 53, 53)",
                    fontWeight: "600",
                  }}
                >
                  <option value="Regular">Regular</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </NativeSelect>
              </div>
              <div>
                <InputLabel
                  variant="standard"
                  htmlFor="uncontrolled-native-crust"
                  sx={{
                    fontSize: "12px",
                    color: "rgb(122 122 122 / 87%)",
                    fontWeight: "600",
                  }}
                >
                  Crust
                </InputLabel>
                <NativeSelect
                  onChange={handleSizeChange}
                  value={size}
                  inputProps={{
                    name: "Crust",
                    id: "uncontrolled-native-crust",
                  }}
                  sx={{
                    fontSize: "12px",
                    color: "rgb(53, 53, 53)",
                    fontWeight: "600",
                  }}
                >
                  <option value="New Hand Tossed">New Hand Tossed</option>
                  <option value="100% Wheat Thin Crust">
                    100% Wheat Thin Crust
                  </option>
                  <option value="Cheese Burst">Cheese Burst</option>
                  <option value="Fresh Pan Pizza">Fresh Pan Pizza</option>
                </NativeSelect>
              </div>
            </div>
            <div className="size-crust-container">
              <Typography variant="h4" component="h2" sx={{ color: "#ff2400" }}>
                &#8377;349
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff2400",
                  borderRadius: "9999px",
                  fontWeight: "600",
                }}
                endIcon={<ShoppingCartOutlinedIcon />}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </Paper>
        <Paper elevation={3} sx={{ height: "23rem", width: "22%" }}>
          <img src={onionPeprika} alt="pizza" className="product-img" />
          <div className="product-content">
            <Typography
              variant="body1"
              component="h1"
              sx={{ fontWeight: "600" }}
            >
              Blazing Onion & Paprika
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                color: "rgb(122 122 122 / 87%)",
                display: "-webkit-box",
                WebkitLineClamp: "3",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              Spiciest non veg pizza with spicy &amp; herby chicken sausage and
              red paprika toppings on a new spicy peri peri sauce base."Spiciest
              non veg pizza with spicy &amp; herby chicken sausage and red
              paprika toppings on a new spicy peri peri sauce base.
            </Typography>
            <div className="size-crust-container">
              <div>
                <InputLabel
                  variant="standard"
                  htmlFor="uncontrolled-native"
                  sx={{
                    fontSize: "12px",
                    color: "rgb(122 122 122 / 87%)",
                    fontWeight: "600",
                  }}
                >
                  Size
                </InputLabel>
                <NativeSelect
                  onChange={handleSizeChange}
                  value={size}
                  inputProps={{
                    name: "Size",
                    id: "uncontrolled-native",
                  }}
                  sx={{
                    fontSize: "12px",
                    color: "rgb(53, 53, 53)",
                    fontWeight: "600",
                  }}
                >
                  <option value="Regular">Regular</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </NativeSelect>
              </div>
              <div>
                <InputLabel
                  variant="standard"
                  htmlFor="uncontrolled-native-crust"
                  sx={{
                    fontSize: "12px",
                    color: "rgb(122 122 122 / 87%)",
                    fontWeight: "600",
                  }}
                >
                  Crust
                </InputLabel>
                <NativeSelect
                  onChange={handleSizeChange}
                  value={size}
                  inputProps={{
                    name: "Crust",
                    id: "uncontrolled-native-crust",
                  }}
                  sx={{
                    fontSize: "12px",
                    color: "rgb(53, 53, 53)",
                    fontWeight: "600",
                  }}
                >
                  <option value="New Hand Tossed">New Hand Tossed</option>
                  <option value="100% Wheat Thin Crust">
                    100% Wheat Thin Crust
                  </option>
                  <option value="Cheese Burst">Cheese Burst</option>
                  <option value="Fresh Pan Pizza">Fresh Pan Pizza</option>
                </NativeSelect>
              </div>
            </div>
            <div className="size-crust-container">
              <Typography variant="h4" component="h2" sx={{ color: "#ff2400" }}>
                &#8377;349
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff2400",
                  borderRadius: "9999px",
                  fontWeight: "600",
                }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </Paper>
        <Paper elevation={3} sx={{ height: "23rem", width: "22%" }}>
          <img src={onionPeprika} alt="pizza" className="product-img" />
          <div className="product-content">
            <Typography
              variant="body1"
              component="h1"
              sx={{ fontWeight: "600" }}
            >
              Blazing Onion & Paprika
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                color: "rgb(122 122 122 / 87%)",
                display: "-webkit-box",
                WebkitLineClamp: "3",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              Spiciest non veg pizza with spicy &amp; herby chicken sausage and
              red paprika toppings on a new spicy peri peri sauce base."Spiciest
              non veg pizza with spicy &amp; herby chicken sausage and red
              paprika toppings on a new spicy peri peri sauce base.
            </Typography>
            <div className="size-crust-container">
              <div>
                <InputLabel
                  variant="standard"
                  htmlFor="uncontrolled-native"
                  sx={{
                    fontSize: "12px",
                    color: "rgb(122 122 122 / 87%)",
                    fontWeight: "600",
                  }}
                >
                  Size
                </InputLabel>
                <NativeSelect
                  onChange={handleSizeChange}
                  value={size}
                  inputProps={{
                    name: "Size",
                    id: "uncontrolled-native",
                  }}
                  sx={{
                    fontSize: "12px",
                    color: "rgb(53, 53, 53)",
                    fontWeight: "600",
                  }}
                >
                  <option value="Regular">Regular</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </NativeSelect>
              </div>
              <div>
                <InputLabel
                  variant="standard"
                  htmlFor="uncontrolled-native-crust"
                  sx={{
                    fontSize: "12px",
                    color: "rgb(122 122 122 / 87%)",
                    fontWeight: "600",
                  }}
                >
                  Crust
                </InputLabel>
                <NativeSelect
                  onChange={handleSizeChange}
                  value={size}
                  inputProps={{
                    name: "Crust",
                    id: "uncontrolled-native-crust",
                  }}
                  sx={{
                    fontSize: "12px",
                    color: "rgb(53, 53, 53)",
                    fontWeight: "600",
                  }}
                >
                  <option value="New Hand Tossed">New Hand Tossed</option>
                  <option value="100% Wheat Thin Crust">
                    100% Wheat Thin Crust
                  </option>
                  <option value="Cheese Burst">Cheese Burst</option>
                  <option value="Fresh Pan Pizza">Fresh Pan Pizza</option>
                </NativeSelect>
              </div>
            </div>
            <div className="size-crust-container">
              <Typography variant="h4" component="h2" sx={{ color: "#ff2400" }}>
                &#8377;349
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff2400",
                  borderRadius: "9999px",
                  fontWeight: "600",
                }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </Paper>
        <Paper elevation={3} sx={{ height: "23rem", width: "22%" }}>
          <img src={onionPeprika} alt="pizza" className="product-img" />
          <div className="product-content">
            <Typography
              variant="body1"
              component="h1"
              sx={{ fontWeight: "600" }}
            >
              Blazing Onion & Paprika
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                color: "rgb(122 122 122 / 87%)",
                display: "-webkit-box",
                WebkitLineClamp: "3",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              Spiciest non veg pizza with spicy &amp; herby chicken sausage and
              red paprika toppings on a new spicy peri peri sauce base."Spiciest
              non veg pizza with spicy &amp; herby chicken sausage and red
              paprika toppings on a new spicy peri peri sauce base.
            </Typography>
            <div className="size-crust-container">
              <div>
                <InputLabel
                  variant="standard"
                  htmlFor="uncontrolled-native"
                  sx={{
                    fontSize: "12px",
                    color: "rgb(122 122 122 / 87%)",
                    fontWeight: "600",
                  }}
                >
                  Size
                </InputLabel>
                <NativeSelect
                  onChange={handleSizeChange}
                  value={size}
                  inputProps={{
                    name: "Size",
                    id: "uncontrolled-native",
                  }}
                  sx={{
                    fontSize: "12px",
                    color: "rgb(53, 53, 53)",
                    fontWeight: "600",
                  }}
                >
                  <option value="Regular">Regular</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </NativeSelect>
              </div>
              <div>
                <InputLabel
                  variant="standard"
                  htmlFor="uncontrolled-native-crust"
                  sx={{
                    fontSize: "12px",
                    color: "rgb(122 122 122 / 87%)",
                    fontWeight: "600",
                  }}
                >
                  Crust
                </InputLabel>
                <NativeSelect
                  onChange={handleSizeChange}
                  value={size}
                  inputProps={{
                    name: "Crust",
                    id: "uncontrolled-native-crust",
                  }}
                  sx={{
                    fontSize: "12px",
                    color: "rgb(53, 53, 53)",
                    fontWeight: "600",
                  }}
                >
                  <option value="New Hand Tossed">New Hand Tossed</option>
                  <option value="100% Wheat Thin Crust">
                    100% Wheat Thin Crust
                  </option>
                  <option value="Cheese Burst">Cheese Burst</option>
                  <option value="Fresh Pan Pizza">Fresh Pan Pizza</option>
                </NativeSelect>
              </div>
            </div>
            <div className="size-crust-container">
              <Typography variant="h4" component="h2" sx={{ color: "#ff2400" }}>
                &#8377;349
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff2400",
                  borderRadius: "9999px",
                  fontWeight: "600",
                }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
}
