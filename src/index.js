import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
//import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from "reactfire";

var firebaseConfig = {
  apiKey: "AIzaSyBNyfwi_jy-fanEEeEL0SSUPj1AUvhsNUY",
  authDomain: "fir-auth-860ef.firebaseapp.com",
  projectId: "fir-auth-860ef",
  storageBucket: "fir-auth-860ef.appspot.com",
  messagingSenderId: "88319009112",
  appId: "1:88319009112:web:bc66f6d3fe0dff760a452d",
  measurementId: "G-YRRLT77DVH"
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
			<App />
		</FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
