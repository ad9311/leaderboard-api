import './style.css';
import lb from './leaderboard.js';
import dom from './dom.js';
import api from './api.js';

const checkExistingGame = () => {
  api.requestNewGame();
};

const addNewScore = () => {
  lb.addNewScore(dom.userData());
  dom.renderScore();
  dom.cleanFields();
};

// window.addEventListener('load', () => checkExistingGame());
document.getElementById('refresh').addEventListener('click', () => api.requestNewGame());
document.getElementById('add-score').addEventListener('click', () => addNewScore());
