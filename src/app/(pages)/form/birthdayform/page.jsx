"use client";

import { useRef, useState } from 'react';
import { redirect } from 'next/navigation';;
import Link from 'next/link';

// const [ birthday, setBirthday] = useState('');

let nextPage = "birthdayForm";
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
  redirect(`/form/${nextPage}`);
  // LinkForward.css.
}

export default function Home() {
  const addPeopleFormRef = useRef(null);
  // const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const addPeopleForm = addPeopleFormRef.current;
    const formData = new FormData(addPeopleForm);
    const birthdayValue = formData.get('birthday');

    //* Store birthday in local storage
    localStorage.setItem('birthday', birthdayValue);

    console.log(`Birthday Value ${birthdayValue}`)
    timeCheck(birthdayValue);
    // timeCheck(birthdayValue);
    // setBirthday(birthdayValue);
    };  

  return (
    <div>
      <form ref={addPeopleFormRef} className="add" onSubmit={handleSubmit}>
        <h3 className='formSubHeading'>Date of Birth</h3>
        <div className='formElement'>
          <label htmlFor="birthdayLabel" className='formLabel'>Date of Birth</ label>        
          <input name="birthday" type="date" placeholder="Birthday" id="birthday" className='formWide' required/>
        </div>
        <div className='formButtons'>
          <div className='backButton pageButton'>
            <Link href="../">Back</Link>
          </div>
          <button className='nextButtonButton' type="submit">Next</button>
        </div>
      </form>
      {/* <Link id='LinkForward' href={`/form/${nextPage}`}> Next</Link> */}
    </div>
  );
}
