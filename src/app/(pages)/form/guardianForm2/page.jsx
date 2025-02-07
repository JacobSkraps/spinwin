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
        const addressOneValue = formData.get('addressOne');
        localStorage.setItem('addressOne', addressOneValue);

        const addressTwoValue = formData.get('addressTwo');
        localStorage.setItem('addressTwo', addressTwoValue);

        const postalValue = formData.get('postal');
        localStorage.setItem('postal', postalValue);


        let guardianFormInputs = ["streetAddress", "city", "postalCode"];
    
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
            redirect(`/form/consentForm`)
        } else{
            console.log("SOMETHIN FAILED WAHH")
        }
        // redirect(`/form/consentForm`);
    };  

return (
    <div>
        <h3 className='formHeading'>Address</h3>
            <form ref={addPeopleFormRef} className="add" onSubmit={handleFormSubmit} noValidate>
                <div className='formElement formWide'>
                    <label htmlFor="streetAddress" className='formLabel'>Street Name</ label>        
                    <input name="streetAddress" type="text" id="streetAddress" placeholder="Street Name" required />
                    <div className='formErrorBar'>
                <p className='formErrorMessage'>
                *Address is required.<br/>
                *Address must include a street name and number.
                </p>
            </div>
                </div>
                <div className='formElement'>
                    <label htmlFor="city" className='formLabel'>City</ label>        
                    <input name="city" type="text" id="city" placeholder="City" required />
                    <div className='formErrorBar'>
                <p className='formErrorMessage'>
                *Address is required.<br/>
                *Address must include a street name and number.
                </p>
            </div>
                </div>
                <div className='formElement'>
                    <label htmlFor="postalCode" className='formLabel'>Postal Code</ label>        
                    <input name="postalCode" id="postalCode" type="text" placeholder="Postal Code" required />
                    <div className='formErrorBar'>
                <p className='formErrorMessage'>
                *Address is required.<br/>
                *Address must include a street name and number.
                </p>
            </div>
                </div>

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
