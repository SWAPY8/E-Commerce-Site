import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import '../styles/Header.css';

const Header = ({ onCartToggle }) => {
  const { getTotalItems } = useCart();
  
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-section">
            <a href="#" className="logo">Luxe Store</a>
            <div className="tagline">Premium Shopping Experience</div>
          </div>
          <button
            onClick={onCartToggle}
            className="cart-button"
            aria-label="Toggle shopping cart"
          >
            <ShoppingCart size={24} />
            {getTotalItems() > 0 && (
              <span className="cart-badge">
                {getTotalItems()}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;