import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

// Define a CSS class for the buttons
const buttonStyles = {
  my: 2,
  color: "black",
  display: "block",
  transition: "background 0.3s",
  "&:hover": {
    backgroundColor: "#555555",
    color: "#fff",
  },
};

function Navbar() {
  return (
    <AppBar
    position="static"

     sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/home">
            {" "}
            <Button sx={{ ...buttonStyles, mx: 1 }}>Home</Button>
          </Link>
          <Link to="/services">
            {" "}
            <Button sx={{ ...buttonStyles, mx: 1 }}>Services</Button>
          </Link>
          <Link to="/products">
            {" "}
            <Button sx={{ ...buttonStyles, mx: 1 }}>Products</Button>
          </Link>
          <Link to="/contactform  ">
            {" "}
            <Button sx={{ ...buttonStyles, mx: 1 }}>Contact us</Button>
          </Link>
          {/* <Button sx={{ ...buttonStyles, mx: 1 }}>
            Sabar kar bhai abhi aur ane hain
          </Button> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
