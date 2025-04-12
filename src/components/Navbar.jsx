import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AppContext from "../context/AppContext";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const { setFilteredData, products, logout, isAuthenticated, cart } =
    useContext(AppContext);

  const filterbyCategory = (cat) => {
    setFilteredData(
      products.filter(
        (data) => data.category.toLowerCase() === cat.toLowerCase()
      )
    );
  };

  const filterbyPrice = (price) => {
    setFilteredData(products.filter((data) => data.price >= price));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/product/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <div className="nav sticky-top">
      <div className="nav_bar d-flex justify-content-between align-items-center px-4 py-2">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img
              src="/logo.jpg"
              alt="Logo"
              style={{ height: "80px", objectFit: "contain" }}
            />
          </Link>
        </div>

        {/* Center links */}
        <div className="navbar-links d-flex gap-4">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Shop All</Link> {/* Updated to /products */}
          <Link to="/contact-us" className="nav-link">Contact Us</Link>
        </div>

        {/* Right Actions */}
        <div className="navbar-actions d-flex align-items-center gap-3" style={{ cursor: "pointer" }}>
          {/* Country Dropdown */}
          <select className="country-dropdown">
            <option value="australia">Australia | AUD $</option>
            <option value="austria">Austria | EUR €</option>
            <option value="belgium">Belgium | EUR €</option>
            <option value="canada">Canada | CAD $</option>
            <option value="denmark">Denmark | DKK kr.</option>
            <option value="denmark">England | DKK kr.</option>
          </select>

          {/* Search Bar */}
          <span
            className="material-symbols-outlined search-icon"
            onClick={() => navigate(`/product/search/${searchTerm}`)}
            style={{ cursor: "pointer" }}
          >
            search
          </span>

          {/* Cart & Auth Buttons */}
          {isAuthenticated ? (
            <>
              <Link
                to="/cart"
                className="btn btn-outline-primary position-relative"
              >
                <span className="material-symbols-outlined">shopping_cart</span>
                {cart?.items?.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.items.length}
                  </span>
                )}
              </Link>
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register" className="btn btn-outline-info">Register</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;