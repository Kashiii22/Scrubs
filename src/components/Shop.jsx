import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer.jsx"
import "./Shop.css";
import Pink from "../components/assets/m3.jpg"; // Adjusted path assuming assets are in src/assets/
import Pink1 from "../components/assets/m9.jpg";
import Pink3 from "../components/assets/b1.jpg";

const Shop = () => {
  return (
  <>
    <div className="collections-page">
      <h1>Collections</h1>
      <div className="collections-grid">
        <Link to="/collections/scrub-sets" className="collection-item">
          <img src={Pink} alt="Scrub Sets" />
          <p>Scrub Sets <span>→</span></p>
        </Link>
        <Link to="/collections/scrub-tops" className="collection-item">
          <img src={Pink1} alt="Scrub Tops" />
          <p>Scrub Tops <span>→</span></p>
        </Link>
        <Link to="/collections/nurses-badges" className="collection-item">
          <img src={Pink3} alt="Nurses Badges" />
          <p>Nurses Badges <span>→</span></p>
        </Link>
      </div>
    </div>
    <Footer/>
  </>
  );
};

export default Shop;