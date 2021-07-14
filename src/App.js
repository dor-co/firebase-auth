import React, { useState, useEffect } from 'react';
import "firebase/firestore";
import { useFirestoreDocData, useFirestore, firestore } from "reactfire";
import fire from './fire';
import Login from './Login';
import Hero from './Hero';
import { SettingsInputAntenna } from '@material-ui/icons';

const App = () => {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);
    const [uid, setUid] = useState('');
    const [name, setName] = useState('');

    const db = firestore();
    
    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case 'auth/invalid-email':
                    case 'auth/user-disabled':
                    case 'auth/user-not-found':
                        setEmailError(err.message);
                        break;
                    case 'auth/wrong-password':
                        setPasswordError(err.message);
                        break;
                }
            })
    }

    const handleSignup = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password).then(cred => {
                db.collection('users').doc(cred.user.uid)
                .set({
                    email: email,
                    name: name
                })
                .then(() => {
                    console.log('User has been added to firebase collction');
                })
                .catch(error => {
                    console.log('Something went wrong with added user to firestore: ', error);
                })
            })
    }

    const handleLogout = () => {
        fire.auth().signOut();
    }

    const authListener = () => { //check if user exists
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                clearInputs();
                setUid(user.uid);
                setUser(user);
            } else {
                setUser('')
            }
        })
    }

    useEffect(() => {
        authListener();
    }, [])

    return (
        <div>
            {user ? (
                <Hero handleLogout={handleLogout} uid={uid} />
            ) : (
                <>
                    <Login
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        setName={setName}
                        handleLogin={handleLogin}
                        handleSignup={handleSignup}
                        hasAccount={hasAccount}
                        setHasAccount={setHasAccount}
                        emailError={emailError}
                        passwordError={passwordError}
                    />
                </>
            )}
        </div>
    );
};

export default App;