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
    localStorage.setItem('accountType', "Adult");

    const firstNameValue = formData.get('firstName');
    localStorage.setItem('firstName', firstNameValue);

    const lastNameValue = formData.get('lastName');
    localStorage.setItem('lastName', lastNameValue);

    const emailValue = formData.get('email');
    localStorage.setItem('email', emailValue);

    const phoneValue = formData.get('phone');
    localStorage.setItem('phone', phoneValue);


    let mainFormInputs = ["firstName", "lastName", "phone", "email"];

    //* check all if there is anything wrong
    mainFormInputs.forEach(input => {
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
    let inputsValid = mainFormInputs.every(input=>{
      let inputValue = formData.get(input);
      return inputErrorCheck(input, inputValue);
    });

    if (inputsValid){
      console.log("ALL TRUE YIPPEEE")
      redirect(`/form/mainForm2`)
    } else{
      console.log("SOMETHIN FAILED WAHH")
    }

    // redirect(`/form/consentForm`);
    };  

  return (
    <div>
      <h2 className='formHeading'>Personal Information</h2>
      <form ref={addPeopleFormRef} className="add" onSubmit={handleFormSubmit} noValidate>
        <fieldset className='fieldset2 u-spacing-mb-m'>
          <div className='formElement formHalf'>
            <label htmlFor="firstName" className='formLabel'>First Name</ label>        
            <input name="firstName" type="text" placeholder="First Name" id="firstName" className='formInput' required />
            <div className='formErrorBar'>
              <p className='formErrorMessage'>
                *First name is required.<br/>
                *First name must only contain letters.
              </p>
            </div>
          </div>
          <div className='formElement formHalf'>
            <label htmlFor="lastName" className='formLabel'>Last Name</ label>        
            <input name="lastName" type="text" placeholder="Last Name" id="lastName" className='formInput'  required />
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
            <input name="phone" type="phone" placeholder="Phone" id="phone" className='formInput'  required />
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
            <input name="email" type="email" placeholder="Email" id="email" className='formInput'  required />
            <div className='formErrorBar'>
              <p className='formErrorMessage'>
                *Email address is required.<br/>
                *Enter a valid email address (e.g., name@example.com).
              </p>
            </div>
          </div>
        </fieldset>
      

        <div className='formButtons'>
          <div className='backButton pageButton'>
              <Link href="./birthdayform">Back</Link>
          </div>
          <button className='nextButton pageButton' type="submit">Submit</button>
        </div>

      </form>
    </div>
  );
}
