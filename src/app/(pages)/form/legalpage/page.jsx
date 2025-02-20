"use client";

import Link from 'next/link'
import "/src/app/styles/form.css"
import { useEffect, useRef, useState } from 'react';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { redirect } from 'next/navigation';

export default function legalPage() {
    const [guardianBirthday, setGuardianBirthday] = useState('');
    const [personalData, setPersonalData] = useState({
        accountType: "accountType",
        firstName: "firstName",
        lastName: "lastName",
        birthday: "birthday",
        phone: "phone",
        email: "email",
        streetAddress: "streetAddress",
        province: "province",
        city: "city",
        postalCode: "postalCode"
    });
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const formRef = useRef(null);
    const communicationsRef = useRef(null);
    const consentRef = useRef(null);

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


    useEffect(() => {

        // Retrieve birthday from local storage
        const localStorageItemList = [
            "accountType", "birthday", "firstName", "lastName", "phone", "email", "streetAddress", "province", "city", "postalCode"
        ]

        localStorageItemList.forEach(item => {
            const storedValue = localStorage.getItem(item)
            setPersonalData(previousValue =>({
                    ...previousValue,
                    [item]: storedValue
            }))
        });

        console.log()
    }, []);

    const handleFormSubmit = async (e) => {

        e.preventDefault();
        
        // Add to Firestore
        // await addDoc(colRef, {
        //     dateOfBirth: birthday,
        // });
        // console.log(`${type}`)
        // let inputField = document.getElementById("consentRules");

        if(consentRef.current.checked === false){
            console.log("changed to red")
            consentRef.current.style.border = "2px solid red"
        } else if (consentRef.current.checked === true){
            console.log("changed to white")
            consentRef.current.style.border = " 2px solid white"
            console.log("tis true!")
            if(personalData.accountType == "Child"){
                e.preventDefault();
                console.log("submitting child")

                const storedGuardianBirthday = localStorage.getItem('guardianBirthday');
                setGuardianBirthday(storedGuardianBirthday);
    
                const docRef = await addDoc(colRef, {
                    accountType: personalData.accountType,
                    childBirthday: personalData.birthday,
    
                    guardianFirstName: personalData.firstName,
                    guardianLastName: personalData.lastName,
                    guardianPhone: personalData.phone,
                    guardianEmail: personalData.email,
                    guardianStreetAddress: personalData.streetAddress,
                    guardianProvince: personalData.province,
                    guardianCity: personalData.city,
                    guardianPostalCode: personalData.postalCode,
    
                    guardianBirthday: storedGuardianBirthday,
    
                    consentToCommunications: communicationsRef.current.value,
                    consentToRules: consentRef.current.value
                })
                localStorage.setItem('userID', docRef.id);

                console.log(docRef.id)
                formRef.current.reset();
                redirect(`/game`)
            }

            if(personalData.accountType == "Adult"){
                e.preventDefault();
                console.log("submitting adult")

                const docRef = await addDoc(colRef, {
                    accountType: personalData.accountType,
                    birthday: personalData.birthday,
    
                    firstName: personalData.firstName,
                    lastName: personalData.lastName,
                    phone: personalData.phone,
                    email: personalData.email,
                    streetAddress: personalData.streetAddress,
                    province: personalData.province,
                    city: personalData.city,
                    postalCode: personalData.postalCode,
    
                    consentToCommunications: communicationsRef.current.value,
                    consentToRules: consentRef.current.value
                })
                localStorage.setItem('userID', docRef.id);
                console.log(localStorage.getItem("userID"))
                console.log(docRef.id)

                formRef.current.reset();
                redirect(`/game`)

                
            }
        }

        // Clear local storage
        // localStorage.removeItem('birthday');
    };


    return (
        <main id="legalPageMain">
            <section className="legal-rules">

                <div className="contest-info-header">
                    <div className="contest-info-wrapper rules-regulations-wrapper">
                        <h1 className="contest-info-wrapper__stroke rules-regulations__title" aria-hidden="true">Rules and Regulations</h1>
                        <h1 className="contest-info-wrapper__fill rules-regulations__title" >Rules and Regulations</h1>
                    </div>
                </div>
                <section className='legal-info'>
                    <ol className='legal-ol'>
                        <li className='legal-ol__item'>Eligibility
                            <ul className='legal-ul'>
                                <li className='legal-ul__item'>Open to legal residents 16+.</li>
                                <li className='legal-ul__item'>Under 16 requires guardian consent.</li>
                                <li className='legal-ul__item'>Employees of BuyMore Dollars Inc. are not eligible to play.</li>
                            </ul>
                        </li>
                        <li className='legal-ol__item'>Contest Rules
                            <ul>
                                <li className='legal-ul__item'>Play once every 72 hours if you win and every 36 if you lose.</li>
                                <li className='legal-ul__item'>Fill out the entry form and agree to the rules.</li>
                                <li className='legal-ul__item'>Winners are randomly selected each week.</li>
                            </ul>
                        </li>
                        <li className='legal-ol__item'>Prizes
                            <ul>
                                <li className='legal-ul__item'>1x 10,000 BuyMore Dollars</li>
                                <li className='legal-ul__item'>5x 750 BuyMore Dollars</li>
                                <li className='legal-ul__item'>10x 100 BuyMore Dollars</li>
                                <li className='legal-ul__item'>100x 20 BuyMore Dollars</li>
                            </ul>
                        </li>
                        <li className='legal-ol__item'>Claiming Prizes
                            <ul>
                                <li className='legal-ul__item'>Winners will be notified via email.</li>
                                <li className='legal-ul__item'>You must successfully answer a skill-testing question.</li>
                                <li className='legal-ul__item'>Prizes must be claimed within 5 days.</li>
                            </ul>
                        </li>
                        <li className='legal-ol__item'>General Terms
                            <ul>
                                <li className='legal-ul__item'>No cash alternative for prizes.</li>
                                <li className='legal-ul__item'>BuyMore Dollars Inc. may cancel or modify the contest.</li>
                                <li className='legal-ul__item'>Entries suspected of fraud will be disqualified.</li>
                            </ul>
                        </li>
                        <li className='legal-ol__item'>Privacy & Consent
                            <ul className='legal-ul__list'>
                                <li className='legal-ul__item'>Entry info used for contest & marketing.</li>
                                <li className='legal-ul__item'>For information about data please refer to our <Link href="./#">privacy policy</Link> for more details.</li>
                            </ul>
                        </li>
                    </ol>
                </section>
            </section>
            <section className='consent'>
                <form className="add" id='consentPage' onSubmit={handleFormSubmit} ref={formRef} noValidate>
                    <div className='formCheck'>
                        <input name="consentCommunications" type="checkbox" id="consentCommunications" className='consentBox' ref={communicationsRef} value="yes" required />
                        <span className='checkmark'></span>
                        <label htmlFor="consentCommunications" className='formLabel legal-label'>I consent to receive communications regarding BuyMore Dollars products and sponsors.</ label> 
                        {/* <div className='formErrorBar formErrorCheck'>
                            <p className='formErrorMessage'>
                            *Consent is required.
                            </p>
                        </div>        */}
                    </div>
                    <div className='formCheck'>
                        <input name="consentRules" type="checkbox" id="consentRules" className='consentBox' ref={consentRef} value="yes" required />
                        <span className='checkmark'></span>
                        <label htmlFor="consentRules" className='formLabel legal-label'>I agree to the contest rules and regulations.</ label>        
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
            </section>
        </main>

    );
}

