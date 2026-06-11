// Firebase कॉन्फ़िगरेशन
const firebaseConfig = {
    apiKey: "AIzaSyCg1OUvIut1NJOMaHhMsvN0_54dpbPIo*",
    authDomain: "project-8621d575-e2f7-45a2-963.firebaseapp.com",
    projectId: "project-8621d575-e2f7-45a2-963",
    storageBucket: "project-8621d575-e2f7-45a2-963.appspot.com",
    messagingSenderId: "751621829065",
    appId: "1:751621829065:web:935e4dfbbb4d52e211z8c4"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// पोस्ट लोड करने का फंक्शन
function loadPosts() {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
        const container = document.getElementById('posts-container');
        if (!container) return; // अगर कंटेनर नहीं है तो रुक जाएं
        
        container.innerHTML = ""; // पुराने डेटा को साफ़ करें

        snapshot.forEach((doc) => {
            const post = doc.data();
            const div = document.createElement('div');
            div.className = 'post-card';
            
            // यहाँ पोस्ट का HTML स्ट्रक्चर है
            div.innerHTML = `
                <div class="post-title">${post.title}</div>
                <div class="post-content">${post.content}</div>
            `;
            container.appendChild(div);
        });
    });
}

// पेज लोड होते ही फंक्शन चलाएं
window.onload = loadPosts;
