"use client"

import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getFirestore, collection, getDocs,
  addDoc, deleteDoc, doc
} from 'firebase/firestore';
import Link from 'next/link'
import idCheck from '@/functions/idCheck';
import { redirect } from 'next/navigation';
import WheelComponent from "@/app/components/wheel.jsx";

import Gurkin from "/public/Gurkin.png";
import OPDYPS from "/public/OPDYPS.png";
import PerogiHatCo from "/public/perogiHatCo.png";
import SlormWorm from "/public/slormWorm.png";

import Image from 'next/image'


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

  /****! MADE THIS FUNCTION FOR THE PLAY BUTTON ONCE IT COMES!! */
  idCheck(db);


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

  useEffect(()=>{
    getDocs(colRef)

  })


  return (
    // <div>
    //   <h1>Hi</h1>
    //   <Link href="./form/birthdayform">
    //     <h3 className='formSubHeading'>Take me to the Form!</h3>
    //   </Link>
    //   <Link href="./game">
    //     <h3 className='formSubHeading'>Take me to the Game!</h3>
    //   </Link>
    // </div>
    <div id='mainMain'>
      <div id='mainSplit'>
        <div id='mainInfo'>
          <h1 id='mainHeader'>SPIN TO WIN</h1>
          <h2 id='mainSubHeading'>Spin to Win Contest <br />
          Win Bonus Dollars!</h2>
          <button className='nextButton pageButton' type="submit" id='playButton'>Let's Play</button>

        </div>
        <div id='mainWheel'>
          <WheelComponent className="wheelComponent" id="theWheel" />
        </div>
      </div>
      <div id='mainSponsors'>
        <Image src={SlormWorm} className="sponsor" alt="Your prize!" />
        <Image src={PerogiHatCo} className="sponsor" alt="Your prize!" />
        <Image src={OPDYPS} className="sponsor" alt="Your prize!" />
        <Image src={Gurkin} className="sponsor" alt="Your prize!" />
      </div>
    </div>
  );
}
