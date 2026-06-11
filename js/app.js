// 1. Firebase कॉन्फ़िगरेशन (यह आपके प्रोजेक्ट का आधार है)
const firebaseConfig = {
    apiKey: "AIzaSyCg1OUvIut1NJOMaHhMsvN0_54dpbPIo*",
    authDomain: "project-8621d575-e2f7-45a2-963.firebaseapp.com",
    projectId: "project-8621d575-e2f7-45a2-963",
    storageBucket: "project-8621d575-e2f7-45a2-963.appspot.com",
    messagingSenderId: "751621829065",
    appId: "1:751621829065:web:935e4dfbbb4d52e211z8c4"
};

// 2. Firebase इनिशियलाइज़ करें
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 3. डेटाबेस से पोस्ट लाने का फंक्शन (जो आपने मिस कर दिया था)
function loadPosts() {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
        const container = document.getElementById('posts-container');
        container.innerHTML = ""; // पुराने डेटा को साफ़ करें

        snapshot.forEach((doc) => {
            const post = doc.data();
            const div = document.createElement('div');
            div.className = 'post-card';
            
            // यहाँ HTML का स्ट्रक्चर है जो आपकी वेबसाइट पर दिखेगा
            div.innerHTML = `
                <div class="post-title">${post.title}</div>
                <div class="post-content">${post.content}</div>
            `;
            container.appendChild(div);
        });
    });
}

// 4. पेज लोड होते ही पोस्ट लोड करें
window.onload = loadPosts;
