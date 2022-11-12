import { Dialog, DialogContent } from "@mui/material";
import React, { useState } from "react";
import classes from "./Address.module.css";
const Address = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  const [open, setOpen] = React.useState(false);
  const submitHandler = (event) => {
    event.preventDefault();
    setOpen(true);
    if (
      name.lenght === 0 ||
      mobile.length === 0 ||
      address.length === 0 ||
      pin.length === 0
    ) {
      setError(true);
    }
    setName('')
    setAddress('')
    setMobile("")
    setPin('')
    setError(false)
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {error && (
        <h1 style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
          {" "}
          Please Fill All Data !
        </h1>
      )}
      <form className={classes.box}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="number"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(event) => setMobile(event.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
        <input
          type="number"
          placeholder="Pin Code"
          value={pin}
          onChange={(event) => setPin(event.target.value)}
        />
        <button onClick={submitHandler}>Proceed To Pay</button>
      </form>
      {!error && (
        <Dialog open={open} onClose={handleClose}>
          <DialogContent >
            <img
              src="https://egsgroup.files.wordpress.com/2017/02/payment-successful.png"
              alt="Error"
            />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Address;
