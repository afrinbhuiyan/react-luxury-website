// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHaxGjyU7ZtTUS6tKuMPUHjo93LzGSv3k",
  authDomain: "react-luxury-website.firebaseapp.com",
  projectId: "react-luxury-website",
  storageBucket: "react-luxury-website.firebasestorage.app",
  messagingSenderId: "438435886304",
  appId: "1:438435886304:web:3f772fffeab2beafa48c85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;