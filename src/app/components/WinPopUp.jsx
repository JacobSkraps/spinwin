import React from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

const WinningPopup = ({ show, onClose }) => {
    return (
        <div className={`popup ${show ? 'show' : ''}`}>
            <div className="popup-content">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <h1 id='popup-header'>CLAIMED</h1>
                <p className='outcomePara'>Your prize will be delivered to you hopefully in 60-90 business days with information to claim it</p>
                <div id='claimBtn'>
                    <Link href="">Claim</Link>
                </div>
            </div>
        </div>
    );
};

export default WinningPopup;
