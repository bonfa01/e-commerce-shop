import React from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import "../styles/Carrello.css";

export const Carrello = ({ 
    isOpen, 
    onClose, 
    cartItems = [], 
    onUpdateQuantity, 
    onRemoveItem 
  }) => {
  
  // Usiamo Number() per evitare errori NaN se il prezzo arriva come stringa
  const total = cartItems.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    return sum + (price * item.quantity);
  }, 0);

  if (!isOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-drawer">
        <div className="cart-header">
          <div className="cart-header-title">
            <ShoppingBag size={24} />
            <h2>Il tuo Carrello</h2>
          </div>
          <button onClick={onClose} className="close-btn">
            <X size={24} />
          </button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Il tuo carrello è vuoto.</p>
            </div>
          ) : (
            <div className="cart-items">
              {cartItems.map((item) => {
                // Gestione fallback per l'immagine: prova 'image' poi 'img' (da Firestore)
                const itemImg = item.image || item.img;
                const itemPrice = Number(item.price) || 0;

                return (
                  <div key={`${item.id}-${item.selectedSize || ''}-${item.selectedColor || ''}`} className="cart-item">
                    <img src={itemImg} alt={item.name} className="cart-item-img" />
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      {(item.selectedSize || item.selectedColor) && (
                        <p className="cart-item-details">
                          {item.selectedSize && `Taglia: ${item.selectedSize}`} 
                          {item.selectedColor && ` • Colore: ${item.selectedColor}`}
                        </p>
                      )}
                      <div className="cart-item-controls">
                        <div className="quantity-selector">
                          <button onClick={() => onUpdateQuantity(item, item.quantity - 1)}>
                            <Minus size={14} />
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => onUpdateQuantity(item, item.quantity + 1)}>
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="cart-item-price">
                          €{(itemPrice * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <button 
                      className="remove-item-btn" 
                      onClick={() => onRemoveItem(item)}
                      title="Rimuovi"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Totale</span>
              <span>€{total.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">
              Procedi all'ordine
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrello;