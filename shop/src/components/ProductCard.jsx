import React from 'react';
import "../styles/ProductCard.css";

export default function ProductCard({ product, onProductClick }) {
  
  const getPrice = () => {
    if (product.discount && product.discount > 0) {
      const discounted = product.price - (product.price * product.discount) / 100;
      return discounted.toFixed(2);
    }
    return product.price.toFixed(2);
  };

  const handleCardClick = (e) => {
    onProductClick();
  };

  return (
    <div className="product-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className="product-img">
        <img src={product.img} alt={product.name} />
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="price">
          <span className="price-main">${getPrice()}</span>
          {product.discount > 0 && <span className="original">${product.price}</span>}
        </div>
      </div>
    </div>
  );
}