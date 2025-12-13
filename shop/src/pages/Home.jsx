import { Calendar, MapPin, Users, Heart, Camera, Gift, Sparkles, Car, Guitar, Mic2Icon, ForkKnifeCrossed, LucideForkKnifeCrossed } from "lucide-react";
import "../styles/Home.css";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Header from "../components/Header";
import Scroll from "../components/Scroll";

export default function Home() {
  const programma = [
    { 
      giorno: "Venerdì 20 Giugno", 
      orario: "18:00", 
      titolo: "Apertura Ufficiale", 
      descrizione: "Area Street Food + Live Show The Sunny Boys alle 21:00" 
    },
    { 
      giorno: "Sabato 21 Giugno", 
      orario: "Mattina", 
      titolo: "45 Anni di Panda", 
      descrizione: "Foto di gruppo a Dovera + Tour 25km tra le campagne cremasche" 
    },
    { 
      giorno: "Sabato 21 Giugno", 
      orario: "Sera", 
      titolo: "Royal Party Show", 
      descrizione: "Musica live e divertimento sotto le stelle" 
    },
    { 
      giorno: "Domenica 22 Giugno", 
      orario: "08:00", 
      titolo: "Grande Raduno", 
      descrizione: "Esposizione centro storico + Carmagheddon + Stand Fiat Grande Panda" 
    }
  ];

  return (
    <div className="home-pandino">
      
    
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
            src="https://www.carsized.com/resources/fiat/panda/h3-4x4/1991/sl_260097096_fiat-panda-1991-side-view_4x.png" 
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
            <img src="src/images/panda_castello.jpeg" />
          </div>
        </div>
      
      <div className="divider-line" />  
      </section>

      

      {/* Programma */}
      <section className="programma">
        <h2 className="section-title-pop">IL PROGRAMMA 2025</h2>
        <div className="programma-grid">
          {programma.map((evento, index) => (
            <div key={index} className="evento-card">
              <div className="evento-giorno">{evento.giorno}</div>
              <div className="evento-orario">{evento.orario}</div>
              <h3>{evento.titolo}</h3>
              <p>{evento.descrizione}</p>
            </div>
          ))}
        </div>
      </section>

      
          {/* Galleria Teaser */}
      <section className="gallery-teaser">
        <h2 className="section-title-pop">EDIZIONE 2024 - I MOMENTI MAGICI</h2>
        <div className="gallery-scroll">
          <div className="gallery-item-teaser">
            <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80" alt="Raduno 2024" />
            <div className="gallery-overlay">1.063 PANDA PRESENTI</div>
          </div>
          <div className="gallery-item-teaser">
            <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80" alt="Raduno 2024" />
            <div className="gallery-overlay">45 ANNI DI PANDA</div>
          </div>
          <div className="gallery-item-teaser">
            <img src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&q=80" alt="Raduno 2024" />
            <div className="gallery-overlay">TUTTA EUROPA PRESENTE</div>
          </div>
          <div className="gallery-item-teaser">
            <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80" alt="Raduno 2024" />
            <div className="gallery-overlay">FESTA INDIMENTICABILE</div>
          </div>
        </div>
      </section>
     

    
      <Newsletter />
      <Footer />
    </div>
  );
}