"use client"

import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getFirestore, collection, getDocs,
  addDoc, deleteDoc, doc
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

export default function Home() {
  useEffect(() => {
    const addPeopleForm = document.querySelector('.add');
    if (addPeopleForm) {
      addPeopleForm.addEventListener('submit', (e) => {
        e.preventDefault();

        addDoc(colRef, {
          dateOfBirth: addPeopleForm.firstName.value,
          parentalConfirmation: addPeopleForm.parentalConfirmation.value,

          firstName: addPeopleForm.firstName.value,
          lastName: addPeopleForm.lastName.value,

          email: addPeopleForm.email.value,
          username: addPeopleForm.username.value,
          password: addPeopleForm.password.value,
          
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
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <h1>Hi</h1>
      <form className="add">
        <input name="birthday" type="date" placeholder="Birthday" id="birthday" />
        <input name="parentalConfirmation" type="checkbox" id="parentalConsent" />
        <label htmlFor="parentalConsent">Parental Consent</ label>
        
        <input name="firstName" type="text" placeholder="First Name" />
        <input name="lastName" type="text" placeholder="Last Name" />
        <input name="email" type="email" placeholder="Email" />
        <input name="username" type="text" placeholder="Username" />
        <input name="password" type="password" placeholder="Password" />
        <input name="addressOne" type="text" placeholder="Address Line 1" />
        <input name="addressTwo" type="text" placeholder="City" />
        <input name="province" type="text" placeholder="Province" />

        <input name="consentToCommunications" type="checkbox" id="communicationsConsent" />
        <label htmlFor="communicationsConsent">Consent to be communicated us</ label>        

        <input name="consentToRules" type="checkbox" id="rulesConsent" />
        <label htmlFor="rulesConsent">Consent to be rules</ label>        

        <button type="submit">Add Person</button>
      </form>
      <Link href="./form/birthdayform">
        Take me to the form.
      </Link>
    </div>
  );
}
