import Goblin from './Goblin';

export default class Game {
  constructor() {
    this.gridSize = 4;
    this.misses = 0;
    this.score = 0;
    this.maxMisses = 5;
    this.cells = [];
    this.goblin = new Goblin();
    this.gameContainer = document.getElementById('game');
    this.uiContainer = this.createUI();
  }

  start() {
    this.createGrid();
    this.spawnLoop();
  }

  createUI() {
    const ui = document.createElement('div');
    ui.className = 'ui';

    this.scoreEl = document.createElement('div');
    this.scoreEl.textContent = 'Score: 0';

    this.missesEl = document.createElement('div');
    this.missesEl.textContent = 'Misses: 0';

    ui.appendChild(this.scoreEl);
    ui.appendChild(this.missesEl);
    this.gameContainer.before(ui);
    return ui;
  }

  createGrid() {
    for (let i = 0; i < this.gridSize * this.gridSize; i++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.index = i;
      this.cells.push(cell);
      this.gameContainer.appendChild(cell);
    }
  }

  spawnLoop() {
    this.interval = setInterval(() => {
      this.goblin.hide();
      if (!this.goblin.wasHit) {
        this.misses++;
        this.updateUI();
        if (this.misses >= this.maxMisses) {
          clearInterval(this.interval);
          alert('Game over! Your score: ' + this.score);
          return;
        }
      }
      const index = Math.floor(Math.random() * this.cells.length);
      this.goblin.show(this.cells[index], () => {
        this.score++;
        this.updateUI();
      });
    }, 1000);
  }

  updateUI() {
    this.scoreEl.textContent = `Score: ${this.score}`;
    this.missesEl.textContent = `Misses: ${this.misses}`;
  }
}
