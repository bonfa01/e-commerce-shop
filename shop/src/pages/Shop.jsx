import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";

// Import dei componenti
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Newsletter from "../components/Newsletter.jsx";
import ProductsGrid from "../components/ProductsGrid.jsx";
import Carrello from "../components/Carrello.jsx";

// Import icone e stili
import { Search, Heart, ShoppingCart } from "lucide-react";
import "../styles/Shop.css";

// IMPORTANTE: Importiamo l'hook del carrello globale con la "C" maiuscola
import { useCart } from "../context/CartContext";

export default function Shop() {
  // 1. STATO LOCALE (Sempre per primi)
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 2. CONTEXT HOOK (Punto critico dell'errore precedente)
  // Estrarre cartCount qui permette al badge dell'icona di aggiornarsi subito
  const { 
    cartItems, 
    addToCart, 
    onUpdateQuantity, 
    onRemoveItem, 
    cartCount } = useCart();

  // 3. EFFETTI (Sempre dopo lo stato e il context)
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

  // Gestione Wishlist
  const toggleWishlist = (id) => setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));

  // Filtro ricerca
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="salesflow-container">
      <Header />

      {/* Il Carrello Overlay: sincronizzato con il Context globale */}
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
            placeholder="Cerca prodotti Panda..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="actions-bar">
          <button className="favorites-btn">
            <Heart size={20} />
            <span>Preferiti</span>
          </button>
          
          <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
            <div className="cart-icon-wrapper">
              <ShoppingCart size={20} />
              {/* Il badge si aggiorna istantaneamente perché usa cartCount dal Context */}
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </div>
            <span>Carrello</span>
          </button>
        </div>
      </div>

      <ProductsGrid
        products={filteredProducts}
        wishlist={wishlist}
        toggleWishlist={toggleWishlist}
        addToCart={addToCart} 
      />

      <Newsletter />
      <Footer />
    </div>
  );
}