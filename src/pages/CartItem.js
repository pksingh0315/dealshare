import React from "react";
import classes from "./CartItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { cartAction } from "../store/index";
import { Link } from "react-router-dom";
//console.log(cartAction)

const CartItem = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const price = useSelector((state) => state.totalPrice);


  const removeHandler = (item) => {
    dispatch(cartAction.removeItem(item));
    //console.log(item)
  };
  const decreamentHandler=(item)=>{
    dispatch(cartAction.decrementQuantity(item))
    console.log(item)
  }
  return (
    <>
      
      <div>
        {cartData.map((ele, index) => {
          
          return (
            <div key={index} className={classes.cart}>
              <img src={ele.productImage} alt="Error" />
              <div className={classes.cart1}>
                <p style={{ fontSize: "1.5rem", color: "teal" }}>
                  {ele.description}
                </p>
                <h2 style={{ margin: "1rem 0rem 1rem 1rem ", color: "red" }}>
                  ₹ {ele.currentPrice}/ Item
                </h2>
                <h2 style={{ margin: "1rem 0rem 2rem 1rem ", color: "green" }}>
                  Total Item Price = ₹ {ele.price}
                </h2>
                <div>
                  <button
                    style={{ fontSize: "3rem", padding: "0rem 3rem 0rem 3rem" }}
                    onClick={()=>decreamentHandler(ele)}
                  >
                    -
                  </button>
                  <span>{ele.quantity}</span>
                  <button
                    style={{ fontSize: "3rem", padding: "0rem 3rem 0rem 3rem" }}
                    onClick={()=>dispatch(cartAction.addToCart(ele))}
                  >
                    +
                  </button>
                  <Button
                    sx={{ ml: 2, mb: 1.5 }}
                    variant="contained"
                    onClick={() => removeHandler(ele)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            
            </div>
            
          );
        })}
      </div>
      <div className={classes.cart2}>
      <h3> Order Summary</h3>
      <h4>Total amount to Pay = <strong >₹ {price}</strong></h4>
      <Link to="/address" style={{textDecoration:'none'}}>
      <div className={classes['buy_now']} >Buy Now</div>
      </Link>
      
      <Link to="/" style={{textDecoration:'none'}}>
      <div className={classes['countinue_shopping']}>Countinue Shopping</div>
      </Link>
    
      </div>
    </>
  );
};

export default CartItem;
