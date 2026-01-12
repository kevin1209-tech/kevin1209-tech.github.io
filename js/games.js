<script>
async function loadGames() {
  const response = await fetch('/content/games/index.json');
  const games = await response.json();

  const grid = document.getElementById('gameGrid');

  games.forEach(game => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <img src="${game.screenshots}">
      <h3>${game.title}</h3>
      <p>${game.summary}</p>
      <div class="tags">
        ${game.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    `;

    grid.appendChild(card);
  });
}

loadGames();
</script>
