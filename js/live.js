// js/live.js
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { app } from './firebase-config.js'; // Firebase ऐप का इंस्टेंस इम्पोर्ट करें

const db = getDatabase(app);
const scoreRef = ref(db, 'liveScore'); // रियलटाइम डेटाबेस में 'liveScore' पाथ

const scoreContainer = document.getElementById('live-score-container');

onValue(scoreRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
        scoreContainer.innerHTML = `
            <div style="background: #ff0000; color: white; padding: 10px; text-align: center; font-weight: bold;">
                🔴 लाइव: ${data.matchName} - ${data.score}
            </div>
        `;
    }
});

