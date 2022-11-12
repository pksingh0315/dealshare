// import React, { useContext } from "react";
import classes from "./Product.module.css";
import Button from "@mui/material/Button";
import { productList } from "../constant";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
// import { Context } from "../context/Context";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../store/index";
import { Link } from "react-router-dom";
//console.log(cartAction)
const Product = () => {
  const dispatch = useDispatch();
  const counter=useSelector(state=>console.log(state))

  const cartHandler = (item) => {

    dispatch(cartAction.addToCart(item));
  };

  return (
    <Box xs={{ padding: 2 }}>
      <Grid container flexDirection="row">
        {productList.map((ele, index) => {
          return (
            <Grid item xs={12} lg={3} sx={{ padding: 2 }} key={index}>
              <div className={classes.product1}>
                <img src={ele.productImage} alt="error" />
                <h4>{ele.description}</h4>
                <div className={classes.price}>
                  <h3> ₹ {ele.currentPrice}</h3>
                  <h3> ₹ {ele.discount}</h3>
                </div>

                <Grid container justifyContent={"center"}>
                  <Link to="/page" style={{ textDecoration: 'none' }}>
                  <Button sx={{ mb: 2 }} variant="contained" onClick={() => cartHandler(ele)}>
                    buy now
                  </Button>
                  </Link>
                  
                </Grid>
                <Grid container justifyContent={"center"}>
                  <Button variant="outlined" onClick={() => cartHandler(ele)}>
                    Add to cart
                  </Button>
                </Grid>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
export default Product;
