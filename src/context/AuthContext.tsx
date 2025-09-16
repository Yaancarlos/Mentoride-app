import React, { createContext, useContext, useState } from 'react';
import { Role } from '../types';
import { MOCK_USERS } from '../mocks/users';

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

    const login = async (email: string, password: string) => {
        setLoading(true);
        const found = Object.values(MOCK_USERS).find(
            (u) => u.email === email && u.password === password
        );
        if (!found) throw new Error('Invalid credentials');
        setUser({ email: found.email, fullName: found.fullName, role: found.role });
        setLoading(false);
    };

    const logout = async () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);