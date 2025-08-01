import React, { useState, useEffect } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import '../styles/ProductListing.css';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://fakestoreapi.com/products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);
  
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };
  
  if (loading) {
    return (
      <div className="loading-container">
        <Loader2 className="loading-spinner animate-spin" size={48} />
        <p className="loading-text">Loading amazing products...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="error-container">
        <AlertCircle className="error-icon" size={48} />
        <p className="error-message">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="retry-button"
        >
          Try Again
        </button>
      </div>
    );
  }
  
  return (
    <div className="product-listing-container">
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
      
      <ProductDetailModal
        product={selectedProduct}
        isOpen={showModal}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ProductListing;