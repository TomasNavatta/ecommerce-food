import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAkDL4C5g4Ez-nSF1vXmOTjXdt08CqjNFs",
  authDomain: "ecommerce-food-82e3f.firebaseapp.com",
  projectId: "ecommerce-food-82e3f",
  storageBucket: "ecommerce-food-82e3f.appspot.com",
  messagingSenderId: "697673344182",
  appId: "1:697673344182:web:96ae9bd4312a5c64aeb217",
  measurementId: "G-KVFTJGM5MB"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <App />
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
