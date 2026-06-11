const firebaseConfig = {
    apiKey: "AIzaSyCg1OUvIut1NJOMaHhMsvN0_54dpbPIo*",
    authDomain: "project-8621d575-e2f7-45a2-963.firebaseapp.com",
    projectId: "project-8621d575-e2f7-45a2-963",
    storageBucket: "project-8621d575-e2f7-45a2-963.appspot.com",
    messagingSenderId: "751621829065",
    appId: "1:751621829065:web:935e4dfbbb4d52e211z8c4"
};

// अगर पहले से इनिशियलाइज़ नहीं है, तभी करें
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

function loadPosts() {
    console.log("पोस्ट लोड हो रही है...");
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
        const container = document.getElementById('posts-container');
        
        if (!container) {
            console.error("गलती: 'posts-container' नाम का डिब्बा नहीं मिला!");
            return;
        }
        
        container.innerHTML = ""; 

        if (snapshot.empty) {
            container.innerHTML = "<p>अभी कोई पोस्ट नहीं है।</p>";
            return;
        }

        snapshot.forEach((doc) => {
            const post = doc.data();
            const div = document.createElement('div');
            div.className = 'post-card';
            div.innerHTML = `
                <div class="post-title">${post.title || "बिना शीर्षक"}</div>
                <div class="post-content">${post.content || ""}</div>
            `;
            container.appendChild(div);
        });
        console.log("पोस्ट सफलतापूर्वक लोड हो गई!");
    }, (error) => {
        console.error("डेटाबेस एरर:", error);
    });
}

window.onload = loadPosts;
