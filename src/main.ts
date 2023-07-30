import { createApp } from 'vue'
import './style.css'
import App from './App.vue'         // imports main app page
import router from "./router/index"
import { initializeApp } from "firebase.app"
import { getAnalytics } from "firebase/analytics"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFqXd9KH0MKJd5ikc850dA3sAnYXTTFzQ",
  authDomain: "coralc-connect.firebaseapp.com",
  projectId: "coralc-connect",
  storageBucket: "coralc-connect.appspot.com",
  messagingSenderId: "968627842095",
  appId: "1:968627842095:web:155a6309d99f28767feada",
  measurementId: "G-WYQF50MEEP"
};

// Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)
app.mount('#app')

// Get analytics instance
const analytics = getAnalytics(app);
