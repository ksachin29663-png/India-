// Firestore से पोस्ट खींचने और दिखाने का फंक्शन
db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
    const container = document.getElementById('posts-container');
    container.innerHTML = ""; // पुराना डेटा साफ़ करें

    snapshot.forEach((doc) => {
        const post = doc.data();
        const div = document.createElement('div');
        div.className = 'post-card';
        
        // यहाँ पोस्ट का डेटा दिखाया जा रहा है
        div.innerHTML = `
            <div class="post-title">${post.title}</div>
            <div class="post-content">${post.content}</div>
        `;
        container.appendChild(div);
    });
});
