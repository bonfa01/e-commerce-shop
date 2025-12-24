import { Link } from "react-router-dom";
import errorImg from "../assets/404.png";
import { Home } from "lucide-react";
import "../styles/Errore.css";

export default function Errore() {
  return (
    <div className="errore">
        <h1>404</h1>
        <h1>POSTO DI BLOCCO</h1>

        <Link to="/" className="button">
            <p>TORNA IN CARREGGIATA</p>
          </Link>
        {/* Immagine di sfondo */}
        <img 
          src={errorImg} 
          alt="Errore 404"
          className="image" 
        />
    </div>
  );
}