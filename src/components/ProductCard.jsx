import React from 'react';
import { Eye, Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import '../styles/ProductCard.css';

const ProductCard = ({ product, onViewDetails }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product);
  };
  
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
          loading="lazy"
        />
      </div>
      <div className="product-content">
        <div className="product-category">
          {product.category}
        </div>
        <h3 className="product-title">{product.title}</h3>
        <div className="product-rating">
          <div className="rating-stars">
            <Star className="star-icon" />
            <span className="rating-text">
              {product.rating?.rate || 0}
            </span>
          </div>
          <span className="rating-count">
            ({product.rating?.count || 0})
          </span>
        </div>
        <p className="product-price">
          Rs {Math.round(product.price * 83)}
        </p>
        <div className="product-actions">
          <button
            onClick={() => onViewDetails(product)}
            className="action-button details-button"
          >
            <Eye size={16} />
            Details
          </button>
          <button
            onClick={handleAddToCart}
            className="action-button add-to-cart-button"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;