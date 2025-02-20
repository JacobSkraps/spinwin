import React from 'react';
import { gsap } from 'gsap';

const Popup = ({ show, onClose }) => {
    return (
        <div className={`popup ${show ? 'show' : ''}`}>
            <div className="popup-content">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <h1 id='popup-header'>How To Play</h1>
                    <p className='liStyles'>1. Spin the wheel and see if you are a winner!</p>
                    <p className='liStyles'>2. Winners will be notified by email [ *Prizes are subject to adherent contest rules and regulations. Delivery timelines may vary, with an estimated arrival of 60-90 days]</p>
            </div>
        </div>
    );
};

export default Popup;
