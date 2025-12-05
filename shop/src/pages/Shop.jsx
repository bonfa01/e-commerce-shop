import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

import "../styles/Shop.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductsGrid from "../components/ProductsGrid";
import Newsletter from "../components/Newsletter";

export default function SalesFlow() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(0);
  const [wishlist, setWishlist] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  // Carica i prodotti da Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, "products");
      const productsSnapshot = await getDocs(productsCollection);
      const productsList = productsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productsList);
    };

    fetchProducts();
  }, []);

  const toggleWishlist = (id) => setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  const addToCart = (id) => setCart(cart + 1);

  // Filtra i prodotti in base al searchTerm
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="salesflow-container">
      <Header />

      {/* SEARCH BAR + ACTIONS */}
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
          <button className="favorites-btn">❤️ Preferiti</button>
          <button className="cart-btn">
            🛒 Carrello
            <span className="cart-count">{cart}</span>
          </button>
        </div>
      </div>

      {/* PRODUCTS GRID */}
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
