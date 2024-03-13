import React from "react";
import onionPeprika from "../../Assets/onion&peprika.png";
import "./Menu.css";
import { Paper, Typography } from "@mui/material";

export default function Menu() {
  return (
    <div className="menu-container">
      <Paper elevation={3} sx={{ height: "23rem", width: "18rem" }}>
        <img src={onionPeprika} alt="pizza" className="product-img" />
        <div className="product-content">
          <Typography variant="body1" component="h1" sx={{ fontWeight: "600" }}>
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
            non veg pizza with spicy &amp; herby chicken sausage and red paprika
            toppings on a new spicy peri peri sauce base.
          </Typography>
        </div>
      </Paper>
    </div>
  );
}
