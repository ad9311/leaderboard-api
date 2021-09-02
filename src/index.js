import './style.css';
import lb from './leaderboard.js';
import dom from './dom.js';
import api from './api.js';

async function checkExistingGame() {
  if (localStorage.getItem('game')) {
    dom.getLocalStorage(api);
    api.setScoreURL();
  } else {
    await api.getNewGameID({ name: 'MyGame' });
    api.getNewGameID().catch(dom.renderAPIMessage);
    dom.setLocalStorage(api);
  }
}

async function addNewScore() {
  const userData = dom.getUserData();
  lb.addNewScore(userData);
  api.getUserData(userData);
  await api.sendNewScore().catch(dom.renderAPIMessage);
  dom.cleanFields();
  dom.renderAPIMessage(api.message);
}

async function refreshScores() {
  await api.getScores().catch(dom.renderAPIMessage);
  dom.renderScores(api.scores);
}

window.addEventListener('load', () => checkExistingGame());
document.getElementById('add-score').addEventListener('click', () => addNewScore());
document.getElementById('refresh').addEventListener('click', () => refreshScores());
