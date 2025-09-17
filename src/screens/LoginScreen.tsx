import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleLogin = () => login(email, password).catch((error) => {console.log(error);});

    return (
        <View className="flex-1 justify-center items-center bg-white px-6">
            <Text className="text-2xl font-bold mb-4">Iniciar sesión</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
                autoCapitalize="none"
            />
            <TextInput
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
            />
            <Button title="Entrar" onPress={handleLogin} />
        </View>
    );
}