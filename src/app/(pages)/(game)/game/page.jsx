import wheelComponent from "@/app/components/wheel";
import { gsap } from 'gsap';

export default function Home() {
    return(
        <div className="GameSplit">
            <div className="GameInteract">
                <h1 id="contestInfo">Let's Play</h1>
                <div className="GameIntructionsButton">
                    <h2>Intructions</h2>
                </div>
                <h2>Good Luck!</h2>
            </div>
            <div id="GameGame">
                <div id="wheel">
                    <wheelComponent></wheelComponent>
                </div>
            </div>
        </div>
    );
}