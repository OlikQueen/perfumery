import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAFpG43d2ONMRLixsppS0vDqrRCkmzJbQo",
    authDomain: "parfumery-900ee.firebaseapp.com",
    projectId: "parfumery-900ee",
    storageBucket: "parfumery-900ee.appspot.com",
    messagingSenderId: "432564929049",
    appId: "1:432564929049:web:747ace1dad93381938e088",
    measurementId: "G-P01RL58DGR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
