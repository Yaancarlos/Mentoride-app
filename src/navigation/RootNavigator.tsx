import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../context/AuthContext';

import LoginScreen from '../screens/LoginScreen';
import AdminDashboard from '../screens/AdminDashboard';
import TutorDashboard from '../screens/TutorDashboard';
import StudentDashboard from '../screens/StudentDashboard';
import Unauthorized from '../screens/Unauthorized';

export type RootStackParams = {
    Login: undefined;
    Admin: undefined;
    Selector: undefined
    Tutor: undefined;
    Student: undefined;
    Unauthorized: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export default function AppNavigator() {
    const { user } = useAuth();
    const initialRoute : keyof RootStackParams = user ? 'Selector' : 'Login';

    if (!user)
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={LoginScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );

    console.log(`Initial Route: ${JSON.stringify(initialRoute)} and ${JSON.stringify(user)}`);
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Selector" component={RoleSelector} />
                <Stack.Screen name="Tutor" component={TutorDashboard} />
                <Stack.Screen name="Admin" component={AdminDashboard} />
                <Stack.Screen name="Student" component={StudentDashboard} />
                <Stack.Screen name="Unauthorized" component={Unauthorized} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function RoleSelector() {
    const { user } = useAuth();
    const navigation = useNavigation<any>();

    console.log(`RoleSelector: ${JSON.stringify(user)}`);
    React.useEffect(() => {
        if (!user) return;
        switch (user.role) {
            case "admin":
                console.log('admin')
                navigation.replace("Admin");
                break;
            case "student":
                console.log('student')
                navigation.replace("Student");
                break;
            case "tutor":
                console.log('tutor')
                navigation.replace("Tutor");
                break;
            default:
                console.log('default')
                navigation.replace("Unauthorized");
        }
    }, [user]);

    return <></>;
}