import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer.jsx"; // Adjust path based on your structure
import NurseBadge1 from "../assets/b1.jpg"; // Placeholder image
import NurseBadge2 from "../assets/b2.jpg"; // Placeholder image
import NurseBadge3 from "../assets/b3.jpg"; // Placeholder image
import NurseBadge4 from "../assets/b4.jpg"; // Placeholder image
// import NurseBadge5 from "../assets/nurse-badge-5.jpg"; // Placeholder image
import "./Nurses.css"; // Create this CSS file

const NursesBadgesPage = () => {
  const [sortOption, setSortOption] = useState("Featured");
  const [products, setProducts] = useState([
    {
      id: "1",
      title: "Nurse Badge Reel - Coffee Scrubs and Rubber Gloves" ,
      image: NurseBadge1,
      originalPrice: 19.99,
      discountPrice: 10.99,
      popularity: 3,
    },
    {
      id: "2",
      title: "Nurse Badge Reel - I Love Tiny Humans",
      image: NurseBadge2,
      originalPrice: 29.99,
      discountPrice: 11.99,
      popularity: 2,
    },
    {
      id: "3",
      title:"Nurse Badge Reel - Urine Good Hands",
      image: NurseBadge3,
      originalPrice: 19.99,
      discountPrice: 9.99,
      popularity: 1,
    },
    {
      id: "4",
      title: "Nurse Badge Reel - NICU Crew",
      image: NurseBadge4,
      originalPrice: 19.99,
      discountPrice: 9.99,
      popularity: 4,
    },

  ]);

  const sortProducts = (option) => {
    const sortedProducts = [...products];
    switch (option) {
      case "Best selling":
        sortedProducts.sort((a, b) => b.popularity - a.popularity);
        break;
      case "Featured":
        sortedProducts.sort((a, b) => a.id.localeCompare(b.id));
        break;
      case "Alphabetically, A-Z":
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Alphabetically, Z-A":
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "Price, low to high":
        sortedProducts.sort((a, b) => a.discountPrice - b.discountPrice);
        break;
      case "Price, high to low":
        sortedProducts.sort((a, b) => b.discountPrice - a.discountPrice);
        break;
      case "Date, old to new":
        sortedProducts.sort((a, b) => a.id - b.id);
        break;
      case "Date, new to old":
        sortedProducts.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }
    setProducts(sortedProducts);
  };

  const handleSortChange = (e) => {
    const newSortOption = e.target.value;
    setSortOption(newSortOption);
    sortProducts(newSortOption);
  };

  const productCount = products.length;

  return (
    <div className="collection-page">
      <h1 className="collection-title">Nurses Badge Reels</h1>
      <div className="filter-section">
        <div className="filter-options">
          <span className="filter-label">Filter: </span>
          <select className="filter-dropdown">
            <option>Availability ↓</option>
            <option>Price ↓</option>
          </select>
        </div>
        <div className="sort-section">
          <span className="sort-label">Sort by: </span>
          <select
            className="sort-dropdown"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="Featured">Featured</option>
            <option value="Best selling">Best selling</option>
            <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
            <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
            <option value="Price, low to high">Price, low to high</option>
            <option value="Price, high to low">Price, high to low</option>
            <option value="Date, old to new">Date, old to new</option>
            <option value="Date, new to old">Date, new to old</option>
          </select>
          <span className="product-count">{productCount} products</span>
        </div>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.title.toLowerCase().replace(/\s+/g, "-")}`}
            state={{
              product: {
                title: product.title,
                images: [product.image],
                originalPrice: product.originalPrice,
                discountPrice: product.discountPrice,
                description: `A stylish ${product.title.toLowerCase()} for nurses.`,
              },
            }}
            className="product-card"
          >
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-info">
              {product.originalPrice > product.discountPrice && (
                <span className="sale-label">Sale</span>
              )}
              <p className="product-name">{product.title}</p>
              <p className="price-info">
                <span className="strikethrough-price">${product.originalPrice} AUD</span>
                <span className="discount-price">${product.discountPrice} AUD</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default NursesBadgesPage;