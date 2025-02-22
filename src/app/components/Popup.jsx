import React from 'react';
import { gsap } from 'gsap';

const Popup = ({ show, onClose }) => {
    return (
        <div className={`popup ${show ? 'show' : ''}`}>
            <div className="popup-content">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <h1 id='popup-header'>How To Play</h1>
                <div id='popup-body'>
                    <p className='liStyles'>1. Click the button or wheel to spin.!</p>
                    <p className='liStyleSmall'> *Prizes are subject to adherent contest rules and regulations. Delivery timelines may vary, with an estimated arrival of 60-90 days.</p>
                </div>
            </div>
        </div>
    );
};

export default Popup;
