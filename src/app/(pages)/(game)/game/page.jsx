"use client";
import WheelComponent from "@/app/components/wheel.jsx";
import { initializeApp } from 'firebase/app';

import {
    getFirestore, collection, onSnapshot, addDoc,
    getDocs, doc, updateDoc, query, getDoc
  } from 'firebase/firestore'

// import WheelComponent from "/public/wheel.svg";
import Image from 'next/image';
import { gsap } from 'gsap';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';;

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

const userID = localStorage.getItem("userID")
const docRef = doc(db, 'formData', userID)
const document = await getDoc(docRef);
console.log("Document data:", document.data());

export default function Home() {
    // const [randomNumber, setRandomNumber] = useState(undefined);
    // const [win, setWin] = useState(false);
    // const [value, setValue] = useState(0);
    // const [rotate, setRotate] = useState(0);
    let storedOutcome = {}

    let docTime = document.data().timeOut
    console.log(docTime)

    const spinWheel = () => {
        wheel.removeEventListener('click', spinWheel);
        gsap.set(spinningPart, {
            transformOrigin: "50% 50%"
        });
        let rotationAmount = storedOutcome.toRotate + 1080
        console.log(`1080 + ${storedOutcome.toRotate} = ${rotationAmount}`)
        gsap.to(spinningPart, {
            rotation: rotationAmount,
            duration: 4,
            ease: "power1.out",
            onComplete: () => {
                // let randomOutcome = Math.random();
                localStorage.setItem('outcomeWin', storedOutcome.win);
                localStorage.setItem('outcomeValue', storedOutcome.value);

                redirect(`/outcome`)
            }
        });
    }
    useEffect(() => {
        wheel.addEventListener('click', spinWheel);

        console.log(document);
        let now = Date.now()
        if (now < docTime) {
            wheel.removeEventListener('click', spinWheel);
            console.log("You have to wait!");
            // let paraChange = document.querySelector("#GoodLuck");
            // let changingText = "Please come back later to try again.";
            // paraChange.innerText = changingText;
            gsap.to(wheel, {
                duration: 1,
                ease: "power1.out",
                css:{ 'filter': 'grayscale(100%)'}
            });    
        }
        
        gsap.set(spinningPart, {
            transformOrigin: "50% 50%"
        });
        let randomOutcome = Math.random();
        const outcomes = [
            { win: false,
            type: "Coupon",
            toRotate: 10,
            value: 0 },
            { win: false,
            type: "Coupon",
            toRotate: 88,
            value: 0 },
            { win: false,
            type: "Coupon",
            toRotate: 157,
            value: 0 },
            { win: false,
            type: "Coupon",
            toRotate: 228,
            value: 0 },

            { win: true,
            type: "BuyMoreDollars",
            toRotate: 122,
            value: 20 },
            { win: true,
            type: "BuyMoreDollars",
            toRotate: 262,
            value: 20 },
            { win: true,
            type: "BuyMoreDollars",
            toRotate: 334,
            value: 20 },

            { win: true,
            type: "BuyMoreDollars",
            toRotate: 45,
            value: 100 },
            { win: true,
            type: "BuyMoreDollars",
            toRotate: 298,
            value: 100 },

            { win: true,
            type: "BuyMoreDollars",
            toRotate: 192,
            value: 750 },

            { win: true,
            type: "BuyMoreDollars",
            toRotate: 30,
            value: 10000, }
        ];
        // let storedOutcome = {}
        if (randomOutcome < 0.24){
            storedOutcome = outcomes[0]
        }
        else if (randomOutcome < 0.48){
            storedOutcome = outcomes[1]
        }
        else if (randomOutcome < 0.72){
            storedOutcome = outcomes[2]
        }
        else if (randomOutcome < 0.97){
            storedOutcome = outcomes[3]
        }
        else if (randomOutcome < 0.975){
            storedOutcome = outcomes[4]
        }
        else if (randomOutcome < 0.98){
            storedOutcome = outcomes[5]
        }
        else if (randomOutcome < 0.985){
            storedOutcome = outcomes[6]
        }
        else if (randomOutcome < 0.99125){
            storedOutcome = outcomes[7]
        }
        else if (randomOutcome < 0.9975){
            storedOutcome = outcomes[8]
        }
        else if (randomOutcome < 0.999){
            storedOutcome = outcomes[9]
        }
        else{
            storedOutcome = outcomes[10]
        }
        console.log(storedOutcome);
        console.log(storedOutcome.win);
        console.log(storedOutcome.value);
        // setWin(storedOutcome.win);
        // setValue(storedOutcome.value);
        // setRotate(storedOutcome.toRotate);
        // console.log(win);
        // console.log(value);
        // console.log(rotate);
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

