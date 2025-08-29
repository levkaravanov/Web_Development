import React from 'react';

function BoxColor(props) {
    const { r, g, b, textColor: textColorOverride } = props;

    const clamp = (value) => Math.max(0, Math.min(255, Number(value)));
    const toHex = (value) => clamp(value).toString(16).padStart(2, '0');
    const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

    const computedTextColor = (r * 299 + g * 587 + b * 114) / 1000 >= 128 ? '#000' : '#fff';
    const textColor = textColorOverride ?? computedTextColor;

    return (
        <div className='box-color' style={{ backgroundColor: `rgb(${r}, ${g}, ${b})`, color: textColor }}>
            <p>rgb({r}, {g}, {b})</p>
            <p>{hex}</p>
        </div>
    );
}

export default BoxColor;