import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ArrowLeft } from "lucide-react";
import "../styles/Checkout.css";
import mastercard from "../assets/mastercard.png";
import paypal from "../assets/paypal.png";
import googlepay from "../assets/googlepay.png";

export default function Checkout() {
    const navigate = useNavigate();
    const { cartItems, cartCount } = useCart();

    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [address, setAddress] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [orderPlaced, setOrderPlaced] = useState(false);

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        setOrderPlaced(true);
    };

    if (orderPlaced) {
        return (
            <div className="checkout-container">
                <h2>Grazie per il tuo ordine!</h2>
                <p>Riceverai una mail di conferma a {email}</p>
                <button onClick={() => navigate("/")}>Torna allo shop</button>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <button className="back-button" onClick={() => navigate(-1)}>
                <ArrowLeft size={20} /> Torna indietro
            </button>

            <h2>Checkout</h2>

            <div className="checkout-wrapper">
                <form className="checkout-form" onSubmit={handlePlaceOrder}>
                    <h3>dettagli pagamento</h3>
                    <label>
                        informazioni
                        <input
                            type="text"
                            placeholder="nome"
                            value={nome}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="cognome"
                            value={cognome}
                            onChange={(e) => setCognome(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        contatti
                        <input
                            type="email"
                            placeholder="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input
                            type="tel"
                            placeholder="telefono"
                            value={telefono}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        Indirizzo
                        <textarea
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </label>

                    <div className="payment-methods">
                        <h3>Metodo di Pagamento</h3>

                        <div className="payment-option">
                            <input type="radio" id="carta" name="payment" value="carta" defaultChecked />
                            <label htmlFor="carta">
                                Carta di credito
                                <img src={mastercard} alt="Carta" className="payment-logo" />
                            </label>
                        </div>

                        <div className="payment-option">
                            <input type="radio" id="paypal" name="payment" value="paypal" />
                            <label htmlFor="paypal">
                                PayPal
                                <img src={paypal} alt="PayPal" className="payment-logo" />
                            </label>
                        </div>

                        <div className="payment-option">
                            <input type="radio" id="google" name="payment" value="google" />
                            <label htmlFor="google">
                                Google Pay
                                <img src={googlepay} alt="Google Pay" className="payment-logo" />
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="place-order-btn">
                        Paga €{totalPrice.toFixed(2)}
                    </button>
                </form>

                <div className="order-summary">
                    <h3>Riepilogo ordine</h3>
                    <ul>
                        {cartItems.map((item) => (
                            <li class key={item.id}>
                                <p>N.{item.quantity}</p>
                                <p>{item.name}</p>
                                <p>€{item.price.toFixed(2)}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="total">
                        <p>Totale:</p>
                        <p>€{totalPrice.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div >
    );
}
