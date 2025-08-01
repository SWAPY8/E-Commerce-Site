import React from 'react';
import { X, Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import '../styles/ProductModal.css';

const ProductDetailModal = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  
  if (!isOpen || !product) return null;
  
  const handleAddToCart = () => {
    addToCart(product);
  };
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Product Details</h2>
          <button
            onClick={onClose}
            className="close-button"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="modal-body">
          <div className="product-details-grid">
            <div className="product-image-section">
              <div className="product-modal-image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-modal-image"
                />
              </div>
            </div>
            
            <div className="product-info-section">
              <div className="product-modal-category">
                {product.category}
              </div>
              
              <h1 className="product-modal-title">
                {product.title}
              </h1>
              
              <div className="product-modal-rating">
                <div className="modal-rating-stars">
                  <Star className="modal-star-icon" />
                  <span className="modal-rating-text">
                    {product.rating?.rate || 0}
                  </span>
                </div>
                <span className="modal-rating-count">
                  {product.rating?.count || 0} reviews
                </span>
              </div>
              
              <div className="product-modal-price">
                <p className="modal-price-text">
                  RS {product.price}
                </p>
              </div>
              
              <div className="product-modal-description">
                <h3 className="description-title">Description</h3>
                <p className="description-text">
                  {product.description}
                </p>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="modal-add-to-cart"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;