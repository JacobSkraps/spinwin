"use client";

import { useRef, useState } from 'react';
import { redirect } from 'next/navigation';;

import Link from 'next/link'

export default function FormPage() {
  const addPeopleFormRef = useRef(null);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const addPeopleForm = addPeopleFormRef.current;
    const formData = new FormData(addPeopleForm);
    
    //* Store Values in local storage
    localStorage.setItem('accountType', "Child");

    const firstNameValue = formData.get('firstName');
    localStorage.setItem('firstName', firstNameValue);

    const lastNameValue = formData.get('lastName');
    localStorage.setItem('lastName', lastNameValue);

    const emailValue = formData.get('email');
    localStorage.setItem('email', emailValue);

    const phoneValue = formData.get('phone');
    localStorage.setItem('phone', phoneValue);

    const parentBirthdayValue = formData.get('birthday');
    localStorage.setItem('parentBirthday', parentBirthdayValue);

    redirect(`/form/guardianForm2`);
    };  

  return (
    <div>
      <h3 className='formSubHeading'>Guardian Information</h3>
      <form ref={addPeopleFormRef} className="add" onSubmit={handleFormSubmit}>
        <div className='formElement'>
          <label htmlFor="firstLabel" className='formLabel'>First Name</ label>        
          <input name="firstName" type="text" placeholder="First Name" className='formHalf' required />
          <div className='formError'>
            <p>First name must contain only letters</p>
          </div>
        </div>
        <div className='formElement'>
          <label htmlFor="lastLabel" className='formLabel'>Last Name</ label>        
          <input name="lastName" type="text" placeholder="Last Name" className='formHalf' required />
          <div className='formError'>
            <p>Error</p>
          </div>
        </div>
        <div className='formElement'>
          <label htmlFor="emailLabel" className='formLabel'>Email</ label>        
          <input name="email" type="email" placeholder="Email" className='formWide' required />
          <div className='formError'>
            <p>Error</p>
          </div>
        </div>
        <div className='formElement'>
          <label htmlFor="phoneLabel" className='formLabel'>Phone</ label>        
          <input name="phone" type="phone" placeholder="Phone" className='formHalf' required />
          <div className='formError'>
            <p>Error</p>
          </div>
        </div>
        <div className='formElement'>
          <label htmlFor="birthdayLabel" className='formLabel'>Birthday</ label>        
          <input name="birthday" type="date" placeholder="Birthday" id="birthday" className='formHalf' required />
          <div className='formError'>
            <p>Error</p>
          </div>
        </div>
        <div className='formButtons'>
          <div className='backButton pageButton'>
              <Link href="./birthdayform">Back</Link>
          </div>
          <button className='nextButtonButton' type="submit">Next</button>
      </div>
      </form>
    </div>
  );
}
