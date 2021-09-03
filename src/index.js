import './style.css';
import lb from './leaderboard.js';
import dom from './dom.js';
import api from './api.js';

const checkExistingGame = async () => {
  if (localStorage.getItem('game')) {
    dom.getLocalStorage(api);
    api.setScoreURL();
  } else {
    await api.getNewGameID({ name: 'MyGame' }).catch(dom.renderAPIMessage);
    api.setScoreURL();
    dom.setLocalStorage(api);
    dom.clearMessage();
  }
};

const addNewScore = async () => {
  const userData = dom.getUserData();
  lb.addNewScore(userData);
  api.getUserData(userData);
  dom.cleanFields();
  await api.sendNewScore().catch(dom.renderAPIMessage);
  dom.renderAPIMessage(api.message);
  dom.clearMessage();
};

const refreshScores = async () => {
  await api.getScores().catch(dom.renderAPIMessage);
  dom.renderScores(api.scores);
  dom.clearMessage();
};

window.addEventListener('load', () => checkExistingGame());
document.getElementById('add-score').addEventListener('click', () => addNewScore());
document.getElementById('refresh').addEventListener('click', () => refreshScores());
