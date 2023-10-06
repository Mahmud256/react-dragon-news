import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

// Create an AuthContext for managing authentication state
export const AuthContext = createContext(null);

// Initialize Firebase authentication with the Firebase app instance
const auth = getAuth(app);

// AuthProvider component for managing user authentication
const AuthProvider = ({ children }) => {

    // State to store the current user
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    // Function to create a new user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Function to log in an existing user with email and password
    const logIN = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Function to log out the currently authenticated user
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Subscribe to authentication state changes and update user state accordingly
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("Auth State changed", currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    // Create an object containing authentication-related information to pass to the context
    const authInfo = {
        user,
        loading,
        createUser,
        logIN,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
