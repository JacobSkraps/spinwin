"use client";

import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

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
        
        // Add to Firestore
        // await addDoc(colRef, {
        //     dateOfBirth: birthday,
        // });
        console.log(`${type}`)
        if(type == "Child"){
            e.preventDefault();
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
            }).then(() => {
                addPeopleForm.reset();
            });
        }
        if(type == "Adult"){
            e.preventDefault();
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
            }).then(() => {
                addPeopleForm.reset();
            });
        }

        const formData = new FormData(addPeopleForm);

        let consentInputs = ["consentCommunications", "consentRules"];

        consentInputs.forEach(input=>{
            let inputField = document.getElementById(input);
            let inputValue = formData.get(input);
            console.log(inputValue)
            if (inputValue == null){
                console.log("changed to red")
                inputField.style.border = "2px solid red"
            } else if (inputValue === "yes"){
                console.log("changed to white")
                inputField.style.border = " 2px solid white"
            }
        })

        // Clear local storage
        localStorage.removeItem('birthday');
    };

    return (
        <div>
            <h3 className='formHeading'>Consent</h3>
            <form className="add" id='consentPage' onSubmit={handleFormSubmit} noValidate>
                <div className='formCheck'>
                    <input name="consentCommunications" type="checkbox" id="consentCommunications" className='consentBox' value="yes" required />
                    <span className='checkmark'></span>
                    <label htmlFor="consentCommunications" className='formLabel'>Consent to be communicated by us</ label> 
                    <div className='formErrorBar formErrorCheck'>
                        <p className='formErrorMessage'>
                        *Consent is required.
                        </p>
                    </div>       
                </div>
                <div className='formCheck'>
                    <input name="consentRules" type="checkbox" id="consentRules" className='consentBox'  value="yes" required />
                    <span className='checkmark'></span>
                    <label htmlFor="consentRules" className='formLabel'>Consent to be rules</ label>        
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
                    <button className='pageButton nextButton' type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}


