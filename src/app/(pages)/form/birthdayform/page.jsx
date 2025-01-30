"use client";

import { useRef, useState } from 'react';
import { redirect } from 'next/navigation';;
import Link from 'next/link';

// const [ birthday, setBirthday] = useState('');

let nextPage = "birthdayForm";
function timeCheck(birthday) {
  const dateSplit = birthday.split("-");
  let minusStart = 1970 * 31556926
  let birthTime = 0
  console.log(dateSplit)
  birthTime = (dateSplit[0] * 31556926) + birthTime;
  birthTime = (dateSplit[1] * 2629743) + birthTime; 
  birthTime = (dateSplit[2] * 86400) + birthTime;

  console.log(`BirthTime ${birthTime}`);
  const currentTime = new Date().getTime();
  console.log(`currentTime ${currentTime}`);
  const age = currentTime - birthTime;
  console.log(`Age ${age/31556926}`);

  let minimumAge = 16*31556926;
  if (minimumAge <= age) {
    nextPage = "mainForm"
  } 
  else{ 
    nextPage = "guardianForm" 
  }

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
    console.log(`Birthday Value ${birthdayValue}`)
    timeCheck(birthdayValue);

    //* Store birthday in local storage
    localStorage.setItem('birthday', birthdayValue);

    // timeCheck(birthdayValue);
    // setBirthday(birthdayValue);
    redirect(`/form/guardianForm`);
    };  

  return (
    <div>
      <h1>Hi</h1>
      <form ref={addPeopleFormRef} className="add" onSubmit={handleSubmit}>
        <input name="birthday" type="date" placeholder="Birthday" id="birthday" />
        <button type="submit">Submit</button>
      </form>
      {/* <Link id='LinkForward' href={`/form/${nextPage}`}> Next</Link> */}
    </div>
  );
}
