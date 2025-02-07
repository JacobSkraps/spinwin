"use client";

import { useRef, useState } from 'react';
import { redirect } from 'next/navigation';;

import Link from 'next/link'
import inputErrorCheck from '@/functions/inputErrorCheck';

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
    
    let guardianFormInputs = ["firstName", "lastName", "phone", "email", "birthday"];

    //* check all if there is anything wrong
    guardianFormInputs.forEach(input => {
      let inputField = document.getElementById(input);

      let inputValue = formData.get(input);
      let inputResult = inputErrorCheck(input, inputValue);
      if(!inputResult){
        inputField.style.border = "2px solid red"
      } else{
        console.log("colored to white")
        inputField.style.border = " 2px solid white"
      }
    });

    //* check to see if they are all valid
    let inputsValid = guardianFormInputs.every(input=>{
      let inputValue = formData.get(input);
      return inputErrorCheck(input, inputValue);
    });

    if (inputsValid){
      console.log("ALL TRUE YIPPEEE")
      redirect(`/form/guardianForm2`)
    } else{
      console.log("SOMETHIN FAILED WAHH")
    }
    // redirect(`/form/guardianForm2`);
    };  

  return (
    <div>
      <h3 className='formHeading'>Guardian Information</h3>
      <form ref={addPeopleFormRef} className="add" onSubmit={handleFormSubmit} noValidate>
        <fieldset className="fieldset2">
          <div className='formElement formHalf'>
            <label htmlFor="firstName" className='formLabel'>First Name</ label>        
            <input name="firstName" type="text" id="firstName" placeholder="First Name"required />
            <div className='formErrorBar'>
                <p className='formErrorMessage'>
                *First name is required.<br/>
                *First name must only contain letters.
                </p>
            </div>
          </div>
          <div className='formElement formHalf'>
            <label htmlFor="lastName" className='formLabel'>Last Name</ label>        
            <input name="lastName" type="text" id="lastName" placeholder="Last Name" required />
            <div className='formErrorBar'>
                <p className='formErrorMessage'>
                *Last name is required.<br/>
                *Last name must only contain letters.
                </p>
            </div>
          </div> 
        </fieldset>
        <fieldset className='fieldset2'>
          <div className='formElement formHalf'>
            <label htmlFor="phone" className='formLabel'>Phone Number</ label>        
            <input name="phone" type="phone" id="phone" placeholder="Phone" required />
            <div className='formErrorBar'>
                <p className='formErrorMessage'>
                *Phone number is required.<br/>
                *Enter a valid phone number (e.g., 123-456-7890).<br/>
                *Phone number must be 10 digits long.
                </p>
            </div>
          </div>
          <div className='formElement formHalf'>
            <label htmlFor="email" className='formLabel'>Email</ label>        
            <input name="email" type="email" id="email" placeholder="Email" required />
            <div className='formErrorBar'>
                <p className='formErrorMessage'>
                *Email address is required.<br/>
                *Enter a valid email address (e.g., name@example.com).
                </p>
            </div>
          </div>

        </fieldset>
        
        <div className='formElement formWide'>
          <label htmlFor="birthday" className='formLabel'>Date of Birth</ label>        
          <input name="birthday" type="date" placeholder="Birthday" id="birthday" required />
          <div className='formErrorBar'>
                <p className='formErrorMessage'>
                *Date of Birth is required<br/>
                *Enter a valid date in the format MM/DD/YYYY<br/>
                *You must be at least 16 years old to participate. If you are below 16 years old, a guardian is required.
                </p>
            </div>
        </div>
        {/* <h3 className='formSubHeading'>Address</h3>
        <div className='formElement'>
          <label htmlFor="streetLabel" className='formLabel'>Street Name</ label>        
          <input name="addressOne" type="text" placeholder="Street Name" className='formWide' required />
          <div className='formError'>
            <p>Error</p>
          </div>
        </div>
        <div className='formElement'>
          <label htmlFor="cityLabel" className='formLabel'>City Name</ label>        
          <input name="addressTwo" type="text" placeholder="City" className='formHalf' required />
          <div className='formError'>
            <p>Error</p>
          </div>
        </div>
        <div className='formElement'>
          <label htmlFor="postLabel" className='formLabel'>Postal Code</ label>        
          <input name="postal" type="text" placeholder="Postal Code" className='formHalf' required />
          <div className='formError'>
            <p>Error</p>
          </div>
        </div> */}

        <div className='formButtons'>
          <div className='backButton pageButton'>
              <Link href="./birthdayform">Back</Link>
          </div>
          <button className='nextButtonButton' type="submit">Submit</button>
      </div>
      </form>
    </div>
  );
}
