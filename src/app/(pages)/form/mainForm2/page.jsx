"use client";

import { useRef, useState } from 'react';
import { redirect } from 'next/navigation';;

import Link from 'next/link'
import regexCheck from '@/functions/regexCheck';

export default function FormPage2() {
    const addPeopleFormRef = useRef(null);
    const handleFormSubmit = (e) => {
    e.preventDefault();
    const addPeopleForm = addPeopleFormRef.current;
    const formData = new FormData(addPeopleForm);
    
    //* Store Values in local storage
    localStorage.setItem('accountType', "Adult");


    const streetAddressValue = formData.get('streetAddress');
    localStorage.setItem('streetAddress', streetAddressValue);

    const provinceValue = formData.get('province');
    localStorage.setItem('province', provinceValue);

    const cityValue = formData.get('city');
    localStorage.setItem('city', cityValue);

    const postalCodeValue = formData.get('postalCode');
    localStorage.setItem('postalCode', postalCodeValue);

    let mainFormInputs = ["streetAddress", "city", "postalCode"];

    //* check all if there is anything wrong
    mainFormInputs.forEach(input => {
        let inputField = document.getElementById(input);

        let inputValue = formData.get(input);
        let inputResult = regexCheck(input, inputValue);
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
        return regexCheck(input, inputValue);
    });

    if (inputsValid){
        console.log("ALL TRUE YIPPEEE")
        redirect(`/form/legalpage`)
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

        <div className='formElement formWide u-spacing-mb-m'>
            <label htmlFor="streetAddress" className='formLabel '>Street Address</ label>        
            <input name="streetAddress" type="text" placeholder="Street Address" id="streetAddress" className='formInput' required />
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
        <fieldset className='fieldset2'>
            <div className='formElement formHalf'>
                <label htmlFor="city" className='formLabel'>City</ label>        
                <input name="city" type="text" placeholder="City" id="city" className='formInput'  required />
                <div className='formErrorBar'>
                    <p className='formErrorMessage'>
                    *City is required.<br/>
                    *Enter a valid city name.
                    </p>
                </div>
            </div>
            <div className='formElement formHalf'>
                <label htmlFor="postalCode" className='formLabel'>Postal Code</ label>        
                <input name="postalCode" type="text" placeholder="Postal Code" id="postalCode" className='formInput' required />
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
            <button className='nextButton pageButton' type="submit">Submit</button>
        </div>

        </form>
    </div>
    );
}
