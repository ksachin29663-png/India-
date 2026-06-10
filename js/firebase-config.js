// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCglO0vHutINDOWaIWMsv4N9_54dpbPvIo",
  authDomain: "project-8621d575-e2f7-45a2-963.firebaseapp.com",
  databaseURL: "https://project-8621d575-e2f7-45a2-963-default-rtdb.firebaseio.com",
  projectId: "project-8621d575-e2f7-45a2-963",
  storageBucket: "project-8621d575-e2f7-45a2-963.firebasestorage.app",
  messagingSenderId: "756626829965",
  appId: "1:756626829965:web:935e4dfabb4d52e211a8c4",
  measurementId: "G-J3YBFSS4D8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

