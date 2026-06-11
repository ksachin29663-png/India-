// यह फंक्शन आपकी पोस्ट को स्क्रीन पर दिखाएगा
function displayPosts(posts) {
    const container = document.getElementById('posts-container');
    container.innerHTML = ""; 

    posts.forEach(post => {
        const div = document.createElement('div');
        div.className = 'post-card';
        // यहाँ इमेज और टेक्स्ट का स्ट्रक्चर है
        div.innerHTML = `
            <div class="post-title">${post.title}</div>
            <div class="post-content">${post.content}</div>
        `;
        container.appendChild(div);
    });
}
