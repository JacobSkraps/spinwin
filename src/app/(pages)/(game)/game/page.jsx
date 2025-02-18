"use client";

// import WheelComponent from "@/app/components/wheel.svg";
import WheelComponent from "/public/wheel.svg";
import Image from 'next/image';
import { gsap } from 'gsap';

export default function Home() {
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
                    {/* <img src={ WheelComponent } alt="" /> */}
                    <Image
                    priority
                    src={ WheelComponent }
                    alt="Spin the wheel!"
                    />
                </div>
            </div>
        </div>
    );
}