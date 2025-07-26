const searchInput = document.getElementById('searchInput');
const songs = document.querySelectorAll('.song');
const players = document.querySelectorAll('audio');

// 🔍 Search Function
searchInput.addEventListener('input', function () {
  const query = this.value.toLowerCase();
  songs.forEach(song => {
    const name = song.getAttribute('data-name').toLowerCase();
    song.style.display = name.includes(query) ? 'block' : 'none';
  });
});

// ▶️ Autoplay Next Track
for (let i = 0; i < players.length - 1; i++) {
  players[i].addEventListener('ended', function () {
    players[i + 1].play();
    players[i + 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}
