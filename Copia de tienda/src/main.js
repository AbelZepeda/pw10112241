import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Comienza Firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXkroHaZT4-W7_K3xeWKPyiLF1pP7aOX4",
  authDomain: "programacion-web-d85f9.firebaseapp.com",
  projectId: "programacion-web-d85f9",
  storageBucket: "programacion-web-d85f9.appspot.com",
  messagingSenderId: "185113032832",
  appId: "1:185113032832:web:c4a476ac54e2a69c9a4e65"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//Termina Firebase

const app = createApp(App)

app.use(router);

app.mount('#app')
