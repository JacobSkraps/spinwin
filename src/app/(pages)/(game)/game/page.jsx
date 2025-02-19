"use client";

import WheelComponent from "@/app/components/wheel.jsx";
// import WheelComponent from "/public/wheel.svg";
import Image from 'next/image';
import { gsap } from 'gsap';
import { useEffect } from 'react';

export default function Home() {
        useEffect(() => {
            // const wheel = document.getElementById('theWheel');
            // const spinningPart = wheel.getElementById('spinningPart');

            wheel.addEventListener('click', () => {
                gsap.to(spinningPart, {
                    rotation: 360,
                    duration: 1,
                    ease: "power2.inOut"
                });
            });
                return () => {
                wheel.removeEventListener('click', () => {
                    gsap.to(spinningPart, {
                        rotation: 360,
                        duration: 1,
                        ease: "power2.inOut"
                    });
                });
            };
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