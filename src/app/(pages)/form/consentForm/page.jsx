"use client";

import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { redirect } from 'next/navigation';
import Link from 'next/link';

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

// Init services
const db = getFirestore();

// Collection ref
const colRef = collection(db, 'formData');

export default function FormPage() {
    const [type, setType] = useState('');
    const [birthday, setBirthday] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [addressOne, setAddressOne] = useState('');
    const [addressTwo, setAddressTwo] = useState('');
    const [postal, setPostal] = useState('');
    const [parentBirthday, setParentBirthday] = useState('');


    useEffect(() => {
        const addPeopleForm = document.querySelector('.add');

        // Retrieve birthday from local storage
        const storedType = localStorage.getItem('accountType');
        setType(storedType);
        const storedBirthday = localStorage.getItem('birthday');
        setBirthday(storedBirthday);
        const storedFirstName = localStorage.getItem('firstName');
        setFirstName(storedFirstName);
        const storedLastName = localStorage.getItem('lastName');
        setLastName(storedLastName);
        const storedPhone = localStorage.getItem('phone');
        setPhone(storedPhone);
        const storedEmail = localStorage.getItem('email');
        setEmail(storedEmail);
        const storedAddressOne = localStorage.getItem('addressOne');
        setAddressOne(storedAddressOne);
        const storedAddressTwo = localStorage.getItem('addressTwo');
        setAddressTwo(storedAddressTwo);
        const storedPostal = localStorage.getItem('postal');
        setPostal(storedPostal);
        if(storedType == "Child"){
            const storedParentBirthday = localStorage.getItem('parentBirthday');
            setParentBirthday(storedParentBirthday);
        }

    // }, []);

    // useEffect(() => {
        if (addPeopleForm) {
            addPeopleForm.addEventListener('submit', (e) => {
                if(type == "Child"){
                    e.preventDefault();
                    addDoc(colRef, {
                        accountType: storedType,
                        childDateOfBirth: storedBirthday,

                        guardianFirstName: storedFirstName,
                        guardianLastName: storedLastName,
                        guardianPhone: storedPhone,
                        guardianEmail: storedEmail,
                        guardianAddressOne: storedAddressOne,
                        guardianAddressTwo: storedAddressTwo,
                        guardianPostal: storedPostal,

                        guardianDateOfBirth: storedParentBirthday,

                        consentToCommunications: addPeopleForm.consentToCommunications.value,
                        consentToRules: addPeopleForm.consentToRules.value
                    }).then(() => {
                        addPeopleForm.reset();
                    });
                }
                if(type == "Adult"){
                    e.preventDefault();
                    addDoc(colRef, {
                        accountType: storedType,
                        dateOfBirth: storedBirthday,

                        firstName: storedFirstName,
                        lastName: storedLastName,
                        phone: storedPhone,
                        email: storedEmail,
                        addressOne: storedAddressOne,
                        addressTwo: storedAddressTwo,
                        postal: storedPostal,

                        consentToCommunications: addPeopleForm.consentToCommunications.value,
                        consentToRules: addPeopleForm.consentToRules.value
                    }).then(() => {
                        addPeopleForm.reset();
                    });
                }
            });
        }
    }, []);

    const handleFormSubmit = async (e) => {
        const addPeopleForm = document.querySelector('.add');

        e.preventDefault();
        
        const formData = new FormData(e.target);
        const consentToCommunications = formData.get('consentCommunications');
        const consentToRules = formData.get('consentRules');

        if(type === "Child") {
            await addDoc(colRef, {
                accountType: type,
                childDateOfBirth: birthday,
                guardianFirstName: firstName,
                guardianLastName: lastName,
                guardianPhone: phone,
                guardianEmail: email,
                guardianAddressOne: addressOne,
                guardianAddressTwo: addressTwo,
                guardianPostal: postal,
                guardianDateOfBirth: parentBirthday,
                consentToCommunications: consentToCommunications,
                consentToRules: consentToRules
            });
        } else if(type === "Adult") {
            await addDoc(colRef, {
                accountType: type,
                dateOfBirth: birthday,
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email: email,
                addressOne: addressOne,
                addressTwo: addressTwo,
                postal: postal,
                consentToCommunications: consentToCommunications,
                consentToRules: consentToRules
            });
        }

        // Clear local storage
        localStorage.clear();

        // Redirect
        redirect(`/form/birthdayform`);
    };

    return (
        <div>
            <h3 className='formHeading'>Consent</h3>
            <form className="add" id='consentPage' onSubmit={handleFormSubmit} noValidate>
                <div className='formCheck'>
                    <input name="consentCommunications" type="checkbox" id="consentCommunications" className='consentBox' value="yes" required />
                    <span className='checkmark'></span>
                    <label htmlFor="consentCommunications" className='formLabel'>I consent to receiving communications regarding BuyMore Dollars products and sponsors.</ label> 
                    <div className='formErrorBar formErrorCheck'>
                        <p className='formErrorMessage'>
                        *Consent is required.
                        </p>
                    </div>       
                </div>
                <div className='formCheck'>
                    <input name="consentRules" type="checkbox" id="consentRules" className='consentBox'  value="yes" required />
                    <span className='checkmark'></span>
                    <label htmlFor="consentRules" className='formLabel'>I agree to the contest <Link href="./legalPage">rules and regulations.</Link></ label>        
                    <div className='formErrorBar formErrorCheck'>
                        <p className='formErrorMessage'>
                        *Consent is required.
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
