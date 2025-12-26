import "../styles/Footer.css";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h3> Pandino </h3>
          <p>vienici a trovare pure tu</p>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li>contatti</li>
            <li>dove siamo</li>
            <li>privacy</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>seguici</h4>
          <ul>
            <li><a href="https://www.instagram.com/pandaapandino/" target="_blank">instagram</a></li>
            <li><a href="https://www.facebook.com/pandaapandino" target="blank">facebook</a></li>
            <li><a href="https://www.youtube.com/@pandaapandino3608" target="blank">youtube</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2025 Pandino. All rights reserved.
      </div>
    </footer>
  );
}
