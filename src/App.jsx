import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ShowProduct from "./components/product/ShowProduct";
import ProductDetail from "./components/product/ProductDetail";
import SearchProduct from "./components/product/SearchProduct";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import Profile from "./components/user/Profile";
import Cart from "./components/Cart";
import Address from "./components/Address";
import Checkout from "./components/Checkout";
import OrderConfirmation from "./components/OrderConfirmation";
import Hero from "./components/Hero"; // 👈 import the hero section
import CollectionPage from "./components/product/CollectionProduct";
import ContactUsPage from "./components/ContactUs.jsx"
import Shop from "./components/Shop.jsx";
import CollectionTop from "./components/product/CollectionTop.jsx";
import NursesBadge from "./components/product/NursesBadgesPage.jsx"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TestHome = () => <h1>Home Route Works!</h1>;
const TestProducts = () => <h1>Products Route Works!</h1>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero /> {/* 👈 Add it here, just below Navbar */}
      <ToastContainer />
      <Routes>
      {/* <Route path="/" element={<TestHome />} /> */}
      {/* <Route path="/" element={<ShowProduct />} /> */}
<Route path="/products" element={<Shop />} />
<Route path="/contact-us" element={<ContactUsPage />} />
  <Route path="/" element={<ShowProduct />} /> 👈 Add this line
  <Route path="/collections/scrub-tops" element={<CollectionTop/>}/>
  {/* <Route path="/products" element={<ShowProduct />} /> */}
  <Route path="/product/search/:term" element={<SearchProduct />} />
  <Route path="/product/:id" element={<ProductDetail />} />
  <Route path ="/collections/nurses-badges" element ={<NursesBadge/>}/>
  <Route path="/collections/scrub-sets" element={<CollectionPage/>}/>
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/shipping" element={<Address />} />
  <Route path="/checkout" element={<Checkout />} />
  <Route path="/orderconfirmation" element={<OrderConfirmation />} />
</Routes>
    </Router>
  );
};

export default App;
