import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("pandaCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("pandaCart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ AGGIUNTA AL CARRELLO CON VARIANTI
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item =>
        item.id === product.id &&
        item.selectedSize === product.selectedSize &&
        item.selectedColor === product.selectedColor
      );

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id &&
          item.selectedSize === product.selectedSize &&
          item.selectedColor === product.selectedColor
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prevItems,
        {
          id: product.id,
          name: product.name,
          image: product.img,
          price: Number(product.price),
          selectedSize: product.selectedSize || null,
          selectedColor: product.selectedColor || null,
          quantity: 1
        }
      ];
    });
  };

  // ✅ aggiorna quantità PER VARIANTE
  const onUpdateQuantity = (itemToUpdate, newQuantity) => {
    if (newQuantity <= 0) {
      onRemoveItem(itemToUpdate);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemToUpdate.id &&
        item.selectedSize === itemToUpdate.selectedSize &&
        item.selectedColor === itemToUpdate.selectedColor
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // ✅ rimuove SOLO quella variante
  const onRemoveItem = (itemToRemove) => {
    setCartItems(prevItems =>
      prevItems.filter(item =>
        !(
          item.id === itemToRemove.id &&
          item.selectedSize === itemToRemove.selectedSize &&
          item.selectedColor === itemToRemove.selectedColor
        )
      )
    );
  };

  const cartCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        onUpdateQuantity,
        onRemoveItem,
        cartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
