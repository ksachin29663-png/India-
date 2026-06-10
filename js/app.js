import { db } from './firebase-config.js';
import { collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const postsContainer = document.getElementById('posts-container');

async function loadPosts() {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    
    postsContainer.innerHTML = ""; // पहले पुराना डेटा साफ करें

    querySnapshot.forEach((doc) => {
        const post = doc.data();
        const postElement = document.createElement('div');
        postElement.className = 'post-card';
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <button onclick="alert('लाइक करने के लिए लॉगिन करें')">❤️ लाइक</button>
        `;
        postsContainer.appendChild(postElement);
    });
}

// वेबसाइट लोड होते ही पोस्ट लोड करें
loadPosts();
  
