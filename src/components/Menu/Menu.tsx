import React from "react";
import onionPeprika from "../../Assets/onion&peprika.png";
import "./Menu.css";
import {
  Paper,
  Typography,
  InputLabel,
  NativeSelect,
  Button,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function Menu() {
  const [size, setSize] = useState("");
  const [crust, setCrust] = useState("New Hand Tossed");
  const handleSizeChange = (event: React.ChangeEvent<{ value: string }>) => {
    setSize(event.target.value);
    console.log(event.target.value);
  };
  const handleCrustChange = (event: React.ChangeEvent<{ value: string }>) => {
    setCrust(event.target.value);
  };
  console.log(size);
  console.log(crust);
  return (
    <div className="menu-container">
      <Typography
        variant="h4"
        component="h1"
        sx={{ color: "#ff2400", fontWeight: "600", paddingTop: "2rem" }}
      >
        Pizzas
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
            <div
              style={{
                paddingBottom: "6px",
                borderBottom: " 1px solid rgb(233, 233, 233)",
              }}
            >
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
                Spiciest non veg pizza with spicy &amp; herby chicken sausage
                and red paprika toppings on a new spicy peri peri sauce
                base."Spiciest non veg pizza with spicy &amp; herby chicken
                sausage and red paprika toppings on a new spicy peri peri sauce
                base.
              </Typography>{" "}
            </div>
            <Stack direction="row" spacing={5} sx={{ paddingTop: "6px" }}>
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
            </Stack>

            <Stack direction="row" spacing={5} sx={{ paddingTop: "10px" }}>
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
            </Stack>
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
