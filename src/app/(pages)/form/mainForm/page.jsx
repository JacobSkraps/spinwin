"use client";

import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getFirestore, collection, addDoc
} from 'firebase/firestore';

import Link from 'next/link'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5o7r3SowKoTVj11gnTvPHYq__qMzPDWo",
  authDomain: "spin2win-1adc1.firebaseapp.com",
  projectId: "spin2win-1adc1",
  storageBucket: "spin2win-1adc1.firebasestorage.app",
  messagingSenderId: "261035404031",
  appId: "1:261035404031:web:a4ddb5d7b0187c00bc3aca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'formData')

export default function FormPage() {
  const [birthday, setBirthday] = useState('');

  useEffect(() => {
    // Retrieve birthday from local storage
    const storedBirthday = localStorage.getItem('birthday');
    if (storedBirthday) {
      setBirthday(storedBirthday);
    }
  // }, []);

  // useEffect(() => {
    const addPeopleForm = document.querySelector('.add');
    if (addPeopleForm) {
      addPeopleForm.addEventListener('submit', (e) => {
        e.preventDefault();

        addDoc(colRef, {
          dateOfBirth: storedBirthday,
          accountType: "Adult",

          firstName: addPeopleForm.firstName.value,
          lastName: addPeopleForm.lastName.value,

          phone: addPeopleForm.phone.value,
          email: addPeopleForm.email.value,
          // username: addPeopleForm.username.value,
          // password: addPeopleForm.password.value,
          
          addressOne: addPeopleForm.addressOne.value,
          addressTwo: addPeopleForm.addressTwo.value,
          province: addPeopleForm.province.value,

          consentToCommunications: addPeopleForm.consentToCommunications.value,
          consentToRules: addPeopleForm.consentToRules.value
        }).then(() => {
          addPeopleForm.reset();
        });
      });
    }
  }, []);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Add to Firestore
    await addDoc(colRef, {
      dateOfBirth: birthday,
    });

    // Clear local storage
    localStorage.removeItem('birthday');
  };

  return (
    <div>
      <h3 className='formSubHeading'>Guardian Information</h3>
      <form className="add" onSubmit={handleFormSubmit}>
        {/* <input name="birthday" type="date" placeholder="Birthday" id="birthday" /> */}
        {/* <input name="parentalConfirmation" type="checkbox" id="parentalConsent" />
        <label htmlFor="parentalConsent">Parental Consent</ label> */}
        <div className='formElement'>
          <label htmlFor="firstLabel" className='formLabel'>First Name</ label>        
          <input name="firstName" type="text" placeholder="First Name" className='formHalf' required />
        </div>
        <div className='formElement'>
          <label htmlFor="lastLabel" className='formLabel'>Last Name</ label>        
          <input name="lastName" type="text" placeholder="Last Name" className='formHalf' required />
        </div>
        <div className='formElement'>
          <label htmlFor="phoneLabel" className='formLabel'>Phone</ label>        
          <input name="phone" type="phone" placeholder="Phone" className='formHalf' required />
        </div>
        <div className='formElement'>
          <label htmlFor="emailLabel" className='formLabel'>Email</ label>        
          <input name="email" type="email" placeholder="Email" className='formHalf' required />
        </div>
        {/* <input name="username" type="text" placeholder="Username" className='formHalf' required />
        <input name="password" type="password" placeholder="Password" className='formHalf' required /> */}
        <h3 className='formSubHeading'>Address</h3>
        <div className='formElement'>
          <label htmlFor="streetLabel" className='formLabel'>Street Name</ label>        
          <input name="addressOne" type="text" placeholder="Street Name" className='formWide' required />
        </div>
        <div className='formElement'>
          <label htmlFor="cityLabel" className='formLabel'>City</ label>        
          <input name="addressTwo" type="text" placeholder="City" className='formHalf' required />
        </div>
        <div className='formElement'>
          <label htmlFor="provLabel" className='formLabel'>Province</ label>        
          <input name="province" type="text" placeholder="Province" className='formHalf' required />
        </div>

        {/* <input name="consentToCommunications" type="checkbox" id="communicationsConsent" required />
        <label htmlFor="communicationsConsent">Consent to be communicated us</ label>        

        <input name="consentToRules" type="checkbox" id="rulesConsent" required />
        <label htmlFor="rulesConsent">Consent to be rules</ label>         */}

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
