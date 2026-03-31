// ==========================
// 1️⃣ Password & Anniversary
// ==========================
function checkPassword() {
  const passwordInput = document.getElementById("passwordInput").value;
  const correctPassword = "2305"; // <-- your password
  const errorMessage = document.getElementById("errorMessage");
  const loginCard = document.getElementById("loginCard");

  if (passwordInput === correctPassword) {
    errorMessage.style.display = "none";
    loginCard.style.display = "none";

    // Show anniversary box first
    document.getElementById("anniversaryMessage").style.display = "block";
  } else {
    errorMessage.style.display = "block";
  }
}

function closeAnniversary() {
  document.getElementById("anniversaryMessage").style.display = "none";
  document.getElementById("dashboard").style.display = "block";
  updateDaysTogether(); // start counting days
}

// ==========================
// 2️⃣ Love Zone Message + Hearts
// ==========================
function toggleLoveMessage() {
  const message = document.getElementById("hiddenMessage");
  const button = document.querySelector("#love button");

  if (message.style.display === "block") {
    message.style.display = "none";
    button.textContent = "Click for a surprise";
  } else {
    message.style.display = "block";
    button.textContent = "Close message";
    createHearts(); // hearts appear when message opens
  }
}

// ==========================
// 3️⃣ Days Together Counter
// ==========================
function updateDaysTogether() {
  const startDate = new Date("2024-05-23T00:00:00"); // exact start date
  const now = new Date();
  const diffTime = now - startDate;

  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
  const diffMinutes = Math.floor((diffTime / (1000 * 60)) % 60);
  const diffSeconds = Math.floor((diffTime / 1000) % 60);

  document.getElementById("daysTogether").textContent = 
    `${diffDays} days, ${diffHours}h ${diffMinutes}m ${diffSeconds}s`;
}

// Update every second
setInterval(updateDaysTogether, 1000);

// ==========================
// 4️⃣ Notes Section
// ==========================
function showNotes() {
  const notes = [
    "You are my sunshine on cloudy days ☀️",
    "Every moment with you is my favorite memory 💖",
    "I fall in love with you more every day ❤️",
    "You make my world brighter and happier 🌸",
    "Forever yours, always and truly 💕"
  ];

  // Shuffle the notes
  const shuffled = notes.sort(() => Math.random() - 0.5);

  const list = document.getElementById("noteList");
  list.innerHTML = ""; // clear previous notes

  shuffled.forEach(note => {
    const li = document.createElement("li");
    li.textContent = note;
    list.appendChild(li);
  });

  createHearts();
}

// ==========================
// 5️⃣ Tabs Switching
// ==========================
function showTab(tabId) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => tab.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
}

// ==========================
// 6️⃣ Music Play & Stop
// ==========================
function playSong(id) {
  // Stop all songs first
  document.querySelectorAll("audio").forEach(song => {
    song.pause();
    song.currentTime = 0;
  });

  document.getElementById(id).play();
}

// Stop song (for stop button)
function stopSong(event, id) {
  event.stopPropagation(); // prevent play
  const song = document.getElementById(id);
  song.pause();
  song.currentTime = 0;
}

// ==========================
// 7️⃣ Gallery Popup
// ==========================

const galleryImages = document.querySelectorAll('.imgBox img');
const imgPopup = document.getElementById('imgPopup');
const popupImg = document.getElementById('popupImg');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    popupImg.src = img.src;
    imgPopup.style.display = 'flex';
  });
});

// Close function for button
function closeImgPopup() {
  imgPopup.style.display = 'none';
}

// Optional: close if clicked outside the image
imgPopup.addEventListener('click', (e) => {
  if(e.target === imgPopup) closeImgPopup();
});

// ==========================
// 8️⃣ Floating Hearts Animation
// ==========================
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * window.innerWidth + "px";

  const size = Math.random() * 20 + 15;
  heart.style.fontSize = size + "px";

  const duration = Math.random() * 2 + 3;
  heart.style.animationDuration = duration + "s";

  const colors = ["#ff4d8d", "#ff85a2", "#ff99ac", "#ffb3c6"];
  heart.style.color = colors[Math.floor(Math.random() * colors.length)];

  heart.innerHTML = "❤";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), duration * 1000);
}

// Auto hearts every 0.5s
setInterval(createHeart, 500);

// Click anywhere = more hearts
document.addEventListener("click", createHeart);