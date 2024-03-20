import React from "react";
import { Button, Stack } from "@mui/material";
import "./UserTabs.css";
import Categories from "../Categories/Categories";

export default function UserTabs() {
  const renderButton = (label: string) => (
    <Button
      variant="contained"
      sx={{
        borderRadius: "9999px",
        backgroundColor: "#d1d5db",
        fontWeight: "600",
        color: "#4b5563",
        "&:hover": {
          backgroundColor: "#f13a01",
          color: "#ffffff",
        },
      }}
    >
      {label}
    </Button>
  );

  return (
    <div className="user-info-container">
      <Stack direction="row" gap={1} sx={{ padding: "1rem 0" }}>
        {renderButton("Profile")}
        {renderButton("Categories")}
        {renderButton("Menu Items")}
        {renderButton("Users")}
        {renderButton("Orders")}
      </Stack>
    </div>
  );
}
