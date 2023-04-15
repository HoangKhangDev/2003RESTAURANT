
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDJB4Y-mdDHIT3_FZbYJO_QHS5ImDVCb4E",
    authDomain: "webbasic-36b8d.firebaseapp.com",
    projectId: "webbasic-36b8d",
    storageBucket: "webbasic-36b8d.appspot.com",
    messagingSenderId: "238553995704",
    appId: "1:238553995704:web:223034a54d3eb41d0c174d",
    measurementId: "G-9L71P6X4ZC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
