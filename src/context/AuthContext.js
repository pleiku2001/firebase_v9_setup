import { auth } from "../firebase";
import React, { useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateEmail,
  updatePassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // dang ki
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // dang nhap
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  // dang xuat
  function logout() {
    return signOut(auth);
  }
  // thay doi email
  function changeEmail(email) {
    return updateEmail(auth.currentUser, email);
  }
  // thay doi mat khau
  function changePassword(password) {
    return updatePassword(auth.currentUser, password);
  }
  // reset email
  function resetEmail(email) {
    return sendPasswordResetEmail(auth, email);
  }
  // Google
  function google() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      // console.log(user)
      // console.log(user.providerData[0].photoURL)
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    changeEmail,
    changePassword,
    resetEmail,
    google
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
