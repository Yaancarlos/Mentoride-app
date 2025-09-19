import { Role } from '../types';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../config/firabase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export async function createAuthenticationUser(
    email: string,
    password: string,
    fullName: string,
    role: Role = 'student'
) {
    try{
        if(password.length < 6){
            throw new Error("Password must be at least 6 characters");
        }

        const create = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(firestore, 'users', create.user.uid), {
            email,
            fullName,
            role,
            createdAt: serverTimestamp(),
        });
        return create.user;
    } catch (error: any) {
        console.error("Error creating user:", error.message);
        throw error;
    }
}