import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Newsletter from "../components/Newsletter.jsx";

function Archivio() {
  return (
    <div>
      <Header />
      <div className="titolo">
        <h1>archivio</h1>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Archivio;
