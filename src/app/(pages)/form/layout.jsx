"use client"

import { use, useEffect, useRef } from "react";
import "../../styles/form.css"
import ContestInfoModal from "@/app/(pages)/form/contestInfoModal";
import { usePathname } from "next/navigation";
import BMDLogo from "/public/bmd_white_logo.svg";
import ProgressComponent from "@/app/components/ProgressBar";
import { useRouter } from "next/router";

export default function FormLayout({ children }) {
	const modalRef = useRef(null)
	const path = usePathname();


	if (path === '/form/legalpage'){
		return <>{children}</>
	}

	function openModal (){
		console.log("opening modal")
		if(modalRef.current){
			modalRef.current.style.display = "flex"
		}
	}

    useEffect(() => {
		let bar = document.querySelector("#bar");
		let bubbleOne = bar.querySelector("#Bubble_1");
		let bubbleTwo = bar.querySelector("#Bubble_2");
		let bubbleThree = bar.querySelector("#Bubble_3");
		let bubbleFour = bar.querySelector("#Bubble_4");
		console.log(path)
		if (path == "/form/birthdayform"){
			bubbleTwo.style.fill = "#ffffff";
			bubbleThree.style.fill = "#ffffff";
			bubbleFour.style.fill = "#ffffff";			
		}
		if (path == "/form/mainForm" | path == "/form/guardianForm"){
			bubbleOne.style.fill = "#ffffff";
			bubbleThree.style.fill = "#ffffff";
			bubbleFour.style.fill = "#ffffff";			
		}
		if (path == "/form/mainForm2" | path == "/form/guardianForm2"){
			bubbleOne.style.fill = "#ffffff";
			bubbleTwo.style.fill = "#ffffff";
			bubbleFour.style.fill = "#ffffff";			
		}
		if (path == "/form/legalPage"){
			bubbleTwo.style.fill = "#ffffff";
			bubbleThree.style.fill = "#ffffff";
			bubbleFour.style.fill = "#ffffff";			
		}
	}, []);
	return (
		<main id="formPageMain">
			<section id="formPageSection">
				<BMDLogo className="logoForm"/>
				<ContestInfoModal ref={modalRef}/>
				<section className="form-contest-info">
					<div className="contest-info-header">
						<div className="contest-info-wrapper">
							<h1 className="contest-info-wrapper__stroke" aria-hidden="true">Almost there...</h1>
							<h1 className="contest-info-wrapper__fill" >Almost there...</h1>
						</div>
						<button type="button" className="contest-info-button" onClick={openModal}>i</button>
					</div>
					<div className="form-contest-text-wrapper">
						<div id="barTracker">
							<div className="ProgressComponent" id="bar">
								<ProgressComponent className="ProgressComponent" id="progressBar" />
							</div>
							<div id="barSiding">
							<h2 className="formSubHeading">Birthday</h2>
							<h2 className="formSubHeading">Personal Information</h2>
							<h2 className="formSubHeading">Address Information</h2>
							<h2 className="formSubHeading">Rules and Regulations</h2>
							</div>
						</div>
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
