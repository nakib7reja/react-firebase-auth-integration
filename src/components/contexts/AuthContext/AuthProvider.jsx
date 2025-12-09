import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = ()=>{
        return signOut(auth);
    }

    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            console.log('inside observer: if', currentUser)
        }
        else {
            console.log('inside observer else:', currentUser)
        }
    })
    useEffect(() => {
        // set the observer
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user', currentUser)
            setUser(currentUser)
        })
        // clear the observer on  unmount
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        // user: user,
        user,
        createUser,
        signInUser,
        signOutUser
    }


    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;