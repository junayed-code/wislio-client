import React, { useState, useEffect } from "react";
import { firebaseAuth as Auth } from "../services/firebase";
import axiso from "../utils/axiso";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

// Create a google auth provider instance
const googleProvider = new GoogleAuthProvider();

// Create and export the Auth Context
export const AuthContext = React.createContext(null);

// Create the Auth Provider component function
export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Setup the observer of the auth-state-changed.
    const unSubscribe = onAuthStateChanged(Auth, async user => {
      try {
        if (user) {
          const res = await axiso.post("/refresh-token");
          user.role = res.data.data?.user?.role;
        }
        setCurrentUser(user);
        setLoading(false);
      } catch {
        _auth.logOut();
      }
    });

    return unSubscribe;
  }, []);

  // Provider auth values object
  const _auth = { currentUser, loading };

  // Define the create-new-user function
  _auth.createNewUser = async (displayName, email, password, photoURL) => {
    try {
      // Update the loading state
      setLoading(true);

      // Create user account into database
      await axiso.post("/register", { email });
      // Login the user account
      await axiso.post("/login", { email });
      // Create a new user using firebase SDK
      const { user } = await createUserWithEmailAndPassword(
        Auth,
        email,
        password
      );

      // Update the user name
      await updateProfile(user, { displayName, photoURL });
      return user;
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };

  // Define the user log-in function
  _auth.signIn = async (email, password) => {
    try {
      // Update the loading state
      setLoading(true);

      // Sign in the user to authenticate the user to access the database.
      await axiso.post("/login", { email });
      // Sign in the user using the firebase SDK
      const { user } = await signInWithEmailAndPassword(Auth, email, password);

      return user;
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };

  // Define the use log-out function
  _auth.logOut = async () => {
    try {
      setLoading(true);
      await signOut(Auth);
      // Louout user from database
      await axiso.post("/logout");
    } catch (err) {
      setLoading(false);
    }
  };

  // Login the user using google provider
  _auth.logInWithGoogle = async () => {
    try {
      setLoading(true);
      const { user } = await signInWithPopup(Auth, googleProvider);
      // Create user account into database
      await axiso.post("/register", { email: user.email });

      return user;
    } catch {
      setLoading(false);
    }
  };

  return <AuthContext.Provider value={_auth}>{children}</AuthContext.Provider>;
}
