import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"

export const AuthContext = createContext()

const auth = getAuth(app);



const UserContext = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut(auth)
    }

    const googlePorvider = new GoogleAuthProvider()

    const signInwithGoolge = () => {
        return signInWithPopup(auth, googlePorvider);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            console.log("auth satet changed", currentUser)
        })
        return () => {
            unsubscribe();
        }
    })
    const authInfo = { user, loading, createUser, signIn, logOut, signInwithGoolge };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;