import { initializeApp } from "firebase/app";
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut } from "firebase/auth";

import { 
    addDoc, 
    collection, 
    getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyCtUlnnoIPEF18yeCvQP3BqUH-n31tQ740",
  authDomain: "netflix-clone-e5ae9.firebaseapp.com",
  projectId: "netflix-clone-e5ae9",
  storageBucket: "netflix-clone-e5ae9.firebasestorage.app",
  messagingSenderId: "878526280229",
  appId: "1:878526280229:web:6376e45475893b864fc5cc",
  measurementId: "G-8T77H500QF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
        
    } catch (error) {
        console.log("error:", error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log("error", error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const logout = async () => {
    signOut(auth);
}

export {auth, db, login, signup, logout};