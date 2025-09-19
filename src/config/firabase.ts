import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

/*
const config = {
    apiKey: process.env.EXPO_PUBLIC_API_KEY!,
    authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN!,
    projectId: process.env.EXPO_PUBLIC_PROJECT_ID!,
    storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET!,
    messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER!,
    appId: process.env.EXPO_PUBLIC_APP_ID!,
};*/

const config = {
    apiKey: "AIzaSyBrl3kHecg6sfJcI9YTw65nclm-8fNCsb8",
    authDomain: "mentoride-app.firebaseapp.com",
    projectId: "mentoride-app",
    storageBucket: "mentoride-app.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1089018999549:android:0e621e98f3e99dc444c494",
};

const app = initializeApp(config);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
