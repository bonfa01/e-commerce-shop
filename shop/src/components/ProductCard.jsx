import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import "../styles/ProductCard.css";

export default function ProductCard({ product, wishlist, toggleWishlist, addToCart, onProductClick }) {
  const getPrice = () => {
    if (product.discount && product.discount > 0) {
      const discounted = product.price - (product.price * product.discount) / 100;
      return discounted.toFixed(2);
    }
    return product.price.toFixed(2);
  };

  // Handler per il click sulla card (esclusi i pulsanti)
  const handleCardClick = (e) => {
    onProductClick();
  };

  // Handler separato per il carrello (previene la propagazione)
  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart();
  };

  // Handler separato per il wishlist (previene la propagazione)
  const handleWishlistClick = (e) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <div className="product-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className="product-img">
        <img src={product.img} alt={product.name} />
        {product.badge && <div className="product-badge">{product.badge}</div>}
        <button className="product-wishlist" onClick={handleWishlistClick}>
          <Heart className={wishlist[product.id] ? "fill-red-500 text-red-500" : ""} size={20} />
        </button>
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="price">
          <span className="price-main">${getPrice()}</span>
          {product.discount > 0 && <span className="original">${product.price.toFixed(2)}</span>}
          <button className="add-cart" onClick={handleAddToCart}>
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}