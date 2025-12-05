import { useState } from "react";
import { Menu, X } from "lucide-react";
import "../styles/Header.css";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <img
            src="https://www.carsized.com/resources/fiat/panda/h3-4x4/1991/sl_260097096_fiat-panda-1991-side-view_4x.png"
            alt="Logo"
            className="logo-img"
          />
          <h1>Pandino SHOP</h1>
        </div>

        <nav className="header-nav">
          <a href="#">Home</a>
          <a href="#">Chi Siamo</a>
          <a href="#">Shop</a>
          <a href="#">Archivio</a>
        </nav>

        <button className="burger-btn" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
          {mobileNavOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileNavOpen && (
        <div className="mobile-nav">
          <a href="#">Home</a>
          <a href="#">Chi Siamo</a>
          <a href="#">Shop</a>
          <a href="#">Archivio</a>
        </div>
      )}
    </header>
  );
}
