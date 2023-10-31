import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";

// Define a CSS class
const buttonStyles = {
  my: 2,
  color: "black",
  display: "block",
};

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "teal" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "block", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "block", md: "flex" }, // Show on both xs and md screens
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black ",
              textDecoration: "none",
            }}
          >
Carer Pharma
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              marginLeft: "auto",
            }}
          >
            {/* Apply the CSS class to the buttons */}
            <Button sx={{ ...buttonStyles, mx: 1 }}>Location</Button>
            <Button sx={{ ...buttonStyles, mx: 1 }}>Email</Button>
            <Button sx={{ ...buttonStyles, mx: 1 }}>Number</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
