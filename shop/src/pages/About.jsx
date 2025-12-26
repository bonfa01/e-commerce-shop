import React from "react";
import "../styles/About.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Newsletter from "../components/Newsletter.jsx";

function About() {
  return (
    <div>
      <Header />
      <div className="about-container">
        <div className="about-row">
          <h3 className="about-title">CHI SIAMO</h3>
          <p className="about-text">
            Panda a Pandino nasce nel 2017 quando un gruppo di ragazzi Pandinesi scoprì sui social 
            una pagina che promuoveva Pandino come meta in cui recarsi con la propria Fiat Panda...
            Si incontrarono un allargato numero di persone per trovare un riscontro sul possibile 
            progetto da realizzare. Sin da subito si delineò il team che gestisce tutt’ora a 360° l’evento.
          </p>
        </div>

        <hr className="separator" />

        <div className="about-row">
          <h3 className="about-title">MISSION</h3>
          <div className="about-text">
            <p>
              <strong>Qual è la priorità per Panda a Pandino?</strong><br />
              Sin dalla prima edizione la strada intrapresa era quella di dare vita ad un vero e proprio evento, 
              non un semplice raduno. Le Panda sono le vere protagoniste di un mito.
            <br /><br />
              <strong>Perché venire a Panda a Pandino?</strong><br />
              Panda a Pandino è una grande famiglia: invitiamo tutti i Pandisti per condividere un momento 
              indimenticabile nel cortile del Castello Visconteo.
            </p>
          </div>
        </div>

        <hr className="separator" />

        <div className="about-row">
          <h3 className="about-title">ETICA</h3>
          <p className="about-text">
              Sin dal primo giorno, il fine unico di Panda a Pandino è di carattere benefico. Non si è mai pensato 
              ad una destinazione diversa dei fondi raccolti durante l’organizzazione se non quella di contribuire 
              con le realtà benefiche, del territorio oppure in scala più ampia, a livello nazionale. 
              Dopo le prime edizioni, i fondi raccolti tramite i contributi dei partner e le iscrizioni dei partecipanti 
              sono state destinate ad associazioni locali con l’obbiettivo di acquistare materiale che potesse essere 
              messo a disposizione dei frequentatori di realtà sociali di assistenza a categorie che ne potessero avere necessità.
          </p>
        </div>

      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default About;