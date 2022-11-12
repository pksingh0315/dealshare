import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Product from "./component/Product";
import ItemList from "./component/UI/ItemList";
import Address from "./pages/Address";

import CartItem from "./pages/CartItem";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
     
        <Route path="/" element={<Product />} />
        <Route path="/" element={<ItemList />} />
        <Route path="/page" element={<CartItem />} />
        <Route path="/address"element={<Address/>}/>
      </Routes>
    </>
  );
};
export default App;
