import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; 
import "../styles/Header.css";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="header-nav">
        <Link to="/" className={`nav-link ${isActive("/")}`}>Home</Link>
        <Link to="/about" className={`nav-link ${isActive("/about")}`}>Chi Siamo</Link>
        <Link to="/shop" className={`nav-link ${isActive("/shop")}`}>Shop</Link>
        <Link to="/archivio" className={`nav-link ${isActive("/archivio")}`}>Archivio</Link>
      </nav>

      <button className="burger-btn" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
        {mobileNavOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div className={`mobile-nav ${mobileNavOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMobileNavOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMobileNavOpen(false)}>Chi Siamo</Link>
        <Link to="/shop" onClick={() => setMobileNavOpen(false)}>Shop</Link>
        <Link to="/archivio" onClick={() => setMobileNavOpen(false)}>Archivio</Link>
      </div>
    </header>
  );
}