// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD0MbhuODr11JaDZSUnCUTC8MR4BDA62sc',
  authDomain: 'netflixgpt-d2a1e.firebaseapp.com',
  projectId: 'netflixgpt-d2a1e',
  storageBucket: 'netflixgpt-d2a1e.appspot.com',
  messagingSenderId: '814075836969',
  appId: '1:814075836969:web:77c6bc9d11bc5ee17dfa38',
  measurementId: 'G-1EKQM4XKYZ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth()