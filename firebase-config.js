import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCsjzTTbX_MdB1_LdSAbgyCXVhHy7AUwZo",
  authDomain: "testseries-26f1d.firebaseapp.com",
  projectId: "testseries-26f1d",
  storageBucket: "testseries-26f1d.firebasestorage.app",
  messagingSenderId: "915074481416",
  appId: "1:915074481416:web:c17625c072eb533930c0bd",
  measurementId: "G-XNSBW986ZG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase connected successfully!");
