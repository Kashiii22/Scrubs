import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './ProductDetails.css'; // import custom CSS

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state?.product;

  const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || 'https://via.placeholder.com/500');
  const [selectedSize, setSelectedSize] = useState('Extra Small');
  const [quantity, setQuantity] = useState(1);

  const sizes = ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large', 'XXL'];

  if (!product) return <div className="not-found">Product not found</div>;

  return (
    <div className="product-details-container">
      <div className="image-section">
        <img src={selectedImage} alt="main" className="main-image" />
        <div className="thumbnail-column">
          {(product.images || []).slice(0, 3).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`thumb-${idx}`}
              className={`thumbnail ${selectedImage === img ? 'selected' : ''}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      <div className="info-section">
        <h1 className="product-title">{product.title}</h1>
        <div className="product-rating">
          {Array.from({ length: product.rating }).map((_, idx) => (
            <FaStar key={idx} className="star-icon" />
          ))}
          <span className="review-count">({product.reviewsCount} reviews)</span>
        </div>

        <div className="price-section">
          <span className="discount-price">${product.discountPrice} AUD</span>
          <span className="original-price">${product.originalPrice} AUD</span>
        </div>

        <div className="size-section">
          <h4>Size</h4>
          <div className="size-buttons">
            {sizes.map((size) => (
              <button
                key={size}
                className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="quantity-section">
          <h4>Quantity</h4>
          <div className="quantity-buttons">
            <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
        </div>

        <div className="payment-section">
          <h4>Payment Option</h4>
          <label>
            <input type="radio" name="payment" defaultChecked /> Full Payment
          </label>
        </div>

        <button className="preorder-button">Pre Order</button>
        <div className="preorder-note">
          These items are pre-order, they will be sent out by the end of April
        </div>

        <div className="accordions">
          <details>
            <summary>Description</summary>
            <p>{product.description}</p>
          </details>
          <details>
            <summary>Size Guide</summary>
            <p>Size guide info here...</p>
          </details>
          <details>
            <summary>Details and Fit</summary>
            <p>Details and fit info...</p>
          </details>
          <details>
            <summary>Material and Care</summary>
            <p>Material and care info...</p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

