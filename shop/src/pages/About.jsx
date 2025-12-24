import React from "react";
import "../styles/About.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Newsletter from "../components/Newsletter.jsx";

function About() {
  return (
    <div>
      <Header />
      <div className="titolo">
        <h1>about</h1>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default About;
