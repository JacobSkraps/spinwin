"use client";

import { useEffect, useState } from 'react';

export default function Home() {
    const [win, setWin] = useState('');
    const [value, setValue] = useState('');

    useEffect(() => {
        const win = localStorage.getItem('outcomeWin');
        setWin(win);   
    
        const value = localStorage.getItem('outcomeValue');
        setValue(value);

        console.log(win);
        console.log(value);

        if(win == false){
            let myHeader = document.querySelector("#outcomeHeader");
            let mySubHeader = document.querySelector("#outcomeSubHeader");
            let myPara = document.querySelector("#outcomePara");

            let headerText = "Aw, You Were So Close";
            myHeader.innerText = headerText;
            
            let subHeaderText = "Better Luck Next Time";
            mySubHeader.innerText = subHeaderText;
            
            let paraText = "Thanks for playing! Unfortunately you didn’t win this time. You can try again in 36 hours. You have won a coupon for $2.00 off any purchase over $50 from Pierogi Hat Co or a free Gurkin shake with any order of fries.";
            myPara.innerText = paraText;
        }
        else{
            let myHeader = document.querySelector("#outcomeHeader");
            let mySubHeader = document.querySelector("#outcomeSubHeader");
            let myPara = document.querySelector("#outcomePara");

            let headerText = "CONGRATULATIONS";
            myHeader.innerText = headerText;
            
            let subHeaderText = `${value} BuyMore Dollars`;
            mySubHeader.innerText = subHeaderText;
            
            let paraText = "Check your email for prize details. Answer the skill testing question below. Prizes must be claimed in 7 days.";
            myPara.innerText = paraText;
        }
    });
    return(
        <div className="GameSplit">
            <h1 className="contestInfo" id="outcomeHeader">Loading</h1>
            <div className="GameInteract"></div>
            <div className="OutcomeDisplay">
                <h2 id='outcomeSubHeader'>Loading...</h2>
                <p id='outcomePara'>Loading...</p>

            </div>
        </div>
    );
}
