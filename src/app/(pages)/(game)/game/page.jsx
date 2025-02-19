"use client";

import WheelComponent from "@/app/components/wheel.jsx";
// import WheelComponent from "/public/wheel.svg";
import Image from 'next/image';
import { gsap } from 'gsap';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';;

export default function Home() {
    // const [randomNumber, setRandomNumber] = useState(undefined);
    const spinWheel = () => {
        let randomOutcome = Math.random();
        const outcomes = [
            { win: false,
            type: "Coupon" },
            { win: true,
            type: "BuyMoreDollars",
            value: "20" },
            { win: true,
            type: "BuyMoreDollars",
            value: "100" },
            { win: true,
            type: "BuyMoreDollars",
            value: "20" },
            { win: false,
            type: "Coupon" },
            { win: true,
            type: "BuyMoreDollars",
            value: "750" },
            { win: false,
            type: "Coupon" },
            { win: true,
            type: "BuyMoreDollars",
            value: "20" },
            { win: false,
            type: "Coupon" },
            { win: true,
            type: "BuyMoreDollars",
            value: "100" },
            { win: true,
            type: "BuyMoreDollars",
            value: "10000" }
        ];
        wheel.removeEventListener('click', spinWheel);
        gsap.set(spinningPart, {
            transformOrigin: "50% 50%"
        });
        gsap.to(spinningPart, {
            rotation: 360,
            duration: 4,
            ease: "power4.out",
            onComplete: () => {
                // let randomOutcome = Math.random();
                let outcome = {}
                if (randomOutcome < 0.099){
                    outcome = outcomes[0]
                }
                else if (randomOutcome < 0.198){
                    outcome = outcomes[1]
                }
                else if (randomOutcome < 0.297){
                    outcome = outcomes[2]
                }
                else if (randomOutcome < 0.396){
                    outcome = outcomes[3]
                }
                else if (randomOutcome < 0.495){
                    outcome = outcomes[4]
                }
                else if (randomOutcome < 0.594){
                    outcome = outcomes[5]
                }
                else if (randomOutcome < 0.693){
                    outcome = outcomes[6]
                }
                else if (randomOutcome < 0.792){
                    outcome = outcomes[7]
                }
                else if (randomOutcome < 0.951){
                    outcome = outcomes[8]
                }
                else if (randomOutcome < 0.998){
                    outcome = outcomes[9]
                }
                else{
                    outcome = outcomes[10]
                }
                console.log(outcome);
                localStorage.setItem('outcome', outcome);
                redirect(`/outcome`)
            }
        });
    }
    useEffect(() => {
        gsap.set(spinningPart, {
            transformOrigin: "50% 50%"
        });
        wheel.addEventListener('click', spinWheel);
    },[]); 

    return(
        <div className="GameSplit">
            <div className="GameInteract">
                <h1 className="contestInfo" id="GameHeader">Let's Play</h1>
                <div className="GameIntructionsButton">
                    <h2 className="contestInfo" id="GameIntructionsClickText">Intructions</h2>
                </div>
                <h2 className="formHeading" id="GoodLuck">Good Luck!</h2>
            </div>
            <div id="GameGame">
                <div id="wheel">
                    {/* <Image src={WheelComponent}></Image> */}
                    <WheelComponent className="wheelComponent" id="theWheel" />
                </div>
            </div>
        </div>
    );
}

