import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer.jsx"; // Adjusted path assuming Footer.jsx is in src/components/

// Importing additional images for the collection
import ScrubSet1 from "../assets/m3.jpg"; // FloralScrub
import ScrubSet2 from "../assets/m22.jpg"; // PinkScrub
import ScrubSet3 from "../assets/m4.jpg"; // Ocean Breeze
import ScrubSet4 from "../assets/m5.jpg"; // Sunny Day

const CollectionPage = () => {
  // State for sort option and collection data
  const [sortOption, setSortOption] = useState("Best selling");
  const [products, setProducts] = useState([
    {
      id: "1",
      title: "Tropical Bliss Scrub Set",
      image: ScrubSet1,
      originalPrice: 64.99,
      discountPrice: 54.99,
      popularity: 4, // Dummy popularity score for "Best selling"
    },
    {
      id: "2",
      title: "Dopamine Hit Scrub Set",
      image: ScrubSet2,
      originalPrice: 59.99,
      discountPrice: 49.99,
      popularity: 2, // Dummy popularity score
    },
    {
      id: "3",
      title: "Ocean Breeze Scrub Set",
      image: ScrubSet3,
      originalPrice: 69.99,
      discountPrice: 59.99,
      popularity: 3, // Dummy popularity score
    },
    {
      id: "4",
      title: "Sunny Day Scrub Set",
      image: ScrubSet4,
      originalPrice: 74.99,
      discountPrice: 64.99,
      popularity: 1, // Dummy popularity score
    },
  ]);

  // Sorting function
  const sortProducts = (option) => {
    const sortedProducts = [...products]; // Create a copy to avoid mutating state directly
    switch (option) {
      case "Best selling":
        sortedProducts.sort((a, b) => b.popularity - a.popularity); // Sort by popularity (descending)
        break;
      case "Featured":
        // Simulate featured items (e.g., based on ID for simplicity)
        sortedProducts.sort((a, b) => a.id.localeCompare(b.id)); // Default to ID order
        break;
      case "Alphabetically, A-Z":
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title)); // Sort by title A-Z
        break;
      case "Alphabetically, Z-A":
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title)); // Sort by title Z-A
        break;
      case "Price, low to high":
        sortedProducts.sort((a, b) => a.discountPrice - b.discountPrice); // Sort by discount price
        break;
      case "Price, high to low":
        sortedProducts.sort((a, b) => b.discountPrice - a.discountPrice); // Sort by discount price
        break;
      case "Date, old to new":
        sortedProducts.sort((a, b) => a.id - b.id); // Sort by ID as proxy for date
        break;
      case "Date, new to old":
        sortedProducts.sort((a, b) => b.id - a.id); // Sort by ID as proxy for date
        break;
      default:
        break;
    }
    setProducts(sortedProducts); // Update state with sorted array
  };

  // Handle sort change
  const handleSortChange = (e) => {
    const newSortOption = e.target.value;
    setSortOption(newSortOption);
    sortProducts(newSortOption); // Trigger sorting
  };

  // Product count
  const productCount = products.length;

  return (
    <div className="collection-page">
      <h1 className="collection-title">Scrub Sets</h1>
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
            onChange={handleSortChange} // Updated to trigger sorting
          >
            <option value="Best selling">Best selling</option>
            <option value="Featured">Featured</option>
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
                description: `A stylish ${product.title.toLowerCase()} for professionals.`,
              },
            }}
            className="product-card"
          >
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-info">
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

export default CollectionPage;