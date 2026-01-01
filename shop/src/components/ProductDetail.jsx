import React, { useState, useEffect } from 'react';
import { ArrowLeft, ShoppingCart, Check, Heart } from 'lucide-react';
import '../styles/ProductDetail.css';

export default function ProductDetails({ product, onBack, onAddToCart, wishlist, toggleWishlist }) {
  // Variant State
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');

  // Reset selection when product changes
  useEffect(() => {
    setSelectedSize(product.sizes?.[0] || '');
    setSelectedColor(product.colors?.[0] || '');
  }, [product]);

  // Calculate price with discount
  const getPrice = () => {
    if (product.discount && product.discount > 0) {
      const discounted = product.price - (product.price * product.discount) / 100;
      return discounted.toFixed(2);
    }
    return product.price.toFixed(2);
  };

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      selectedSize,
      selectedColor
    });
  };

  return (
    <div className="product-details-container">
      <button onClick={onBack} className="back-button">
        <ArrowLeft size={20} />
        Torna allo Shop
      </button>

      <div className="details-wrapper">
        <div className="details-image-section">
          <div className="main-image-wrapper">
            <img 
              src={product.img} 
              alt={product.name} 
              className="details-main-image"
            />
            {product.badge && (
              <div className="product-badge-details">{product.badge}</div>
            )}
            <button 
              className="wishlist-button-details" 
              onClick={() => toggleWishlist(product.id)}
            >
              <Heart 
                className={wishlist[product.id] ? "fill-red-500 text-red-500" : ""} 
                size={24} 
              />
            </button>
          </div>
        </div>

        <div className="details-info-section">
          <h1 className="details-title">{product.name}</h1>
          
          <div className="details-price-section">
            <span className="details-price">${getPrice()}</span>
            {product.discount > 0 && (
              <>
                <span className="details-original-price">${product.price.toFixed(2)}</span>
                <span className="discount-badge">-{product.discount}%</span>
              </>
            )}
          </div>

          {/* Features */}
          {product.features && product.features.length > 0 && (
            <div className="details-section">
              <h3 className="section-title">Caratteristiche</h3>
              <ul className="features-list">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <Check size={16} className="check-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {product.sizes && product.sizes.length > 0 && (
            <div className="variant-section">
              <label className="variant-label">Taglia:</label>
              <div className="variant-options">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`variant-button ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.colors && product.colors.length > 0 && (
            <div className="variant-section">
              <label className="variant-label">Colore:</label>
              <div className="variant-options color-options">
                {product.colors.map(color => (
                  <button
                    key={color}
                    className={`color-button ${selectedColor === color ? 'selected' : ''}`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    onClick={() => setSelectedColor(color)}
                    title={color}
                  >
                    {selectedColor === color && <Check size={16} className="color-check" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button 
            onClick={handleAddToCart}
            className="add-to-cart-button"
          >
            <ShoppingCart size={24} />
            Aggiungi al Carrello
          </button>

          <div className="shipping-info">
            <p>✓ Spedizione gratuita sopra €50</p>
            <p>✓ Reso gratuito entro 30 giorni</p>
          </div>
        </div>
      </div>
    </div>
  );
}