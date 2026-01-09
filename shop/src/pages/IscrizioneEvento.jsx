import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";
import * as htmlToImage from "html-to-image";
import { User, Mail, Phone, MapPin, Upload, X, Camera } from "lucide-react"; // Icone
import logo from "../assets/logo.png";
import "../styles/IscrizioneEvento.css";
import Header from "../components/Header";

export default function IscrizioneEvento() {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [provenienza, setProvenienza] = useState("");
  const [foto, setFoto] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [isDragging, setIsDragging] = useState(false); // Stato per drag & drop
  const qrRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !cognome || !email || !telefono || !provenienza) return;
    setIsSubmitted(true);
  };

  const handleDownload = () => {
    if (!qrRef.current) return;
    htmlToImage.toPng(qrRef.current).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = `${nome}_${cognome}_QR.png`;
      link.href = dataUrl;
      link.click();
    });
  };

  const handleFotoChange = (e) => {
    const file = e.target.files?.[0];
    processFile(file);
  };

  // Gestione Drag & Drop
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    processFile(file);
  };

  const processFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (ev) => setFoto(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  const removeFoto = (e) => {
    e.stopPropagation(); // Evita di riaprire il file picker
    setFoto(null);
  };

  const handleProvenienzaChange = (e) => {
    const value = e.target.value;
    setProvenienza(value);

    if (value.length < 2) {
      setCitySuggestions([]);
      return;
    }

    fetch(
      `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(
        value
      )}&format=json&limit=5`
    )
      .then((res) => res.json())
      .then((data) => {
        const cities = data.map((item) => item.display_name);
        setCitySuggestions(cities);
      })
      .catch(() => setCitySuggestions([]));
  };

  const handleSelectCity = (city) => {
    setProvenienza(city);
    setCitySuggestions([]);
  };

  const qrValue = JSON.stringify({
    nome,
    cognome,
    email,
    evento: "Raduno Panda 2026",
    data: new Date().toISOString(),
  });

  return (
    <div>
      <Header />
      <div className="iscrizione-container">
        {!isSubmitted && (
          <form onSubmit={handleSubmit} className="iscrizione-form">
            <div className="form-header">
              <h2>ISCRIVITI</h2>
              <p>Raduno Panda 2026</p>
            </div>

            <div className="input-row">
              <div className="input-group">
                <User className="input-icon" size={20} />
                <input
                  type="text"
                  placeholder="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <User className="input-icon" size={20} />
                <input
                  type="text"
                  placeholder="Cognome"
                  value={cognome}
                  onChange={(e) => setCognome(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <Mail className="input-icon" size={20} />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <Phone className="input-icon" size={20} />
              <input
                type="tel"
                placeholder="Telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                required
              />
            </div>

            <div className="input-group city-group">
              <MapPin className="input-icon" size={20} />
              <input
                type="text"
                placeholder="Città di provenienza"
                value={provenienza}
                onChange={handleProvenienzaChange}
                required
                autoComplete="off"
              />
              {citySuggestions.length > 0 && (
                <ul className="city-suggestions">
                  {citySuggestions.map((city, idx) => (
                    <li key={idx} onClick={() => handleSelectCity(city)}>
                      <MapPin size={14} style={{ marginRight: 8 }} />
                      {city}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Nuova sezione Upload Foto */}
            <div className="photo-upload-section">
              <label className="label-title">La tua Panda</label>
              <div
                className={`upload-area ${isDragging ? "dragging" : ""} ${
                  foto ? "has-image" : ""
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFotoChange}
                  id="foto-upload"
                  hidden
                />
                
                {foto ? (
                  <div className="image-preview-container">
                    <img src={foto} alt="Preview" className="preview-img" />
                    <button
                      type="button"
                      className="remove-btn"
                      onClick={removeFoto}
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <label htmlFor="foto-upload" className="upload-placeholder">
                    <div className="icon-circle">
                      <Camera size={24} />
                    </div>
                    <span>Carica una foto</span>
                    <small>o trascinala qui</small>
                  </label>
                )}
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Completa Iscrizione
            </button>
          </form>
        )}

        {isSubmitted && (
          <div className="qr-section">
            <h2>Iscrizione completata!</h2>
            <div ref={qrRef} className="qr-card">
              <QRCode value={qrValue} size={250} level="H" />
              <img src={logo} alt="Logo" className="qr-logo-overlay" />
            </div>
            {foto && (
              <div className="foto-result">
                <h4>La tua compagna di viaggio:</h4>
                <img src={foto} alt="Modello Panda" />
              </div>
            )}
            <button onClick={handleDownload} className="download-btn">
              <Upload size={18} style={{ marginRight: 8 }} /> Scarica Pass
            </button>
          </div>
        )}
      </div>
    </div>
  );
}