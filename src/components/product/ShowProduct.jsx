import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import Footer from "../Footer"; // Adjusted path
import BlackScrub from "../assets/m1.jpg";
import PinkScrub from "../assets/m22.jpg";
import FloralScrub from "../assets/m3.jpg";
import PromoImage from "../assets/m7.jpg";
import ScrubImg from "../assets/m8.jpg"; // Using ScrubImg as a placeholder for Me
import Espresso from "../assets/m9.jpg";
import Happy from "../assets/m10.jpg";
import Why from "../assets/m11.jpg";
import Kid from "../assets/m12.jpg";
import Me from "../assets/m13.jpg"
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

const espressoTop = {
  title: "Espresso Yourself Scrub Top",
  images: [Espresso],
  rating: 5,
  reviewsCount: 95,
  discountPrice: 54.99,
  originalPrice: 64.99,
  description: "It’s more than just a fun design—it’s a way to make kids feel safe, comfortable, and truly happy.",
};

const beeHappy = {
  title: "Just Bee Happy Scrub Top",
  images: [Happy],
  rating: 5,
  reviewsCount: 95,
  discountPrice: 54.99,
  originalPrice: 64.99,
  description: "It’s more than just a fun design.",
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
            <div className="product-info">
              <p className="product-name">Scrub Sets →</p>
            </div>
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

      {/* Scrub Image with Overlapping Text */}
      <div className="scrub-img">
        <img src={ScrubImg} alt="Scrub Set with Text" />
        <div className="scrub-text">
          <p>Have you seen our newest Scrub Set 'Dopamine Hit'</p>
        </div>
      </div>

      {/* Product Container for Horizontal Alignment */}
      <div className="product-container">
        {/* Espresso Section - Clickable */}
        <div className="product-section">
          <Link
            to="/product/espresso-yourself-scrub-top"
            state={{ product: espressoTop }}
          >
            <img src={Espresso} alt="Espresso Yourself Scrub Top" />
            <div className="product-info">
              <p className="product-name">{espressoTop.title}</p>
              <p className="price-info">
                <span className="strikethrough-price">${espressoTop.originalPrice} AUD</span>
                <span className="discount-price">${espressoTop.discountPrice} AUD</span>
              </p>
            </div>
          </Link>
        </div>

        {/* Bee Happy Section - Clickable */}
        <div className="product-section">
          <Link
            to="/product/just-bee-happy-scrub-top"
            state={{ product: beeHappy }}
          >
            <img src={Happy} alt="Just Bee Happy Scrub Top" />
            <div className="product-info">
              <p className="product-name">{beeHappy.title}</p>
              <p className="price-info">
                <span className="strikethrough-price">${beeHappy.originalPrice} AUD</span>
                <span className="discount-price">${beeHappy.discountPrice} AUD</span>
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Our Why Section - Image on Left, Text on Right */}
      <div className="our-why">
        <div className="our-image">
          <img src={Why} alt="Our Why" />
        </div>
        <div className="why-text">
          <h3>Our Why!</h3>
          <p>
            A recent study about <b>"The Effect of Themed Pediatric Environments on Children's Stress Levels"</b> 
            highlights the importance of the environment the child is in.
            This study explored the impact of themed environments in pediatric wards,
            such as those featuring familiar characters and superheroes, on children's stress
            levels. It found a significant reduction in anxiety among children exposed to these environments.
            <br />
            <br />
            Reference: Journal of Pediatric Nursing, Volume 50, 2020, Pages 90-98.
          </p>
        </div>
      </div>

      {/* Our Kid Section - Image on Right, Text on Left */}
      <div className="our-kid">
        <div className="kid-text">
          <h3>Bringing Smiles Through Care</h3>
          <p>
            Our journey began after spending time at Royal Children's Hospital for our youngest Leo,<br></br> where we witnessed firsthand the
            magic that healthcare professionals bring to their work.<br></br> 
            Whether in pediatric wards, emergency rooms, or
            specialised units, these healthcare
            heroes<br></br> truly work magic to heal children, bringing joy and comfort to their patients' lives.
            Our scrubs <br></br>are designed to make a difference in the lives of both medical professionals and 
            their patients, <br></br>paying tribute to these heroes with designs that uplift spirits and spread positivity in healthcare settings.
          </p>
        </div>
        <div className="our-image1">
          <img src={Kid} alt="Our Kid" />
        </div>
      </div>

      {/* New Scrub Image with Centered Text and Review Link */}
      <div className="scrub-img review-section">
        <img src={Me} alt="Review Invitation" />
        <div className="scrub-text">
          <p>We want to hear from you...<br /><Link to="product/dopamine-hit-scrub-set"
            state={{ product: dopamineHitProduct }}>Leave us a review</Link></p>
        </div>
      </div>

      {/* Footer (at the bottom) */}
      <Footer />
    </>
  );
};

export default ShowProduct;