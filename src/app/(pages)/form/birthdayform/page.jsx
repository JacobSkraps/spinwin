"use client";

import { useRef, useState } from 'react';
import { redirect } from 'next/navigation';;
import Link from 'next/link';
import regexCheck from '@/functions/regexCheck';

// const [ birthday, setBirthday] = useState('');


export default function Home() {
const addPeopleFormRef = useRef(null);

let nextPage;

function timeCheck(birthday) {
	const dateSplit = birthday.split("-");
	console.log(dateSplit)

	const theirTimeMilli = new Date(dateSplit).getTime();
	const currentTimeMilli = new Date().getTime();


	let age = Math.floor((currentTimeMilli - theirTimeMilli)/(31556926100))

	console.log(`${currentTimeMilli} - ${theirTimeMilli} = ${age}`);


	// to get the date of their birthday
	// const theirBirthdate = new Date(ageEpoch);
	console.log(birthday);
	let minimumAge = 15;
	if (minimumAge < age) {
	nextPage = "mainForm"
	} 
	else{ 
	nextPage = "guardianForm" 
	}

	//* i made a checker to see if it'll give true or false here. */
	const birthdayCheck = regexCheck("birthday", birthday);

	if(birthdayCheck){
	redirect(`/form/${nextPage}`)
	}
	if(!birthdayCheck){
	let input = document.getElementById("birthday");
	// console.log(input)
	input.style.border = "2px solid red"
	}
	// LinkForward.css.
}
// const router = useRouter();
const handleSubmit = (e) => {
	e.preventDefault();
	const addPeopleForm = addPeopleFormRef.current;
	const formData = new FormData(addPeopleForm);
	const birthdayValue = formData.get('birthday');

	//* Store birthday in local storage
	localStorage.setItem('birthday', birthdayValue);

	// console.log(`Birthday Value ${birthdayValue}`);
	timeCheck(birthdayValue);
};  

return (
	<section>
		<form ref={addPeopleFormRef} className="add" onSubmit={handleSubmit} noValidate>
			<h2 className='formHeading u-spacing-mb-32'>Your Birthday</h2>
			<div className='formElement formWide'>
			<label htmlFor="birthdayLabel" className='formLabel'>Birthday</ label>        
			<input name="birthday" type="date" placeholder="Birthday" id="birthday" className='formWide'/>
			<div className='formErrorBar'>
				<p className='formErrorMessage'>
				*Date of Birth is required<br/>
				*Enter a valid date in the format MM/DD/YYYY<br/>
				*You must be at least 16 years old to participate. If you are below 16 years old, a guardian is required.
				</p>
			</div>
			</div>
			<div className='formButtons'>
			<div className='backButton pageButton'>
				<Link href="../">Back</Link>
			</div>
			<button className='nextButton pageButton' type="submit">Next</button>
			</div>
		</form>
		{/* <Link id='LinkForward' href={`/form/${nextPage}`}> Next</Link> */}
		</section>
	);
}
