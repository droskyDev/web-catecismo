import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// PEGA AQUÍ TU firebaseConfig que copiaste
const firebaseConfig = {
  apiKey: "AIzaSyApqNm7KWIAHwFMwcrqgHs5KVCfJQkb7eQ",
  authDomain: "catequesis-blog.firebaseapp.com",
  projectId: "catequesis-blog",
  storageBucket: "catequesis-blog.firebasestorage.app",
  messagingSenderId: "735603820244",
  appId: "1:735603820244:web:d192e32df3e0a3f2b2dd41"
};


// Inicializar Firebase
const app = initializeApp(firebaseConfig)

// Inicializar servicios
export const db = getFirestore(app)
export const auth = getAuth(app)