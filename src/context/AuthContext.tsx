import React, {createContext, useContext, useEffect, useState} from 'react';
import {Role} from '../types';
import {doc, getDoc} from "@firebase/firestore";
import {auth, firestore} from '../config/firabase'
import {onAuthStateChanged, signInWithEmailAndPassword, signOut,} from 'firebase/auth';

interface AuthUser {
    email: string;
    fullName: string;
    role: Role;
}

interface AuthCtx {
    user: AuthUser | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthCtx>({} as AuthCtx);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        return onAuthStateChanged(auth, async (fbUser) => {
            console.log('[AuthContext] onAuthStateChanged fired ->', fbUser?.uid ?? 'null');
            if (!fbUser) {
                setUser(null);
                setLoading(false);
                return;
            }

            try {
                const snap = await getDoc(doc(firestore, "users", fbUser.uid));
                if (!snap.exists()) {
                    setUser(null);
                    setLoading(false);
                    return;
                }
                const data = snap.data() as AuthUser;
                console.log("[AuthContext] users data ->", data);
                setUser(data);
            } catch (err) {
                console.error("[AuthContext] error reading Firestore ->", err);
                setUser(null);
            }
            setLoading(false);
        });
    }, []);

    const login = async (email: string, password: string) => {
        setLoading(true);
        await signInWithEmailAndPassword(auth, email, password);
        /* PREVIOUS VERSION WITH MOCK

        const found = Object.values(MOCK_USERS).find(
            (u) => u.email === email && u.password === password
        );
        if (!found) throw new Error('Invalid credentials');
        setUser({ email: found.email, fullName: found.fullName, role: found.role });
        setLoading(false);*/
    };

    const logout = async () => {
        await signOut(auth)

        /*PREVIOUS VERSION WITH MOCK   setUser(null);*/
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);