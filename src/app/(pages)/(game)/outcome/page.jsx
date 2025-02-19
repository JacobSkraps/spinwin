"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react';
import grandPrize from "/public/tenkbmd.png";
import secondPrize from "/public/sevenfiftybmd.png";
import thirdPrize from "/public/hundredbmd.png";
import fourthPrize from "/public/twentybmd.png";



export default function Home() {
    const [win, setWin] = useState('');
    const [value, setValue] = useState('');
    const [source, setSource] = useState("");

    useEffect(() => {
        const win = localStorage.getItem('outcomeWin');
        setWin(win);   
    
        const value = localStorage.getItem('outcomeValue');
        setValue(value);

        console.log(`win: ${win}`);
        console.log(value);
        
        if(win == "false"){
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
            let prizeSpace = document.querySelector("#prizeSpace");

            let headerText = "CONGRATULATIONS";
            myHeader.innerText = headerText;
            
            let subHeaderText = `${value} BuyMore Dollars`;
            mySubHeader.innerText = subHeaderText;
            
            let paraText = "Check your email for prize details. Answer the skill testing question below. Prizes must be claimed in 7 days.";
            myPara.innerText = paraText;
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
        <div>
            <h1 className="contestInfo" id="outcomeHeader">Loading</h1>
            <div className="GameSplit">
                <div className="GameInteract">
                    <Image src={source} id='prizeSpace' alt="Your prize!" />
                    {/* <img src={ fourthPrize } alt="Your prize!" id='prizeSpace' /> */}
                </div>
                <div className="OutcomeDisplay">
                    <h2 id='outcomeSubHeader'>Loading...</h2>
                    <p id='outcomePara'>Loading...</p>

                </div>
            </div>
        </div>
    );
}
