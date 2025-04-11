import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import Footer from "../Footer.jsx";
// Importing images
import BlackScrub from "../assets/m1.jpg";
import PinkScrub from "../assets/m22.jpg";
import FloralScrub from "../assets/m3.jpg";
import PromoImage from "../assets/m7.jpg"
import ScrubImg from "../assets/m8.jpg"
// Mock product data for m22
const dopamineHitProduct = {
  title: "Dopamine Hit Scrub Set",
  images: [PinkScrub],
  rating: 4,
  reviewsCount: 128,
  discountPrice: 49.99,
  originalPrice: 59.99,
  description: "A vibrant pink scrub set designed to boost your mood and comfort during long shifts.",
};

// Mock product data for m3
const tropicalBlissProduct = {
  title: "Tropical Bliss Scrub Set",
  images: [FloralScrub],
  rating: 5,
  reviewsCount: 95,
  discountPrice: 54.99,
  originalPrice: 64.99,
  description: "A floral-patterned scrub set for a refreshing workday.",
};

const ShowProduct = () => {
  return (
    <>
    <div className="show-product-container">
      {/* m1 - Left Side - Non-clickable */}
      <div className="main-image">
        <img src={BlackScrub} alt="Black Scrub Set" />
        <div className="product-info">
          <p>Black Scrub Set</p>
          {/* <p className="strikethrough-price">$100.00 AUD</p> */}
        </div>
      </div>

      {/* m22 & m3 - Right Side - Clickable */}
      <div className="side-images">
        <Link
          to="/product/dopamine-hit-scrub-set"
          state={{ product: dopamineHitProduct }}
        >
          <img src={PinkScrub} alt="Dopamine Hit Scrub Set" />
          <div className="product-info">
            <p className="product-name">{dopamineHitProduct.title}</p>
            <p className="price-info">
              <span className="strikethrough-price">${dopamineHitProduct.originalPrice} AUD</span>
              <span className="discount-price">${dopamineHitProduct.discountPrice} AUD</span>
            </p>
          </div>
        </Link>

        <Link to="/collections/scrub-sets">
          <img src={FloralScrub} alt="Tropical Bliss Scrub Set" />
         <p className="product-name">Scrub Sets →</p>
        </Link>
      </div>
    </div>
    <div className="promo-section">
        <div className="promo-image">
          <img src={PromoImage} alt="Popular Scrub Sets" />
        </div>
        <div className="promo-text">
          <h2>Our most popular Dino Magic and Jungle Bloom is back in stock!!!</h2>
        </div>
      </div>

      {/* Footer (at the bottom) */}
      <div className="scrub-img">
          <img src={ScrubImg} alt="Scrub Set with Text" />
          <div className="scrub-text">
            <p>Have you seen our newest Scrub Set 'Dopamine Hit'</p>
          </div>
        </div>
      <Footer />
    
</>
  );
};

export default ShowProduct;