// import axios from "axios";
// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Verifyemail from "./pages/verifyemail";
import Login from "./pages/login";
import Registration from "./pages/registration";
import Customerlist from "./pages/admin/customerlist";
import Adminheader from "./pages/admin/adminheader";
import Handleproducts from "./pages/admin/products";
import Checkmail from "./pages/checkmail";
import Cart from "./pages/cart/cart";
import Dashboard from "./pages/userdashboard/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/verifyemail" element={<Verifyemail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/checkmail" element={<Checkmail />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/verifyemail" element={<Verifyemail />} />
      <Route path="/customerlist" element={<Customerlist />} />
      <Route path="/adminheader" element={<Adminheader />} />
      <Route path="/handleproducts" element={<Handleproducts />} />
    </Routes>
    // <div className="App">
    //   <Topnav />
    //   <div className="justify-center">
    //     <Intro />
    //     {/* <Productdesc /> */}

    // {/* <div className="main">
    //   {products &&
    //     products.length > 0 &&
    //     products.map((product) => (
    //       <Product key={product.id} product={product} />
    //     ))}
    // </div> */}

    //   </div>
    // </div>
  );
}

export default App;
