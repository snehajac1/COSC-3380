import React from 'react';
import { Link } from 'react-router-dom';
import white_converse from '../images/white_converse.jpg';
import './Cart.css';

export default function Cart() {
    return (
        <div className="cart-container">
            <h1 className="cart-title">Shopping Cart</h1>
            <div className="cart-items">
                <div className="cart-item">
                    <img src={white_converse} alt="White Converse" className="cart-item-image" />
                    <div className="cart-item-details">
                        <h3 className="cart-item-name">Converse</h3>
                        <p>Put Description Here</p>
                        <span className="cart-item-price">$80</span>
                    </div>
                    <button className="cart-item-remove">Remove</button>
                </div>

                <div className="cart-item">
                    <img src={white_converse} alt="White Converse" className="cart-item-image" />
                    <div className="cart-item-details">
                        <h3 className="cart-item-name">Converse</h3>
                        <p>Put Description Here</p>
                        <span className="cart-item-price">$80</span>
                    </div>
                    <button className="cart-item-remove">Remove</button>
                </div>
            </div>
            <div className="cart-summary">
                <h2>Cart Summary</h2>
                <div className="cart-subtotal">
                    <span>Subtotal:</span>
                    <span>-add logic to get total-</span>
                </div>
                <Link to="/Checkout">
                    <button className="checkout-button">Checkout</button>
                </Link>
            </div>
            <div className="payment-section">
                <h2>Payment Method</h2>
                <p>Credit Card</p>
                <h2>Shipping Address</h2>
                <p>123 Shipping Street, City, Country</p>
            </div>
        </div>
    );
}

