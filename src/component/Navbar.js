import React, { useState } from "react";
import {  Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import classes from "./Navbar.module.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DialogContent from "@mui/material/DialogContent";

import { Drawer, Box, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  // const item = useSelector((state) => state.totalQuantity);
  const cartLength=useSelector(state=>state.cart.length)
  
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <>
      <div className={classes.navbar}>
        <div className={classes.menu_icon}>
          <img
            onClick={() => setOpenDrawer(true)}
            src="https://www.dealshare.in/menu_icon.png"
            alt="error1"
          />
        </div>
        <div className={classes.dealShare_logo}>
          <img
            src="https://d3hoz38eq91v8w.cloudfront.net/DSLogo/ds_logo_web.png"
            alt="error"
          />
        </div>
        <div className={classes.input_search}>
          <div className={classes.search}>
            <input type="text" placeholder="Search for Products" />
          </div>
          <div className={classes.search_icon}>
            <img src="https://www.dealshare.in/search_icon.png" alt="error" />
          </div>
        </div>

        <span className={classes.login} onClick={handleClickOpen}>
          Login
        </span>
     
          <Link to="/page">
            <ShoppingCartIcon sx={{ fontSize: "5rem", mt: 2, ml: 20 }} />
          </Link>

     
        <div className={classes['cart_length']}>
        <h1 > {cartLength} </h1>
        </div>
        
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar
              sx={{ color: "green", bgcolor: "white" }}
              src="/broken-image.jpg"
            />
            <h3>Please enter your phone number to login</h3>
          </Grid>

          <p>Mobile Number</p>
          <input sx={{ p: 1 }} type="number" />

          <Button sx={{ ml: 1.5 }} color="success" variant="contained">
            Send OTP
          </Button>
        </DialogContent>
      </Dialog>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box
          sx={{
            width: 300,
            backgroundColor: "green",
            height: 100,
            color: "white",
          }}
          role="presentation"
          onClick={() => setOpenDrawer(false)}
          onKeyDown={() => setOpenDrawer(true)}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <AccountCircleIcon style={{ fontSize: 80 }} />
            <h2>Hello, Login</h2>
          </Grid>
        </Box>
      </Drawer>
    </>
  );
};
export default Navbar;
