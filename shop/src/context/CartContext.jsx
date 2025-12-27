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

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prevItems,
        {
          ...product,
          quantity: 1,
          image: product.img,        // ✔️ coerente con Firestore
          price: Number(product.price) // ✔️ evita NaN
        }
      ];
    });
  };

  const onUpdateQuantity = (itemToUpdate, newQuantity) => {
    if (newQuantity <= 0) {
      onRemoveItem(itemToUpdate);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemToUpdate.id
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const onRemoveItem = (itemToRemove) => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.id !== itemToRemove.id)
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

// ✅ UNICO hook esportato
export const useCart = () => useContext(CartContext);
