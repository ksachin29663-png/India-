// Firebase कॉन्फ़िगरेशन
const firebaseConfig = {
    apiKey: "AIzaSyCg1OUvIut1NJOMaHhMsvN0_54dpbPIo*",
    authDomain: "project-8621d575-e2f7-45a2-963.firebaseapp.com",
    projectId: "project-8621d575-e2f7-45a2-963",
    storageBucket: "project-8621d575-e2f7-45a2-963.appspot.com",
    messagingSenderId: "751621829065",
    appId: "1:751621829065:web:935e4dfbbb4d52e211z8c4"
};

// इनिशियलाइज़ करें
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// पोस्ट लोड करने का फंक्शन
function loadPosts() {
    const container = document.getElementById('posts-container');
    if (!container) return;

    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
        container.innerHTML = ""; 
        snapshot.forEach((doc) => {
            const post = doc.data();
            const div = document.createElement('div');
            div.className = 'post-card';
            div.innerHTML = `
                <div class="post-title" style="font-weight:bold; font-size:22px;">${post.title}</div>
                <div class="post-content" style="margin-top:10px;">${post.content}</div>
            `;
            container.appendChild(div);
        });
    });
}

// पेज लोड होते ही चलाएं
window.onload = loadPosts;
