import React from "react";
import cartPizza from "../../Assets/cartPizza.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Typography,
  Stack,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  createTheme,
  ThemeProvider,
  IconButton,
  Chip,
  ButtonGroup,
} from "@mui/material";
import "./Cart.css";
const theme = createTheme({
  typography: {
    fontFamily:
      'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  },
});

export default function Cart() {
  return (
    <ThemeProvider theme={theme}>
      <div className="checkout-cart-container">
        <Typography
          variant="h3"
          component="h1"
          sx={{ color: "#f13a01", fontWeight: "600", padding: "1.5rem 0" }}
        >
          Cart
        </Typography>
        <div className="checkout-info-container">
          <div className="cart-items-container">
            <Stack direction="row" gap={4}>
              <Stack direction="row" gap={4}>
                <img
                  src={cartPizza}
                  alt="cart-pizza"
                  className="checkout-pizza-img"
                />
                <Stack>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontSize: "20px",
                      fontWeight: "700",
                      fontFamily:
                        'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    }}
                  >
                    Pepper Barbecue Chicken
                  </Typography>
                  <Stack direction="row" gap={2}>
                    <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
                      Size:Large
                    </Typography>
                    <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
                      Crust: New Hand Tossed
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction="row" gap={4}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    fontFamily:
                      'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    padding: "1.3rem",
                  }}
                >
                  &#8377;400
                </Typography>
                <ButtonGroup sx={{ margin: "1rem 0" }}>
                  <IconButton>
                    <RemoveIcon className="icon-button" />
                  </IconButton>
                  <span className="quantity">1</span>
                  <IconButton>
                    <AddIcon className="icon-button" />
                  </IconButton>
                </ButtonGroup>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </Stack>
            </Stack>
          </div>
          <Paper
            elevation={1}
            sx={{
              backgroundColor: "rgb(243 244 246)",
              display: "flex",
              flexDirection: "column",
              width: "27%",
              padding: "1rem",
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: "600", color: "#f13a01", textAlign: "center" }}
            >
              Checkout
            </Typography>
            <div className="address-form">
              <label htmlFor="full-name">Full Name</label>
              <input
                disabled={true}
                type="text"
                value="Sameer Ali"
                id="full-name"
              />
              <label htmlFor="mobile-number">mobile No</label>
              <input
                disabled={true}
                type="tel"
                value="9390552765"
                id="mobile-number"
              />
              <label htmlFor="street-address">Street Address</label>
              <input
                disabled={true}
                type="text"
                value="Sameer Ali"
                id="street-address"
              />
              <Stack direction="row" spacing={3} sx={{ width: "98%" }}>
                <Stack>
                  <label htmlFor="postal-code">Postal Code</label>
                  <input
                    disabled={true}
                    type="text"
                    value="503302"
                    id="postal-code"
                  />
                </Stack>
                <Stack>
                  <label htmlFor="city">City</label>
                  <input
                    disabled={true}
                    type="text"
                    value="Bangalore"
                    id="city"
                  />
                </Stack>
              </Stack>
              <label htmlFor="country">Postal Code</label>
              <input disabled={true} type="text" value="India" id="country" />
            </div>
          </Paper>
        </div>
      </div>
    </ThemeProvider>
  );
}
