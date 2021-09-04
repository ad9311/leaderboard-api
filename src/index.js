import './style.css';
import lb from './leaderboard.js';
import dom from './dom.js';
import api from './api.js';

const checkExistingGame = async () => {
  if (localStorage.getItem('ad931lb-game-api')) {
    dom.getLocalStorage(api);
    api.setScoreURL();
  } else {
    await api.getNewGameID({ name: 'MyGame' }).catch(dom.renderAPIMessage);
    api.setScoreURL();
    dom.setLocalStorage(api);
  }
};

const addNewScore = async () => {
  dom.getUserData();
  const validation = await dom.validateInput().catch(dom.renderAPIMessage);
  if (validation) {
    lb.addNewScore(dom.userData);
    api.getUserData(dom.userData);
    dom.cleanFields();
    await api.sendNewScore().catch(dom.renderAPIMessage);
    dom.renderAPIMessage(api.message);
  } else {
    dom.cleanFields();
  }
};

const refreshScores = async () => {
  await api.getScores().catch(dom.renderAPIMessage);
  dom.renderScores(api.scores);
};

window.addEventListener('load', () => checkExistingGame());
document.getElementById('add-score').addEventListener('click', () => addNewScore());
document.getElementById('refresh').addEventListener('click', () => refreshScores());
