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
        const addressOneValue = formData.get('streetAddress');
        localStorage.setItem('addressOne', addressOneValue);

        const addressTwoValue = formData.get('city');
        localStorage.setItem('addressTwo', addressTwoValue);

        const postalValue = formData.get('postalCode');
        localStorage.setItem('postal', postalValue);


        let guardianFormInputs = ["streetAddress", "province", "city", "postalCode"];
    
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

                <div className='formElement formWide u-spacing-mb-m'>
                    <label htmlFor="streetAddress" className='formLabel'>Street Address</ label>        
                    <input name="streetAddress" type="text" id="streetAddress" placeholder="Street Address" required />
                    <div className='formErrorBar'>
                        <p className='formErrorMessage'>
                        *Address is required.<br/>
                        *Address must include a street name and number.
                        </p>
                    </div>
                </div>
                <div className='formElement formWide u-spacing-mb-m'>
                    <label htmlFor="province" className='formLabel'>Province</ label>        
                    <input name="province" type="text" id="province" placeholder="Province" required />
                    <div className='formErrorBar'>
                        <p className='formErrorMessage'>
                        *Province is required.<br/>
                        *Enter a valid province name.
                        </p>
                    </div>
                </div>
                <fieldset className='fieldset2 u-spacing-mb-m'>
                    <div className='formElement'>
                        <label htmlFor="city" className='formLabel'>City</ label>        
                        <input name="city" type="text" id="city" placeholder="City" required />
                        <div className='formErrorBar'>
                            <p className='formErrorMessage'>
                            *City is required.<br/>
                            *Enter a valid city name.
                            </p>
                        </div>
                    </div>
                    <div className='formElement'>
                        <label htmlFor="postalCode" className='formLabel'>Postal Code</ label>        
                        <input name="postalCode" id="postalCode" type="text" placeholder="Postal Code" required />
                        <div className='formErrorBar'>
                            <p className='formErrorMessage'>
                            *Postal code is required.<br/>
                            *Max 7 characters. <br />
                            *Enter a valid postal code in the correct format (e.g., A1A 1A1 for Canada).
                            </p>
                        </div>
                    </div>
                </fieldset>

                <div className='formButtons'>
                    <div className='backButton pageButton'>
                        <Link href="./guardianForm">Back</Link>
                    </div>
                    <button className='nextButton pageButton' type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
