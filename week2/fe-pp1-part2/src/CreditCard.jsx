import React from 'react';
import visaLogo from './assets/images/visa.png';
import masterLogo from './assets/images/master-card.svg';

function CreditCard(props) {
    const {
        type,
        number,
        expirationMonth,
        expirationYear,
        bank,
        owner,
        bgColor,
        color,
    } = props;

    const lastFourDigits = String(number).slice(-4);
    const maskedNumber = `•••• •••• •••• ${lastFourDigits}`;

    const mm = String(expirationMonth).padStart(2, '0');
    const yy = String(expirationYear).slice(-2);

    const brandSrc = type === 'Visa' ? visaLogo : masterLogo;

    return (
        <div className="credit-card" style={{ backgroundColor: bgColor, color: color }}>
            <div className="cc-brand">
                <img src={brandSrc} alt={type} />
            </div>
            <div className="cc-number">{maskedNumber}</div>
            <div className="cc-footer">
                <div className="cc-exp-bank">
                    <span className="cc-exp">Expires {mm}/{yy}</span>
                    <span className="cc-bank">{bank}</span>
                </div>
                <div className="cc-owner">{owner}</div>
            </div>
        </div>
    );
}

export default CreditCard;