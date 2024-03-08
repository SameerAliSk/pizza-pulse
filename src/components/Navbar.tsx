import React, { useState } from "react";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Avatar,
  Button,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../Assets/Designer.png";

const pages = ["Home", "Menu", "Nutrition", "About", "Contact Us"];
const settings = ["Profile", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);

  const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        color: "#F40009",
        backgroundColor: "#FAFAFA",
        fontWeight: "bold",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: 80,
              maxWidth: 80,
            }}
            alt="The house from the offer."
            src={logo}
          />
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            onClick={handleOpenNavMenu}
            color="inherit"
            edge="start"
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            PaperProps={{
              sx: {
                maxHeight: 200,
                width: 220,
                fontWeight: 600,
              },
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ fontWeight: 200 }}
              >
                {page}
              </MenuItem>
            ))}
          </Menu>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button key={page} sx={{ color: "inherit" }}>
                {page}
              </Button>
            ))}
          </Box>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} color="inherit">
              <Avatar alt="Avatar" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                {setting}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
