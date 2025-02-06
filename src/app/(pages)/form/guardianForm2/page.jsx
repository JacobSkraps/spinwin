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
        const addressOneValue = formData.get('addressOne');
        localStorage.setItem('addressOne', addressOneValue);

        const addressTwoValue = formData.get('addressTwo');
        localStorage.setItem('addressTwo', addressTwoValue);

        const postalValue = formData.get('postal');
        localStorage.setItem('postal', postalValue);

        redirect(`/form/consentForm`);
    };  

  return (
    <div>
        <h3 className='formSubHeading'>Address</h3>
            <form ref={addPeopleFormRef} className="add" onSubmit={handleFormSubmit}>
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
