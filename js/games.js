fetch('/content/games/index.json')
  .then(res => res.json())
  .then(games => {
    const grid = document.getElementById('gameGrid');

    games.forEach(game => {
      const card = document.createElement('div');
      card.className = 'card';

      const img = document.createElement('img');
      img.src = game.screenshots || 'https://picsum.photos/400/300?random';

      const body = document.createElement('div');
      body.className = 'card-body';

      const title = document.createElement('div');
      title.className = 'card-title';
      title.textContent = game.title;

      const summary = document.createElement('div');
      summary.className = 'card-summary';
      summary.textContent = game.summary;

      const tagsBox = document.createElement('div');
      tagsBox.className = 'card-tags';

      (game.tags || []).forEach(tag => {
        const t = document.createElement('div');
        t.className = 'tag';
        t.textContent = tag;
        tagsBox.appendChild(t);
      });

      body.appendChild(title);
      body.appendChild(summary);
      body.appendChild(tagsBox);

      card.appendChild(img);
      card.appendChild(body);
      grid.appendChild(card);
    });
  });
