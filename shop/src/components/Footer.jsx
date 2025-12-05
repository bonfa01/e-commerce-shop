import "../styles/Footer.css";
import { ShoppingCart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h3><ShoppingCart className="w-4 h-4" /> Pandino SHOP</h3>
          <p>The best e-commerce platform for your shopping needs.</p>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping</li>
            <li>Returns</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2025 Pandino SHOP. All rights reserved.
      </div>
    </footer>
  );
}
