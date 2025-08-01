import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import '../styles/CartSidebar.css';

const CartSidebar = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  
  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={onClose} />}
      
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <div className="cart-title-section">
            <ShoppingBag className="cart-icon" size={24} />
            <h2 className="cart-title">Shopping Cart</h2>
          </div>
          <button
            onClick={onClose}
            className="cart-close-button"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="clear-cart-button"
            >
              <Trash2 size={14} />
              Clear all items
            </button>
          )}
        </div>
        
        <div className="cart-content">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <ShoppingBag size={64} className="empty-cart-icon" />
              <p className="empty-cart-title">Your cart is empty</p>
              <p className="empty-cart-subtitle">Add some products to get started!</p>
            </div>
          ) : (
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-content">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="cart-item-image"
                    />
                    <div className="cart-item-details">
                      <h3 className="cart-item-title">
                        {item.title}
                      </h3>
                      <p className="cart-item-price">
                        Rs {Math.round(item.price * 83)}
                      </p>
                      <div className="cart-item-controls">
                        <div className="quantity-controls">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="quantity-button"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="quantity-display">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="quantity-button"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="remove-item-button"
                          aria-label="Remove item"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="cart-item-subtotal">
                        Subtotal: Rs {(Math.round(item.price * 83)* item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span className="cart-total-label">
                Total:
              </span>
              <span className="cart-total-amount">
                Rs {getTotalPrice()}
              </span>
            </div>
            <button className="checkout-button">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;