"use client";

import { useRef, useState } from 'react';
import { redirect } from 'next/navigation';;

import Link from 'next/link'
import inputErrorCheck from '@/functions/inputErrorCheck';

export default function FormPage2() {
    const addPeopleFormRef = useRef(null);
    const handleFormSubmit = (e) => {
    e.preventDefault();
    const addPeopleForm = addPeopleFormRef.current;
    const formData = new FormData(addPeopleForm);
    
    //* Store Values in local storage
    localStorage.setItem('accountType', "Adult");


    const addressOneValue = formData.get('streetAddress');
    localStorage.setItem('addressOne', addressOneValue);

    const addressTwoValue = formData.get('city');
    localStorage.setItem('addressTwo', addressTwoValue);

    const postalValue = formData.get('postalCode');
    localStorage.setItem('postal', postalValue);

    let mainFormInputs = ["streetAddress", "city", "postalCode"];

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
        console.log(input)
        let inputValue = formData.get(input);
        return inputErrorCheck(input, inputValue);
    });

    if (inputsValid){
        console.log("ALL TRUE YIPPEEE")
        redirect(`/form/consentForm`)
    } else{
        console.log("SOMETHIN FAILED WAHH")
    }

    // redirect(`/form/consentForm`);
    };  

    return (
    <div>
        <h2 className='formHeading'>Personal Information</h2>
        <form ref={addPeopleFormRef} className="add" onSubmit={handleFormSubmit} noValidate>
        <h3 className='formSubHeading'>Address</h3>

        <div className='formElement'>
            <label htmlFor="streetAddress" className='formLabel '>Street Name</ label>        
            <input name="streetAddress" type="text" placeholder="Street Name" id="streetAddress" className='formWide' required />
            <div className='formErrorBar'>
                <p className='formErrorMessage'>
                *Address is required.<br/>
                *Address must include a street name and number.
                </p>
            </div>
        </div>
        <fieldset className='fieldset2'>
            <div className='formElement'>
                <label htmlFor="city" className='formLabel'>City</ label>        
                <input name="city" type="text" placeholder="City" id="city" className='formHalf'  required />
                <div className='formErrorBar'>
                    <p className='formErrorMessage'>
                    *City is required.<br/>
                    *Enter a valid city name.
                    </p>
                </div>
            </div>
            <div className='formElement'>
                <label htmlFor="postalCode" className='formLabel'>Postal Code</ label>        
                <input name="postalCode" type="text" placeholder="Postal Code" id="postalCode" className='formHalf' required />
                <div className='formErrorBar'>
                    <p className='formErrorMessage'>
                    *Postal code is required.<br/>
                    *Max 6 characters.<br/>
                    *Enter a valid postal code in the correct format (e.g., A1A 1A1 for Canada).
                    </p>
                </div>
            {/* <div className='formError'>
                <p>Error</p>
            </div> */}
            </div>
        </fieldset>
        

        <div className='formButtons'>
            <div className='backButton pageButton'>
                <Link href="./mainForm">Back</Link>
            </div>
            <button className='nextButtonButton' type="submit">Submit</button>
        </div>

        </form>
    </div>
    );
}
