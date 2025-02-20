"use client";
import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';

import {
    getFirestore, collection, addDoc,
    getDocs, doc, updateDoc
  } from 'firebase/firestore'



import idCheck from '@/functions/idCheck';
import grandPrize from "/public/tenkbmd.png";
import secondPrize from "/public/sevenfiftybmd.png";
import thirdPrize from "/public/hundredbmd.png";
import fourthPrize from "/public/twentybmd.png";
import coupon from "/public/coupon.png";
import Link from 'next/link';
import Image from 'next/image'

const firebaseConfig = {
    apiKey: "AIzaSyA5o7r3SowKoTVj11gnTvPHYq__qMzPDWo",
    authDomain: "spin2win-1adc1.firebaseapp.com",
    projectId: "spin2win-1adc1",
    storageBucket: "spin2win-1adc1.firebasestorage.app",
    messagingSenderId: "261035404031",
    appId: "1:261035404031:web:a4ddb5d7b0187c00bc3aca"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()


export default function Home() {
    const [win, setWin] = useState('');
    const [value, setValue] = useState('');
    const [source, setSource] = useState("");

    useEffect(() => {
        
        const userID = localStorage.getItem("userID")
        const docRef = doc(db, 'formData', userID)

        let now = Date.now()
        let comeBackTime = now + 129600000;

        updateDoc(docRef, {
            timeOut: comeBackTime
        })

        const win = localStorage.getItem('outcomeWin');
        setWin(win);   
    
        const value = localStorage.getItem('outcomeValue');
        setValue(value);

        console.log(`win: ${win}`);
        console.log(value);
        
        if(win == "false"){
            let myHeader = document.querySelector("#outcomeHeader");
            let mySubHeader = document.querySelector("#outcomeSubHeader");
            let myParaOne = document.querySelector("#para1");
            let myParaTwo = document.querySelector("#para2");

            let headerText = "Aw, You Were So Close";
            myHeader.innerText = headerText;
            
            let subHeaderText = "Better Luck Next Time";
            mySubHeader.innerText = subHeaderText;
            
            let firstPara = "Thanks for playing! Unfortunately you didn’t win this time. You can try again in 36 hours.";
            myParaOne.innerText = firstPara;
            let secondPara = "You have won a coupon for $2.00 off any purchase over $50 from Pierogi Hat Co or a free Gurkin shake with any order of fries.";
            myParaTwo.innerText = secondPara;
            setSource(coupon);

        }
        else{
            let myHeader = document.querySelector("#outcomeHeader");
            let mySubHeader = document.querySelector("#outcomeSubHeader");
            let myParaOne = document.querySelector("#para1");
            let myParaTwo = document.querySelector("#para2");

            let headerText = "CONGRATULATIONS";
            myHeader.innerText = headerText;
            
            let subHeaderText = `${value} BuyMore Dollars`;
            mySubHeader.innerText = subHeaderText;
            
            let firstPara = "Check your email for prize details. Answer the skill testing question below. Prizes must be claimed in 7 days.";
            myParaOne.innerText = firstPara;
            let secondPara = "2 + 2 = 4";
            myParaTwo.innerText = secondPara;

            if (value == 20){
                setSource(fourthPrize);
                // prizeSpace.src = {fourthPrize};
                console.log("Value 20!")
            } else if (value == 100){
                setSource(thirdPrize);

                // prizeSpace.src = {thirdPrize};
            } else if (value == 750){
                setSource(secondPrize);

                // prizeSpace.src = {secondPrize};
            } else if (value == 10000){
                setSource(grandPrize);

                // prizeSpace.src = {grandPrize};
            }

        }
    });
    return(
        <div id='outcomeDiv'>
            <h1 className="contest-info-wrapper__fill" id="outcomeHeader">Loading</h1>
            <div className="GameSplit">
                <div className="GameInteract">
                    <Image src={source} id='prizeSpace' alt="Your prize!" />
                    {/* <img src={ fourthPrize } alt="Your prize!" id='prizeSpace' /> */}
                </div>
                <div className="OutcomeDisplay">
                    <h2 id='outcomeSubHeader'>Loading...</h2>
                    <p className='outcomePara' id='para1'>Loading...</p>
                    <p className='outcomePara' id='para2'>Loading...</p>
                    <div className='outcomeFormButtons'>
                        <div className='backButton pageButton'>
                            <Link href="/">Give Up</Link>
                        </div>
                        <button className='nextButton pageButton' type="submit">Claim</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
