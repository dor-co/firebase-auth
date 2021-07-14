import React from 'react';
import "firebase/firestore";
import { useFirestoreDocData, useFirestore, firestore } from "reactfire";

const Hero = (props) => {
    const {
        uid,
        handleLogout
    } = props;

    const userRef = firestore().collection('users').doc(uid);
    const userRefData = useFirestoreDocData(userRef).data;

    return (<section className='hero'>
        <nav>
            <h2>welcome! your email: {userRefData?.email}, name: {userRefData?.name}</h2>
            <button onClick={handleLogout}>logout</button>
        </nav>

    </section>
    );
}

export default Hero;