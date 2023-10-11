// Import the functions you need from the SDKs you need
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, onValue, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP-cslSFTyJgl6SpYBTjn2OwKNZ1DpOAo",
  authDomain: "quickreact-edce2.firebaseapp.com",
  projectId: "quickreact-edce2",
  storageBucket: "quickreact-edce2.appspot.com",
  messagingSenderId: "229555248207",
  appId: "1:229555248207:web:59869d551cef0e2c16de3a",
  measurementId: "G-J0X8DR44DL",
  databaseURL: "https://quickreact-edce2-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

export const useDbData = () => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    
    useEffect(() => (
      onValue(ref(database), (snapshot) => {
       setData( snapshot.val() );
      }, (error) => {
        setError(error);
      })
    ), [ database ]);
  
    return [ data, error ];
  };