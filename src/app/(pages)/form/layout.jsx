"use client";

import { useEffect } from 'react';
import "../../globals.css";

export default function FormLayout({ children }) {
  useEffect(() => {
    const togglePopup = () => {
      const popup = document.getElementById("formInfoPopup");
      const content = document.getElementById("formContent");
      if (popup.style.display === "none") {
        popup.style.display = "block";
        content.style.display = "none";
      } else {
        popup.style.display = "none";
        content.style.display = "block";
      }
    };

    const button = document.getElementById("formInfoPopupButton");
    if (button) {
      button.addEventListener("click", togglePopup);
    } else {
      console.error("Button with id 'formInfoPopupButton' not found");
    }

    return () => {
      if (button) {
        button.removeEventListener("click", togglePopup);
      }
    };
  }, []);

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

        <div id="formSidingBodyParagraph">
          <p className="paragraphText bottom">
          *Prizes are subject to adherent contest rules and regulations.Delivery timelines may vary, with an estimated arrival of 60-90 days          </p>
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