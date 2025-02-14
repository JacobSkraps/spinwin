"use client"

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
		<main id="formPageMain">
			<section id="formPageSection">
				<ContestInfoModal ref={modalRef}/>
				<section id="form-contest-info">
					<div className="contest-info-header">
						<div className="contest-info-wrapper">
							<h1 className="contest-info-wrapper__stroke" aria-hidden="true">Contest Info</h1>
							<h1 className="contest-info-wrapper__fill" >Contest Info</h1>
						</div>
						<button type="button" className="contest-info-button" onClick={openModal}>i</button>
					</div>
					<div className="form-contest-text-wrapper">
						<p className="form-contest-info__p">
							1. Fill out the form with your details.<br/>
							2. Spin the wheel and see if you're a winner!<br/>
							3. Winners will be notified by email and must correctly answer a skill-testing question to claim their prize.<br/>
						</p><br/>
						<p className="form-contest-info__p">
						Winners will be selected by random draw. BuyMore Dollars Inc. reserves the right to remove any entries at their discretion.* By entering, you agree to the contest rules and regulations and consent to receive communications from BuyMore Dollars and our sponsors.
						</p>
						<p className="form-contest-info__p form-contest-info__p--bottom">
						*Prizes are subject to adherent contest rules and regulations.Delivery timelines may vary, with an estimated arrival of 60-90 days.</p>
					</div>
				</section>
				<div id="formContent">
					{children}
				</div>
			</section>
		</main>
	);
}
