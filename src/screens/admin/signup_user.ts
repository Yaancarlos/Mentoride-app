import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../../config/firabase";

const signUp = async (email: string, password: string, fullName: string, role: string) => {
    try {
        // 1. Create user in Firebase Auth
        const userCred = await createUserWithEmailAndPassword(auth, email, password);

        // 2. Create matching Firestore doc with same UID
        await setDoc(doc(firestore, "users", userCred.user.uid), {
            email,
            fullName,
            role,
            createdAt: new Date().toISOString(),
        });

        console.log("User created:", userCred.user.uid);
    } catch (err) {
        console.error("Error signing up:", err);
        throw err;
    }
};

signUp("student@uc.edu.com", "123456", "Yan carlos", "student");
