"use client";

import "../../styles/form.css"


import { useRef } from "react";
import "../../styles/form.css"
import ContestInfoModal from "@/app/(pages)/form/contestInfoModal";

export default function FormLayout({ children }) {
	const modalRef = useRef(null)

	function openModal (){
		console.log("opening modal")
		if(modalRef.current){
			modalRef.current.style.display = "flex"
		}
	}

  return (
    <div id="formBody">
      <section id="formSiding">
        <div id="formInfoHeading">
          <div className="relative">
            {/* <h1 className="contestInfo evilInfo" aria-hidden="true">CONTEST INFO</h1> */}
            <h1 className="contestInfo ">CONTEST INFO</h1>
          </div>
          <button id="formInfoPopupButton">i</button>
        </div>

        <div id="formInfoPopup">
          <div className="formSidingContainer">
            <p className="paragraphText">
              1. Fill out the form with your details.<br/>
              2. Spin the wheel and see if you're a winner!<br/>
              3. Winners will be notified by email and must correctly answer a skill-testing question to claim their prize.<br/>
            </p><br/>
            <p className="paragraphText">
            Winners will be selected by random draw.* BuyMore Dollars Inc. reserves the right to remove any entries at their discretion.* By entering, you agree to the contest rules and regulations and consent to receive communications from BuyMore Dollars and our sponsors.            </p>
          </div>
          <div id="formSidingBodyParagraph">
            <p className="paragraphText bottom">
            *Prizes are subject to adherent contest rules and regulations. Delivery timelines may vary, with an estimated arrival of 60-90 days.            </p>
          </div>
        </div>
        <div id='formSidingDesk'>
          <div className="formSidingContainer">
              <p className="paragraphText">
                1. Fill out the form with your details.<br/>
                2. Spin the wheel and see if you're a winner!<br/>
                3. Winners will be notified by email and must correctly answer a skill-testing question to claim their prize.<br/>
              </p><br/>
              <p className="paragraphText">
              Winners will be selected by random draw. BuyMore Dollars Inc. reserves the right to remove any entries at their discretion.* By entering, you agree to the contest rules and regulations and consent to receive communications from BuyMore Dollars and our sponsors.
              </p>
            </div>
            <div id="formSidingBodyParagraph">
              <p className="paragraphText bottom">
                *Prizes are subject to adherent contest rules and regulations.Delivery timelines may vary, with an estimated arrival of 60-90 days]. BuyMore Dollars Inc. reserves the right to remove any entries at their discretion.  [*Prizes are subject to adherent contest rules and regulations.Delivery timelines may vary, with an estimated arrival of 60-90 days] By entering, you agree to the contest rules and regulations and consent to receive communications from BuyMore Dollars and our sponsors.
              </p>
            </div>
          </div>
      </section>
      <div id="formContent">
        {children}
      </div>
    </div>
  );
}
