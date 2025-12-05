import "../styles/Newsletter.css";

export default function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Iscriviti alla Newsletter</h2>
      <p>Rimani sempre aggiornato sui nuovi gadget</p>
      <div className="newsletter-form">
        <input type="email" placeholder="Email" />
        <button>Iscriviti!</button>
      </div>
    </section>
  );
}
