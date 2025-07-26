const searchInput = document.getElementById('searchInput');
const songs = document.querySelectorAll('.song');

searchInput.addEventListener('input', function () {
  const query = this.value.toLowerCase();
  songs.forEach(song => {
    const name = song.getAttribute('data-name').toLowerCase();
    song.style.display = name.includes(query) ? 'block' : 'none';
  });
});
