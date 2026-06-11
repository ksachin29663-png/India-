// 1. Firebase कॉन्फ़िगरेशन - यह वही है जो आपके admin.html में है
const firebaseConfig = {
    apiKey: "AIzaSyCg1OUvIut1NJOMaHhMsvN0_54dpbPIo*",
    authDomain: "project-8621d575-e2f7-45a2-963.firebaseapp.com",
    projectId: "project-8621d575-e2f7-45a2-963",
    storageBucket: "project-8621d575-e2f7-45a2-963.appspot.com",
    messagingSenderId: "751621829065",
    appId: "1:751621829065:web:935e4dfbbb4d52e211z8c4"
};

// 2. Firebase इनिशियलाइज़ करें
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 3. पोस्ट लोड करने का फंक्शन
function loadPosts() {
    const container = document.getElementById('posts-container');
    if (!container) return;

    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
        container.innerHTML = ""; // पुराना डेटा साफ़ करें

        snapshot.forEach((doc) => {
            const data = doc.data();
            const div = document.createElement('div');
            div.className = 'post-card';
            
            // यहाँ डेटा को HTML में दिखाएं
            div.innerHTML = `
                <div class="post-title">${data.title}</div>
                <div class="post-content">${data.content}</div>
            `;
            container.appendChild(div);
        });
    });
}

// 4. पेज लोड होते ही चलाएं
loadPosts();
