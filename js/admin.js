import { db } from './firebase-config.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.getElementById('publishBtn').addEventListener('click', async () => {
    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;

    try {
        await addDoc(collection(db, "posts"), {
            title: title,
            content: content,
            timestamp: serverTimestamp()
        });
        alert("पोस्ट पब्लिश हो गई!");
        // इनपुट साफ करें
        document.getElementById('postTitle').value = "";
        document.getElementById('postContent').value = "";
    } catch (e) {
        console.error("गलती हुई: ", e);
    }
});
  
