import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Product from "./Components/Product";
import SignIn from "./Components/SignUp";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import SignUp from "./Components/SignUp";
function App() {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
