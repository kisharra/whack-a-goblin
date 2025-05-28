import goblinImg from '../assets/goblin.png';

export default class Goblin {
  constructor() {
    this.img = document.createElement('img');
    this.img.src = goblinImg;
    this.img.alt = 'goblin';
    this.img.style.cursor = 'url("data:image/png;base64,iVBOR..."), auto'; // Placeholder
    this.img.addEventListener('click', () => this.hit());
    this.currentCell = null;
    this.callback = null;
    this.wasHit = false;
  }

  show(cell, onHitCallback) {
    this.currentCell = cell;
    this.callback = onHitCallback;
    this.wasHit = false;
    cell.appendChild(this.img);
  }

  hide() {
    if (this.currentCell && this.currentCell.contains(this.img)) {
      this.currentCell.removeChild(this.img);
    }
    this.currentCell = null;
  }

  hit() {
    if (!this.wasHit) {
      this.wasHit = true;
      this.hide();
      if (this.callback) this.callback();
    }
  }
}