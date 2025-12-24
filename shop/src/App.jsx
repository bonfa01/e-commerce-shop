import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Archivio from "./pages/Archivio";
import Errore from "./pages/Errore";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/archivio" element={<Archivio />} />
      <Route path="*" element={<Errore />} />
    </Routes>
  );
}