"use client";

import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getFirestore, collection, addDoc
} from 'firebase/firestore';

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
      <h1>Form Page</h1>
      <p>Birthday: {birthday}</p>
      <form onSubmit={handleFormSubmit}>
        <button type="submit">Submit to Firebase</button>
      </form>
    </div>
  );
}
