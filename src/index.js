import './styles/styles.css';
import Game from './modules/Game';

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game();
  game.start();
});