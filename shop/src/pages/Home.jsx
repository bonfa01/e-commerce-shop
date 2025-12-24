import { useState } from "react";
import { Calendar, MapPin, Users, Info, Heart, Camera, Gift, Sparkles, Car, Guitar, Mic2Icon, ForkKnifeCrossed, LucideForkKnifeCrossed } from "lucide-react";
import "../styles/Home.css";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Scroll from "../components/Scroll";
import PandaLogo from "../assets/panda.png";
import Header from "../components/Header";

import pandaCastello from "../assets/panda_castello.jpeg";
import { programma } from "../data/programma";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <div className="home-pandino">
      <Header />
      <section className="hero-main">
        <div className="hero-content-main">
          <h1 className="hero-title"> PANDA A PANDINO </h1>
          <p className="hero-subtitle">
            Il raduno di Fiat Panda più grande del mondo
          </p>
          <div className="hero-info">
            <div className="info-box">
              <Calendar size={28} />
              <div>
                <strong>20-22 GIUGNO 2026</strong>
                <span>3 giorni di festa</span>
              </div>
            </div>
            <div className="info-box">
              <MapPin size={28} />
              <div>
                <strong>PANDINO (CR)</strong>
                <span>Castello Visconteo</span>
              </div>
            </div>
            <div className="info-box">
              <Users size={28} />
              <div>
                <strong>1.063 PANDA</strong>
                <span>Record 2024</span>
              </div>
            </div>
          </div>
          <Scroll />
        </div>
        <div className="animazione-panda">
          <img 
            src={PandaLogo}
            alt="Panda"
            className="animazione-panda-image"
          />
        </div>
       
      </section>

      {/* info evento */}
      <section className="about-event">
        <div className="about-grid">
          <div className="about-text">
            <h2>Una Festa per Tutti i Pandisti</h2>
            <p>
              Nato nel 2017 da una semplice foto sotto il cartello di Pandino, 
              questo raduno è diventato <strong>la più grande celebrazione mondiale</strong> della mitica Fiat Panda.
            </p>
            <p>
              Un weekend di <strong>colori, abbracci, sorrisi</strong> e cofani aperti. 
              Dalle Panda 30 raffreddate ad aria alle nuove Grande Panda elettriche: 
              <strong>tutte le Panda sono benvenute!</strong>
            </p>
            <div className="about-stats">
              <div className="stat">
                <Car size={40} />
                <strong>Dal 1980...</strong>
                <span>Tutte le Panda</span>
              </div>
              <div className="stat">
                <Mic2Icon size={40} />
                <strong>musica</strong>
                <span>concerto live</span>
              </div>
              <div className="stat">
                <LucideForkKnifeCrossed size={40} />
                <strong>Food & Beverage</strong>
                <span>con produttori locali</span>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img src={pandaCastello} />
          </div>
        </div>
      
      <div className="divider-line" />  
      </section>

      

      {/* Programma */}
      <section className="programma">
        <h2 className="programma-title">IL PROGRAMMA 2026</h2>
        <div className="programma-flex"> 
          {programma.map((evento, index) => (
            <div 
              key={index} 
              className={`evento-card-expand ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Icona sempre visibile al centro quando è chiusa */}
              <div className="info-icon-wrapper">
                <Info size={48} />
              </div>

              <div className="card-content">
                <div className="evento-giorno">{evento.giorno}</div>
                <h3>{evento.titolo}</h3>
                
                <ul className="evento-lista-puntata">
                  {evento.attivita.map((item, i) => (
                    <li key={i}>
                      <span className="ora">{item.ora}</span>
                      <span className="desc">{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

    
     

    
      <Newsletter />
      <Footer />
    </div>
  );
}