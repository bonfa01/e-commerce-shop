import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Archivio from "./pages/Archivio";
import Errore from "./pages/Errore";
import Checkout from "./pages/Checkout.jsx";
import { CartProvider } from "./context/CartContext.jsx";

export default function App() {
  return (
  <CartProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/archivio" element={<Archivio />} />

      <Route path="/checkout" element={<Checkout />} />

      <Route path="*" element={<Errore />} />
    </Routes>
  </CartProvider>
  );
}