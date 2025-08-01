import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Contact from "./components/Contact";
import ProductListing from './components/ProductListing';
import CartSidebar from './components/CartSidebar';
import './styles/App.css';

function App() {
  const [showCart, setShowCart] = useState(false);
  
  const toggleCart = () => {
    setShowCart(!showCart);
  };
  
  return (
    <CartProvider>
      <div className="app">
        <Header onCartToggle={toggleCart} />
        
        <main className="main-content">
          <div className="container">
            <div className="hero-section">
              <h1 className="hero-title">
                Discover Premium Products
              </h1>
              <p className="hero-subtitle">
                Explore our curated collection of high-quality products at unbeatable prices. 
                Experience luxury shopping with seamless delivery and exceptional customer service.
              </p>
            </div>
            
            <ProductListing />
          </div>
        </main>
        
        <CartSidebar
          isOpen={showCart}
          onClose={() => setShowCart(false)}
        />
      </div>
    </CartProvider>
  );
}

export default App;