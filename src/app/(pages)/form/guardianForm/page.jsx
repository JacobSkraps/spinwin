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
          accountType: "Child",

          parentDateOfBirth: addPeopleForm.birthday.value,

          parentFirstName: addPeopleForm.firstName.value,
          parentLastName: addPeopleForm.lastName.value,

          parentEmail: addPeopleForm.email.value,
          username: addPeopleForm.username.value,
          password: addPeopleForm.password.value,
          
          parentAddressOne: addPeopleForm.addressOne.value,
          parentAddressTwo: addPeopleForm.addressTwo.value,
          parentProvince: addPeopleForm.province.value,

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
      <h1>Hi</h1>
      <form className="add" onSubmit={handleFormSubmit}>
        <input name="birthday" type="date" placeholder="Birthday" id="birthday" required />
        <input name="parentalConfirmation" type="checkbox" id="parentalConsent" required />
        <label htmlFor="parentalConsent">Parental Consent</ label>
        
        <input name="firstName" type="text" placeholder="First Name" required />
        <input name="lastName" type="text" placeholder="Last Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="username" type="text" placeholder="Username" required />
        <input name="password" type="password" placeholder="Password" required />
        <input name="addressOne" type="text" placeholder="Address Line 1" required />
        <input name="addressTwo" type="text" placeholder="City" required />
        <input name="province" type="text" placeholder="Province" required />

        <input name="consentToCommunications" type="checkbox" id="communicationsConsent" required />
        <label htmlFor="communicationsConsent">Consent to be communicated us</ label>        

        <input name="consentToRules" type="checkbox" id="rulesConsent" required />
        <label htmlFor="rulesConsent">Consent to be rules</ label>        

        <button type="submit">Add Person</button>
      </form>
      {/* <Link href="./form/birthdayform">
        Take me to the form.
      </Link> */}
      <div className='backButton pageButton'>
        <Link href="./birthdayform">Back</Link>
      </div>
    </div>
  );
}
