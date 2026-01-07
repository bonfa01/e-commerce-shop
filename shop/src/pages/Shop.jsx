import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";
import { Search, Heart, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Newsletter from "../components/Newsletter.jsx";
import ProductsGrid from "../components/ProductsGrid.jsx";
import Carrello from "../components/Carrello.jsx";
import ProductDetails from "../components/ProductDetail.jsx";
import "../styles/Shop.css";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); 

  const {
    cartItems,
    addToCart,
    onUpdateQuantity,
    onRemoveItem,
    cartCount
  } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products");
        const productsSnapshot = await getDocs(productsCollection);
        const productsList = productsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsList);
      } catch (error) {
        console.error("Errore nel caricamento prodotti:", error);
      }
    };
    fetchProducts();
  }, []);


  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBackToShop = () => {
    setSelectedProduct(null);
  };


  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  if (selectedProduct) {
    return (
      <div className="salesflow-container">
        <Header />

        <Carrello
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={onUpdateQuantity}
          onRemoveItem={onRemoveItem}
        />

        <ProductDetails
           product={selectedProduct}
           onBack={handleBackToShop}
           onAddToCart={addToCart}
           cartCount={cartCount}          
           onOpenCart={() => setIsCartOpen(true)}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="salesflow-container">
      <Header />

      <Carrello
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={onUpdateQuantity}
        onRemoveItem={onRemoveItem}
      />

      <div className="search-bar">
        <div className="search-wrapper">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Cerca prodotti..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="actions-bar">
          <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
            <div className="cart-icon-wrapper">
              <ShoppingCart size={20} />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </div>
            <span>Carrello</span>
          </button>
        </div>
      </div>

      <ProductsGrid
        products={filteredProducts}
        onProductClick={handleProductClick} 
      />

      <Newsletter />
      <Footer />
    </div>
  );
}