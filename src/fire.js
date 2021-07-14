import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBNyfwi_jy-fanEEeEL0SSUPj1AUvhsNUY",
    authDomain: "fir-auth-860ef.firebaseapp.com",
    projectId: "fir-auth-860ef",
    storageBucket: "fir-auth-860ef.appspot.com",
    messagingSenderId: "88319009112",
    appId: "1:88319009112:web:bc66f6d3fe0dff760a452d",
    measurementId: "G-YRRLT77DVH"
};
const fire = firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default fire;