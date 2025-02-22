import React from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

const WinningPopup = ({ show }) => {
    return (
        <div className={`popup ${show ? 'show' : ''}`}>
            <div className="popup-content">
                {/* <span className="close-btn" onClick={onClose}>&times;</span> */}
                <h1 id='popup-header'>UH OH</h1>
                <p className='liStyles'>You got the answer wrong! Unfortunately, you do not get the prize.</p>
            </div>
        </div>
    );
};

export default WinningPopup;
