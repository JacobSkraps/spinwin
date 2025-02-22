"use client"

import { useRef } from "react";
import "../../styles/form.css"
import ContestInfoModal from "@/app/(pages)/form/contestInfoModal";
import { usePathname } from "next/navigation";
import BMDLogo from "/public/bmd_white_logo.svg";
import ProgressComponent from "@/app/components/ProgressBar";

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
						<div className="ProgressComponent">
							<ProgressComponent className="ProgressComponent" id="progressBar" />
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
